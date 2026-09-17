#!/usr/bin/env python3
"""
Compilador de datos del Dr. Carlos Giovanni González Espitia a TypeScript para Astro.
"""
import json
from pathlib import Path

data = {
    "professor": {
        "fullName": "Carlos Giovanni González Espitia, Ph.D.",
        "shortName": "Dr. Giovanni González",
        "title": "Full Professor of Economics (Profesor Titular)",
        "department": "Department of Economics, School of Business and Economics",
        "institution": "Universidad Icesi",
        "location": "Cali, Colombia",
        "quote": "En la sucursal del cielo, la sultana del valle, en donde Cali es Cali y lo demás es loma, ciudad deportiva, en la capital mundial de la salsa.",
        "avatar": "/images/portrait.png",
        "classroomImage": "/images/classroom_students.png",
        "bio": (
            "Full Professor of Economics in the Department of Economics at Universidad Icesi "
            "(School of Business and Economics, AACSB and AMBA accredited) in Cali, Colombia. "
            "Researcher specializing in Applied Econometrics, Economics of Education, Economics of Crime, "
            "and Entrepreneurship. Member of the research group 'Economics, Public Policies and Quantitative Methods' "
            "(Ranked A1 by MinCiencias). Editor-in-Chief of Icesi Economics Working Papers and actively teaches "
            "both undergraduate and graduate (Master, MBA, and PhD) courses with approximately 500 hours per year."
        ),
        "contact": {
            "institutionalEmail": "cggonzalez@icesi.edu.co",
            "personalEmail": "giovanoski@hotmail.com",
            "linkedin": "https://www.linkedin.com/in/carlos-giovanni-gonzalez-espitia/",
            "instagram": "https://www.instagram.com/giovanoski_/",
            "tiktok": "https://www.tiktok.com/@giovanoski_?_t=ZS-8tJrlftVsZd&_r=1",
            "originalWebsite": "https://www.giovannigonzalez.com"
        },
        "academicProfiles": [
            {
                "name": "Google Scholar",
                "url": "https://scholar.google.com.co/citations?user=vdbPZNkAAAAJ&hl=en",
                "badge": "Citations & Metrics"
            },
            {
                "name": "IDEAS / RePEc",
                "url": "https://ideas.repec.org/f/pgo316.html",
                "badge": "Top 100 RePEc 10A (2018)"
            },
            {
                "name": "CvLAC MinCiencias",
                "url": "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000180629",
                "badge": "Investigador Asociado"
            },
            {
                "name": "Red de Investigadores BanRep",
                "url": "https://www.redinvestigadores.org/display/pgo316",
                "badge": "Banco de la República"
            }
        ],
        "education": [
            {
                "degree": "Ph.D. in Economics",
                "institution": "Universidad de Alcalá, Madrid, Spain",
                "year": "2011",
                "details": "Doctorado en Economía con honores / Mención Europea."
            },
            {
                "degree": "M.A. in Economics (DEA)",
                "institution": "Universidad de Alcalá, Madrid, Spain",
                "year": "2006",
                "details": "Diploma de Estudios Avanzados en Economía Aplicada."
            },
            {
                "degree": "B.S. in Economics & Business",
                "institution": "Homologado en España",
                "year": "2003",
                "details": "Título oficial convalidado por el Ministerio de Educación de España."
            },
            {
                "degree": "B.S. in Economics (Economista)",
                "institution": "Universidad Autónoma de Occidente, Colombia",
                "year": "2002",
                "details": "Grado profesional en Economía."
            }
        ],
        "experience": [
            {
                "role": "Full Professor of Economics (Profesor Titular)",
                "institution": "Universidad Icesi, Cali, Colombia",
                "period": "2022 - Present",
                "description": "Cátedra docente e investigación en pregrado, maestrías y doctorado. Miembro del Comité Curricular y de Ética en Investigación."
            },
            {
                "role": "Associate Professor (Profesor Asociado)",
                "institution": "Universidad Icesi, Cali, Colombia",
                "period": "2016 - 2021",
                "description": "Liderazgo en docencia econométrica y dirección de tesis doctorales y de maestría."
            },
            {
                "role": "Assistant Professor (Profesor Asistente)",
                "institution": "Universidad Icesi, Cali, Colombia",
                "period": "2009 - 2015",
                "description": "Desarrollo del currículo de Econometría y Teoría Macroeconómica."
            },
            {
                "role": "Assistant Professor",
                "institution": "Universidad Europea de Madrid, Spain",
                "period": "2008 - 2009",
                "description": "Docencia e investigación en el departamento de economía."
            },
            {
                "role": "Assistant Professor",
                "institution": "Universidad San Pablo CEU / Univ. de Alcalá, Spain",
                "period": "2006 - 2008",
                "description": "Docencia en análisis económico y métodos cuantitativos."
            },
            {
                "role": "Lecturer (Venia Docendi)",
                "institution": "Universidad de Alcalá, Spain",
                "period": "2006",
                "description": "Habilitación docente oficial en España."
            },
            {
                "role": "Lecturer",
                "institution": "Universidad Autónoma de Occidente, Colombia",
                "period": "2002 - 2006",
                "description": "Docencia en fundamentos económicos y métodos cuantitativos."
            }
        ],
        "affiliations": [
            {"name": "The Econometric Society", "url": "http://www.econometricsociety.org/"},
            {"name": "LACEA (Latin American and Caribbean Economic Association)", "url": "http://www.lacea.org/portal/"},
            {"name": "AEDE (Economics of Education Association) - Scientific Committee", "url": "https://economicsofeducation.com/en/"},
            {"name": "CONALPE (Consejo Nacional Profesional de Economía)", "url": "https://www.conalpe.gov.co/"},
            {"name": "CLADEA (Consejo Latinoamericano de Escuelas de Administración)", "url": "https://www.cladea.org/"},
            {"name": "BALAS (Business Association of Latin American Studies)", "url": "https://www.balas.org/"}
        ],
        "skills": [
            {"name": "Stata", "category": "Econometrics & Panel Data", "level": "Expert"},
            {"name": "R & RStudio", "category": "Statistical Computing & Visualization", "level": "Expert"},
            {"name": "Python", "category": "Data Science & Spatial Modeling", "level": "Advanced"},
            {"name": "LaTeX & Overleaf", "category": "Scientific Publishing & Typesetting", "level": "Expert"},
            {"name": "Applied Spatial Econometrics", "category": "Durbin & Spatial Lag Models", "level": "Expert"}
        ]
    },
    "books": [
        {
            "title": "Macroeconomía para la gerencia latinoamericana (2da Edición)",
            "authors": ["Carlos Giovanni González Espitia", "Hector Ochoa"],
            "year": "2022",
            "publisher": "Editorial Ecoe Ediciones, Bogotá - Colombia",
            "isbn": "978-958-503-348-1",
            "description": "Texto integral de macroeconomía aplicada a la toma de decisiones gerenciales en el contexto macroeconómico y financiero de América Latina.",
            "link": "https://www.ecoeediciones.com/libros/macroeconomia-para-la-gerencia-latinoamericana-2da-edicion-impreso/",
            "status": "Published"
        },
        {
            "title": "Macroeconomía para la gerencia latinoamericana (1ra Edición)",
            "authors": ["Carlos Giovanni González Espitia", "Hector Ochoa"],
            "year": "2017",
            "publisher": "Editorial Ecoe Ediciones, Bogotá - Colombia",
            "description": "Primera edición ampliamente adoptada en facultades de negocios y economía en la región andina.",
            "status": "Published"
        },
        {
            "title": "Learning Econometrics with R and Stata: for Research in Business and Economics",
            "authors": ["Carlos Giovanni González Espitia"],
            "year": "En desarrollo",
            "publisher": "Manual de investigación aplicada",
            "description": "Guía práctica y rigurosa para análisis econométrico empírico combinando la potencia de R y Stata con bases de datos reales.",
            "status": "In Progress"
        },
        {
            "title": "Evolución de la Educación Superior Universitaria en Colombia en el Siglo XXI: Retos y Oportunidades para el Futuro",
            "authors": ["Carlos Giovanni González Espitia"],
            "year": "En desarrollo",
            "publisher": "Monografía de investigación en políticas públicas",
            "description": "Evaluación histórica y econométrica del impacto de programas de financiamiento a la demanda y calidad educativa en Colombia.",
            "status": "In Progress"
        }
    ],
    "publications": [
        {
            "id": "informality-homicides-cali-2023",
            "title": "The Spatial and Economic Relationship Between Labour Informality and Homicides in Cali, Colombia",
            "journal": "Development Policy Review",
            "year": "2023",
            "volume": "Vol. 41(5), p. 320-350",
            "authors": "Carlos Giovanni González Espitia, Magaly Herrera, Hector Ochoa",
            "ranking": "Q2 (Percentil 69)",
            "area": "Economics of Crime & Labour",
            "abstract": "In the analysis of the relationship between the labour market and crime, the variable that comes from the labour market is generally the unemployment rate. However, there are labour market characteristics that are more significant than unemployment, such as labour informality, in the context of violent crime in low-income and middle-income countries. This article aims to estimate the spatial and economic relationship between homicides and labour informality by neighbourhood in Cali, using administrative data and a unique survey of formal and informal labour market conditions, estimating a Spatial Durbin Model.",
            "url": "https://doi.org/10.1111/dpr.12686",
            "doi": "10.1111/dpr.12686"
        },
        {
            "id": "gender-access-higher-education-2023",
            "title": "Gender Differences in Access to Higher Education in Colombia (2001-2019)",
            "journal": "Revista Colombiana de Educación",
            "year": "2023",
            "volume": "Vol. 88, p. 185-210",
            "authors": "Carlos Giovanni González Espitia",
            "ranking": "Q3 (Percentil 26)",
            "area": "Economics of Education",
            "abstract": "Access to higher education for women and men is one of the factors related to social mobility, equity and improved opportunities around the world. This research paper estimates gender differences in the probability of access to higher education in Colombia from 2001 to 2019 using multinomial probit models of discrete choice with correction for selection bias sample from GEIH data.",
            "url": "https://doi.org/10.17227/rce.num88-14285",
            "doi": "10.17227/rce.num88-14285"
        },
        {
            "id": "entrepreneurs-growth-generations-2023",
            "title": "Determinants of the Growth Aspiration of Colombian Entrepreneurs: The Role of Some Generations, Baby Boomers, Generation X and Millennials",
            "journal": "Journal of Quantitative Methods for Economics and Business Administration",
            "year": "2023",
            "volume": "Vol. 35, p. 223-249",
            "authors": "Carlos Giovanni González Espitia",
            "ranking": "Q4 (Percentil 24)",
            "area": "Entrepreneurship",
            "abstract": "Estimates the probability of growth aspirations of Colombian entrepreneurs according to the generation in which they were born using Global Entrepreneurship Monitor (GEM) data between 2006 and 2017. Based on a sample of 6,670 individuals, three ordinal logistic regression models were estimated.",
            "url": "https://doi.org/10.46661/rev.metodoscuant.econ.empresa.6128",
            "doi": "10.46661/rev.metodoscuant.econ.empresa.6128"
        },
        {
            "id": "informalidad-laboral-cali-2022",
            "title": "Informalidad Laboral y Homicidios en Cali, una Ciudad de Alta Violencia",
            "journal": "Revista de Economía Institucional",
            "year": "2022",
            "volume": "Vol. 24(46), p. 217-236",
            "authors": "Carlos Giovanni González Espitia, Magaly Herrera",
            "ranking": "Q4 (Percentil 23)",
            "area": "Economics of Crime",
            "abstract": "En este artículo se estima el efecto de la informalidad laboral en los homicidios en Cali, mediante un análisis econométrico que usa variables instrumentales. Los resultados muestran un efecto positivo de la informalidad laboral sobre los homicidios: un aumento de 1 punto porcentual en la tasa de informalidad aumenta los homicidios en un 4,2%.",
            "url": "https://doi.org/10.18601/01245996.v24n46.10",
            "doi": "10.18601/01245996.v24n46.10"
        },
        {
            "id": "spatial-economic-quality-education-2020",
            "title": "Understanding the Spatial and Dynamic Effect of Economic Activity on the Quality of Education: Evidence from Colombia",
            "journal": "Comparative Education Review (University of Chicago Press)",
            "year": "2020",
            "volume": "Vol. 64(4), p. 642-669",
            "authors": "Carlos Giovanni González Espitia, Natalia Solano, Hector Ochoa",
            "ranking": "Q1 (SJR Top Tier)",
            "area": "Economics of Education",
            "abstract": "Estimates the effects of economic activity on the quality of education in various regions of Colombia using spatial regression models and dynamic panel data with instrumental variables (satellite nighttime lights and electricity consumption).",
            "url": "https://doi.org/10.1086/710769",
            "doi": "10.1086/710769"
        }
    ],
    "workingPapers": [
        {
            "title": "The Private Returns to Education in a Developing Country: Recent and Heterogeneous Evidence from Colombia, 2008-2021",
            "authors": "Carlos Giovanni González Espitia, Gustavo González, Valentina Perdomo",
            "status": "Submitted",
            "category": "NEW",
            "area": "Economics of Education"
        },
        {
            "title": "Effects of Drug Trafficking and Peace Agreements on Criminal Activity in Colombia",
            "authors": "Carlos Giovanni González Espitia, Magaly Herrera",
            "status": "Submitted",
            "category": "NEW",
            "area": "Economics of Crime"
        },
        {
            "title": "Heterogeneous Effects of Public Financing of Education on the Demand for Private Higher Education: Evidence from Colombia",
            "authors": "Carlos Giovanni González Espitia",
            "status": "Submitted / R&R",
            "category": "REVISED",
            "area": "Economics of Education"
        },
        {
            "title": "Crime and Drug Trafficking in Colombia, History of a Lost Battle: Drug Legalization and Public Policies",
            "authors": "Carlos Giovanni González Espitia",
            "status": "Submitted / R&R",
            "category": "REVISED",
            "area": "Economics of Crime"
        },
        {
            "title": "Life Cycle, Early Entrepreneurship and Fear of Failure for Colombian Entrepreneurs: Evidence with GEM Data",
            "authors": "Carlos Giovanni González Espitia",
            "status": "Submitted",
            "category": "REVISED",
            "area": "Entrepreneurship"
        },
        {
            "title": "Meritocracy in a Financing Program for the Demand for Higher Education in Colombia: ¿Who Were the Ser Pilo Paga?",
            "authors": "Carlos Giovanni González Espitia",
            "status": "In Progress",
            "category": "IN PROGRESS",
            "area": "Economics of Education"
        },
        {
            "title": "Behavior of Colombian Firm Profitability: Is it a Random-Walk?",
            "authors": "Carlos Giovanni González Espitia, Luis Berggrun",
            "status": "In Progress",
            "category": "IN PROGRESS",
            "area": "Applied Econometrics & Finance"
        }
    ],
    "courses": [
        {
            "code": "ECON-301",
            "name": "Econometría",
            "level": "Pregrado",
            "semester": "Semestral",
            "description": "Fundamentos del modelo clásico de regresión lineal, estimación MCO, inferencia estadística, violación de supuestos clásicos (heterocedasticidad, autocorrelación, multicolinealidad) y variables instrumentales en Stata y R.",
            "topics": [
                "Modelo de Regresión Lineal Múltiple",
                "Propiedades de MCO y Teorema de Gauss-Markov",
                "Pruebas de Hipótesis y Diagnósticos de Especificación",
                "Heterocedasticidad y Métodos Robustos",
                "Endogeneidad y Variables Instrumentales (2SLS)"
            ]
        },
        {
            "code": "ECON-401",
            "name": "Econometría II",
            "level": "Pregrado Avanzado",
            "semester": "Semestral",
            "description": "Modelos para variables dependientes limitadas (Logit, Probit, Tobit), econometría de series de tiempo (ARIMA, Cointegración, VAR) y modelos de datos de panel (Efectos Fijos y Aleatorios).",
            "topics": [
                "Modelos de Elección Discreta (Logit / Probit)",
                "Modelos de Selección Muestral (Heckman)",
                "Series de Tiempo Univariadas y Multivariadas (VAR)",
                "Datos de Panel Estáticos y Dinámicos (GMM Arellano-Bond)"
            ]
        },
        {
            "code": "ECON-302",
            "name": "Teoría Macroeconómica II",
            "level": "Pregrado",
            "semester": "Semestral",
            "description": "Modelos de crecimiento económico a largo plazo (Solow-Swan, Crecimiento Endógeno), microfundamentación del consumo e inversión (Ramsey-Cass-Koopmans) y fluctuaciones de corto plazo con rigideces nominales.",
            "topics": [
                "Modelo de Solow-Swan y Convergencia Económica",
                "Modelos de Crecimiento Endógeno (AK, R&D)",
                "Microfundamentación del Consumo y Teoría del Ingreso Permanente",
                "Economía Abierta: Modelo Mundell-Fleming"
            ]
        },
        {
            "code": "GRAD-501",
            "name": "Cursos de Posgrado (Maestría & Doctorado)",
            "level": "Posgrado / PhD",
            "semester": "Anual",
            "description": "Cursos especializados en la Maestría en Finanzas, Maestría en Mercadeo, MBA y Doctorado en Economía de los Negocios de la Universidad Icesi.",
            "topics": [
                "Métodos Cuantitativos para Finanzas",
                "Econometría Aplicada a Decisiones Gerenciales",
                "Análisis Empírico de Datos de Negocios",
                "Seminario de Investigación Doctoral"
            ]
        }
    ],
    "supervisedStudents": [
        {
            "name": "Magaly Herrera",
            "degree": "Doctorado en Economía de los Negocios",
            "institution": "Universidad Icesi",
            "year": "2021",
            "role": "Director de Tesis Doctoral",
            "thesis": "Ensayos sobre Economía del Crimen e Informalidad Laboral en Cali"
        },
        {
            "name": "Gustavo Junca",
            "degree": "Doctorado en Economía",
            "institution": "Universidad Nacional de Colombia",
            "year": "2019",
            "role": "Miembro del Jurado de Tesis Doctoral",
            "thesis": "Evaluación de políticas públicas en educación superior y retornos salariales"
        },
        {
            "name": "Natalia Solano",
            "degree": "Maestría en Economía",
            "institution": "Universidad Icesi",
            "year": "2020",
            "role": "Director de Tesis",
            "thesis": "Efectos espaciales de la actividad económica sobre la calidad de la educación en Colombia"
        },
        {
            "name": "Gustavo González & Valentina Perdomo",
            "degree": "Pregrado en Economía",
            "institution": "Universidad Icesi",
            "year": "2022",
            "role": "Director de Monografía",
            "thesis": "Retornos privados a la educación en Colombia: Evidencia heterogénea 2008-2021"
        }
    ],
    "econometricsWithR": {
        "title": "Econometría con R & Laboratorio Computacional",
        "intro": "Espacio dedicado a la democratización del aprendizaje de la econometría moderna usando R, RStudio y Quarto/RMarkdown con enfoque replicable y código abierto.",
        "resources": [
            {
                "title": "Introducción a R para Economistas",
                "desc": "Manejo de estructuras de datos (data frames, tibbles, vectores), manipulación con tidyverse (dplyr, tidyr) y visualización con ggplot2.",
                "tools": ["R", "RStudio", "tidyverse"]
            },
            {
                "title": "Regresión Lineal y Diagnósticos en R",
                "desc": "Estimación con lm(), pruebas de heterocedasticidad (bptest), autocorrelación (dwtest) y errores estándar robustos (sandwich, lmtest).",
                "tools": ["lmtest", "sandwich", "stargazer"]
            },
            {
                "title": "Econometría Espacial en R",
                "desc": "Matrices de contigüidad espacial, I de Moran, estimación de modelos SAR, SEM y Spatial Durbin con sf y spatialreg.",
                "tools": ["spatialreg", "sf", "spdep"]
            },
            {
                "title": "Modelos de Panel y Variables Instrumentales",
                "desc": "Estimación con plm y AER (ivreg), pruebas de Hausman y estimación 2SLS.",
                "tools": ["plm", "AER"]
            }
        ]
    }
}

target_file = Path("src/data/portfolioData.ts")
target_file.parent.mkdir(parents=True, exist_ok=True)

with open(target_file, "w", encoding="utf-8") as f:
    f.write("// Datos completos estructurados del Dr. Carlos Giovanni González Espitia\n")
    f.write("// Extraídos y normalizados a partir del sitio original giovannigonzalez.com\n\n")
    f.write("export const portfolioData = " + json.dumps(data, ensure_ascii=False, indent=2) + " as const;\n")
    f.write("\nexport type PortfolioData = typeof portfolioData;\n")

print(f"[✔] Dataset TypeScript generado con éxito en {target_file}")
