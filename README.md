# react-starter

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)


To create a multi language react application we use react-material as UI-framework and Redux for state management.

```
$ git clone https://github.com/dshabin/react-starter.git
```
install the dependencies and run:
```
$ cd react-starter
$ yarn install
$ yarn start
```
Folder Structure
```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src 
│   ├── _actions
│   │   ├── app.js
│   │   ├── footer.js
│   │   ├── login.js
│   │   ├── notification.js
│   │   └── signup.js
│   ├── _reducers
│   │   ├── app.js
│   │   ├── deposit.js
│   │   ├── footer.js
│   │   ├── login.js
│   │   ├── notification.js
│   │   ├── reducerRoot.js
│   │   └── signup.js
│   ├── components
│   │   ├── Account
│   │   │   └── Account.js
│   │   ├── App
│   │   │   ├── App.js
│   │   │   ├── App.test.js
│   │   │   └── history.js
│   │   ├── Footer
│   │   │   └── Footer.js
│   │   ├── Home
│   │   │   └── Home.js
│   │   ├── Loading
│   │   │   └── Loading.js
│   │   ├── Login
│   │   │   └── Login.js
│   │   ├── NavBar
│   │   │   └── NavBar.js
│   │   ├── Notification
│   │   │   └── Notification.js
│   │   ├── PageTitle
│   │   │   └── PageTitle.js
│   │   ├── RightDrawer
│   │   │   └── RightDrawer.js
│   │   └── Signup
│   │       └── Signup.js
│   ├── config
│   │   └── config.js
│   ├── localization
│   │   ├── helpers.js
│   │   └── resources.js
│   ├── services
│   │   └── http.js
│   ├── theme
│   │   └── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md
```
