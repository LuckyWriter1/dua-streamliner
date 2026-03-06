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