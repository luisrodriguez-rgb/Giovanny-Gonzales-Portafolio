// Datos maestros estructurados del Dr. Carlos Giovanni Gonzalez Espitia
// Academic Professional Portfolio & Research Hub

export interface Professor {
  fullName: string;
  shortName: string;
  title: { es: string; en: string };
  institution: string;
  department: { es: string; en: string };
  phdInstitution: string;
  location: string;
  avatar: string;
  classroomImage: string;
  bio: { es: string; en: string };
  contact: {
    institutionalEmail: string;
    personalEmail: string;
    linkedin: string;
    googleScholar: string;
    repec: string;
    cvlac: string;
    icesiPortal: string;
    banrep: string;
  };
}

export interface ResearchArea {
  id: 'education' | 'crime' | 'econometrics' | 'entrepreneurship';
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  keyTopics: string[];
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  volume: string;
  authors: string[];
  area: 'education' | 'crime' | 'econometrics' | 'entrepreneurship';
  ranking: string;
  url: string;
  doi: string;
  abstract: string;
  researchQuestion: string;
  methodology: string;
  dataSources: string[];
  findings: string[];
  bibtex: string;
}

export interface WorkingPaper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  category: 'NEW' | 'REVISED' | 'IN PROGRESS';
  status: string;
  area: string;
  abstract: string;
}

export interface Course {
  code: string;
  name: { es: string; en: string };
  level: 'undergraduate' | 'graduate';
  degree: { es: string; en: string };
  semester: { es: string; en: string };
  description: { es: string; en: string };
  objectives: { es: string[]; en: string[] };
  software: string[];
  datasets: { es: string[]; en: string[] };
  topics: { es: string[]; en: string[] };
}

export interface SupervisedStudent {
  name: string;
  degree: string;
  institution: string;
  year: number;
  role: string;
  thesis: string;
}

export interface Book {
  title: string;
  edition: string;
  year: number;
  publisher: string;
  authors: string[];
  description: { es: string; en: string };
  link?: string;
  isbn?: string;
}

export interface AcademicProfile {
  name: string;
  platform: string;
  badge: { es: string; en: string };
  url: string;
  description: { es: string; en: string };
}

export interface CareerMilestone {
  year: string;
  role: { es: string; en: string };
  institution: string;
  location: string;
  type: 'education' | 'position';
}

export interface ResearchStep {
  step: string;
  name: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  detail: { es: string; en: string };
}

