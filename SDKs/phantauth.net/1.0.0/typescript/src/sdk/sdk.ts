import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://phantauth.net",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // GetClientClientId - Get a Client
  /** 
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
  GetClientClientId(
    req: operations.GetClientClientIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClientClientIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClientClientIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/client/{client_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClientClientIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClientClientId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClientClientIdTokenKind - Get a Client Token
  /** 
   * It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
   * 
   * It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
  **/
  GetClientClientIdTokenKind(
    req: operations.GetClientClientIdTokenKindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClientClientIdTokenKindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClientClientIdTokenKindRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/client/{client_id}/token/{kind}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClientClientIdTokenKindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomainDomainname - Get a Domain
  /** 
   * This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
   * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
   * 
   * Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
  **/
  GetDomainDomainname(
    req: operations.GetDomainDomainnameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomainDomainnameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomainDomainnameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domain/{domainname}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomainDomainnameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDomainDomainname200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFleetFleetname - Get a Fleet
  /** 
   * Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
   * In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
   * In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.
  **/
  GetFleetFleetname(
    req: operations.GetFleetFleetnameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFleetFleetnameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFleetFleetnameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/fleet/{fleetname}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFleetFleetnameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFleetFleetname200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamTeamname - Get a Team
  /** 
   * Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
   * In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
   * In lack of a team name, all calls generate a different team object to the randomly generated team name.
  **/
  GetTeamTeamname(
    req: operations.GetTeamTeamnameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamTeamnameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamTeamnameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{teamname}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamTeamnameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTeamTeamname200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTenantTenantname - Get a Tenant
  /** 
   * This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
   * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
   * 
   * Tenantname is the name of the full DNS domain of the tenant you get.
   * In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).
  **/
  GetTenantTenantname(
    req: operations.GetTenantTenantnameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTenantTenantnameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTenantTenantnameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tenant/{tenantname}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTenantTenantnameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTenantTenantname200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserUsername - Get a User
  /** 
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
  GetUserUsername(
    req: operations.GetUserUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserUsernameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{username}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getUserUsername200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserUsernameTokenKind - Get a User Token
  /** 
   * It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
   * 
   * This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
   * Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
  **/
  GetUserUsernameTokenKind(
    req: operations.GetUserUsernameTokenKindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserUsernameTokenKindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserUsernameTokenKindRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{username}/token/{kind}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserUsernameTokenKindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostClient - Create a Client Selfie
  /** 
   * To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
   * Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
   * By the use of a selfie token, you can use your own client objects in the authentication process.
  **/
  PostClient(
    req: operations.PostClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/client";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUser - Create a User Selfie
  /** 
   * To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
   * Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
   * By the use of a selfie token, you can use your own user objects during the authentication process.
   * 
   * Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
  **/
  PostUser(
    req: operations.PostUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
