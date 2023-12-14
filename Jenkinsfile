pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git 'https://github.com/ElNov686/PrintWebTablesCyDemo.git'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                sh 'npx cypress run --spec cypress/e2e/googleTest.cy.js --browser chrome'
            }
        }
    }
}
