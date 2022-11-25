pipeline {
    agent { 
        docker {
            image 'node:14-slim'
            args '-p 8081:3000'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t myapp .'
            }
        }
        stage('Test') { 
            steps {
                sh 'echo "no tests"'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'npm start'
            }
        }
    }
}       