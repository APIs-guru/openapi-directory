import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Uninstallation {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteInstallation - アプリストアアプリのアンインストール
   *
   * このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
   * このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
   * 代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。
   * 
   * アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。
   * 
  **/
  deleteInstallation(
    req: operations.DeleteInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/appstore/v1/installation.json";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteInstallation200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
