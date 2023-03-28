Install Percy
    -  $ npm install @percy/cli --save-dev
Update cypress\support\index.js > add line
    - import '@percy/cypress'
Update package.json
    - to add percy configs
Set Environment 
    - $env:PERCY_TOKEN = ""
To RUN percy 
    - npx percy exec -- cypress run
TO RUN Cypress only
    - npm run cypress:open
TO RUN CYPRESS with Dashboard
    - npx cypress run --record --key  
