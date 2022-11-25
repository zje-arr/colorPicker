pipeline {
    agent { docker true }
    stages {
        stage('Test') { 
            steps {
                sh 'docker build -t gcr.io/apps/myapp:latest  .'
            }
        }
    }
}       