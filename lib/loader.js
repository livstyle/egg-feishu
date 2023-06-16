'use strict';

const lark = require('@larksuiteoapi/node-sdk');

module.exports = app => {
    const defaultConfig = {
        appId: 'app id',
        appSecret: 'app secret',
        appType: lark.AppType.SelfBuild,
        domain: lark.Domain.Feishu,
    };
    const config = app.config.omsFeishu || defaultConfig;
    !config.appType && (config.appType = lark.AppType.SelfBuild);
    !config.appType && (config.appType = lark.Domain.Feishu);
    app.feishu = new lark.Client(config);
};