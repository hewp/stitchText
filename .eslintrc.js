module.exports = {
   
     "extends": "airbnb",
     "installedESLint": true,
     "env": {
       "browser": true,
       "node": true
     },
     "parser": "babel-eslint",
     "import/resolver": "webpack",
     "ecmaFeatures": {"jsx": true},
     "plugins": ["react"]
   
};