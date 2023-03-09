# LearnDash Template System Draft

If you want to contribute to the development of this project, make sure that you read the [`CONTRIBUTING.md`](/CONTRIBUTING.md) file.

## Build requirements

For the generation of the templates, you only need `node`. If you use NVM then you can execute the following steps:

```bash
nvm install
nvm use
```

This will install and activate `node` 16.

## Build

```bash
git clone git@github.com:stellarwp/learndash-template-draft.git
cd learndash-template-draft
npm install
npm run build
```

All assets will be in `dist/`

## Develop

```bash
git clone git@github.com:stellarwp/learndash-template-draft.git
cd learndash-template-draft
npm install
npm start
```

When you make a change to a file on `src/` you'll see the result in `dist/`
