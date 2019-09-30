# Demo ESLint

## Configurações básicas
- ? How would you like to use ESLint? **To check syntax, find problems, and enforce code style**
- ? What type of modules does your project use? **CommonJS (require/exports)**
? Which framework does your project use? **None of these**
? Does your project use TypeScript? **No**
? Where does your code run? **Browser, Node**
? How would you like to define a style for your project? **Use a popular style guide**
? Which style guide do you want to follow? **Airbnb (https://github.com/airbnb/javascript)**
? What format do you want your config file to be in? **JavaScript**

## Separadas em categorias

### Possible errors
* getter-return enforce return statements in getters
* no-unreachable - disallow unreachable code after return, throw, continue, and break statements
### Best pratices
* complexity - enforce a maximum cyclomatic complexity allowed in a program
* curly - enforce consistent brace style for all control statements
* no-magic-numbers - disallow magic numbers
* no-multi-spaces - disallow multiple spaces
* yoda - require or disallow “Yoda” conditions

### Variables
* no-undef - disallow the use of undeclared variables unless mentioned in /*global */ comments
* no-unused-vars - disallow unused variables
* no-use-before-define - disallow the use of variables before they are defined

### NodeJS
* handle-callback-err - require error handling in callbacks

### Stylistic Issues
* brace-style - enforce consistent brace style for blocks
* indent - enforce consistent indentation
* max-len - enforce a maximum line length

### ECMAScript 6
* arrow-body-style - require braces around arrow function bodies
* no-const-assign - disallow reassigning const variables
