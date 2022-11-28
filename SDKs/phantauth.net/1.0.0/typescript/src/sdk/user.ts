import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class User {
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
   * getUserUsername - Get a User
   *
   * Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
   * In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
   * In lack of a user name, all calls generate a different user object to the randomly generated user name.
   * 
   * By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.
   * 
   * If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
   * In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`
   * 
   * The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
   * The members of a team are users randomly generated from the team name.
  **/
  getUserUsername(
    req: operations.GetUserUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserUsernameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getUserUsername200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserUsernameTokenKind - Get a User Token
   *
   * It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
   * 
   * This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
   * Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
  **/
  getUserUsernameTokenKind(
    req: operations.GetUserUsernameTokenKindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserUsernameTokenKindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserUsernameTokenKindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{username}/token/{kind}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserUsernameTokenKindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUser - Create a User Selfie
   *
   * To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
   * Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
   * By the use of a selfie token, you can use your own user objects during the authentication process.
   * 
   * Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
  **/
  postUser(
    req: operations.PostUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user";

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
        const res: operations.PostUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
