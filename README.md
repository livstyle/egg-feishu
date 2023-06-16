# egg-feishu

Egg's feishu plugin.

## Install

```bash
$ npm i egg-feishu --save
```

## Configuration

Change `{app_root}/config/plugin.js` to enable `egg-feishu` plugin:

```js
exports.feishu = {
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

Please open an issue [here](https://github.com/livstyle/egg-feishu/issues).

## Contribution

If you are a contributor, follow [CONTRIBUTING](https://eggjs.org/zh-cn/contributing.html).

## License

[MIT](LICENSE)
