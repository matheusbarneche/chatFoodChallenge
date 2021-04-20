# ChatFood

## Introduction
The project aims to validate the test acceptance criteria for a web interface.

end-to-end test that:
1. Starts on the main page
2. Selects Top Rated on the top menu (Movies > Top Rated)
3. Sorts the page by Release Date Ascending.
4. Filter By Genres, and selects Documentary
5. Clicks on the first movie from the list
6. Verifies in the Media section that the number of videos listed is equals to the amount that is appearing after the word Videos eg: Videos 2

## Index

<!--ts-->
   * [Introduction](#introduction)
   * [Index](#index)
   * [Technologies](#technologies)
   * [Prerequisites](#prerequisites)
   * [Project run](#project-run)
<!--te-->

## Technologies

* [Node (language)](https://nodejs.org/en/)
* [Cypress (test framework)](https://www.cypress.io/)
* [Eslint (linter)](https://eslint.org/) 
* [Prettier (code formatter)](https://prettier.io/)
* [Restify (dependecies)](http://restify.com/)
* [VSCode (IDE)](https://code.visualstudio.com/)
* [Npm (package manager)](https://www.npmjs.com/)

## Prerequisites
1. Download and install node and npm(https://nodejs.org/en/download/)
2. Download and install a IDE(https://code.visualstudio.com/Download)

## Project run
1. To run the project in headless mode use the command: npx cypress run.
2. To run the project in UI mode use the command: npx cypress open.


