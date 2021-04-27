
API Automation :

Prerequisites:

1. Java 1.8
2. Eclipse or IntelliJIDEA

Libraries used:

1. RestAssured API
2. TestNG - testing framework
3. TestNG Assertions 
4. Java programming Language

Advantages Using RestAssured API:

1. It removes the need for writing a lot of boilerplate code required to set up an HTTP connection, send a request and receive and parse a response.
2. It supports a Given/When/Then test notation, which instantly makes your tests human readable.
3. Since REST Assured is a Java library, integrating it into a continuous integration / continuous delivery setup is a breeze, especially when combined with a Java testing framework such as TestNG

Dependency Installation:

1. Go to Eclipse Market place and add TestNG to the project

Execution:

1. Go to src/test/java folder
2. Right click on any test
3. Choose "Run As" option
4. select TestNG


UI Automation:

Prerequisites:

1. Node.js
2. npm
3. WebDriverIO 
4. VSCode
5. Latest version of Chrome (Note: chrome binary version in the project should match with local version of chrome)


Libraries Used:

1. Javascript
2. WDIO
3. Babel
4. Allure reports 
5. chai 

Advantages of WebDriverIO:

1. Able to run automation tests both for web applications as well as native mobile apps
2. Simple and Easy Syntax - Looks like BDD format. Example - Go to any test under specs folder and functions are written in plain English which easy to understand
3. Integrating tests to third-party tools such as Appium
4. 'Wdio setup wizard' to make the setup simple and easy
5. Integrated test runner

Steps to run the project:

1. to install required dependencies/update the dependencies : npm i 
2. to execute the scripts: npm run test - 
3. To check the Allure reports: npm run reports (opens the reports in the browser)

   Note: if the reports already exists in the project 
       1. Run: allure genrate and allure open --clean ( this command overwrites the existing reports)
       2. npm run reports (opens the reports in the browser)
  
Below are the reports generated by running the project:

<img width="1307" alt="Screen Shot 2021-04-27 at 10 39 14" src="https://user-images.githubusercontent.com/29821182/116220884-fd0c7980-a744-11eb-8d26-800af8c34dda.png">

![Screen Shot 2021-04-27 at 10 54 07](https://user-images.githubusercontent.com/29821182/116222961-f979f200-a746-11eb-934e-546f1cae7fe3.png)
