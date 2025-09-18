# Contributing to this project

Thank you for your interest in contributing to this project. To ensure a smooth and collaborative process, please review the following guidelines.

## Table of Contents

- [Getting Started](#getting-started)
- [Development](#development)
- [Building the Project](#building-the-project)
- [Linting](#linting)
- [Testing](#testing)
- [Deployment](#deployment)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** to your local machine:
    ```bash
    git clone https://github.com/your-username/mps.in.git
    ```
3.  **Navigate to the project directory:**
    ```bash
    cd mps.in
    ```
4.  **Install the dependencies:**
    ```bash
    npm install
    ```

## Development

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Next.js development server with Turbopack on `http://localhost:3000`.

## Building the Project

To create a production-ready build, run the following command:

```bash
npm run build
```

The output will be in the `.next` directory. To start the production server, run:

```bash
npm run start
```

## Linting

This project uses ESLint for code quality and consistency. To run the linter, use the following command:

```bash
npm run lint
```

Please ensure that your code passes the linting checks before submitting a pull request.

## Testing

This project currently does not have a test suite. Contributions to add testing are highly welcome. When adding tests, please use a widely-used testing framework such as [Jest](https://jestjs.io/) or [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Deployment

Deployment is automated via a GitHub Actions workflow. The workflow is triggered on every push to the `main` branch and deploys the application to GitHub Pages.

The deployment process consists of two main jobs:

1.  **Build:** This job checks out the code, installs dependencies, and builds the Next.js application. The build artifact is then uploaded.
2.  **Deploy:** This job deploys the build artifact to GitHub Pages.

You can monitor the deployment status in the "Actions" tab of the GitHub repository.

## Pull Request Process

1.  Ensure that your code adheres to the [Coding Standards](#coding-standards).
2.  If you have added new features, please include relevant documentation.
3.  Make sure your code passes the linting checks.
4.  Push your changes to your fork and submit a pull request to the `main` branch of the original repository.
5.  Provide a clear and descriptive title and description for your pull request.

## Coding Standards

-   Follow the existing code style.
-   Use clear and descriptive variable and function names.
-   Add comments to your code where necessary to explain complex logic.
-   Keep your code modular and reusable.
