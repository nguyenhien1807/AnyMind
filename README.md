# Angular Twitter

#### Table of contents
 * [Set up simulator for backend Api (Twitter_scrape)](#set-up-simu)
 * [Prerequisite](#Prerequisite)
 * [Running Angular Twitter Project](#run-angular-twitter)
 * [Release note](#release-note)
 * [Project structure](#strucure)
 * [Author](#author)

## Set up simulator for backend Api (Twitter_scrape)

- Before running Angular Twitter Project, you need to make sure that your simulator for back end api is up and running.

- Please follow this instruction to start simulator (Twitter Scrape): https://github.com/artenepo/twitter_scrape.

## Prerequisite

- Make sure that you have Node.Js, NPM and Angular 5 are installed. If not, you can follow this guideline to install: https://angular.io/guide/setup

## Running Angular Twitter Project

1. Go to folder "AngularTwitter", run `npm install` to install all requireds node modules for project.

2. Run `ng serve --proxy-config proxy.conf.json` to start Angular Twitter project


## Release note

1. To start searching, press `Enter` after typing text in search text box.

2. Angular Twitter Project will scrape 3 pages (page_limit = 3 in API parameter) in Twitter APIs in step 0

3. Following characters are not allowed to input in text filed to search: `~ ! @ # $ % ^ & * ( )`

4. Project need to be run with proxy because backend is running with other port.

5. If you want to change page_limit and proxy configuration, change it in `environment.ts`, inside folder `src/environments`
```
  apiBase: 'http://localhost:5000/',
  api_page_limit:  '3',
  api_wait: '0'
```

## Project structure

```bash
AngularTwitter
   |__src
       |__app
           |__common
           |    |__constants
           |    |__enum
           |    |__service
           |
           |__custom
           |    |__component
           |    |__directive
           |    |__pipe
           |
           |__layout
           |    |_container
           |    |_main-body
           |
           |__model
           
```

1. `common` folder: This folder contains all common things in project, which is use many places.

2. `custom` folder: This folder contains components, directive and pipe which is custom to adapt with requirement but still able to be reused

3. `layout` folder: this folder contains main class for application, contain all outside layout of Angular Twitter page.

4. `model` folder: this folder contains model which is used to map response data returned from back end API (Twitter_scrap)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Author

- Full Name: Nguyen Ngoc Hien

- Email: nguyenhien1807@gmail.com
