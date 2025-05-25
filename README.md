# Project Name

This is a project that uses Pelican to generate a static website.

## Local Setup

To set up and run this project locally, follow these steps:

1.  **Install Pelican:**
    ```bash
    pip install pelican
    ```

2.  **Generate the website:**
    ```bash
    make html
    ```

3.  **Serve the website locally:**
    ```bash
    make serve
    ```
    This will typically make the site available at `http://localhost:8000/`.

4.  **For local development (auto-regeneration):**
    ```bash
    make devserver
    ```
    This command will monitor your source files for changes and automatically regenerate the website.

## Deployment

To deploy the website, follow these steps:

1.  **Generate the website for production:**
    ```bash
    make publish
    ```
    This command will generate the website with production settings.

2.  **Deploy to GitHub Pages:**
    ```bash
    make github
    ```
    This command will push the generated website to the `gh-pages` branch of your GitHub repository, making it live at `greendad.github.io`. Ensure your repository is configured to serve from the `gh-pages` branch.
