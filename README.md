#Impact Atlas One Pager

## Description
A complete monitoring & evaluation, project management & reporting platform for graduation programs, which will
enable the entire global community of implementers, donors and researchers to transform data into information, and use
that information to fuel decision-making. Developed by Amplifier Strategy.

## Pre-requesites 
+ git [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git]
+ npm (suppossed to be included in node) [package manager https://docs.npmjs.com/getting-started/what-is-npm]
+ grunt [used for compilinig SASS to CSS and run front-end tests http://gruntjs.com/getting-started]

## Installation
+ Clone the repo `git clone git@bitbucket.org:amplifierstrategies/impactatlas.org.git .`
+ Point your local webserver to the `dist/` folder.
+ Run `npm install` from the root to install the grunt dependencies
+ Edit `grunt/browserSync` with your local dev URL. Example below

```javascript
module.exports = {
  dev: {
    bsFiles: {
      src : 'dist/css/style.css'
    },
    options: {
      watchTask: true,
      proxy: "impactatlas.dev:8888"
    }
  }
}
```