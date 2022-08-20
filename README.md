![GitHub top language](https://img.shields.io/github/languages/top/FedeBayer/portfolio-FrontEnd?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/FedeBayer/portfolio-FrontEnd?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/FedeBayer/portfolio-FrontEnd?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/FedeBayer/portfolio-FrontEnd?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/FedeBayer/portfolio-FrontEnd?style=for-the-badge)


<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FedeBayer/portfolio-FrontEnd">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJikTaUj3vhsIs4XjTid7qQocT8C5AHePntQ&usqp=CAU" alt="Logo" width="100" height="100">
  </a>
  <h3 align="center">Portfolio</h3>
  <p align="center">
    <br />
    <a href="https://github.com/FedeBayer/portfolio-FrontEnd/wiki"><strong>Explore the wiki »</strong></a>
    <br />
    <br />
    <a href="https://fedebayer.github.io/portfolio-FrontEnd/">View Demo</a>
    ·
    <a href="https://github.com/FedeBayer/portfolio-FrontEnd/issues">Report Bug</a>
    ·
    <a href="https://github.com/FedeBayer/portfolio-FrontEnd/issues">Request Feature</a>
  </p>
</div>

## Introduction

This project is about a **full-stack web**, in this case a web portfolio.

This part focus on the frontend of the page (**SPA Angular**).

Here is more info about the [backend](https://github.com/FedeBayer/portfolio-BackEnd)

<img src="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" width="50%"></img>



### Built With

* HTML/CSS
* JavaScript/TypeScript

<h4>Frameworks/Libraries</h4>

* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FedeBayer/portfolio-FrontEnd.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `src/enviroments/enviroment.ts` like for example:
   ```js
   
   const apiBaseUrl = 'http://localhost:8080';
   const apiAuthUrl = 'http://localhost:8080/auth/';
   ```
4. Compile with command
   ```js
   ng serve
   ```
5. Needs to have backend server running to fetch the data (more in [backend-repo](https://github.com/FedeBayer/portfolio-BackEnd))

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Login / Authentication

* Anyone can see the lists of data.
* To transform the data (insert/update/delete) you need to log in as an **admin**.
* use `/login` to log in.




<!-- CONTACT -->
## Contact

[https://www.linkedin.com/in/federicobayerque/](https://www.linkedin.com/in/federicobayerque/)  - federicobayerque@gmail.com

Project Link: [https://github.com/FedeBayer/portfolio-FrontEnd](https://github.com/FedeBayer/portfolio-FrontEnd)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com


                                                        Angular Info

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
