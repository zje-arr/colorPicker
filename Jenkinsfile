pipeline {
    agent { 
        dockerfile {
            true
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