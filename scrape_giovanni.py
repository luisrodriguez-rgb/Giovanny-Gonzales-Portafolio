#!/usr/bin/env python3
"""
Scraper para giovannigonzalez.com
Extrae contenido textual, enlaces e imágenes en alta resolución de las 10 páginas del sitio.
Utiliza únicamente librerías de la biblioteca estándar de Python.
"""

import os
import re
import json
import time
import urllib.request
import urllib.parse
from html.parser import HTMLParser
from pathlib import Path

BASE_URL = "https://www.giovannigonzalez.com"

PAGES = [
    {"slug": "home", "url": f"{BASE_URL}/home", "name": "Home"},
    {"slug": "current-research", "url": f"{BASE_URL}/current-research", "name": "Current Research"},
    {"slug": "publications", "url": f"{BASE_URL}/publications", "name": "Publications"},
    {"slug": "teaching", "url": f"{BASE_URL}/teaching", "name": "Teaching Overview"},
    {"slug": "teaching-econometria", "url": f"{BASE_URL}/teaching/econometr%C3%ADa", "name": "Econometría"},
    {"slug": "teaching-econometria-ii", "url": f"{BASE_URL}/teaching/econometr%C3%ADa-ii", "name": "Econometría II"},
    {"slug": "teaching-macroeconomia-ii", "url": f"{BASE_URL}/teaching/teor%C3%ADa-macroecon%C3%B3mica-ii", "name": "Teoría Macroeconómica II"},
    {"slug": "my-students", "url": f"{BASE_URL}/my-students", "name": "My Students"},
    {"slug": "resources", "url": f"{BASE_URL}/resources", "name": "Resources"},
    {"slug": "econometrics-with-r", "url": f"{BASE_URL}/econometrics-with-r", "name": "Econometrics with R"},
]

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_script = False
        self.in_style = False
        self.title = ""
        self.in_title = False
        self.text_blocks = []
        self.current_tag = None
        self.links = []
        self.images = []

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attr_dict = dict(attrs)
        if tag in ("script", "style"):
            if tag == "script":
                self.in_script = True
            elif tag == "style":
                self.in_style = True
        elif tag == "title":
            self.in_title = True
        elif tag == "a" and "href" in attr_dict:
            href = attr_dict["href"]
            self.links.append(href)
        elif tag == "img" and "src" in attr_dict:
            src = attr_dict["src"]
            alt = attr_dict.get("alt", "")
            self.images.append({"src": src, "alt": alt})

    def handle_endtag(self, tag):
        if tag == "script":
            self.in_script = False
        elif tag == "style":
            self.in_style = False
        elif tag == "title":
            self.in_title = False
        self.current_tag = None

    def handle_data(self, data):
        if self.in_script or self.in_style:
            return
        if self.in_title:
            self.title += data.strip()
            return
        
        cleaned = data.strip()
        if cleaned:
            self.text_blocks.append(cleaned)

import ssl

SSL_CONTEXT = ssl._create_unverified_context()

def fetch_url(url):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
        }
    )
    with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=20) as response:
        return response.read().decode("utf-8", errors="replace")

def download_image(img_url, dest_path):
    try:
        req = urllib.request.Request(
            img_url,
            headers={"User-Agent": USER_AGENT}
        )
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=20) as response:
            data = response.read()
            with open(dest_path, "wb") as f:
                f.write(data)
            return True
    except Exception as e:
        print(f"  [!] Error descargando imagen {img_url}: {e}")
        return False

def clean_text_list(blocks):
    """Filtra textos repetitivos de la interfaz de Google Sites."""
    noise = {
        "Report abuse", "Page details", "Update to modern browser",
        "Sign in", "Google Sites", "Sites", "Search this site",
        "More", "Navigation"
    }
    cleaned = []
    for b in blocks:
        if b in noise or len(b) < 2:
            continue
        cleaned.append(b)
    return cleaned

def main():
    root_dir = Path("./data_raw")
    images_dir = root_dir / "images"
    markdown_dir = root_dir / "markdown"
    
    root_dir.mkdir(parents=True, exist_ok=True)
    images_dir.mkdir(parents=True, exist_ok=True)
    markdown_dir.mkdir(parents=True, exist_ok=True)

    all_data = []
    downloaded_images = set()

    print(f"[*] Iniciando scraping de {len(PAGES)} páginas de giovannigonzalez.com...")

    for i, page in enumerate(PAGES, start=1):
        slug = page["slug"]
        url = page["url"]
        name = page["name"]
        print(f"\n[{i}/{len(PAGES)}] Extrayendo: {name} ({url})")

        try:
            html = fetch_url(url)
            parser = ContentExtractor()
            parser.feed(html)

            # Filtrar enlaces interesantes
            unique_links = []
            for l in parser.links:
                if l not in unique_links and not l.startswith("javascript:") and not l.startswith("#"):
                    unique_links.append(l)

            # Filtrar imágenes interesantes (excluyendo iconos miniatura de google)
            valid_images = []
            for img in parser.images:
                src = img["src"]
                if "googleusercontent.com" in src and "sitesv-images" in src:
                    # Maximizar resolución eliminando restricciones de escala pequeñas
                    clean_src = re.sub(r'=w\d+.*$', '=w1600', src)
                    valid_images.append({"src": clean_src, "alt": img["alt"]})

            cleaned_blocks = clean_text_list(parser.text_blocks)

            page_record = {
                "slug": slug,
                "name": name,
                "url": url,
                "title": parser.title or name,
                "text_content": cleaned_blocks,
                "links": unique_links,
                "images": valid_images
            }
            all_data.append(page_record)

            # Guardar Markdown individual
            md_file = markdown_dir / f"{slug}.md"
            with open(md_file, "w", encoding="utf-8") as f:
                f.write(f"# {name}\n\n")
                f.write(f"**URL:** {url}  \n")
                f.write(f"**Título:** {parser.title}  \n\n")
                f.write("## Contenido Textual\n\n")
                for block in cleaned_blocks:
                    f.write(f"{block}\n\n")
                f.write("## Enlaces Encontrados\n\n")
                for link in unique_links:
                    f.write(f"- {link}\n")
                if valid_images:
                    f.write("\n## Imágenes\n\n")
                    for img in valid_images:
                        f.write(f"- ![{img['alt']}]({img['src']})\n")

            # Descargar imágenes asociadas a esta página
            for idx, img in enumerate(valid_images, start=1):
                src = img["src"]
                if src in downloaded_images:
                    continue
                downloaded_images.add(src)
                img_filename = f"{slug}_img_{idx}.jpg"
                img_dest = images_dir / img_filename
                print(f"  -> Descargando imagen {idx}: {img_filename}")
                download_image(src, img_dest)

            # Retardo cortés
            time.sleep(1.0)

        except Exception as e:
            print(f"  [X] Error procesando {url}: {e}")

    # Guardar JSON completo consolidado
    json_path = root_dir / "site_data.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)

    print(f"\n[✔] Scraping completado con éxito!")
    print(f"  - Datos JSON: {json_path}")
    print(f"  - Markdowns: {markdown_dir}")
    print(f"  - Imágenes descargadas: {len(downloaded_images)} archivos en {images_dir}")

if __name__ == "__main__":
    main()
