# Habeeb Hooshmand

Personal biography and career timeline built with React, Material UI, and Vite. Firebase Hosting serves the production site at [habeeb.bio](https://habeeb.bio/); Firebase Analytics runs in the browser.

## Local development

Use Node.js 22.22.2+, 24.15.0+, or 26+ and Yarn Classic 1.22.22.

```sh
yarn install --frozen-lockfile
yarn start
```

Open the local URL printed by Vite (port 3000 by default).

## Validation

```sh
yarn lint
yarn test
yarn build
```

`yarn test` runs the Vitest suite once. Use `yarn test:watch` during development. Tests use Testing Library and jsdom.

`yarn build` writes the production site to `build/`, matching the existing Firebase Hosting configuration. Use `yarn preview` to inspect that build locally.

## Deployment

With the Firebase CLI installed and authenticated to the `habeeb-bio` project:

```sh
yarn deploy
```

The deploy command rebuilds the site before publishing. Keep `yarn.lock` committed so installs use the verified dependency versions.

Firebase 13 pins a vulnerable gRPC 1.9 release through its unused Firestore dependency. The Yarn resolution selects patched `@grpc/grpc-js` 1.14.6; remove the resolution when Firebase allows a patched release itself. MUI's timeline remains in the upstream Lab package, which is published as a beta.
