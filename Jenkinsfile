pipeline {
    agent { Dockerfile true }
    stage('build') {
        steps {
            sh docker build -t "gcr.io/apps/myapp:latest"  .
        }
    }
}       