export const portfolioData = {
  professor: {
    fullName: "Carlos Giovanni González Espitia, Ph.D.",
    shortName: "Dr. Giovanni González",
    avatar: "/images/portrait_hd.png",
    classroomImage: "/images/classroom_students_hd.png",
    institution: "Universidad Icesi",
    department: {
      es: "Departamento de Economía, Facultad de Ciencias Administrativas y Económicas",
      en: "Department of Economics, School of Business and Economics"
    },
    phdInstitution: "Universidad de Alcalá (España)",
    location: "Cali, Colombia",
    title: {
      es: "Profesor Titular de Economía",
      en: "Full Professor of Economics"
    },
    bio: {
      es: "Profesor Titular de Economía en la Universidad Icesi en Cali, Colombia. Especializado en Econometría Aplicada, Economía de la Educación, Economía del Crimen y Emprendimiento. Doctor en Economía con honores por la Universidad de Alcalá (España). Miembro del grupo de investigación 'Economía, Políticas Públicas y Métodos Cuantitativos' (Categoría A1 de MinCiencias) y Editor de los Icesi Economics Working Papers.",
      en: "Full Professor of Economics in the Department of Economics at Universidad Icesi in Cali, Colombia. Specialized in Applied Econometrics, Economics of Education, Economics of Crime, and Entrepreneurship. Ph.D. in Economics with honors from Universidad de Alcalá (Spain). Member of the MinCiencias A1 research group 'Economics, Public Policies and Quantitative Methods' and Editor-in-Chief of Icesi Economics Working Papers."
    },
    contact: {
      institutionalEmail: "cggonzalez@icesi.edu.co",
      personalEmail: "giovanoski@hotmail.com",
      linkedin: "https://www.linkedin.com/in/carlos-giovanni-gonzalez-espitia/",
      googleScholar: "https://scholar.google.com.co/citations?user=vdbPZNkAAAAJ&hl=en",
      repec: "https://ideas.repec.org/f/pgo316.html",
      cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000180629",
      icesiPortal: "https://icesi.portalinvestigacion.com/investigadores/1742",
      banrep: "https://www.redinvestigadores.org/display/pgo316"
    }
  },

  researchAreas: [
    {
      id: "education",
      title: {
        es: "Economía de la Educación",
        en: "Economics of Education"
      },
      tagline: {
        es: "Acceso, calidad y desigualdad de oportunidades en Colombia",
        en: "Access, quality and inequality of opportunities in Colombia"
      },
      description: {
        es: "Investigación empírica sobre los determinantes del acceso a la educación superior, brechas de género en graduación, calidad educativa regional y retornos salariales en el mercado laboral utilizando microdatos de Saber 11, Saber Pro y GEIH.",
        en: "Empirical research on the determinants of higher education access, gender gaps in completion, regional educational quality, and wage returns in the Colombian labor market using Saber 11, Saber Pro, and GEIH microdata."
      },
      keyTopics: ["Acceso a Educación Superior", "Brechas de Género", "Calidad Regional", "Retornos a la Educación", "Financiación Pública"]
    },
    {
      id: "crime",
      title: {
        es: "Economía del Crimen",
        en: "Economics of Crime"
      },
      tagline: {
        es: "Mercado laboral, informalidad y violencia urbana",
        en: "Labor market, informality and urban violence"
      },
      description: {
        es: "Análisis espacial y cuantitativo del efecto de la informalidad laboral sobre los homicidios y la violencia en Cali y principales ciudades colombianas. Modelación de derrames espaciales (spillovers) entre comunas mediante modelos Spatial Durbin.",
        en: "Spatial and quantitative analysis of the effect of labor informality on homicides and urban violence in Cali and major Colombian cities. Modeling spatial spillovers across urban neighborhoods through Spatial Durbin models."
      },
      keyTopics: ["Informalidad Laboral", "Homicidios Urbanos", "Econometría Espacial", "Políticas de Seguridad", "Narcotráfico y Conflicto"]
    },
    {
      id: "econometrics",
      title: {
        es: "Econometría Aplicada",
        en: "Applied Econometrics"
      },
      tagline: {
        es: "Inferencia causal, datos de panel y métodos cuantitativos",
        en: "Causal inference, panel data and quantitative methods"
      },
      description: {
        es: "Aplicación de métodos cuantitativos rigurosos para la evaluación de políticas públicas: modelos de selección muestral (Heckman), variables instrumentales, paneles estáticos y dinámicos (GMM Arellano-Bond), y econometría de series de tiempo.",
        en: "Application of rigorous quantitative methods for public policy evaluation: sample selection models (Heckman), instrumental variables, static and dynamic panels (GMM Arellano-Bond), and time series econometrics."
      },
      keyTopics: ["Inferencia Causal", "Variables Instrumentales", "Selección Muestral", "Paneles Dinámicos", "Series de Tiempo"]
    },
    {
      id: "entrepreneurship",
      title: {
        es: "Emprendimiento & Negocios",
        en: "Entrepreneurship & Business"
      },
      tagline: {
        es: "Aspiraciones de crecimiento y dinámica empresarial",
        en: "Growth aspirations and business dynamics"
      },
      description: {
        es: "Estudios sobre los determinantes de las aspiraciones de crecimiento de emprendedores colombianos, diferencias generacionales (Baby Boomers, Gen X, Millennials) y ciclo de vida de nuevas empresas a partir de datos del Global Entrepreneurship Monitor (GEM).",
        en: "Studies on the determinants of growth aspirations among Colombian entrepreneurs, generational differences (Baby Boomers, Gen X, Millennials), and new firm life cycles based on Global Entrepreneurship Monitor (GEM) data."
      },
      keyTopics: ["Aspiraciones de Crecimiento", "GEM Colombia", "Diferencias Generacionales", "Ciclo de Vida Empresarial", "Miedo al Fracaso"]
    }
  ] as ResearchArea[],

  howIResearch: [
    {
      step: "01",
      name: "QUESTION",
      title: {
        es: "Pregunta Económica",
        en: "Economic Question"
      },
      description: {
        es: "¿Qué problema económico o de política pública se intenta comprender?",
        en: "What economic issue or public policy challenge are we addressing?"
      },
      detail: {
        es: "Identificación de dilemas en educación, mercado laboral informal, violencia urbana o decisiones de crecimiento empresarial.",
        en: "Identifying dilemmas in education, informal labor markets, urban violence, or business growth decisions."
      }
    },
    {
      step: "02",
      name: "DATA",
      title: {
        es: "Microdatos Oficiales",
        en: "Official Microdata"
      },
      description: {
        es: "Recopilación de registros administrativos y encuestas primarias",
        en: "Collection of administrative records and primary survey data"
      },
      detail: {
        es: "DANE GEIH, ICFES Saber 11 / Saber Pro, Policía Nacional, Banco de la República y bases GEM Colombia.",
        en: "DANE GEIH, ICFES Saber 11 / Saber Pro, National Police, Banco de la República, and GEM Colombia data."
      }
    },
    {
      step: "03",
      name: "METHOD",
      title: {
        es: "Estrategia de Identificación",
        en: "Identification Strategy"
      },
      description: {
        es: "Diseño econométrico para mitigar sesgos y endogeneidad",
        en: "Econometric design to mitigate bias and endogeneity"
      },
      detail: {
        es: "Modelos Spatial Durbin (matrices de contigüidad Reina), probit multinomial con corrección Heckman y variables instrumentales.",
        en: "Spatial Durbin models (Queen contiguity matrices), multinomial probit with Heckman selection, and instrumental variables."
      }
    },
    {
      step: "04",
      name: "ESTIMATION",
      title: {
        es: "Computación Científica",
        en: "Scientific Computing"
      },
      description: {
        es: "Estimación reproducible y contrastes de especificación",
        en: "Reproducible estimation and specification diagnostics"
      },
      detail: {
        es: "Implementación en R (sf, spatialreg, plm), Stata 18 y Python para análisis geoespacial y series.",
        en: "Implementation in R (sf, spatialreg, plm), Stata 18, and Python for geospatial and time series analysis."
      }
    },
    {
      step: "05",
      name: "EVIDENCE",
      title: {
        es: "Interpretación Empírica",
        en: "Empirical Interpretation"
      },
      description: {
        es: "Análisis de impactos directos, indirectos y significancia",
        en: "Analysis of direct and indirect impacts and statistical significance"
      },
      detail: {
        es: "Descomposición de coeficientes, elasticidades y pruebas de robustez estadística sin sobrestimaciones.",
        en: "Decomposition of coefficients, elasticities, and robustness checks without parameter overestimation."
      }
    },
    {
      step: "06",
      name: "POLICY",
      title: {
        es: "Implicaciones de Política",
        en: "Policy Implications"
      },
      description: {
        es: "Traducción de hallazgos en recomendaciones prácticas",
        en: "Translating findings into actionable evidence-based recommendations"
      },
      detail: {
        es: "Evidencia accionable para secretarías de educación, seguridad ciudadana, formuladores de política y gerencia.",
        en: "Actionable evidence for departments of education, urban public safety, policy makers, and executives."
      }
    }
  ] as ResearchStep[],

  publications: [
    {
      id: "informality-homicides-cali-2023",
      title: "The Spatial and Economic Relationship Between Labour Informality and Homicides in Cali, Colombia",
      journal: "Development Policy Review",
      year: 2023,
      volume: "Vol. 41(5), e12686",
      authors: ["Carlos Giovanni González Espitia", "Magaly Herrera", "Hector Ochoa"],
      area: "crime",
      ranking: "Q2",
      url: "https://doi.org/10.1111/dpr.12686",
      doi: "10.1111/dpr.12686",
      abstract: "In the analysis of the relationship between the labour market and crime, the variable that comes from the labour market is generally the unemployment rate. However, there are labour market characteristics that are more significant than unemployment, such as labour informality, in the context of violent crime in low-income and middle-income countries. This article aims to estimate the spatial and economic relationship between homicides and labour informality by neighbourhood in Cali, using administrative data and a unique survey of formal and informal labour market conditions, estimating a Spatial Durbin Model.",
      researchQuestion: "¿Cómo se relaciona espacialmente la informalidad laboral con la tasa de homicidios por barrio en una ciudad de alta violencia como Cali?",
      methodology: "Modelo Durbin Espacial (Spatial Durbin Model - SDM) con matriz de pesos espaciales tipo Reina de orden 1, estimando efectos directos, indirectos (derrames espaciales) y totales.",
      dataSources: ["Registros administrativos de homicidios (Policía Nacional / Medicina Legal)", "Encuesta de empleo formal e informal en Cali", "Capas geográficas SIG de barrios y comunas de Cali"],
      findings: [
        "Un aumento en la tasa de informalidad laboral barrial genera un incremento estadísticamente significativo en los homicidios locales.",
        "Existe un efecto derrame (spatial spillover): la informalidad laboral en barrios vecinos incide positivamente en la tasa de homicidios del barrio analizado.",
        "La informalidad laboral presenta un poder explicativo sobre la violencia letal superior a la tasa de desempleo abierta tradicional."
      ],
      bibtex: `@article{gonzalez_informality_2023,
  title = {The Spatial and Economic Relationship Between Labour Informality and Homicides in Cali, Colombia},
  author = {González Espitia, Carlos Giovanni and Herrera, Magaly and Ochoa, Hector},
  journal = {Development Policy Review},
  volume = {41},
  number = {5},
  pages = {e12686},
  year = {2023},
  doi = {10.1111/dpr.12686},
  url = {https://doi.org/10.1111/dpr.12686}
}`
    },
    {
      id: "gender-access-higher-education-2023",
      title: "Gender Differences in Access to Higher Education in Colombia (2001-2019)",
      journal: "Revista Colombiana de Educación",
      year: 2023,
      volume: "Vol. 88, p. 185-210",
      authors: ["Carlos Giovanni González Espitia"],
      area: "education",
      ranking: "Q3",
      url: "https://doi.org/10.17227/rce.num88-14285",
      doi: "10.17227/rce.num88-14285",
      abstract: "Access to higher education for women and men is one of the factors related to social mobility, equity and improved opportunities around the world. This research paper estimates gender differences in the probability of access to higher education in Colombia from 2001 to 2019 using multinomial probit models of discrete choice with correction for selection bias sample from GEIH data.",
      researchQuestion: "¿Cómo han evolucionado las brechas de género en la probabilidad de acceso a la educación superior en Colombia durante las dos primeras décadas del siglo XXI?",
      methodology: "Modelos de elección discreta (Probit Multinomial) con corrección de sesgo de selección muestral (metodología Heckman en dos etapas) a lo largo de series temporales de corte transversal repetido.",
      dataSources: ["DANE - Gran Encuesta Integrada de Hogares (GEIH) 2001-2019", "Registros del Sistema Nacional de Información de la Educación Superior (SNIES)"],
      findings: [
        "Aunque la tasa de matrícula femenina creció de forma sostenida, persisten barreras heterogéneas según el nivel de ingresos del hogar y la región geográfica.",
        "El nivel educativo de la madre ejerce un peso relativo mayor en la probabilidad de acceso de las mujeres respecto a los hombres.",
        "Los costos de oportunidad y las responsabilidades de cuidado siguen condicionando de manera diferenciada la continuidad educativa universitaria."
      ],
      bibtex: `@article{gonzalez_gender_education_2023,
  title = {Gender Differences in Access to Higher Education in Colombia (2001-2019)},
  author = {González Espitia, Carlos Giovanni},
  journal = {Revista Colombiana de Educación},
  volume = {88},
  pages = {185--210},
  year = {2023},
  doi = {10.17227/rce.num88-14285},
  url = {https://doi.org/10.17227/rce.num88-14285}
}`
    },
    {
      id: "spatial-economic-quality-education-2020",
      title: "Understanding the Spatial and Dynamic Effect of Economic Activity on the Quality of Education: Evidence from Colombia",
      journal: "Comparative Education Review (University of Chicago Press)",
      year: 2020,
      volume: "Vol. 64(4), p. 642-669",
      authors: ["Carlos Giovanni González Espitia", "Natalia Solano", "Hector Ochoa"],
      area: "education",
      ranking: "Q1",
      url: "https://doi.org/10.1086/710769",
      doi: "10.1086/710769",
      abstract: "Estimates the effects of economic activity on the quality of education in various regions of Colombia using spatial regression models and dynamic panel data with instrumental variables, utilizing satellite nighttime lights and electricity consumption as exogenous proxies for municipal GDP.",
      researchQuestion: "¿En qué medida la concentración de actividad económica local y vecina incide en los resultados estandarizados de calidad educativa?",
      methodology: "Modelos espaciales dinámicos de panel con variables instrumentales (consumo de energía eléctrica y luminosidad nocturna satelital DMSP/OLS) para corregir endogeneidad del producto municipal.",
      dataSources: ["ICFES - Resultados Saber 11 a nivel municipal", "NOAA/NASA - Datos satelitales de luminosidad nocturna", "DANE - Cuentas económicas municipales"],
      findings: [
        "Existe un efecto dinámico positivo de la actividad económica local sobre el desempeño promedio en las pruebas estandarizadas de educación secundaria.",
        "Los derrames espaciales económicos de municipios circundantes son clave: municipios con vecinos más dinámicos exhiben mayor desempeño escolar.",
        "La infraestructura educativa y la cualificación docente median una proporción sustancial de este impacto."
      ],
      bibtex: `@article{gonzalez_spatial_education_2020,
  title = {Understanding the Spatial and Dynamic Effect of Economic Activity on the Quality of Education: Evidence from Colombia},
  author = {González Espitia, Carlos Giovanni and Solano, Natalia and Ochoa, Hector},
  journal = {Comparative Education Review},
  volume = {64},
  number = {4},
  pages = {642--669},
  year = {2020},
  doi = {10.1086/710769},
  url = {https://doi.org/10.1086/710769}
}`
    },
    {
      id: "entrepreneurs-growth-generations-2023",
      title: "Determinants of the Growth Aspiration of Colombian Entrepreneurs: The Role of Some Generations, Baby Boomers, Generation X and Millennials",
      journal: "Journal of Quantitative Methods for Economics and Business Administration",
      year: 2023,
      volume: "Vol. 35, p. 223-249",
      authors: ["Carlos Giovanni González Espitia"],
      area: "entrepreneurship",
      ranking: "Q4",
      url: "https://doi.org/10.46661/rev.metodoscuant.econ.empresa.6128",
      doi: "10.46661/rev.metodoscuant.econ.empresa.6128",
      abstract: "Estimates the probability of growth aspirations of Colombian entrepreneurs according to the generation in which they were born using Global Entrepreneurship Monitor (GEM) data between 2006 and 2017. Based on a sample of 6,670 individuals, three ordinal logistic regression models were estimated.",
      researchQuestion: "¿Cómo influye la cohorte generacional en las expectativas y aspiraciones de creación de empleo de los emprendedores en Colombia?",
      methodology: "Modelos logísticos ordinales estimados sobre microdatos agrupados de corte transversal del GEM Colombia (6.670 observaciones individuales).",
      dataSources: ["Global Entrepreneurship Monitor (GEM) Colombia (2006-2017)", "Indicadores sociodemográficos individuales"],
      findings: [
        "Los emprendedores de la Generación X y Millennials presentan probabilidades significativamente mayores de proyectar creación de más de 5 y 20 empleos en el mediano plazo en comparación con Baby Boomers.",
        "El nivel educativo y el tamaño de la red de contactos profesionales potencian las aspiraciones independientemente de la edad.",
        "El miedo al fracaso reduce sustancialmente el umbral de expansión comercial en fases tempranas."
      ],
      bibtex: `@article{gonzalez_entrepreneurs_2023,
  title = {Determinants of the Growth Aspiration of Colombian Entrepreneurs: The Role of Some Generations, Baby Boomers, Generation X and Millennials},
  author = {González Espitia, Carlos Giovanni},
  journal = {Revista de Métodos Cuantitativos para la Economía y la Empresa},
  volume = {35},
  pages = {223--249},
  year = {2023},
  doi = {10.46661/rev.metodoscuant.econ.empresa.6128},
  url = {https://doi.org/10.46661/rev.metodoscuant.econ.empresa.6128}
}`
    },
    {
      id: "informalidad-laboral-cali-2022",
      title: "Informalidad Laboral y Homicidios en Cali, una Ciudad de Alta Violencia",
      journal: "Revista de Economía Institucional",
      year: 2022,
      volume: "Vol. 24(46), p. 217-236",
      authors: ["Carlos Giovanni González Espitia", "Magaly Herrera"],
      area: "crime",
      ranking: "Q4",
      url: "https://doi.org/10.18601/01245996.v24n46.10",
      doi: "10.18601/01245996.v24n46.10",
      abstract: "En este artículo se estima el efecto de la informalidad laboral en los homicidios en Cali, mediante un análisis econométrico que usa variables instrumentales. Los resultados muestran un efecto positivo de la informalidad laboral sobre los homicidios: un aumento de 1 punto porcentual en la tasa de informalidad aumenta los homicidios en un 4,2%.",
      researchQuestion: "¿Cuál es el impacto causal de la tasa de informalidad en los niveles de homicidios barriales de Cali al corregir por simultaneidad?",
      methodology: "Estimación por variables instrumentales (2SLS) en corte transversal a nivel de barrio, utilizando como instrumentos las características sociodemográficas del hogar y el acceso a servicios públicos.",
      dataSources: ["Registros policiales de muertes violentas", "Censo de Población DANE", "Encuesta de Informalidad Urbana en Cali"],
      findings: [
        "Al corregir la endogeneidad mediante variables instrumentales, un aumento de 1 punto porcentual en la informalidad laboral barrial genera un incremento del 4,2% en la tasa de homicidios.",
        "La precariedad en ingresos y la falta de cobertura de seguridad social aumentan el costo de oportunidad relativo frente a actividades ilícitas urbanas.",
        "Las políticas de empleo formal deben concebirse como instrumentos de prevención de la violencia letal."
      ],
      bibtex: `@article{gonzalez_informalidad_2022,
  title = {Informalidad Laboral y Homicidios en Cali, una Ciudad de Alta Violencia},
  author = {González Espitia, Carlos Giovanni and Herrera, Magaly},
  journal = {Revista de Economía Institucional},
  volume = {24},
  number = {46},
  pages = {217--236},
  year = {2022},
  doi = {10.18601/01245996.v24n46.10},
  url = {https://doi.org/10.18601/01245996.v24n46.10}
}`
    }
  ] as Publication[],

  workingPapers: [
    {
      id: "wp-private-returns-2024",
      title: "The Private Returns to Education in a Developing Country: Recent and Heterogeneous Evidence from Colombia, 2008-2021",
      authors: ["Carlos Giovanni González Espitia", "Gustavo González", "Valentina Perdomo"],
      year: 2024,
      category: "NEW",
      status: "Enviado a revista indexada",
      area: "Economía de la Educación",
      abstract: "Estimación de retornos salariales a la educación técnica, tecnológica y universitaria en Colombia a partir de ecuaciones de Mincer corregidas por sesgo de selección con microdatos de la GEIH 2008-2021."
    },
    {
      id: "wp-narcotrafico-paz-2024",
      title: "Effects of Drug Trafficking and Peace Agreements on Criminal Activity in Colombia",
      authors: ["Carlos Giovanni González Espitia", "Magaly Herrera"],
      year: 2024,
      category: "NEW",
      status: "Enviado / En evaluación",
      area: "Economía del Crimen",
      abstract: "Evaluación de impacto en diferencias en diferencias de la implementación del acuerdo de paz en municipios con presencia histórica de cultivos ilícitos y dinámicas de violencia urbana derivada."
    },
    {
      id: "wp-financiacion-demanda-2023",
      title: "Heterogeneous Effects of Public Financing of Education on the Demand for Private Higher Education: Evidence from Colombia",
      authors: ["Carlos Giovanni González Espitia"],
      year: 2023,
      category: "REVISED",
      status: "Revisión y Reenvío (R&R)",
      area: "Economía de la Educación",
      abstract: "Análisis cuasiexperimental sobre cómo programas de becas y créditos contingentes modifican la elección institucional de estudiantes talentosos de bajos ingresos."
    },
    {
      id: "wp-meritocracia-pilo-2023",
      title: "Meritocracy in a Financing Program for the Demand for Higher Education in Colombia: Who Were the Ser Pilo Paga?",
      authors: ["Carlos Giovanni González Espitia"],
      year: 2023,
      category: "IN PROGRESS",
      status: "En desarrollo",
      area: "Economía de la Educación",
      abstract: "Caracterización socioeconómica y académica de los beneficiarios del programa Ser Pilo Paga y su desempeño acumulado en el examen Saber Pro."
    }
  ] as WorkingPaper[],

  courses: [
    {
      code: "ECON-301",
      name: {
        es: "Econometría",
        en: "Econometrics"
      },
      level: "undergraduate",
      degree: {
        es: "Pregrado en Economía / Finanzas",
        en: "B.S. in Economics & Finance"
      },
      semester: {
        es: "Semestral (I y II Semestre)",
        en: "Semester-based (Semesters I & II)"
      },
      description: {
        es: "Fundamentos teóricos y aplicados del modelo de regresión lineal clásico, inferencia estadística, violación de supuestos (heterocedasticidad, autocorrelación, endogeneidad) y métodos de variables instrumentales.",
        en: "Theoretical and applied foundations of the classical linear regression model, statistical inference, violation of assumptions (heteroskedasticity, autocorrelation, endogeneity), and instrumental variables methods."
      },
      objectives: {
        es: [
          "Deducir analíticamente las propiedades del estimador MCO bajo el Teorema de Gauss-Markov.",
          "Detectar y corregir heterocedasticidad mediante estimadores de White y Newey-West.",
          "Implementar estimación por variables instrumentales (2SLS) ante presencia de endogeneidad.",
          "Elaborar informes de investigación empírica con microdatos reales en Stata y R."
        ],
        en: [
          "Analytically derive OLS estimator properties under the Gauss-Markov Theorem.",
          "Detect and correct heteroskedasticity using White and Newey-West robust estimators.",
          "Implement instrumental variables estimation (2SLS) in the presence of endogeneity.",
          "Produce empirical research reports using real-world microdata in Stata and R."
        ]
      },
      software: ["Stata 18", "RStudio / Quarto"],
      datasets: {
        es: ["GEIH DANE (Mercado Laboral)", "Saber Pro ICFES (Educación)", "Series Macro BanRep"],
        en: ["GEIH DANE (Labor Market)", "Saber Pro ICFES (Education)", "BanRep Macro Series"]
      },
      topics: {
        es: [
          "Modelo de Regresión Lineal Múltiple",
          "Propiedades del estimador MCO",
          "Pruebas de hipótesis e inferencia",
          "Diagnósticos de heterocedasticidad y multicolinealidad",
          "Endogeneidad y Variables Instrumentales (2SLS)"
        ],
        en: [
          "Multiple Linear Regression Model",
          "Properties of the OLS Estimator",
          "Hypothesis Testing and Statistical Inference",
          "Heteroskedasticity & Multicollinearity Diagnostics",
          "Endogeneity and Instrumental Variables (2SLS)"
        ]
      }
    },
    {
      code: "ECON-401",
      name: {
        es: "Econometría II",
        en: "Advanced Econometrics II"
      },
      level: "undergraduate",
      degree: {
        es: "Pregrado en Economía",
        en: "B.S. in Economics"
      },
      semester: {
        es: "Semestral",
        en: "Semester-based"
      },
      description: {
        es: "Cátedra avanzada de modelos para variables cualitativas y dependientes limitadas, series de tiempo macroeconómicas y datos de panel con aplicaciones empíricas en Colombia.",
        en: "Advanced course covering qualitative and limited dependent variable models, macroeconomic time series, and panel data with empirical applications to Colombia."
      },
      objectives: {
        es: [
          "Estimar e interpretar modelos de elección discreta binaria y multinomial (Logit, Probit).",
          "Aplicar corrección de sesgo de selección muestral (metodología Heckman en dos etapas).",
          "Modelar procesos estocásticos no estacionarios, pruebas de raíz unitaria y cointegración.",
          "Estimar modelos de datos de panel estáticos (Efectos Fijos/Aleatorios) y dinámicos (GMM)."
        ],
        en: [
          "Estimate and interpret binary and multinomial discrete choice models (Logit, Probit).",
          "Apply sample selection bias correction (Heckman two-step methodology).",
          "Model non-stationary stochastic processes, unit root testing, and cointegration.",
          "Estimate static panel data models (Fixed/Random Effects) and dynamic panels (GMM)."
        ]
      },
      software: ["Stata 18", "R (paquetes plm, urca, vars)"],
      datasets: {
        es: ["Encuesta de Calidad de Vida (ECV)", "GEIH Longitudinal", "Series Financieras BanRep"],
        en: ["Living Standards Survey (ECV)", "Longitudinal GEIH", "BanRep Financial Series"]
      },
      topics: {
        es: [
          "Modelos de Elección Discreta (Logit / Probit)",
          "Modelos de Selección Muestral (Heckman)",
          "Series de Tiempo Univariadas (ARIMA) y Multivariadas (VAR)",
          "Datos de Panel Estáticos y Dinámicos"
        ],
        en: [
          "Discrete Choice Models (Logit / Probit)",
          "Sample Selection Models (Heckman)",
          "Univariate (ARIMA) and Multivariate (VAR) Time Series",
          "Static and Dynamic Panel Data"
        ]
      }
    },
    {
      code: "ECON-302",
      name: {
        es: "Teoría Macroeconómica II",
        en: "Macroeconomic Theory II"
      },
      level: "undergraduate",
      degree: {
        es: "Pregrado en Economía",
        en: "B.S. in Economics"
      },
      semester: {
        es: "Semestral",
        en: "Semester-based"
      },
      description: {
        es: "Estudio de las teorías de crecimiento económico de largo plazo, fundamentos microeconómicos del consumo y la inversión, y fluctuaciones cíclicas en economías abiertas.",
        en: "Study of long-run economic growth theories, microeconomic foundations of consumption and investment, and cyclical fluctuations in open economies."
      },
      objectives: {
        es: [
          "Resolver analíticamente el modelo neoclásico de Solow-Swan y evaluar convergencia.",
          "Modelar decisiones intertemporales de consumo (hipótesis del ingreso permanente).",
          "Analizar los mecanismos de transmisión de la política fiscal y monetaria en economía abierta."
        ],
        en: [
          "Analytically solve the neoclassical Solow-Swan model and evaluate empirical convergence.",
          "Model intertemporal consumption decisions (permanent income hypothesis).",
          "Analyze transmission mechanisms of fiscal and monetary policy in an open economy."
        ]
      },
      software: ["R (Visualización de Series)", "Excel Financiero"],
      datasets: {
        es: ["FRED Federal Reserve", "Banco de la República de Colombia", "Penn World Table"],
        en: ["FRED Federal Reserve", "Central Bank of Colombia", "Penn World Table"]
      },
      topics: {
        es: [
          "Modelo de Solow-Swan y Convergencia",
          "Modelos de Crecimiento Endógeno (AK, R&D)",
          "Microfundamentos del Consumo y de la Inversión",
          "Modelo Mundell-Fleming en Economía Abierta"
        ],
        en: [
          "Solow-Swan Model and Convergence",
          "Endogenous Growth Models (AK, R&D)",
          "Microeconomic Foundations of Consumption and Investment",
          "Mundell-Fleming Model in Open Economies"
        ]
      }
    },
    {
      code: "MBA-602",
      name: {
        es: "Entorno Económico de los Negocios",
        en: "Economic Environment of Business"
      },
      level: "graduate",
      degree: {
        es: "Maestría en Administración de Empresas (MBA)",
        en: "Master of Business Administration (MBA)"
      },
      semester: {
        es: "Anual",
        en: "Annual"
      },
      description: {
        es: "Análisis aplicado de variables macroeconómicas globales y locales, política monetaria, régimen cambiario y ciclos productivos para la toma de decisiones gerenciales en América Latina.",
        en: "Applied analysis of global and local macroeconomic indicators, monetary policy, exchange rate regimes, and business cycles for executive decision-making in Latin America."
      },
      objectives: {
        es: [
          "Interpretar informes de inflación, tasas de interés de bancos centrales y cuentas nacionales.",
          "Evaluar el impacto de choques externos y términos de intercambio en la rentabilidad empresarial.",
          "Formular estrategias de cobertura cambiaria y planeación financiera de mediano plazo."
        ],
        en: [
          "Interpret central bank inflation reports, policy interest rates, and national accounts.",
          "Evaluate the impact of external shocks and terms of trade on business profitability.",
          "Formulate foreign exchange hedging strategies and medium-term corporate financial plans."
        ]
      },
      software: ["Stata", "Plataformas de Datos Macroeconómicos"],
      datasets: {
        es: ["Estadísticas del Banco de la República", "World Economic Outlook (FMI)", "DANE"],
        en: ["Central Bank of Colombia Statistics", "IMF World Economic Outlook", "DANE"]
      },
      topics: {
        es: [
          "Ciclos Macroeconómicos e Indicadores Líderes",
          "Política Monetaria y Tasas de Interés",
          "Mercado Cambiario y Balanza de Pagos",
          "Toma de Decisiones Estratégicas ante Escenarios Macroeconómicos"
        ],
        en: [
          "Macroeconomic Cycles and Leading Indicators",
          "Monetary Policy and Interest Rates",
          "Foreign Exchange Market and Balance of Payments",
          "Strategic Decision-Making Under Macroeconomic Scenarios"
        ]
      }
    },
    {
      code: "DOC-801",
      name: {
        es: "Econometría Aplicada a la Investigación de Negocios",
        en: "Applied Econometrics for Business Research"
      },
      level: "graduate",
      degree: {
        es: "Doctorado en Economía de los Negocios",
        en: "Ph.D. in Business Economics"
      },
      semester: {
        es: "Semestral",
        en: "Semester-based"
      },
      description: {
        es: "Seminario doctoral metodológico para la formulación, diseño muestral y estimación rigurosa de tesis empíricas en economía aplicada y finanzas corporativas.",
        en: "Doctoral methodological seminar for the formulation, sampling design, and rigorous estimation of empirical dissertations in applied economics and corporate finance."
      },
      objectives: {
        es: [
          "Estructurar estrategias de identificación causal creíbles con datos observacionales.",
          "Dominar técnicas avanzadas de econometría espacial y modelos lineales generalizados.",
          "Redactar artículos científicos conforme a los estándares de journals Q1/Q2."
        ],
        en: [
          "Structure credible causal identification strategies with observational data.",
          "Master advanced spatial econometrics techniques and generalized linear models.",
          "Author scientific papers adhering to international Q1/Q2 journal standards."
        ]
      },
      software: ["R (spatialreg, sf, fixest)", "Stata 18"],
      datasets: {
        es: ["Microdatos administrativos colombianos", "Bases de Tesis Doctorales Icesi"],
        en: ["Colombian administrative microdata", "Icesi Doctoral Dissertation Repositories"]
      },
      topics: {
        es: [
          "Inferencia Causal y Métodos Cuasiexperimentales",
          "Econometría Espacial Aplicada",
          "Datos de Panel con Efectos Fijos Multidireccionales",
          "Replicación y Transparencia Científica"
        ],
        en: [
          "Causal Inference and Quasi-Experimental Methods",
          "Applied Spatial Econometrics",
          "Panel Data with High-Dimensional Fixed Effects",
          "Scientific Replication and Open Research Practices"
        ]
      }
    }
  ] as Course[],

  supervisedStudents: [
    {
      name: "Magaly Herrera",
      degree: "Doctorado en Economía de los Negocios",
      institution: "Universidad Icesi",
      year: 2021,
      role: "Director de Tesis Doctoral",
      thesis: "Ensayos sobre Economía del Crimen e Informalidad Laboral en Cali"
    },
    {
      name: "Gustavo Junca",
      degree: "Doctorado en Economía",
      institution: "Universidad Nacional de Colombia",
      year: 2019,
      role: "Miembro del Jurado de Tesis Doctoral",
      thesis: "Evaluación de políticas públicas en educación superior y retornos salariales en Colombia"
    },
    {
      name: "Natalia Solano",
      degree: "Maestría en Economía",
      institution: "Universidad Icesi",
      year: 2020,
      role: "Director de Tesis",
      thesis: "Efectos espaciales de la actividad económica sobre la calidad de la educación en Colombia"
    },
    {
      name: "Gustavo González & Valentina Perdomo",
      degree: "Pregrado en Economía",
      institution: "Universidad Icesi",
      year: 2022,
      role: "Director de Monografía",
      thesis: "Retornos privados a la educación en Colombia: Evidencia heterogénea 2008-2021"
    },
    {
      name: "Laura Gómez",
      degree: "Maestría en Finanzas",
      institution: "Universidad Icesi",
      year: 2023,
      role: "Director de Trabajo de Grado",
      thesis: "Determinantes de la rentabilidad y estructura de capital en empresas del Valle del Cauca"
    },
    {
      name: "David Morales",
      degree: "Pregrado en Economía",
      institution: "Universidad Icesi",
      year: 2023,
      role: "Director de Monografía",
      thesis: "Evaluación del impacto del programa de gratuidad universitaria en instituciones acreditadas"
    }
  ] as SupervisedStudent[],

  book: {
    title: "Macroeconomía para la gerencia latinoamericana",
    edition: "2.ª Edición (2022) / 1.ª Edición (2017)",
    year: 2022,
    publisher: "Ecoe Ediciones, Bogotá, Colombia",
    isbn: "978-958-503-348-1",
    authors: ["Carlos Giovanni González Espitia", "Héctor Ochoa"],
    description: {
      es: "Texto guía adoptado en programas de pregrado, posgrado y MBA en universidades de América Latina. Desarrolla de manera didáctica y rigurosa la teoría macroeconómica moderna adaptada al contexto de economías emergentes de la región andina y latinoamericana.",
      en: "Standard textbook adopted across undergraduate, graduate, and MBA programs in Latin American universities. Rigorously presents modern macroeconomic theory tailored to the emerging economies of Latin America and the Andean region."
    },
    link: "https://www.ecoeediciones.com/libros/macroeconomia-para-la-gerencia-latinoamericana-2da-edicion-impreso/"
  } as Book,

  careerMilestones: [
    {
      year: "2022 - Presente",
      role: {
        es: "Profesor Titular de Economía (Full Professor)",
        en: "Full Professor of Economics"
      },
      institution: "Universidad Icesi",
      location: "Cali, Colombia",
      type: "position"
    },
    {
      year: "2016 - 2021",
      role: {
        es: "Profesor Asociado",
        en: "Associate Professor"
      },
      institution: "Universidad Icesi",
      location: "Cali, Colombia",
      type: "position"
    },
    {
      year: "2011",
      role: {
        es: "Ph.D. in Economics (Doctor en Economía)",
        en: "Ph.D. in Economics"
      },
      institution: "Universidad de Alcalá",
      location: "Madrid, España",
      type: "education"
    },
    {
      year: "2009 - 2015",
      role: {
        es: "Profesor Asistente de Economía",
        en: "Assistant Professor of Economics"
      },
      institution: "Universidad Icesi",
      location: "Cali, Colombia",
      type: "position"
    },
    {
      year: "2008 - 2009",
      role: {
        es: "Profesor Asistente",
        en: "Assistant Professor"
      },
      institution: "Universidad Europea de Madrid",
      location: "Madrid, España",
      type: "position"
    },
    {
      year: "2006",
      role: {
        es: "M.A. in Economics (Diploma de Estudios Avanzados)",
        en: "M.A. in Economics (Advanced Studies Diploma)"
      },
      institution: "Universidad de Alcalá",
      location: "Madrid, España",
      type: "education"
    },
    {
      year: "2002",
      role: {
        es: "Economista (Grado Profesional con Distinción)",
        en: "B.S. in Economics (Graduated with Honors)"
      },
      institution: "Universidad Autónoma de Occidente",
      location: "Cali, Colombia",
      type: "education"
    }
  ] as CareerMilestone[],

  academicProfiles: [
    {
      name: "IDEAS / RePEc",
      platform: "Research Papers in Economics",
      badge: {
        es: "Top 100 Investigadores Colombia",
        en: "Top 100 Economists Colombia"
      },
      url: "https://ideas.repec.org/f/pgo316.html",
      description: {
        es: "Registro bibliográfico integral, working papers y ranking nacional según citas bibliométricas y descargas acumuladas.",
        en: "Comprehensive bibliographic records, working papers, and national ranking based on citations and downloads."
      }
    },
    {
      name: "Google Scholar",
      platform: "Citas Académicas & H-Index",
      badge: {
        es: "Citas Verificadas",
        en: "Verified Citations"
      },
      url: "https://scholar.google.com.co/citations?user=vdbPZNkAAAAJ&hl=en",
      description: {
        es: "Catálogo de citaciones, índice h e índice i10 de artículos científicos en revistas arbitradas por pares.",
        en: "Citation metrics, h-index, and i10-index of peer-reviewed journal articles."
      }
    },
    {
      name: "Icesi Research Portal",
      platform: "Universidad Icesi",
      badge: {
        es: "Registro Institucional",
        en: "Institutional Registry"
      },
      url: "https://icesi.portalinvestigacion.com/investigadores/1742",
      description: {
        es: "Registro oficial de producción científica, 42 tesis dirigidas y proyectos de investigación adscritos al grupo A1.",
        en: "Official university research registry, 42 supervised theses, and A1 category research group projects."
      }
    },
    {
      name: "CvLAC MinCiencias",
      platform: "Ministerio de Ciencia, Tecnología e Innovación",
      badge: {
        es: "Investigador Asociado",
        en: "Associate Researcher"
      },
      url: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000180629",
      description: {
        es: "Currículum oficial avalado en el Sistema Nacional de Ciencia, Tecnología e Innovación de Colombia.",
        en: "Official verified curriculum in Colombia's National Science, Technology, and Innovation System."
      }
    },
    {
      name: "Red de Investigadores BanRep",
      platform: "Banco de la República de Colombia",
      badge: {
        es: "Red de Investigadores",
        en: "Central Bank Network"
      },
      url: "https://www.redinvestigadores.org/display/pgo316",
      description: {
        es: "Perfil en la red nacional de investigadores en macroeconomía, banca central y economía aplicada.",
        en: "Profile in the Colombian central bank's network for macroeconomics and applied economics."
      }
    },
    {
      name: "LinkedIn Oficial",
      platform: "Red Profesional",
      badge: {
        es: "Contacto Académico",
        en: "Academic Contact"
      },
      url: "https://www.linkedin.com/in/carlos-giovanni-gonzalez-espitia/",
      description: {
        es: "Red profesional para vinculaciones académicas, seminarios de investigación y contacto institucional.",
        en: "Professional network for academic collaborations, research seminars, and institutional inquiries."
      }
    }
  ] as AcademicProfile[],

  latestUpdates: [
    {
      date: {
        es: "Septiembre 2024",
        en: "September 2024"
      },
      title: {
        es: "Nuevo Working Paper en Economía de la Educación",
        en: "New Working Paper in Economics of Education"
      },
      description: {
        es: "Finalizado el manuscrito sobre retornos privados a la educación heterogéneos en Colombia (2008-2021) en coautoría con egresados Icesi.",
        en: "Manuscript completed on heterogeneous private returns to education in Colombia (2008-2021) co-authored with Icesi alumni."
      }
    },
    {
      date: {
        es: "Agosto 2024",
        en: "August 2024"
      },
      title: {
        es: "Seminario de Investigación y Cátedras 2024-2",
        en: "Research Seminar and 2024-2 Courses"
      },
      description: {
        es: "Inicio de los laboratorios de Econometría y Macroeconomía con microdatos de la GEIH y series del Banco de la República.",
        en: "Commencement of Econometrics and Macroeconomics labs utilizing GEIH microdata and Banco de la República time series."
      }
    },
    {
      date: {
        es: "Julio 2024",
        en: "July 2024"
      },
      title: {
        es: "Asesoría de Tesis Doctorales",
        en: "Doctoral Dissertation Advising"
      },
      description: {
        es: "Avance de defensas de propuesta en el Doctorado en Economía de los Negocios sobre economía urbana y crimen.",
        en: "Proposal defense milestones in the Ph.D. in Business Economics program covering urban economics and crime."
      }
    }
  ],

  econometricsWithR: {
    title: {
      es: "Econometría con R & Laboratorio Computacional",
      en: "Econometrics with R & Computational Lab"
    },
    intro: {
      es: "Espacio dedicado a la democratización del aprendizaje de la econometría moderna usando R, RStudio y Quarto/RMarkdown con enfoque replicable y código abierto.",
      en: "Platform dedicated to the democratization of modern econometrics education using R, RStudio, and Quarto/RMarkdown with open-source and reproducible practices."
    },
    resources: [
      {
        title: {
          es: "Introducción a R para Economistas",
          en: "Introduction to R for Economists"
        },
        desc: {
          es: "Manejo de estructuras de datos (data frames, tibbles, vectores), manipulación con tidyverse (dplyr, tidyr) y visualización con ggplot2.",
          en: "Data structures management (data frames, tibbles, vectors), wrangling with tidyverse (dplyr, tidyr), and visualization with ggplot2."
        },
        tools: ["R", "RStudio", "tidyverse"]
      },
      {
        title: {
          es: "Regresión Lineal y Diagnósticos en R",
          en: "Linear Regression & Diagnostics in R"
        },
        desc: {
          es: "Estimación con lm(), pruebas de heterocedasticidad (bptest), autocorrelación (dwtest) y errores estándar robustos (sandwich, lmtest).",
          en: "Estimation using lm(), heteroskedasticity testing (bptest), autocorrelation (dwtest), and robust standard errors (sandwich, lmtest)."
        },
        tools: ["lmtest", "sandwich", "stargazer"]
      },
      {
        title: {
          es: "Econometría Espacial en R",
          en: "Spatial Econometrics in R"
        },
        desc: {
          es: "Matrices de contigüidad espacial, I de Moran, estimación de modelos SAR, SEM y Spatial Durbin con sf y spatialreg.",
          en: "Spatial contiguity matrices, Moran's I, estimation of SAR, SEM, and Spatial Durbin models with sf and spatialreg."
        },
        tools: ["spatialreg", "sf", "spdep"]
      },
      {
        title: {
          es: "Modelos de Panel y Variables Instrumentales",
          en: "Panel Data Models & Instrumental Variables"
        },
        desc: {
          es: "Estimación con plm y AER (ivreg), pruebas de Hausman y estimación 2SLS.",
          en: "Panel estimation with plm and AER (ivreg), Hausman specification tests, and 2SLS estimation."
        },
        tools: ["plm", "AER"]
      }
    ]
  }
} as const;

export type PortfolioData = typeof portfolioData;
