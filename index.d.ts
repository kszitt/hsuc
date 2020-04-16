import { Plugin } from 'webpack';
export default Hsuc;

declare class Hsuc extends Plugin {
  constructor(options: HsucPlugin.Options);
}

declare namespace HsucPlugin {
  interface DefaultOptions {
    log?: boolean,
    cover?: boolean|RegExp,
    disable?: boolean;
    removePrevVersion?: boolean,
  }

  interface Aliyun {
    region: string;
    accessKeyId: string;
    accessKeySecret: string;
    bucket: string;
  }

  interface Huawei {
    accessKeyId: string;
    secretAccessKey: string;
    server: string;
    bucket: string;
  }

  interface Upyun {
    serviceName: string;
    operatorName: string;
    operatorPassword: string;
  }

  interface Qiniu {
    accessKey: string;
    secretKey: string;
    bucket: string;
    zone: string;
  }

  interface Options extends DefaultOptions {
    cloudFolder: string;
    domain: string;
    custom?: NodeJS.Require;
    aliyun?: Aliyun;
    huawei?: Huawei;
    upyun?: Upyun;
    qiniu?: Qiniu;
  }
}

