# Animetrix: Anime Streaming Site

Welcome to Animetrix! This is a demo project designed to showcase how to simplify React app login with Asgardeo and the Asgardeo React SDK. Animetrix is an anime streaming site where users can browse and watch their favorite anime shows.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

Animetrix is an anime streaming site developed as a demo to illustrate how to simplify React app login with Asgardeo and the Asgardeo React SDK. This project includes basic Asgardeo React authentication SDK integration, secure external API invocation, and RBAC imeplementation.

## Features

- Asgardeo React SDK integration
- Secure routing
- Access external APIs
- Role based access control implementation

## Demo

Check out the live demo of Animetrix [here](#).

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- An Asgardeo account

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/animetrix.git
    cd animetrix
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. **Asgardeo Configuration:**
   - Sign up or log in to your Asgardeo account.
   - Create a new application and configure it for your React application.
   - Obtain the client ID, base URL, and other necessary credentials.

2. **Environment Variables:**
   - Create a `.env` file in the root directory and add the following variables:
    ```env
    REACT_APP_ASGARDEO_CLIENT_ID=your-asgardeo-client-id
    REACT_APP_ASGARDEO_BASE_URL=your-asgardeo-base-url
    REACT_APP_ASGARDEO_REDIRECT_URI=http://localhost:3000
    REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
    ```

## Usage

### Running the Application

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173`.

3. You should see the Animetrix homepage. Click the Sign In button to authenticate using Asgardeo.

## Deployment

To deploy the application, you can use any hosting service that supports React applications, such as Vercel, Netlify, or Heroku.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Asgardeo](https://wso2.com/asgardeo/) for providing the authentication service.
- [React](https://reactjs.org/) for the frontend framework.

Thank you for using Animetrix! We hope this project helps you understand how to implement secure user login with Asgardeo and the Asgardeo React SDK.
