# DUA Streamliner

**Intelligent System for the Automated Generation of the Single Customs Declaration Document (DUA)**

---
## Authors

|            Nombre           | Carnet   |              Institución           |
|--------|--------------------|-----------------------------------------------|
|Santiago Espinoza Rendón     |2024156530|Instituto Tecnológico de Costa Rica |
|Jose Ignacio Paniagua Vargas |2024163735|Instituto Tecnológico de Costa Rica |


**course:** Diseño de Software — Ingeniería en Computación  
**teacher:** Rodrigo nuñez
**start date** 4 Marzo 2026
---

# Dua streamliner design

## Problem
Preparing the Documento Único Aduanero (DUA) is a complex and error-prone process because the required information comes from multiple source documents such as invoices, packing lists, certificates, and transport documents. These files are usually provided in different formats (Excel, Word, PDF, or scanned images) and with inconsistent structures depending on the company or supplier. As a result, completing the DUA manually becomes repetitive, time-consuming, and highly dependent on expert knowledge, increasing the risk of delays, mistakes, or rejected declarations.
## Proposed Solution
The proposed system, called DUA Streamliner, aims to automate the generation of the DUA by allowing users to simply provide a folder containing the source documents. The system will read multiple file formats, extract both structured and unstructured data, and apply OCR for scanned documents. Using AI-based semantic analysis, it will identify relevant customs information and automatically map the extracted data to the official DUA template defined by the Ministry of Finance.
## Expected Results
The system will generate a pre-filled Word document containing the completed DUA, where each field is automatically populated and visually coded according to the confidence level of the extracted information. This approach will significantly reduce manual work and improve efficiency while still allowing customs experts to review and validate the final document. Ultimately, the solution aims to streamline the declaration process, reduce errors, and accelerate import and export procedures.



1. Frontend design

1.1 Technology stack

- Application type: Web App (Single Page Application - SPA)
- Web framework: React 19.2
- Web server: Node.js 21
- Coding Language: TypeScript 5.9.3
- Unit testing framework: Jest 30.2.0
- Data validation framework: Zod 4.3.6
- Code prettier framework: Prettier 3.8.1
- Code style framework: ESLint 10.0.2
- Integration testing tools: Playwright 1.58.2
- Cloud service: Azure Cloud Services
- Hosted services within the cloud service: Azure App Service, Azure Blob Storage
- Code repositories service: Azure DevOps Repositories
- Code automation task tool: Husky 9.1.7
- CI CD pipelines technology: Azure DevOps Pipelines
- Environments: development, stage, production
- Environment deployments tools: Azure DevOps Environments
- Observability framework: Azure Application Insights SDK

1.2 UX/UI Analysis:
Includes the desirable usability attributes of the application, a preliminary UX design presented as wireframes, and evidence of UX testing with real users validating the preliminary design.

1.3 Component Design Strategy:
Defines the technique and principles for frontend component design, how component reusability is achieved, how styles are centralized, and how branding, internationalization, and responsiveness are handled.

1.4 Security:
Technologies, techniques, and classes — with their respective location in the project structure — responsible for authentication, authorization, permissions, and session management.

1.5 Layered Design:
Design and explanation of the different layers of the frontend application.

1.6 Design Patterns:
Class design with their respective location in the project structure, where object-oriented design patterns are applied as needed, such as for security, UI refresh, notification handling, state storage, API calls, asynchronous operations, session invalidation, event-driven programming, and object creation.

1.7 Project Scaffold:
A folder inside /src containing the project scaffold, generated based on the full specification defined in sections 1.1 to 1.6.
