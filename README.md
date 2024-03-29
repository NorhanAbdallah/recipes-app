## Frontend challenge

simple recipes list, recipe profile, recipe search project written in react, typescript.

## Deployed App

Open [https://recipes-app-weld-nine.vercel.app/](https://recipes-app-weld-nine.vercel.app/) to view deployed app in the browser.

## Running Instructions

In the project directory, you can run:

### `npm install`

Installs node modules

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) to view homePage it in the browser.
Open [http://localhost:3000/recipeId](http://localhost:3000/1011) to view recipe profile it in the browser.

## Project Structure

```
├── adapters  // adapters layer
│   └── rest  //rest adapter to integrate with endpoints
│       └── index.ts
├── apis  // api's layer
│   └── recipes.ts // recipes apis (search, getDetails ,..)
├── App.tsx
├── index.tsx
├── models //each model's types
│   ├── api-response.ts
│   └── recipe.ts
├── react-app-env.d.ts
├── router //project's routes
│   ├── index.tsx
│   └── paths.ts
├── shared // shared componenst/assets/hooks across project
│   ├── assets
│   │   └── crop-plate-with-salad.svg
│   ├── hooks
│   │   └── useDebounce.ts
│   └── components
│       ├── card
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── chip
│       │   ├── index.tsx
│       │   └── types.ts
│       └── input-field
│           ├── index.tsx
│           ├── styles.ts
│           └── types.ts
├── theme // project's themes
│   ├── index.tsx
│   └── theme.ts
└───view
    └───recipes
        ├───recipe-profile
        │   └───components
        │       └───cooking-info-item
        └───recipes-list

```

## Libraries used

-   react
-   react-router
-   typscript
-   axios
-   material-ui

## Formater

-   prettier

## Improvments

-   Make it responsive!
-   Add workflow using github actions to automate deploy process
-   Tests
