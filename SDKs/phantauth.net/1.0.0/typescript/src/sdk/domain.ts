import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Domain {
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
   * getDomainDomainname - Get a Domain
   *
   * This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
   * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
   * 
   * Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
  **/
  getDomainDomainname(
    req: operations.GetDomainDomainnameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomainDomainnameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomainDomainnameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domain/{domainname}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDomainDomainnameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDomainDomainname200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
