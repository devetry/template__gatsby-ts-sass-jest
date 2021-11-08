# README

# Overview

_Originally built using the [Default Gatsby Starter](https://github.com/gatsbyjs/gatsby-starter-default) template._

This template contains scaffolding for a Gatsby 4 project that uses TypeScript as the language, SCSS Components for styling, and Jest (using React Test Renderer) for the testing framework.

# Maintenance

Do you find this template useful? ... Great! Please be kind and follow these steps when using this template to ensure it stays useful

## Minor Upgrades

1. Clone the repo template (do not create project from template, actually clone it)
2. Checkout a new branch
3. Update packages to latest stable versions: `npm update`
4. Resolve any lingering issues
5. Submit a PR

## Major Upgrades

If there is a major upgrade available, such as Gatsby 5 being released, please open an issue.

# Requirements

[Hardware](https://www.gatsbyjs.com/docs/basic-hardware-software-requirements/)

Software

1. [NodeJS](https://www.gatsbyjs.com/docs/tutorial/part-0/#nodejs)
2. [Gastby CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)

# Installation

1. Run `gatsby new <project-name> https://github.com/devetry/template__gatsby-ts-sass-jest`

### Optional

- Generate TypeScript definition files for SCSS Modules for editing (see [styling](#styling)) by running `npm run type-scss`

## Styling

The styling is [Component-Scoped Styling](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/) with SCSS Modules. However, we use are using TypeScript and there is not a module for typed scss modules that has support for our version of Gatsby, therefore, there is a few extra configurations in place to fix some of missing features that are helpful for development:

- TypeScript files `.ts(x)` show a false error when importing scss files as modules. To fix this, in `src/typings/declarations.d.ts` there is a module declaration that exports all the SCSS module files.
- TypeScript files `.ts(x)` are unable to recognize and suggest contents available in SCSS modules while editing. The node modules `typed-scss-modules` and `node-sass@"^4.11.0` exist in the project as dev dependencies so that we can generate TypeScript definition files for our SCSS module files. To generate said files, simply run `npm run type-scss`

## Tests

### Unit Testing

[Jest](https://jestjs.io) is the testing framework for our Unit Tests. Specifically, it uses the `React Test Renderer` testing package. View [this documentation](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/) for the details of how it's all configured and how to write tests.
