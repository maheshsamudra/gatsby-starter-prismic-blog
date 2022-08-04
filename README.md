<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

Kick off your project with this blog boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running with Prismic.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the starter
    gatsby new my-prismic-starter https://github.com/maheshsamudra/gatsby-starter-prismic-blog
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-prismic-starter/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000!`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-prismic-starter` directory in your code editor of choice and edit the files in `src/templates/` folder. Save your changes and the browser will update in real time! Read more about Gatsby's [createPages API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## What's included?

```sh
├── README.md
├── gatsby-config.js
├── gatsby-node.js
├── src
│   ├── components
│   ├── pages
│   ├── colors.css.ts
│   ├── styles.css.ts
│   └── theme.css.ts
└── .env.EXAMPLE
```

1. **`gatsby-config.js`**: [Gatsby config][] file that includes plugins required for this starter.
2. **`gatsby-node.js`**: [Gatsby Node][] config file that creates an abstract data model for the homepage content.
3. **`src/`**: The source directory for the starter, including templates, components, and more.


## Getting Started:

1. Create a repository in [Prismic](https://prismic.io/)
2. Create two custom types - home_page and post. Use the JSON schema on `/config/prismic/schema` to create the fields.
3. Add content to the home_page and add some posts.
4. Update the .env file. The API keys can be obtained from Prismic Repo's Settings -> API & Security section.
5. That's it. You can start the project: `npm run develop`
