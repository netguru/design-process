# Design Process - Live Ebook

This repository contains content of [the following ebook](https://netguru.github.io/design-process).

## How to set it up locally?

1. Clone repository
```
git clone git@github.com:netguru/design-process.git
```

2. Install all dependencies
```
yarn install
```

3. Run local server
```
yarn start
```

Now all your changes should be visible on [localhost](http://localhost:8080).

## How to add content and customize this ebook?

This e-book is built upon [vuepress-theme-live-ebook](https://github.com/netguru/vuepress-theme-live-ebook). Visit its' [documentation](https://github.com/netguru/vuepress-theme-live-ebook) for detailed instruction and tips.

## How to deploy new version?

This e-book uses [Github Pages](https://pages.github.com/) for deployment.
Run `yarn deploy` - it will build the project and push it to `gh-pages` branch. That's it!
