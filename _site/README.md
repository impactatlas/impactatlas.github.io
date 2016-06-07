#Impact Atlas One Pager

## Description
A complete monitoring & evaluation, project management & reporting platform for graduation programs, which will
enable the entire global community of implementers, donors and researchers to transform data into information, and use
that information to fuel decision-making. Developed by Amplifier Strategy.

## Pre-requesites 
+ git [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git]
+ npm [package manager https://docs.npmjs.com/getting-started/what-is-npm]
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

## Deployment
This is automated. Add your SSH key to authorized_keys on the server (with amplifier1 user)

+ Add the production remote: `git remote add production amplifier1@impactatlas.org:/home/amplifier1/git/impactatlas.org/.git`
+ to deploy, use `git push production master`

*The automatic deployment is done through a deploy hook (`git/hooks/post-receive`). It will backup the current version of the website, and store it  in the `backup/name-of-project` folder on the server. The new files from the `dist/` folder will be copied in the production folder and be served to users.*

## Test
Login to http://www.impactatlas.org

user: `amp` 

password: `letmeinnow`