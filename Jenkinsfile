pipeline {
    agent any
    stages {
        
        stage('Clone the repo') {
             steps {
                // Get some code from a GitHub repository
                git url: 'https://github.com/AndreasGammelgaardJensen/HomePage-Client.git', branch: 'main'
                
                sh 'docker ps -a'
            }
            
        }
        
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git url: 'https://github.com/naiveskill/devops.git', branch: 'main'
                // Change file permisson
                sh "chmod +x -R ./jenkins"
                // Run shell script
                sh "./jenkins/script/scripted_pipeline_ex_2.sh"
            }
        }
    }
}
