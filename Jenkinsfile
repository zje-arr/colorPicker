pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') { 
            steps {
                sh 'docker build -t gcr.io/apps/myapp:latest  .'
            }
        }
    }
}       