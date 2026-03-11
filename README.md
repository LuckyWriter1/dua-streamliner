# DUA Streamliner

> Eliminating operational manual work in the preparation of the DUA through semantic extraction, advanced OCR, and artificial intelligence.

---
## Autores

|            Nombre           | Carnet   |              Institución           |
|-----------------------------|----------|------------------------------------|
|Santiago Espinoza Rendón     |2024156530|Instituto Tecnológico de Costa Rica |
|Jose Ignacio Paniagua Vargas |2024163735|Instituto Tecnológico de Costa Rica |


**Course:** Software Design — Computer Engineering  
**Professor:** Rodrigo Núñez  
**Start Date:** March 6, 2026


---
# Dua streamliner design

## Problem
Preparing the Documento Único Aduanero (DUA) is a complex and error-prone process because the required information comes from multiple source documents such as invoices, packing lists, certificates, and transport documents. These files are usually provided in different formats (Excel, Word, PDF, or scanned images) and with inconsistent structures depending on the company or supplier. As a result, completing the DUA manually becomes repetitive, time-consuming, and highly dependent on expert knowledge, increasing the risk of delays, mistakes, or rejected declarations.
## Proposed Solution
The proposed system, called DUA Streamliner, aims to automate the generation of the DUA by allowing users to simply provide a folder containing the source documents. The system will read multiple file formats, extract both structured and unstructured data, and apply OCR for scanned documents. Using AI-based semantic analysis, it will identify relevant customs information and automatically map the extracted data to the official DUA template defined by the Ministry of Finance.
## Expected Results
The system will generate a pre-filled Word document containing the completed DUA, where each field is automatically populated and visually coded according to the confidence level of the extracted information. This approach will significantly reduce manual work and improve efficiency while still allowing customs experts to review and validate the final document. Ultimately, the solution aims to streamline the declaration process, reduce errors, and accelerate import and export procedures.



# 1. Frontend design

## 1.1 Technology stack

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

---
## 1.2  UX/UI Analysis

## Core Business Process

This section describes the step-by-step workflow of the system from the user's perspective.  
Each stage explains the actions performed by the user and the corresponding system responses.

---

# A. Login

1. The user enters their login credentials and the one-time authentication token.
2. The user attempts to authenticate.
3. If the authentication data is incorrect, the system informs the user that the credentials are invalid and requests a new attempt.
4. If the token is invalid or expired, the system informs the user that the second authentication factor is not valid and requests a new token.
5. If authentication is successful, the system grants access and takes the user to the report generation workspace.
6. The system initializes the user session and loads the initial context for the application.

**Expected UX Goal**

Provide a secure but straightforward entry point, with immediate feedback and no ambiguity about success or failure.

---

# B. Configure the Generator

1. The user starts a new report generation process.
2. The user provides the required input material, including the output template and the source documents.
3. The system validates that the required files are present and in supported formats.
4. The user defines or confirms the generation parameters, such as the report context, processing scope, or matching preferences.
5. The system analyzes the submitted configuration and checks whether the process can begin.
6. If required information is missing or inconsistent, the system explains what must be corrected.
7. If the configuration is valid, the system confirms that the generation job is ready and moves the process to the execution stage.

**Expected UX Goal**

Make the setup process understandable, reduce configuration mistakes, and ensure the user feels in control before starting analysis.

---

# C. Monitoring the Progress

1. After starting the process, the user accesses the execution status of the generation job.
2. The system shows the current processing stage for the submitted files.
3. The user reviews how the system advances through ingestion, extraction, matching, and report drafting.
4. If the process detects warnings, partial issues, or unsupported content, the system communicates them without interrupting the entire flow unless necessary.
5. The user can identify whether the generation is still in progress, completed successfully, or failed.
6. Once the process is finished, the system indicates that the final result is available for review and export.

**Expected UX Goal**

Reduce uncertainty during long-running operations and improve trust through constant visibility of progress.

---

# D. Obtain the Result / Export

1. The user accesses the completed result of the report generation process.
2. The system presents the generated report and the status of the generated content.
3. The user reviews the outcome and confirms whether the report is acceptable.
4. The user requests the final output in the required format.
5. The system prepares the exportable version of the generated document.
6. The user obtains the final report for download or further use.
7. If export fails, the system informs the user of the cause and allows another attempt.

**Expected UX Goal**

Make the final output stage feel reliable, simple, and conclusive, since this is the stage where the main business value is delivered.

---

# E. Logout

