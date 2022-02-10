Install Percy
    -  $ npm install @percy/cli --save-dev
Update cypress\support\index.js > add line
    - import '@percy/cypress'
Update package.json
    - to add percy configs
Set Environment 
    - $env:PERCY_TOKEN = "a23a208054ab20c23f57f26a7430b3f6fa3c3c24d2ed5708b39afbf285834266"