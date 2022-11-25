pipeline {
    agent { dockerfile true }
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t gcr.io/apps/myapp:latest  .'
            }
        }
        stage('Test') { 
            steps {
                sh 'echo "no tests"'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'echo "no Deployment"'
            }
        }
    }
}       