# Welcome to my App using the Git API

## This Page shows the commits (and info about those commits ) for this Page

You can visit the live app here : https://git-scrap.herokuapp.com

## How to start this app locally 

### 1) To Start this app make sure Node, npm, and git are installed on your computer 
_Node_ : https://nodejs.org/en/  
_NPM_ : is installed alongside Node.js  
_Git-CLI_ : https://git-scm.com/downloads  

_You can check if these are all installed on you command line using the following commands_
_Node_ :
````
node -v
````
_NPM_ :
````
 npm -v
````
_Git-CLI_ : 
````
git --version 
````
_Should look like this if you're using the command line git bash_ 
````
$ git --version

git version 2.30.1.windows.1
````

````
$ node -v

v16.13.2
````

````
$ npm -v

8.1.2
````

### 2) Run git clone https://github.com/BrightNate1022/git_scrap.git 
To clone the Repository (Repo)
```
$ git clone https://github.com/BrightNate1022/git_scrap.git
```

This should clone the repo into you're current directory (make sure you put it in a place you'll remeber )

### 3) After you must install the dependencies using npm install or npm -i in the main/root directory and the client directory (any folder with a _package.json_)

```
$ npm install
```
### 4) Once those dependencies are finished installing  run the command npm start to start the app in the root directory 
Command:
````
 $ npm start
````
Result: 
````
> mern@1.0.0 start
> if-env NODE_ENV=production && npm run start:prod || npm run start:dev


> mern@1.0.0 start:dev
> concurrently "nodemon --ignore 'client/*'" "npm run client"

[0] [nodemon] 1.19.4
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching dir(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node server.js`
[0] 🌎 ==> API server now on port 3001!
[1]
[1] > mern@1.0.0 client
[1] > cd client && npm run start
[1]
[1]
[1] > mern@0.1.0 start
[1] > react-scripts start
[1]
[1] (node:23216) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
[1] (Use `node --trace-deprecation ...` to show where the warning was created)
[1] (node:23216) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
[1] Starting the development server...
[1]
[1] Compiled with warnings.
[1]
[1] Warning
[1] (2604:5) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
[1]
[1] Warning
[1] (2422:3) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
[1]
[1] Search for the keywords to learn more about each warning.
[1] To ignore, add // eslint-disable-next-line to the line before.
[1]
[1] WARNING in ./node_modules/bootstrap/dist/css/bootstrap.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/bootstrap/dist/css/bootstrap.min.css)
[1] Module Warning (from ./node_modules/postcss-loader/dist/cjs.js):
[1] Warning
[1]
[1] (2604:5) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
[1]
[1] WARNING in ./node_modules/bootstrap/scss/bootstrap.scss (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[7].use[3]!./node_modules/react-scripts/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[4]!./node_modules/bootstrap/scss/bootstrap.scss)
[1] Module Warning (from ./node_modules/postcss-loader/dist/cjs.js):
[1] Warning
[1]
[1] (2422:3) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
[1]
[1] webpack compiled with 2 warnings
[0] [nodemon] restarting due to changes...
[0] [nodemon] starting `node server.js`
[0] 🌎 ==> API server now on port 3001!

````
### 5) Visit App!!!
To do this all you have to do is open your browser and enter http://localhost:3000 and you should see the app !


