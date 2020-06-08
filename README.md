<br />
<p align="center">
  <a href="https://github.com/Alifilho/google-cloud-vision-services">
    <img src="https://miro.medium.com/max/450/1*hkBHMf5SIWhWK5aGDFrnEw.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Google Cloud Vision Api</h3>

  <p align="center">
    Api to use all google cloud vision services, made with TypeScript ❤️!
    <br />
    <a href="https://cloud.google.com/vision/overview/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Google offers an incredible api with several services related to images and AI, this is a project that in a simple way brings together its features and makes its use simpler.

You can simply create an account at GCP and upload an image and receive data from it through that backend.

The backend receives your data and the image and returns its data through JSON according to the type of request you requested

### Built With

* [NodeJS](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [ExpressJS](https://expressjs.com/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```
* yarn

https://classic.yarnpkg.com/en/docs/install/


### Installation

1. Create a GCP account
2. Clone the repo
```sh
git clone https://github.com/Alifilho/google-cloud-vision-services
```
3. Install NPM packages
```sh
yarn
```
4. Run locally
```sh
yarn start
```

## Usage

Basically there are two options, send the photo directly or in base64 format in a request, the routes are:

* Base64: ``/api/base64``
* Image: ``/api/upload-image``

In both you must pass a Header with the name Type, and the values can be:

* TEXT_DETECTION
* FACE_DETECTION
* IMAGE_PROPERTIES
* LABEL_DETECTION
* LANDMARK_DETECTION
* LOGO_DETECTION
* OBJECT_LOCATION
* SAFE_SEARCH_DETECTION
* WEB_DETECTION

And you need to pass the JSON key and email that you got from GCP in the request body.

It will return the values according to the type of the requested request.

## Contributing

Well the project is simple, and another demonstration of GCP in Node, but if interested in, contributions and forks are always amazing. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Alisson Oliveira - [Linkedin](https://www.linkedin.com/in/alifilho/) - alissonoliveiram@gmail.com

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Google Cloud Vision Docs](https://cloud.google.com/vision/overview/docs)
* [Typescript Docs](https://www.typescriptlang.org/docs/home.html)
* [Celebrate](https://github.com/arb/celebrate)
* [Jest](https://jestjs.io/docs/en/getting-started)
* [Cors](https://github.com/expressjs/cors)
* [Multer](https://github.com/expressjs/multer)
