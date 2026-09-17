# Portafolio Academico & Cientifico: Dr. Carlos Giovanni Gonzalez Espitia

Sitio web academico profesional de alto rendimiento desarrollado con **Astro**, **TypeScript** y **pnpm**. Disenado para la proyeccion internacional de investigacion, docencia universitaria y produccion bibliografica del profesor titular **Carlos Giovanni Gonzalez Espitia, Ph.D.** (Departamento de Economia, Universidad Icesi, Cali, Colombia).

---

## 1. Vision y Enfoque del Proyecto

El proyecto renueva y moderniza la presencia digital del docente a partir de la informacion contenida en su sitio original (`giovannigonzalez.com`), alcanzando un estandar editorial comparable con portafolios academicos de instituciones de primer nivel (Harvard, MIT, Oxford):

*   **Paleta de Color Institucional Autentica:** Inspirada en el azul petroleo academico original (`#1E6C93` / `rgb(30, 108, 147)`), calibrada para maxima legibilidad tanto en modo claro como en modo oscuro.
*   **Optimizacion de Contraste WCAG AAA:** Ajuste estricto de contrastes cromaticos para lectura academica prolongada:
    *   *Modo Claro:* Fondo marfil papel (`#FCFBF9`), texto principal carbon profundo (`#0A111A`, ratio 20:1), texto secundario pizarra (`#263238`, ratio 11:1), texto atenuado slate 600 (`#475569`, ratio 6.5:1), y acento petroleo oscuro (`#175A7D`, ratio > 5.5:1).
    *   *Modo Oscuro:* Fondo carbon obsidiana (`#0A0E14`), texto principal blanco puro (`#FFFFFF`, ratio 19:1), texto secundario slate 200 (`#E2E8F0`, ratio 14:1), texto atenuado slate 400 (`#94A3B8`, ratio 7.2:1), y acento petroleo luminoso (`#38BDF8`, ratio 8.2:1).
*   **Arquitectura Bilingue Reactiva (Espanol / English):** Selector interactivo en cabecera que conmuta titulos, resumenes curriculares, lineas de investigacion y botones sin recargar la pagina, conservando la seleccion del usuario en `localStorage`.
*   **Identidad Sobria sin Emojis:** Diseno editorial 100% libre de emojis o iconos informales, empleando unicamente tipografia Newsreader/Plus Jakarta Sans y vectores SVG de precision.
*   **Logotipos e Insignias Institucionales Oficiales:** Emblemas vectoriales directos en SVG para:
    *   Universidades: Universidad Icesi, Universidad de Alcala (Espana), Universidad Autonoma de Occidente.
    *   Entidades y Redes: MinCiencias (Grupo A1), Banco de la Republica de Colombia, RePEc (IDEAS Top 100 Investigadores Colombia), Google Scholar, LinkedIn.
    *   Herramientas Cientificas: Stata, R/RStudio, Python.
*   **Encuadre Fotografico Natural:** Retratos oficiales del docente y registros de aula con cohorte de estudiantes procesados en alta resolucion y encuadrados proporcionalmente sin cortes indebidos.

---

## 2. Arquitectura del Repositorio

