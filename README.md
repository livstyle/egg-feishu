# egg-feishu
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mongoose.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mongoose
[travis-image]: https://img.shields.io/travis/eggjs/egg-mongoose.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mongoose
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mongoose.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mongoose?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mongoose.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mongoose
[snyk-image]: https://snyk.io/test/npm/egg-mongoose/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mongoose
[download-image]: https://img.shields.io/npm/dm/egg-mongoose.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mongoose

Egg's mongoose plugin.

## Install

```bash
$ npm i egg-feishu --save
```

## Configuration

Change `{app_root}/config/plugin.js` to enable `egg-feishu` plugin:

```js
exports.mongoose = {
  enable: true,
  package: 'egg-feishu',
};
```

## Simple connection

### Config

```js
// {app_root}/config/config.default.js
// const lark = require('@larksuiteoapi/node-sdk');
exports.feishu = {
    appId: 'app id',
    appSecret: 'app secret',
    // appType: lark.AppType.SelfBuild,
    // domain: lark.Domain.Feishu,
};
```

### Example

```js

// {app_root}/app/controller/user.js
exports.index = function* (ctx) {
  ctx.body = yield ctx.app.feishu.contact.department.list();
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg-feishu/issues).

## Contribution

If you are a contributor, follow [CONTRIBUTING](https://eggjs.org/zh-cn/contributing.html).

## License

[MIT](LICENSE)
