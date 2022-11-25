pipeline {
    agent { dockerfile 
        label 'my-defined-label'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t gcr.io/apps/myapp:latest  .'
            }
        }
    }
}       