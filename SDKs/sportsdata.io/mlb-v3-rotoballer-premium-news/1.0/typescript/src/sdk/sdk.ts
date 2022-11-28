import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://api.sportsdata.io",
	"https://api.sportsdata.io",
	"http://azure-api.sportsdata.io",
	"https://azure-api.sportsdata.io",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * premiumNews - Premium News
  **/
  premiumNews(
    req: operations.PremiumNewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PremiumNewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PremiumNewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/RotoBallerPremiumNews", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PremiumNewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * premiumNewsByDate - Premium News by Date
  **/
  premiumNewsByDate(
    req: operations.PremiumNewsByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PremiumNewsByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PremiumNewsByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/RotoBallerPremiumNewsByDate/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PremiumNewsByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * premiumNewsByPlayer - Premium News by Player
  **/
  premiumNewsByPlayer(
    req: operations.PremiumNewsByPlayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PremiumNewsByPlayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PremiumNewsByPlayerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/RotoBallerPremiumNewsByPlayerID/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PremiumNewsByPlayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
