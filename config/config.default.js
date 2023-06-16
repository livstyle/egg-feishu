'use strict';

const lark = require('@larksuiteoapi/node-sdk');

/**
 * egg-feishu default config
 * @member Config#feishu
 * @property {String} SOME_KEY - some description
 */
exports.feishu = {
    appId: 'app id',
    appSecret: 'app secret',
    appType: lark.AppType.SelfBuild,
    domain: lark.Domain.Feishu,
};
