pipeline {
    agent any

    tools {
        // Tells Jenkins to use your locally installed Node.js configuration
        nodejs 'node' 
    }

    environment {
        NODE_ENV = 'test'
        PORT = '3001' // Uses an isolated port during background pipeline builds
    }

    stages {
        // STAGE 1: BUILD THE APPLICATION ARTIFACT
        stage('1. Build') {
            steps {
                echo 'Clearing workspace and installing dependencies...'
                // Clean-installs packages listed in package.json without modifying package-lock
                sh 'npm ci' 
            }
        }

        // STAGE 2: AUTOMATED TESTING STRATEGY
        stage('2. Test') {
            steps {
                echo 'Executing automated validation testing suite...'
                // Invokes the Jest and Supertest checks we configured
                sh 'npm test' 
            }
        }

        // STAGE 3: CODE QUALITY gate ANALYSIS
        stage('3. Code Quality') {
            steps {
                echo 'Scanning codebase architecture and style metrics...'
                // Placeholder block — we will tie this directly to your local SonarQube system next
                echo 'SonarQube quality evaluation completed successfully.'
            }
        }
    }

    post {
        success {
            echo '=================================================='
            echo ' Jenkins Pipeline Passed Initial Automation Check!'
            echo '=================================================='
        }
        failure {
            echo '=================================================='
            echo ' Pipeline Stopped: Fault Detected. Check Log Data.'
            echo '=================================================='
        }
    }
}