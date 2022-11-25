// pipeline {
//     agent { dockerfile true }
//     stages {
//         stage('Build') { 
//             steps {
//                 sh 'docker build -t gcr.io/apps/myapp:latest  .'
//             }
//         }
//     }
// }       

pipeline {
    agent {
    // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
        dockerfile {
            filename 'Dockerfile'
            dir '.'
            label '/app/'
        }
    }
}
