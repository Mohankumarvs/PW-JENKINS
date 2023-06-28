pipeline {
  stages {
    stage('install playwright') {
      steps {
        script {
          node {
            stage('Install Playwright') {
              sh '''
                npm i -D @playwright/test
                npx playwright install
              '''
            }
          }
        }
      }
    }
    stage('help') {
      steps {
        script {
          node {
            stage('Help') {
              sh 'npx playwright test --help'
            }
          }
        }
      }
    }
    stage('test') {
      steps {
        script {
          node {
            stage('Test') {
              sh '''
                npx playwright test
              '''
            }
          }
        }
      }
      post {
        success {
          script {
            node {
              stage('Post-Success') {
                archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
                sh 'rm -rf *.png'
              }
            }
          }
        }
      }
    }
  }
}
