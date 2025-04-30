# Autoemulate Website & Blog

Hosts code for website of the ["Autoemulate" Python package](https://github.com/alan-turing-institute/autoemulate), built using the Astro web framework.

Go to [autoemulate.com](https://www.autoemulate.com/) - pushes to the main branch will show up here, we use GH actions and GH pages to build the site.

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
4. Create a PR to `main`, this should generate a preview of your changes
5. Assign team members to review and merge as for other changes
