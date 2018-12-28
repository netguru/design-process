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

## How to setup custom domain?

1. Update `base` setting in `.vuepress/config.js`

```diff
// .vuepress/config.js
{
-    base: process.env.NODE_ENV === 'production' ? '/design-process/' : '/',
+    base: '/',
    ...
}
```

2. Remove root path from fonts' paths in `.vuepress/style.styl`.

```diff
-  src: url('/design-process/fonts/AvertaStd-Regular.otf') format('opentype');
+  src: url('/fonts/AvertaStd-Regular.otf') format('opentype');
```

3. Update `deploy.sh` script:

Uncomment the following line, and set up your domain.
```diff
-# echo 'www.example.com' > CNAME
+echo 'www.example.com' > CNAME
```

4. Make sure domain is setup correctly

Visit [Github Pages Documentation](https://help.github.com/articles/setting-up-an-apex-domain/) for more informations or contact devops team via [dedicated service desk](https://netguru.atlassian.net/servicedesk/customer/portal/6/group/32/create/147).

Once everything is in place, commit your changes, and run `yarn deploy` to re-deploy ebook.