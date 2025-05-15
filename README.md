# 🧪 Test Project

A fully automated testing framework using **CodeceptJS** with **BDD** and **Allure Reporting** integration. This project helps streamline testing workflows by offering clean reporting and easy-to-use test execution commands.

---

## 📖 Description

This project enables efficient testing automation with:
- **CodeceptJS** for writing tests in a BDD (Behavior Driven Development) style.
- **Allure Reporting** for generating beautiful and detailed test reports.
---

## 🛠️ Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher), for Mac M3 use node v18
- **Java** 
- **npm** (comes with Node.js)
- **Allure Commandline** (for generating Allure reports)
  - You can install it globally using npm:
    ```bash
    npm install -g allure-commandline --save-dev
    ```

### Steps to Set Up the Project

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:msergm730/test_project.git
2. **Navigate to project directory**:
   ```bash
   cd test_project 
3. **Install Dependences**:
    npm install

### Usage examples:
1. **To run test**:
    ```bash
    npm run test  
2. **To Run Single Feature**:
     ```bash
    npm run feature "relative path to feature file"

3. **To Open Report**:
    ```bash
    npm run open:report

### Project Structure

```
project-root/
├── constants/                  # Static values storage
│   ├── urls.json               
├── features/                      
│   ├── HomePage.feature
│   ├── liveStreamPlayer.feature
├── helpers/                    # Shared helpers
│   └── generalHelpers.js       # Reusable navigation logic
├── pages/                      # Page Object Model (POM) files
│   ├── basePage.js
│   ├── homePage.js
│   ├── liveStreamPage.js
├── step_definitions/           # CodeceptJS step definitions    
│   ├── generalSteps.js      
│   ├── homePageSteps.js
│   ├── liveStreamPageSteps.js
├── output/                     # Allure results (auto-generated)
├── steps_file.js 
├── steps.d.js
├── codecept.conf.js            # CodeceptJS config
├── package.json
├── README.md                   # You're here!
```
