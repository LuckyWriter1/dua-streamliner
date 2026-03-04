# DUA Streamliner

**Sistema Inteligente para la Generación Automatizada del Documento Único Aduanero**

> Eliminando el trabajo operativo manual en la elaboración del DUA mediante extracción semántica, OCR avanzado e inteligencia artificial.

---

## Autores

| Nombre |  Carnet  |             Institución            |
|--------|----------|------------------------------------|
|Santiago|2024156530|Instituto Tecnológico de Costa Rica |
|Ignacio |2024163735|Instituto Tecnológico de Costa Rica |


**Curso:** Diseño de Software — Ingeniería en Computación  
**Profesor:** Rodrigo nuñez
**Fecha de inicio:** Marzo 2026
**Repositorio: https://github.com/LuckyWriter1/dua-streamliner.git ** 

---

## Tabla de Contenidos

1. [El Problema](#-el-problema)
2. [La Solución](#-la-solución)
3. [Contexto: ¿Qué es el DUA?](#-contexto-qué-es-el-dua)
4. [Procedimientos de Importación y Exportación](#-procedimientos-de-importación-y-exportación)
5. [Documentos Fuente del DUA](#-documentos-fuente-del-dua)
6. [Flujo de Procesamiento Inteligente](#-flujo-de-procesamiento-inteligente)
7. [Soluciones Similares — Benchmarking Tecnológico](#-soluciones-similares--benchmarking-tecnológico)
8. [1. Frontend](#1-frontend)
9. [Referencias](#-referencias)

---

## El Problema

El Documento Único Aduanero (DUA) es el instrumento oficial que consolida la información necesaria para declarar mercancías ante la autoridad aduanera costarricense (Ministerio de Hacienda / Sistema TICA). Su elaboración correcta requiere:

- **Interpretar múltiples documentos fuente** de distintos proveedores y agentes (facturas, packing lists, conocimientos de embarque, certificados de origen, pólizas, permisos especiales).
- **Manejar formatos heterogéneos**: Excel, Word, PDF, imágenes escaneadas — cada empresa usa estructuras distintas.
- **Conocimiento experto** sobre terminología aduanera, incoterms, régimen arancelario, clasificación SAC (Sistema Arancelario Centroamericano) y regulaciones del TICA.
- **Alta propensión al error**: un dato incorrecto en la partida arancelaria, el valor FOB/CIF, o el régimen puede resultar en retrasos costosos, multas o rechazo completo de la declaración.

Este proceso es **100% manual, repetitivo y altamente especializado**, convirtiendo a cada agente aduanero en un cuello de botella operativo.

---

## La Solución

**DUA Streamliner** automatiza el pipeline completo de elaboración del DUA:

```
Carpeta con documentos heterogéneos
    ↓
Lectura multiformato (PDF, Excel, Word, Imágenes)
    ↓
OCR avanzado para documentos escaneados
    ↓
Extracción semántica con embeddings + LLM
    ↓
Mapeo automático al template oficial del DUA
    ↓
Documento Word prellenado con indicadores de confianza
    ↓
Agente aduanero como validador estratégico
```

**El objetivo no es reemplazar al experto aduanero — es convertirlo en validador estratégico**, eliminando el trabajo operativo manual y permitiéndole enfocarse en decisiones de alto valor.

---

## Contexto: ¿Qué es el DUA?

El **Documento Único Aduanero** es la declaración oficial que debe presentarse ante las autoridades aduaneras para declarar mercancías en procesos de importación, exportación o tránsito. En Costa Rica, su estructura está definida por la Dirección General de Aduanas y opera a través del sistema **TICA** (Tecnología de Información para el Control Aduanero).

### Estructura del DUA (Costa Rica — Versión 3.17)

El DUA se organiza en **bloques de datos** transmitidos en formato XML al sistema TICA:

| Bloque | Código | Descripción |
|--------|--------|-------------|
| Encabezado del declarante | `IMPHDR00` | Casillero, identificación del agente aduanero |
| Encabezado del DUA | `IMPHDR01` | Datos generales: valores, importador, totales |
| Datos del importador/exportador | `IMPHDR02` | Identificación, nivel comercial, dirección |
| Datos del proveedor | `IMPHDR03` | Razón social, país, dirección del vendedor |
| Transporte | `IMPHDR04` | Medio, empresa, número de viaje, ruta |
| Facturas | `IMPHDR05` | Número, fecha, moneda, valor FOB/CIF |
| Documentos soporte | `IMPHDR06` | Certificados, permisos, pólizas |
| Líneas de mercancía | `IMPHDR07` | Partida arancelaria SAC, descripción, cantidad, peso |
| Tributos | `IMPHDR08` | DAI, IVA, selectivo de consumo, otros |
| Garantías | `IMPHDR09` | Tipo y monto de garantía |

### Campos críticos del DUA

- **Régimen aduanero**: Importación definitiva (40), exportación (70), tránsito, zona franca, perfeccionamiento activo
- **Partida arancelaria SAC**: Clasificación de 10 dígitos según el Sistema Arancelario Centroamericano
- **Valor aduanero**: Base imponible calculada según método de valoración aduanera (GATT/OMC)
- **Incoterms**: FOB, CIF, EXW, etc. — determina qué costos incluir
- **País de origen y procedencia**: Puede afectar aranceles preferenciales (TLCs)
- **Obligación tributaria**: DAI + IVA + impuestos específicos + contribuciones (PROCOMER, Archivos Nacionales, etc.)

---

## Procedimientos de Importación y Exportación

### Proceso de Importación en Costa Rica

```
1. PREVIO AL ARRIBO
   └─ Agente prepara DUA anticipado (pre-despacho)
   └─ Transmisión electrónica al TICA (formato XML)
   └─ TICA asigna número de DUA

2. ARRIBO DE LA MERCANCÍA
   └─ Presentación en aduana de ingreso
   └─ Registro en manifiesto de carga
   └─ Traslado a depósito aduanero fiscal

3. DESPACHO ADUANERO
   └─ TICA asigna canal: Verde (automático), Naranja (documental), Rojo (físico)
   └─ Canal Verde: levante automático
   └─ Canal Naranja: revisión de documentos físicos
   └─ Canal Rojo: inspección física de mercancías

4. LIQUIDACIÓN Y PAGO
   └─ Cálculo de obligación tributaria (DAI + IVA + otros)
   └─ Pago electrónico vía SINPE
   └─ Timbres: Archivos Nacionales, Asociación de Agentes, Colegio Contadores

5. LEVANTE
   └─ Autorización de retiro de mercancía
   └─ Entrega al consignatario
```

### Proceso de Exportación en Costa Rica

```
1. PREPARACIÓN
   └─ Agente prepara DUA de exportación (régimen 70)
   └─ Documentos fuente: factura comercial, packing list, certificado de origen

2. TRANSMISIÓN AL TICA
   └─ Envío de DUA en formato XML al sistema
   └─ Validación automática del TICA

3. AUTORIZACIÓN DE EMBARQUE
   └─ Canal de control (documental o físico)
   └─ Inspección si corresponde

4. EMBARQUE Y CIERRE
   └─ Embarque de mercancía
   └─ Cierre del DUA con número de conocimiento de embarque
```

### Documentos que requiere el sistema TICA

Para **importación definitiva**:
- Factura comercial (obligatoria)
- Declaración del Valor en Aduana (DVA) si valor > USD 1,000
- Conocimiento de embarque (B/L, AWB, CRT según medio)
- Póliza de seguro
- Certificado de origen (si aplica preferencia arancelaria)
- Permisos especiales (SENASA, MEIC, COMEX, según mercancía)

---

## Documentos Fuente del DUA

### Tipos de documentos que procesa DUA Streamliner

| Documento | Formato típico | Información extraída |
|-----------|---------------|---------------------|
| Factura comercial | PDF, Word, imagen | Proveedor, descripción, cantidades, valores, incoterm, moneda |
| Packing list | Excel, PDF | Pesos bruto/neto, dimensiones, número de bultos, descripción por ítem |
| Conocimiento de embarque (B/L) | PDF | Datos de transporte, puertos, naviera, número de contenedor |
| Certificado de origen | PDF, imagen | País de origen, criterio de calificación |
| Póliza de seguro | PDF | Número de póliza, valor asegurado |
| DUA prellenado anterior (plantilla) | Word, PDF | Estructura de referencia, campos y formato |

### Ejemplo de mapeo: Factura → DUA

```
Factura Comercial                    →    DUA (Bloque correspondiente)
─────────────────────────────────────────────────────────────────────
"Seller: ABC Corp, USA"              →    IMPHDR03: Proveedor
"Invoice No: INV-2025-001"           →    IMPHDR05: Número de factura
"Date: 2025-02-15"                   →    IMPHDR05: Fecha de factura
"USD 15,000.00 FOB Miami"            →    IMPHDR05: Valor + Incoterm
"100 units Widget Model X"           →    IMPHDR07: Descripción + cantidad
"HS Code: 8471.30.00"               →    IMPHDR07: Partida arancelaria
"Country of Origin: USA"             →    IMPHDR07: País de origen
```

---

## Flujo de Procesamiento Inteligente

Este flujo adapta la lógica de pipeline del sistema al contexto específico del DUA:

### Paso 1 — Recepción de Inputs
```
Inputs:
  ├── plantilla_dua.docx         (template oficial del DUA prellenado)
  └── carpeta_documentos/
       ├── factura_proveedor.pdf
       ├── packing_list.xlsx
       ├── conocimiento_embarque.pdf
       └── certificado_origen.png
```

### Paso 2 — Clasificación de Archivos
```python
class FileClassifier:
    """Separa archivos por tipo para enrutar al parser correcto."""
    
    def classify(self, folder_path: str) -> FileManifest:
        word_files   = []  # .docx, .doc
        excel_files  = []  # .xlsx, .xls, .csv
        pdf_files    = []  # .pdf
        image_files  = []  # .png, .jpg, .jpeg, .tiff
        
        # Retorna FileManifest con listas clasificadas
```

### Paso 3 — Indexado Semántico del Template DUA
```python
class DUATemplateIndexer:
    """
    Divide la plantilla del DUA en bloques por sección,
    genera embeddings por sección y los guarda en un
    diccionario para comparación posterior.
    """
    
    def index_template(self, template_path: str) -> dict[str, SectionEmbedding]:
        """
        Retorna estructura:
        {
          "IMPHDR01_importador": SectionEmbedding(text, vector, fields),
          "IMPHDR03_proveedor":  SectionEmbedding(text, vector, fields),
          "IMPHDR05_facturas":   SectionEmbedding(text, vector, fields),
          "IMPHDR07_mercancias": SectionEmbedding(text, vector, fields),
          ...
        }
        """
```

**Herramienta clave**: `sentence-transformers` (modelo `paraphrase-multilingual-MiniLM-L12-v2`) para embeddings en español.

### Paso 4 — Parsing de Documentos Word
```python
class WordDocumentParser:
    """
    Divide documentos Word por párrafos/secciones,
    genera embeddings por bloque y compara contra
    secciones del template DUA usando similitud coseno.
    """
    
    def parse_and_match(
        self,
        doc_path: str,
        template_index: dict[str, SectionEmbedding]
    ) -> list[DocumentMatch]:
        """
        Retorna lista de DocumentMatch:
        {
          "dua_section": "IMPHDR03_proveedor",
          "similarity_score": 0.87,
          "source_text": "Seller: ABC Corp, 123 Main St, Miami...",
          "source_document": "factura_proveedor.docx"
        }
        """
```

### Paso 5 — Parsing de Documentos Excel
```python
class ExcelDocumentParser:
    """
    Parsea archivos Excel hoja por hoja y celda a celda.
    Detecta headers automáticamente, une celdas adyacentes
    por contexto y compara bloques tabulares contra el template.
    
    Diferencia clave respecto a Word:
    - Los datos están en celdas, no párrafos
    - Los encabezados de columna son el contexto semántico clave
    - Se serializa cada fila como "encabezado: valor" para embedding
    """
    
    def parse_and_match(
        self,
        excel_path: str,
        template_index: dict[str, SectionEmbedding]
    ) -> list[DocumentMatch]:
        ...
```

### Paso 6 — Selección y Síntesis con LLM
```python
class DUAFieldSynthesizer:
    """
    Para cada sección del DUA:
    1. Toma los 2 DocumentMatch con mayor similitud
    2. Los envía al LLM (Claude claude-sonnet-4-20250514 vía Anthropic API)
    3. El LLM extrae y estructura los campos específicos del DUA
    4. Retorna un ExtractedDUASection con campos, valores y nivel de confianza
    """
    
    CONFIDENCE_LEVELS = {
        "HIGH":   "verde",    # ≥ 0.85 similitud + LLM confirma
        "MEDIUM": "amarillo", # 0.65–0.84 similitud
        "LOW":    "rojo"      # < 0.65 o datos contradictorios
    }
    
    def synthesize_section(
        self,
        dua_section: str,
        top_matches: list[DocumentMatch]
    ) -> ExtractedDUASection:
        """
        Prompt al LLM incluye:
        - Definición oficial del campo DUA
        - Texto fuente de los 2 mejores matches
        - Instrucción de extraer valores estructurados en JSON
        """
```

**API utilizada**: Anthropic (Claude claude-sonnet-4-20250514) — elegido por su superior comprensión de documentos
aduaneros en español y capacidad de razonamiento estructurado.

### Paso 7 — Generación del DUA Prellenado
```python
class DUADocumentGenerator:
    """
    Toma el template oficial del DUA (.docx) y los datos
    extraídos, y genera el documento final prellenado con
    codificación visual de confianza.
    
    Usa python-docx para:
    - Reemplazar placeholders en el template
    - Aplicar colores de fuente por nivel de confianza
    - Agregar comentarios en campos con baja confianza
    - Mantener el formato oficial del Ministerio de Hacienda
    """
    
    COLOR_MAP = {
        "HIGH":   RGBColor(0, 128, 0),    # Verde
        "MEDIUM": RGBColor(255, 165, 0),  # Amarillo/Naranja
        "LOW":    RGBColor(255, 0, 0),    # Rojo
    }
    
    def generate(
        self,
        template_path: str,
        extracted_data: dict[str, ExtractedDUASection],
        output_path: str
    ) -> GenerationReport:
        ...
```

---

## Soluciones Similares — Benchmarking Tecnológico

### Soluciones existentes analizadas

| Solución | Tipo | Tecnologías | Relevancia |
|----------|------|-------------|------------|
| **Azure Form Recognizer** | Cloud API | Azure AI, prebuilt models | Alta — extrae campos de formularios |
| **AWS Textract** | Cloud API | ML + OCR, detecta tablas | Alta — extracción de documentos estructurados |
| **Google Document AI** | Cloud API | LayoutLM, Vertex AI | Alta — custom processors para formularios |
| **LlamaIndex + LlamaParse** | Framework | Python, embeddings, RAG | Muy alta — pipeline completo de RAG documental |
| **LangChain + OCRmyPDF** | Framework | Python, Tesseract, GPT | Alta — pipeline OCR→LLM |
| **UiPath Document Understanding** | Enterprise RPA | ML, NLP, human-in-loop | Media — costo elevado, no open-source |
| **J.P. Morgan COiN** | Interno | ML, NLP | Referencia — automatización de contratos legales |

### Stack tecnológico seleccionado para DUA Streamliner

#### Backend — Procesamiento e IA
| Categoría | Tecnología | Versión | Justificación |
|-----------|-----------|---------|---------------|
| Lenguaje | Python | 3.11+ | Ecosistema dominante en AI/ML |
| Framework API | FastAPI | 0.110+ | Async nativo, tipado, OpenAPI auto |
| Embeddings | sentence-transformers | 2.x | Multilingüe, offline, preciso en español |
| Modelo LLM | Anthropic Claude (API) | claude-sonnet-4 | Superior en documentos aduaneros en español |
| OCR | Tesseract + ocrmypdf | 5.x | Open source, soporte español |
| PDF parsing | pdfplumber / PyMuPDF | latest | Extracción de tablas y layout |
| Word parsing | python-docx | 1.x | Lectura y escritura de .docx |
| Excel parsing | openpyxl / pandas | latest | Manejo de hojas y celdas |
| Vector similarity | scikit-learn (cosine) | latest | Similitud coseno simple y eficiente |
| Queue | Celery + Redis | latest | Procesamiento asíncrono de documentos |
| ORM | SQLAlchemy | 2.x | Modelos de datos relacionales |
| Base de datos | PostgreSQL | 15+ | Persistencia principal |
| Cache | Redis | 7+ | Cache de embeddings y sesiones |

#### Frontend
| Categoría | Tecnología | Versión | Justificación |
|-----------|-----------|---------|---------------|
| Framework | Next.js | 14+ | SSR, file-based routing, App Router |
| Lenguaje | TypeScript | 5.x | Tipado fuerte, mantenibilidad |
| UI Library | shadcn/ui + Radix | latest | Accesible, composable, sin opiniones de estilo |
| Estilos | Tailwind CSS | 3.x | Utility-first, consistencia |
| Estado | Zustand | 4.x | Ligero, simple, sin boilerplate |
| HTTP Client | TanStack Query | 5.x | Cache, loading states, retry |
| Auth | NextAuth.js | 5.x | OAuth2, JWT, multi-provider |
| Formularios | React Hook Form + Zod | latest | Validación tipada |

#### Cloud & DevOps
| Categoría | Tecnología | Justificación |
|-----------|-----------|---------------|
| Cloud | AWS | Ecosistema completo, Textract como fallback |
| Containers | Docker + Docker Compose | Portabilidad dev/prod |
| Orquestación | Kubernetes (EKS) | Escalado en producción |
| CI/CD | GitHub Actions | Integración nativa con repositorio |
| Registry | ECR (AWS) | Imágenes Docker privadas |
| Storage | S3 | Documentos de entrada y salida |
| Secrets | AWS Secrets Manager | Credenciales seguras |
| Monitoring | Datadog / CloudWatch | Observabilidad |
| IaC | Terraform | Infraestructura como código |

---

## 1. Frontend

### 1.1 Technology Stack

#### Frontend Technology
**Next.js 14** con **App Router** — framework React de producción con SSR/SSG nativo.

#### Framework & Versiones

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| Next.js | 14.2.x | Framework principal (SSR + CSR) |
| React | 18.x | UI library base |
| TypeScript | 5.4.x | Tipado estático |
| Tailwind CSS | 3.4.x | Sistema de estilos utility-first |
| shadcn/ui | latest | Componentes accesibles (Radix primitives) |
| Lucide React | 0.370.x | Iconografía consistente |
| Framer Motion | 11.x | Animaciones y transiciones |
| TanStack Query | 5.x | Server state, cache, async |
| Zustand | 4.5.x | Client state management |
| React Hook Form | 7.x | Manejo de formularios |
| Zod | 3.x | Validación de schemas |
| NextAuth.js | 5.x | Autenticación |
| Axios | 1.x | HTTP client con interceptors |

#### Security Tech
- **NextAuth.js** — JWT + sesiones seguras, CSRF protection nativo
- **Zod** — validación de inputs en cliente y servidor
- **Content Security Policy** — headers configurados vía `next.config.js`
- **HTTPS only** — forzado en producción
- **Rate limiting** — middleware en Next.js API Routes

#### Hosting
| Ambiente | Hosting | Justificación |
|---------|---------|---------------|
| Development | Local / Docker Compose | Desarrollo ágil |
| Testing | AWS EC2 (t3.medium) | Pruebas de integración |
| Staging | AWS ECS Fargate | Espejo de producción |
| Production | AWS ECS Fargate + CloudFront | CDN global, auto-scaling |

---

### 1.2 UX/UI Analysis

#### Usability Attributes

- **Eficiencia**: El flujo principal (subir carpeta → ver DUA prellenado) debe completarse en ≤ 3 clics
- **Transparencia**: Cada campo del DUA muestra su origen documental (tooltips con fuente)
- **Control del usuario**: El agente aduanero puede editar cualquier campo y ver el razonamiento del AI
- **Feedback visual inmediato**: Indicadores de confianza (verde/amarillo/rojo) en tiempo real
- **Tolerancia al error**: Sistema no-destructivo — el documento original nunca se modifica
- **Accesibilidad**: WCAG 2.1 AA — contraste mínimo 4.5:1, navegación por teclado
- **Responsividad**: Diseño adaptable para desktop (primario) y tablet (secundario)

#### Preliminary UX Design (Wireframes)

**Pantalla 1 — Upload & Configuration**
```
┌─────────────────────────────────────────────────────┐
│     DUA Streamliner              [Usuario] [Cerrar] │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Nuevo DUA                                          │
│  ──────────                                         │
│  ┌─────────────────────────────────────────────┐    │
│  │  Seleccionar carpeta de documentos          │    │
│  │  ○ Arrastrar archivos aquí                  │    │
│  │  Acepta: PDF, DOCX, XLSX, PNG, JPG          │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  Template DUA:  [ DUA_oficial_hacienda.docx  ▾]     │
│                                                     │
│  Régimen:  ○ Importación  ○ Exportación  ○ Tránsito │
│                                                     │
│  [  Procesar Documentos  →  ]                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Pantalla 2 — Processing Progress**
```
┌─────────────────────────────────────────────────────┐
│  Procesando documentos...                           │
│                                                     │
│  Clasificación de archivos          (4 docs)        │
│  OCR — factura_proveedor.pdf        (98% conf.)     │
│  Indexado template DUA              (12 bloques)    │
│  Extracción semántica...                   67%      │
│  ○  Síntesis con IA                                 │
│  ○  Generación documento final                      │
│                                                     │
│  Tiempo estimado: ~45 segundos                      │
└─────────────────────────────────────────────────────┘
```

**Pantalla 3 — DUA Review (Principal)**
```
┌─────────────────────────────────────────────────────────────┐
│  DUA Generado — Revisión                   [Exportar DOCX]  │
├──────────────────┬──────────────────────────────────────────┤
│  Secciones    │  BLOQUE: Datos del Importador               │
│  ─────────────   │  ─────────────────────────────────────   │
│  Importador   │  Nombre:    [IMPORTADORA ABC S.A.    ]      │
│  Proveedor    │  Cédula:    [3-101-123456            ]      │
│  Transporte   │  Dirección: [San José, Costa Rica    ]      │
│  Facturas     │  Nivel com: [                        ]      │
│  Régimen      │                                             │
│  Mercancías   │   "Dirección" extraída de factura.pdf       │
│  Tributos     │      Similitud: 71% — revisar               │
│                  │                                          │
│  Confianza total │  [ Anterior] [Siguiente ]                │
│             78%  │                                          │
└──────────────────┴──────────────────────────────────────────┘
```

#### UX Testing Evidence

**Plan de pruebas de usabilidad (a ejecutar):**

- **Usuarios objetivo**: 3 agentes aduaneros con ≥2 años de experiencia
- **Método**: Think-aloud protocol + grabación de pantalla
- **Tareas a probar**:
  1. Completar un DUA de importación desde cero con documentos de prueba
  2. Identificar y corregir un campo marcado en rojo
  3. Exportar el documento final
- **Métricas**: Tasa de completitud, tiempo por tarea, errores, satisfacción (SUS score)
- **Mejoras esperadas post-testing**: Refinamiento de tooltips explicativos, ajuste de umbral de confianza, shortcut de teclado para campos frecuentes

---

### 1.3 Component Design Strategy

#### Component Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/
│   │   └── login/page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── dua/
│   │   ├── new/page.tsx          # Upload & config
│   │   ├── [id]/
│   │   │   ├── processing/page.tsx
│   │   │   └── review/page.tsx   # DUA review principal
│   │   └── history/page.tsx
│   └── layout.tsx
│
├── components/
│   ├── ui/                       # shadcn/ui primitives (sin lógica)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   └── ...
│   │
│   ├── dua/                      # Componentes específicos del dominio DUA
│   │   ├── DUAFieldEditor.tsx    # Campo individual editable con badge de confianza
│   │   ├── DUASectionPanel.tsx   # Panel de una sección del DUA (IMPHDR0X)
│   │   ├── DUAConfidenceBadge.tsx # Badge verde/amarillo/rojo
│   │   ├── DUASourceTooltip.tsx  # Tooltip con fuente documental del dato
│   │   ├── DUAProgressStepper.tsx # Barra de progreso del procesamiento
│   │   └── DUAExportButton.tsx   # Exportar a .docx
│   │
│   ├── upload/                   # Componentes de carga de documentos
│   │   ├── FolderDropzone.tsx    # Drag & drop de carpeta
│   │   ├── FileManifest.tsx      # Lista de archivos detectados
│   │   └── TemplateSelector.tsx  # Selector de template DUA
│   │
│   └── layout/                   # Layout global
│       ├── AppShell.tsx
│       ├── Sidebar.tsx
│       └── Header.tsx
│
├── hooks/                        # Custom React hooks
│   ├── useDUAProcessing.ts       # Estado del pipeline de procesamiento
│   ├── useDUAReview.ts           # Estado de la revisión del DUA
│   └── useFileUpload.ts          # Upload logic + validación
│
├── stores/                       # Zustand stores
│   ├── duaStore.ts               # Estado global del DUA en revisión
│   └── uiStore.ts                # Estado de UI (sidebar, modals)
│
├── services/                     # Capa de API calls
│   ├── duaService.ts             # CRUD del DUA
│   ├── processingService.ts      # Polling del pipeline
│   └── exportService.ts          # Descarga del .docx
│
└── types/                        # Tipos TypeScript compartidos
    ├── dua.types.ts
    ├── document.types.ts
    └── api.types.ts
```

#### Reusability Strategy

- **`DUAFieldEditor`** es el componente más reutilizable: recibe `fieldName`, `value`, `confidence`, `source` y es usado en todas las secciones del DUA.
- **`DUAConfidenceBadge`** encapsula los 3 estados (HIGH/MEDIUM/LOW) y sus colores, usado tanto en el editor como en el sidebar de navegación.
- Los componentes `ui/` son puramente presentacionales y sin lógica de dominio.
- Los hooks encapsulan la lógica de estado para que los componentes sean declarativos.

#### Style Centralization

```typescript
// tailwind.config.ts
const colors = {
  confidence: {
    high:   '#16a34a',  // green-600
    medium: '#d97706',  // amber-600
    low:    '#dc2626',  // red-600
  },
  brand: {
    primary: '#1e3a5f',   // azul aduanero
    accent:  '#f59e0b',   // amarillo documentos
  }
}
```

#### Branding

- **Nombre**: DUA Streamliner
- **Paleta**: Azul institucional (#1e3a5f) + Blanco + Amarillo acento (#f59e0b)
- **Tipografía**: `IBM Plex Sans` (interfaz) + `IBM Plex Mono` (códigos arancelarios, valores)
- **Tono visual**: Institucional/profesional — transmite confianza y precisión

#### Internationalization (i18n)

- **Idioma primario**: Español (Costa Rica) — `es-CR`
- **Librería**: `next-intl`
- **Locale secundario**: Inglés (para documentos fuente en inglés)
- Todos los strings de UI en archivos de mensajes, no hardcodeados en componentes

#### Responsiveness

| Breakpoint | Dispositivo | Comportamiento |
|-----------|------------|----------------|
| `sm` (640px) | Móvil | Layout vertical, sidebar collapsado |
| `md` (768px) | Tablet | Sidebar como drawer |
| `lg` (1024px) | Desktop | Layout split panel principal |
| `xl` (1280px) | Desktop wide | Panel de 3 columnas (secciones + campos + fuente) |

---

### 1.4 Security

#### Authentication

- **Tecnología**: NextAuth.js v5 con estrategia JWT
- **Providers**: Credenciales (email + contraseña hasheada con bcrypt) + OAuth2 (Google, para empresas)
- **Implementación**:

```typescript
// auth.ts
export const { auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const user = await db.user.findUnique({ where: { email: credentials.email } });
        const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        return valid ? user : null;
      }
    })
  ],
  session: { strategy: "jwt", maxAge: 8 * 60 * 60 }, // 8 horas (jornada laboral)
})
```

- **Clases principales**: `AuthService`, `UserRepository`, `PasswordHasher`
- **Ubicación**: `src/lib/auth/`, `src/app/(auth)/`

#### Authorization

**Roles del sistema**:

| Rol | Descripción | Permisos |
|-----|-------------|----------|
| `AGENT` | Agente aduanero | Crear, editar, exportar DUAs propios |
| `SUPERVISOR` | Jefe de agencia | Ver todos los DUAs, aprobar, estadísticas |
| `ADMIN` | Administrador IT | Gestión de usuarios, configuración del sistema |

```typescript
// middleware.ts — protección de rutas
export const middleware = auth((req) => {
  const isProtected = req.nextUrl.pathname.startsWith('/dua');
  if (isProtected && !req.auth) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  // RBAC checks adicionales por ruta
});
```

- **Clases**: `RBACMiddleware`, `PermissionGuard`, `RoleDecorator`
- **Ubicación**: `src/middleware.ts`, `src/lib/rbac/`

#### Session Management

- **Estrategia**: JWT stateless almacenado en httpOnly cookie (no localStorage)
- **Duración**: 8 horas con renovación automática en actividad
- **Revocación**: Blacklist en Redis para logout forzado
- **Ubicación**: `src/lib/session/`, configurado en `auth.ts`

---

### 1.5 Layered Design

```
┌─────────────────────────────────────────────────┐
│              UI LAYER                           │
│  Componentes React — visualización pura         │
│  DUAFieldEditor, DUASectionPanel, Dropzone      │
├─────────────────────────────────────────────────┤
│           APPLICATION LAYER                     │
│  Hooks de React — lógica de UI y flujos         │
│  useDUAProcessing, useDUAReview, useFileUpload  │
├─────────────────────────────────────────────────┤
│            SERVICE LAYER                        │
│  Llamadas a API, transformación de datos        │
│  duaService.ts, processingService.ts            │
├─────────────────────────────────────────────────┤
│             API LAYER                           │
│  Next.js API Routes / Backend FastAPI           │
│  /api/dua, /api/processing, /api/export         │
├─────────────────────────────────────────────────┤
│         STATE MANAGEMENT LAYER                  │
│  Zustand (client) + TanStack Query (server)     │
│  duaStore.ts, React Query cache                 │
└─────────────────────────────────────────────────┘
```

**Principio clave**: Las capas superiores solo conocen la interfaz de la capa inmediatamente inferior. Los componentes UI nunca llaman directamente a la API — siempre a través de hooks → services.

---

### 1.6 Design Patterns

#### Observer Pattern
- **Purpose**: Notificar a múltiples componentes cuando el estado del procesamiento del DUA cambia (progreso del pipeline, nuevo campo extraído).
- **Location in project**: `src/stores/duaStore.ts` (Zustand actúa como observable), `src/hooks/useDUAProcessing.ts` (subscriptores). El backend emite eventos via Server-Sent Events (SSE) que el hook consume.

#### Strategy Pattern
- **Purpose**: Intercambiar el parser según el tipo de archivo recibido (PDF parser vs Word parser vs Excel parser) sin cambiar el código del orquestador.
- **Location in project**: `src/services/processingService.ts` — el backend expone una interfaz `DocumentParser` con implementaciones `PDFParser`, `WordParser`, `ExcelParser`.

#### Facade Pattern
- **Purpose**: `duaService.ts` expone una interfaz simple (`createDUA`, `getDUA`, `updateField`, `exportDUA`) que oculta la complejidad de múltiples endpoints de API y transformaciones de datos.
- **Location in project**: `src/services/duaService.ts`

#### Composite Pattern
- **Purpose**: El DUA es un documento compuesto de secciones (IMPHDR0X), cada sección compuesta de campos. La UI refleja esta jerarquía: `DUADocument` → `DUASectionPanel[]` → `DUAFieldEditor[]`.
- **Location in project**: `src/components/dua/`, `src/types/dua.types.ts`

#### Command Pattern
- **Purpose**: Cada edición de campo del DUA es un Command con `execute()` y `undo()`, permitiendo un historial de cambios y deshacer/rehacer.
- **Location in project**: `src/hooks/useDUAHistory.ts`, `src/stores/duaStore.ts`

#### Repository Pattern
- **Purpose**: Abstraer el acceso a datos (PostgreSQL) detrás de interfaces en el backend, facilitando tests y cambio de storage.
- **Location in project**: `backend/src/repositories/DUARepository.py`, `backend/src/repositories/DocumentRepository.py`

---

### 1.7 Project Scaffold

```
dua-streamliner/
│
├── 📁 frontend/                          # Next.js App
│   ├── src/
│   │   ├── app/                          # App Router
│   │   │   ├── (auth)/login/page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── dua/
│   │   │   │   ├── new/page.tsx
│   │   │   │   ├── [id]/review/page.tsx
│   │   │   │   └── history/page.tsx
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── ui/                       # shadcn/ui
│   │   │   ├── dua/                      # Dominio DUA
│   │   │   ├── upload/                   # Upload de docs
│   │   │   └── layout/                   # App shell
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── services/
│   │   └── types/
│   ├── public/
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
├── 📁 backend/                           # FastAPI Python
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   ├── dua.py               # CRUD DUA
│   │   │   │   ├── processing.py        # Pipeline trigger + SSE
│   │   │   │   └── export.py            # Generar .docx
│   │   │   └── middleware/
│   │   ├── core/
│   │   │   ├── pipeline/
│   │   │   │   ├── file_classifier.py
│   │   │   │   ├── template_indexer.py
│   │   │   │   ├── word_parser.py
│   │   │   │   ├── excel_parser.py
│   │   │   │   ├── pdf_parser.py
│   │   │   │   ├── image_ocr.py
│   │   │   │   ├── field_synthesizer.py  # LLM API call
│   │   │   │   └── document_generator.py # python-docx output
│   │   │   └── embeddings/
│   │   │       └── embedding_service.py  # sentence-transformers
│   │   ├── models/                       # SQLAlchemy ORM
│   │   │   ├── dua.py
│   │   │   ├── document.py
│   │   │   └── user.py
│   │   ├── repositories/
│   │   │   ├── dua_repository.py
│   │   │   └── document_repository.py
│   │   ├── services/
│   │   │   ├── dua_service.py
│   │   │   └── processing_service.py
│   │   └── config/
│   │       └── settings.py              # Pydantic settings
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── Dockerfile
│   └── requirements.txt
│
├── 📁 infra/                             # Infrastructure as Code
│   ├── terraform/
│   │   ├── main.tf                      # ECS, RDS, S3, CloudFront
│   │   ├── variables.tf
│   │   └── environments/
│   │       ├── dev.tfvars
│   │       ├── staging.tfvars
│   │       └── prod.tfvars
│   └── k8s/                             # Kubernetes manifests (prod)
│       ├── backend-deployment.yaml
│       ├── frontend-deployment.yaml
│       └── ingress.yaml
│
├── 📁 .github/
│   └── workflows/
│       ├── ci.yml                       # Tests en cada PR
│       ├── cd-staging.yml               # Deploy a staging en merge a main
│       └── cd-prod.yml                  # Deploy a prod en tag release
│
├── 📁 docs/                             # Documentación de diseño
│   ├── architecture/
│   ├── api/
│   └── wireframes/
│
├── docker-compose.yml                   # Stack completo local
├── docker-compose.test.yml              # Stack para testing
└── README.md                            # Este archivo
```

---

## Referencias

1. **¿Qué es DUA?** — https://alianza-logistics.com/documento-unico-aduanero-2/
2. **Template oficial DUA (Hacienda CR)** — https://www.hacienda.go.cr/docs/Mensaje_TD_DUA-V3-17-12-03-2025.pdf
3. **Cómo llenar el DUA** — https://gestionesenlinea.es/formulario-dua-documento-unico-administrativo/
4. **Instructivo DUAS Exportaciones — PROCOMER** — https://procomer.com/wp-content/uploads/2025/04/INSTRUCTIVO-DUAS-EXPORTACIONES-3.0.pdf
5. **Formato Mensaje DUA TICA** — https://www.hacienda.go.cr/docs/Mensaje_TD_DUA.pdf
6. **LlamaIndex — Document Pipeline** — https://www.llamaindex.ai/
7. **Agentic AI for Document Processing** — https://xenoss.io/blog/agentic-ai-document-processing
8. **Azure AI Document Intelligence + LangChain** — https://techcommunity.microsoft.com/blog/azurearchitectureblog/enhancing-document-extraction-with-azure-ai-document-intelligence-and-langchain-/4187387
9. **Beyond OCR: AI Document Processing** — https://www.infoq.com/articles/ocr-ai-document-processing/
10. **OCR with LangChain, Docker & AWS** — https://dev.to/moni121189/from-scanned-pdfs-to-smart-docs-ocr-with-langchain-docker-aws-3jlm

---

*Documento en construcción — actualizado continuamente durante el curso Diseño de Software, ITCR 2025*
