import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://accounts.twilio.com",
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


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
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
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * createCredentialAws - Create a new AWS Credential
  **/
  createCredentialAws(
    req: operations.CreateCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.CreateCredentialAwsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/AWS";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialAws = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCredentialPublicKey - Create a new Public Key Credential
  **/
  createCredentialPublicKey(
    req: operations.CreateCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.CreateCredentialPublicKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/PublicKeys";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSecondaryAuthToken - Create a new secondary Auth Token
  **/
  createSecondaryAuthToken(
    req: operations.CreateSecondaryAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSecondaryAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSecondaryAuthTokenRequest(req);
    }
    
    let baseURL: string = operations.CreateSecondaryAuthTokenServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/AuthTokens/Secondary";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateSecondaryAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1SecondaryAuthToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCredentialAws - Delete a Credential from your account
  **/
  deleteCredentialAws(
    req: operations.DeleteCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.DeleteCredentialAwsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/AWS/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCredentialPublicKey - Delete a Credential from your account
  **/
  deleteCredentialPublicKey(
    req: operations.DeleteCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.DeleteCredentialPublicKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/PublicKeys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSecondaryAuthToken - Delete the secondary Auth Token from your account
  **/
  deleteSecondaryAuthToken(
    req: operations.DeleteSecondaryAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSecondaryAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSecondaryAuthTokenRequest(req);
    }
    
    let baseURL: string = operations.DeleteSecondaryAuthTokenServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/AuthTokens/Secondary";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSecondaryAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCredentialAws - Fetch the AWS credentials specified by the provided Credential Sid
  **/
  fetchCredentialAws(
    req: operations.FetchCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.FetchCredentialAwsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/AWS/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialAws = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCredentialPublicKey - Fetch the public key specified by the provided Credential Sid
  **/
  fetchCredentialPublicKey(
    req: operations.FetchCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.FetchCredentialPublicKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/PublicKeys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCredentialAws - Retrieves a collection of AWS Credentials belonging to the account used to make the request
  **/
  listCredentialAws(
    req: operations.ListCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.ListCredentialAwsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/AWS";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCredentialAwsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCredentialPublicKey - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
  **/
  listCredentialPublicKey(
    req: operations.ListCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.ListCredentialPublicKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/PublicKeys";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCredentialPublicKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateAuthTokenPromotion - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
  **/
  updateAuthTokenPromotion(
    req: operations.UpdateAuthTokenPromotionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAuthTokenPromotionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAuthTokenPromotionRequest(req);
    }
    
    let baseURL: string = operations.UpdateAuthTokenPromotionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/AuthTokens/Promote";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateAuthTokenPromotionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1AuthTokenPromotion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCredentialAws - Modify the properties of a given Account
  **/
  updateCredentialAws(
    req: operations.UpdateCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.UpdateCredentialAwsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/AWS/{Sid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialAws = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCredentialPublicKey - Modify the properties of a given Account
  **/
  updateCredentialPublicKey(
    req: operations.UpdateCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.UpdateCredentialPublicKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/PublicKeys/{Sid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
