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
  
  // CreateCredentialAws - Create a new AWS Credential
  CreateCredentialAws(
    req: operations.CreateCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.CREATECREDENTIALAWS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/AWS";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialAws = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCredentialPublicKey - Create a new Public Key Credential
  CreateCredentialPublicKey(
    req: operations.CreateCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.CREATECREDENTIALPUBLICKEY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/PublicKeys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSecondaryAuthToken - Create a new secondary Auth Token
  CreateSecondaryAuthToken(
    req: operations.CreateSecondaryAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSecondaryAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSecondaryAuthTokenRequest(req);
    }
    
    let baseURL: string = operations.CREATESECONDARYAUTHTOKEN_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/AuthTokens/Secondary";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSecondaryAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1SecondaryAuthToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCredentialAws - Delete a Credential from your account
  DeleteCredentialAws(
    req: operations.DeleteCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.DELETECREDENTIALAWS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/AWS/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCredentialPublicKey - Delete a Credential from your account
  DeleteCredentialPublicKey(
    req: operations.DeleteCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.DELETECREDENTIALPUBLICKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/PublicKeys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSecondaryAuthToken - Delete the secondary Auth Token from your account
  DeleteSecondaryAuthToken(
    req: operations.DeleteSecondaryAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSecondaryAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSecondaryAuthTokenRequest(req);
    }
    
    let baseURL: string = operations.DELETESECONDARYAUTHTOKEN_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/AuthTokens/Secondary";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSecondaryAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCredentialAws - Fetch the AWS credentials specified by the provided Credential Sid
  FetchCredentialAws(
    req: operations.FetchCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.FETCHCREDENTIALAWS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/AWS/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialAws = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCredentialPublicKey - Fetch the public key specified by the provided Credential Sid
  FetchCredentialPublicKey(
    req: operations.FetchCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.FETCHCREDENTIALPUBLICKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/PublicKeys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCredentialAws - Retrieves a collection of AWS Credentials belonging to the account used to make the request
  ListCredentialAws(
    req: operations.ListCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.LISTCREDENTIALAWS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/AWS";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCredentialAwsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCredentialPublicKey - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
  ListCredentialPublicKey(
    req: operations.ListCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.LISTCREDENTIALPUBLICKEY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials/PublicKeys";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCredentialPublicKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateAuthTokenPromotion - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
  UpdateAuthTokenPromotion(
    req: operations.UpdateAuthTokenPromotionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAuthTokenPromotionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAuthTokenPromotionRequest(req);
    }
    
    let baseURL: string = operations.UPDATEAUTHTOKENPROMOTION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/AuthTokens/Promote";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateAuthTokenPromotionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1AuthTokenPromotion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCredentialAws - Modify the properties of a given Account
  UpdateCredentialAws(
    req: operations.UpdateCredentialAwsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCredentialAwsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCredentialAwsRequest(req);
    }
    
    let baseURL: string = operations.UPDATECREDENTIALAWS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/AWS/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateCredentialAwsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialAws = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCredentialPublicKey - Modify the properties of a given Account
  UpdateCredentialPublicKey(
    req: operations.UpdateCredentialPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCredentialPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCredentialPublicKeyRequest(req);
    }
    
    let baseURL: string = operations.UPDATECREDENTIALPUBLICKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/PublicKeys/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateCredentialPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountsV1CredentialCredentialPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