```
.
|-- public/
|   |-- favicon.svg                   # Emblema grafico en SVG
|   `-- images/                       # Fotografias oficiales en alta resolucion
|       |-- portrait_hd.png           # Retrato academico oficial del docente
|       `-- classroom_students_hd.png # Registro pedagogico con estudiantes en aula
|-- src/
|   |-- components/
|   |   |-- Footer.astro              # Pie de pagina institucional con perfiles de investigacion
|   |   |-- InstitutionLogo.astro     # Motor de logotipos vectoriales SVG
|   |   |-- LanguageToggle.astro      # Selector interactivo bilingue (ES / EN)
|   |   |-- Navbar.astro              # Barra de navegacion sticky con deteccion de ruta activa
|   |   |-- PublicationCard.astro     # Ficha de publicacion con abstract desplegable y BibTeX
|   |   |-- TeachingCard.astro        # Ficha de catedra con modulos tematicos del syllabus
|   |   `-- ThemeToggle.astro         # Conmutador accesible de tema (Claro / Oscuro)
|   |-- data/
|   |   `-- portfolioData.ts          # Dataset maestro fuertemente tipado en TypeScript
|   |-- layouts/
|   |   `-- BaseLayout.astro          # Layout maestro con metadatos SEO y script anti-flicker
|   |-- pages/
|   |   |-- index.astro               # Pagina principal: Hero bilingue, libros y trayectoria
|   |   |-- research.astro            # Catalogo cientifico: Articulos Q1-Q4 y Working Papers
|   |   |-- teaching.astro            # Catedras de pregrado, maestria y doctorado
|   |   |-- students.astro            # Direccion de tesis doctorales, maestrias y pregrado
|   |   |-- r-lab.astro               # Laboratorio de computacion: R, Econometria Espacial y Stata
|   |   `-- resources.astro           # Directorio de microdatos (DANE, BanRep, World Bank, FRED)
|   `-- styles/
|       `-- global.css                # Sistema de diseno y tokens CSS de alto contraste
|-- data_raw/                         # Respaldo de datos extraidos del sitio original
|   |-- markdown/                     # Transcripcion en Markdown de las 10 paginas
|   `-- site_data.json                # Dump estructurado en JSON
|-- scrape_giovanni.py                # Pipeline autonomo de scraping respetuoso en Python
|-- astro.config.mjs                  # Configuracion del compilador Astro
|-- package.json                      # Dependencias y scripts
`-- tsconfig.json                     # Configuracion estricta de TypeScript
```

---

## 3. Requisitos y Comandos de Ejecucion

### Requisitos Previos
*   Node.js `>= 20.0.0` (o `>= 22.0.0`)
*   pnpm `>= 9.0.0` (o `>= 10.0.0`)

### Comandos Principales

```bash
# Instalacion de dependencias
pnpm install

# Servidor de desarrollo local (http://localhost:4321)
pnpm run dev

# Compilacion estatica para produccion (genera directorio dist/)
pnpm run build

# Previsualizacion local del artefacto de produccion
pnpm run preview
```

---

## 4. Pipeline de Datos y Extraccion

Los contenidos y registros bibliograficos fueron recopilados mediante `scrape_giovanni.py`, el cual implementa tecnicas de rastreo respetuoso (solicitudes con User-Agent formal, delays de cortesia de 1 segundo y almacenamiento estructurado):

1.  `/home` - Perfil biografico, nombramiento docente, grados academicos y afiliacion Icesi.
2.  `/current-research` - Proyectos de investigacion activos y working papers.
3.  `/publications` - Articulos indexados en Scopus y Web of Science clasificados por cuartil (Q1 a Q4).
4.  `/teaching` - Declaracion pedagogica, horas de docencia anuales y niveles de formacion.
5.  `/teaching/econometria` - Programa y syllabus de Econometria para Economia.
6.  `/teaching/econometria-ii` - Programa y syllabus de Econometria II (Series de Tiempo y Microeconometria).
7.  `/teaching/teoria-macroeconomica-ii` - Programa y syllabus de Teoria Macroeconomica Intermedia.
8.  `/my-students` - Tesis dirigidas de doctorado, maestria en finanzas/mercadeo y monografias de pregrado.
9.  `/resources` - Fuentes de datos oficiales (DANE, BanRep, ICFES, Banco Mundial, FRED).
10. `/econometrics-with-r` - Guias computacionales y scripts de econometria espacial con paquetes de R.

Los datos procesados se encuentran consolidados y tipados en `src/data/portfolioData.ts`.

---

## 5. Especificaciones Tecnicas y Accesibilidad

*   **Compilacion Estatica Pura (SSG):** Tiempo de compilacion medio de ~350 milisegundos con cero dependencias pesadas en tiempo de ejecucion en cliente.
*   **Cero Emojis:** Todos los elementos decorativos corresponden a vectores trazados en SVG o insignias tipograficas con codigos de color formales.
*   **Citas BibTeX Integradas:** Las tarjetas de publicaciones cientificas cuentan con un generador automatico de citas BibTeX con boton de copiado directo al portapapeles.
*   **SEO y Metadatos OpenGraph:** Cada vista cuenta con etiquetas canonicas, descripcion individualizada, tarjeta Twitter Summary Large Image y fallback optimizado de vista previa.
*   **Despliegue Multiplataforma:** La carpeta generada `dist/` es compatible de inmediato con Vercel, Netlify, Cloudflare Pages, GitHub Pages o servidores estaticos Nginx/Apache.