1. The user decides to end the current session.
2. The system closes the authenticated session and clears active access.
3. The user is returned to the entry point of the application.
4. The system ensures that the previous session can no longer be used without new authentication.

**Expected UX Goal**

Provide a secure and explicit session closure with a clear end to the workflow.


# Wireframes

---

## Wireframe 1 — Login Screen

### Description
This screen allows the user to securely access the application.  
The user provides authentication credentials and a one-time authentication token.  
The system validates the information and either grants access or reports authentication errors.

### AI Prompt Used
Create a grayscale low-fidelity wireframe for an enterprise web application login screen for a smart report generation system. Include areas for username, password, and one-time token authentication.

### Wireframe Image
![Login Screen](images/login.png)

---

## Wireframe 2 — Configure Generator Screen

### Description
This screen allows the user to configure a new report generation process by providing the template document and the source files that will be analyzed by the system.

### AI Prompt Used
Create a grayscale low-fidelity wireframe for an enterprise web application where the user configures a smart report generator. Show areas for template upload, source files, and processing configuration.

### Wireframe Image
![Configure Generator](images/configure.png)

---

## Wireframe 3 — Monitoring Progress Screen

### Description
This screen allows the user to monitor the execution progress of the report generation process and observe the different stages of processing.

### AI Prompt Used
Create a grayscale low-fidelity wireframe for a monitoring dashboard that shows the progress of a document analysis and report generation job.

### Wireframe Image
![Monitoring Progress](images/monitoring.png)

---

## Wireframe 4 — Result and Export Screen

### Description
This screen presents the final generated report and allows the user to obtain the output document.

### AI Prompt Used
Create a grayscale low-fidelity wireframe for a results screen of a smart report generation system where the user reviews the generated report and exports the document.

### Wireframe Image
![Result Export](images/result.png)

---

## Wireframe 5 — Logout Screen

### Description
This screen confirms that the user session has ended and that access to the system has been securely closed.

### AI Prompt Used
Create a grayscale low-fidelity wireframe for a logout confirmation screen in an enterprise web application.

### Wireframe Image
![Logout Screen](images/logout.png)


---

# UX test results
## 1. Test Participants

The usability test was conducted with **3 participants**.  
All participants were university students with basic experience using web applications.

| Participant | Background |
|-------------|------------|
| Sebastian Valverde | Mechatronics Engineering Student |
| Juan Diego Esquivel | Mechatronics Engineering Student |
| Arturo Carranza | Industrial Maintenance Engineering Student |

---

## 2. Tasks Evaluated

1. Where would you click to log into the system?
2. Where would you upload the DUA template?
3. Where would you check the progress of the document analysis?
4. Where would you download the generated report?
5. Where would you log out of the system?

---

## 3. Test Results

| Task | Success Rate | Observations |
|-----|-------------|-------------|
| Login | 100% | All participants immediately identified and clicked the login button without hesitation. |
| Upload template | 100% | Users clearly recognized the upload template section and completed the action successfully. |
| Monitor progress | 100% | Participants quickly understood the progress monitoring interface and easily located the processing status. |
| Download report | 100% | Users intuitively identified the download report option and completed the task without confusion. |
| Logout | 100% | All participants easily located the logout option and understood how to end the session. |

---

## 4. Heatmap

### Figure 1 — Login Screen Heatmap

![Heatmap Login](images/heatmap-login.png)

**User Clicks Table**

![Login Screen](images/User-login.png)

---

### Figure 2 — Configure Generator Screen Heatmap

![Heatmap Upload Template](images/heatmap-upload.png)

**User Clicks Table**

![Upload Screen](images/User-upload.png)

---

### Figure 3 — Monitoring Progress Screen Heatmap

![Heatmap Monitoring](images/heatmap-monitoring.png)

**User Clicks Table**

![Monitoring Screen](images/User-Monitoring.png)

---

### Figure 4 — Result and Export Screen Heatmap

![Heatmap Result](images/heatmap-result.png)

**User Clicks Table**

![Result Screen](images/User-result.png)

---

### Figure 5 — Logout Screen Heatmap

![Heatmap Logout](images/heatmap-logout.png)

**User Clicks Table**

![Logout Screen](images/User-logout.png)

---

## 5. Conclusion

The usability test results indicate that the interface is intuitive and easy to understand. All participants were able to complete the assigned tasks successfully, which suggests that the layout and labeling of the interface clearly guide users through the main workflow of the system. The heatmap results also show that users consistently interacted with the expected interface elements. Overall, the prototype demonstrates a clear and effective design that supports the intended user actions.


