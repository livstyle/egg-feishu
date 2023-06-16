import * as lark from '@larksuiteoapi/node-sdk';

declare module 'egg' {
  // extend app
  interface Application {
    feishu: lark.Client;
  }

  // extend your config
  interface EggAppConfig {
    feishu: {
      appId: string,
      appSecret: string,
      appType?: number, // default 0 lark.AppType.SelfBuild 
      domain?: number; // default 0 lark.Domain.Feishu
    }
  }
}