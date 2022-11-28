import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Client {
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
   * getClientClientId - Get a Client
   *
   * Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
   * In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
   * In lack of a client ID, all calls generate a different client object to the randomly generated client ID.
   * 
   * By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.
   * 
   * If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`
   * 
   * The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
   * The members of a fleet are clients randomly generated from the fleet name.
  **/
  getClientClientId(
    req: operations.GetClientClientIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClientClientIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClientClientIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/client/{client_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetClientClientIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getClientClientId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getClientClientIdTokenKind - Get a Client Token
   *
   * It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
   * 
   * It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
  **/
  getClientClientIdTokenKind(
    req: operations.GetClientClientIdTokenKindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClientClientIdTokenKindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClientClientIdTokenKindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/client/{client_id}/token/{kind}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetClientClientIdTokenKindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postClient - Create a Client Selfie
   *
   * To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
   * Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
   * By the use of a selfie token, you can use your own client objects in the authentication process.
  **/
  postClient(
    req: operations.PostClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/client";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
