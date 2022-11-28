import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Fleet {
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
   * getFleetFleetname - Get a Fleet
   *
   * Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
   * In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
   * In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.
  **/
  getFleetFleetname(
    req: operations.GetFleetFleetnameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFleetFleetnameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFleetFleetnameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/fleet/{fleetname}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFleetFleetnameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFleetFleetname200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
