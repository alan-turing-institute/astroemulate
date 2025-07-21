# Autoemulate Website & Blog

Hosts code for website of the ["Autoemulate" Python package](https://github.com/alan-turing-institute/autoemulate), built using the Astro web framework.

Go to [autoemulate.com](https://www.autoemulate.com/) - pushes to the main branch will show up here, we use GH actions and GH pages to build the site.

## Updating the website

The website is built using the [Astro framework](https://docs.astro.build/en/develop-and-build/). To update the website:

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/alan-turing-institute/astroemulate
   cd astroemulate
   npm install
   ```
2. Start the development server to preview changes:
   ```bash
   npm run dev
   ```
3. Create a new branch and make your changes.
4. Create a PR to `main` and assign team members to review

## Adding a new blog post

1. Create a new branch
2. Create a markdown document for your blog and add it to `src/content/blog`
3. Add the following to the top of the markdown, replacing the values:
   ```
    ---
    title: "AutoEmulate v0.3.0 release"
    pubDate: "2025-04-30"
    description: "Updates on new features in v0.3.0 release"
    author: "AutoEmulate contributors"
    release: "v0.3.0"
    ---
   ```
   Note: (`release`) is optional and should match a release on the autoemulate GitHub repo
4. Create a PR to `main` and assign team members to review
