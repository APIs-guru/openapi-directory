import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://verify.twilio.com",
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
   * createAccessToken - Create a new enrollment Access Token for the Entity
  **/
  createAccessToken(
    req: operations.CreateAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAccessTokenRequest(req);
    }
    
    let baseURL: string = operations.CreateAccessTokenServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/AccessTokens", req.pathParams);

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
        const res: operations.CreateAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceAccessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createBucket - Create a new Bucket for a Rate Limit
  **/
  createBucket(
    req: operations.CreateBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBucketRequest(req);
    }
    
    let baseURL: string = operations.CreateBucketServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", req.pathParams);

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
        const res: operations.CreateBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimitBucket = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createChallenge - Create a new Challenge for the Factor
  **/
  createChallenge(
    req: operations.CreateChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateChallengeRequest(req);
    }
    
    let baseURL: string = operations.CreateChallengeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", req.pathParams);

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
        const res: operations.CreateChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallenge = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createEntity - Create a new Entity for the Service
  **/
  createEntity(
    req: operations.CreateEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEntityRequest(req);
    }
    
    let baseURL: string = operations.CreateEntityServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities", req.pathParams);

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
        const res: operations.CreateEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createMessagingConfiguration - Create a new MessagingConfiguration for a service.
  **/
  createMessagingConfiguration(
    req: operations.CreateMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.CreateMessagingConfigurationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations", req.pathParams);

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
        const res: operations.CreateMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceMessagingConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNewFactor - Create a new Factor for the Entity
  **/
  createNewFactor(
    req: operations.CreateNewFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewFactorRequest(req);
    }
    
    let baseURL: string = operations.CreateNewFactorServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", req.pathParams);

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
        const res: operations.CreateNewFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityNewFactor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNotification - Create a new Notification for the corresponding Challenge
  **/
  createNotification(
    req: operations.CreateNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNotificationRequest(req);
    }
    
    let baseURL: string = operations.CreateNotificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications", req.pathParams);

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
        const res: operations.CreateNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallengeNotification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createRateLimit - Create a new Rate Limit for a Service
  **/
  createRateLimit(
    req: operations.CreateRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRateLimitRequest(req);
    }
    
    let baseURL: string = operations.CreateRateLimitServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits", req.pathParams);

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
        const res: operations.CreateRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSafelist - Add a new phone number to SafeList.
  **/
  createSafelist(
    req: operations.CreateSafelistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSafelistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSafelistRequest(req);
    }
    
    let baseURL: string = operations.CreateSafelistServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/SafeList/Numbers";

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
        const res: operations.CreateSafelistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2Safelist = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createService - Create a new Verification Service.
  **/
  createService(
    req: operations.CreateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceRequest(req);
    }
    
    let baseURL: string = operations.CreateServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Services";

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
        const res: operations.CreateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createVerification - Create a new Verification using a Service
  **/
  createVerification(
    req: operations.CreateVerificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateVerificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateVerificationRequest(req);
    }
    
    let baseURL: string = operations.CreateVerificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Verifications", req.pathParams);

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
        const res: operations.CreateVerificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createVerificationCheck - challenge a specific Verification Check.
  **/
  createVerificationCheck(
    req: operations.CreateVerificationCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateVerificationCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateVerificationCheckRequest(req);
    }
    
    let baseURL: string = operations.CreateVerificationCheckServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/VerificationCheck", req.pathParams);

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
        const res: operations.CreateVerificationCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerificationCheck = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createWebhook - Create a new Webhook for the Service
  **/
  createWebhook(
    req: operations.CreateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWebhookRequest(req);
    }
    
    let baseURL: string = operations.CreateWebhookServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks", req.pathParams);

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
        const res: operations.CreateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBucket - Delete a specific Bucket.
  **/
  deleteBucket(
    req: operations.DeleteBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBucketRequest(req);
    }
    
    let baseURL: string = operations.DeleteBucketServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteEntity - Delete a specific Entity.
  **/
  deleteEntity(
    req: operations.DeleteEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEntityRequest(req);
    }
    
    let baseURL: string = operations.DeleteEntityServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteFactor - Delete a specific Factor.
  **/
  deleteFactor(
    req: operations.DeleteFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFactorRequest(req);
    }
    
    let baseURL: string = operations.DeleteFactorServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMessagingConfiguration - Delete a specific MessagingConfiguration.
  **/
  deleteMessagingConfiguration(
    req: operations.DeleteMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.DeleteMessagingConfigurationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRateLimit - Delete a specific Rate Limit.
  **/
  deleteRateLimit(
    req: operations.DeleteRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRateLimitRequest(req);
    }
    
    let baseURL: string = operations.DeleteRateLimitServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSafelist - Remove a phone number from SafeList.
  **/
  deleteSafelist(
    req: operations.DeleteSafelistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSafelistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSafelistRequest(req);
    }
    
    let baseURL: string = operations.DeleteSafelistServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/SafeList/Numbers/{PhoneNumber}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSafelistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteService - Delete a specific Verification Service Instance.
  **/
  deleteService(
    req: operations.DeleteServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceRequest(req);
    }
    
    let baseURL: string = operations.DeleteServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteWebhook - Delete a specific Webhook.
  **/
  deleteWebhook(
    req: operations.DeleteWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhookRequest(req);
    }
    
    let baseURL: string = operations.DeleteWebhookServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchAccessToken - Fetch an Access Token for the Entity
  **/
  fetchAccessToken(
    req: operations.FetchAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAccessTokenRequest(req);
    }
    
    let baseURL: string = operations.FetchAccessTokenServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/AccessTokens/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceAccessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchBucket - Fetch a specific Bucket.
  **/
  fetchBucket(
    req: operations.FetchBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchBucketRequest(req);
    }
    
    let baseURL: string = operations.FetchBucketServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimitBucket = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchChallenge - Fetch a specific Challenge.
  **/
  fetchChallenge(
    req: operations.FetchChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchChallengeRequest(req);
    }
    
    let baseURL: string = operations.FetchChallengeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallenge = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchEntity - Fetch a specific Entity.
  **/
  fetchEntity(
    req: operations.FetchEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEntityRequest(req);
    }
    
    let baseURL: string = operations.FetchEntityServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchFactor - Fetch a specific Factor.
  **/
  fetchFactor(
    req: operations.FetchFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFactorRequest(req);
    }
    
    let baseURL: string = operations.FetchFactorServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityFactor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchForm - Fetch the forms for a specific Form Type.
  **/
  fetchForm(
    req: operations.FetchFormRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFormRequest(req);
    }
    
    let baseURL: string = operations.FetchFormServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Forms/{FormType}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFormResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2Form = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMessagingConfiguration - Fetch a specific MessagingConfiguration.
  **/
  fetchMessagingConfiguration(
    req: operations.FetchMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FetchMessagingConfigurationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceMessagingConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchRateLimit - Fetch a specific Rate Limit.
  **/
  fetchRateLimit(
    req: operations.FetchRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRateLimitRequest(req);
    }
    
    let baseURL: string = operations.FetchRateLimitServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSafelist - Check if a phone number exists in SafeList.
  **/
  fetchSafelist(
    req: operations.FetchSafelistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSafelistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSafelistRequest(req);
    }
    
    let baseURL: string = operations.FetchSafelistServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/SafeList/Numbers/{PhoneNumber}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSafelistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2Safelist = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchService - Fetch specific Verification Service Instance.
  **/
  fetchService(
    req: operations.FetchServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceRequest(req);
    }
    
    let baseURL: string = operations.FetchServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchVerification - Fetch a specific Verification
  **/
  fetchVerification(
    req: operations.FetchVerificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVerificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVerificationRequest(req);
    }
    
    let baseURL: string = operations.FetchVerificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Verifications/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchVerificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchVerificationAttempt - Fetch a specific verification attempt.
  **/
  fetchVerificationAttempt(
    req: operations.FetchVerificationAttemptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVerificationAttemptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVerificationAttemptRequest(req);
    }
    
    let baseURL: string = operations.FetchVerificationAttemptServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Attempts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchVerificationAttemptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2VerificationAttempt = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchVerificationAttemptsSummary - Get a summary of how many attempts were made and how many were converted.
  **/
  fetchVerificationAttemptsSummary(
    req: operations.FetchVerificationAttemptsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVerificationAttemptsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVerificationAttemptsSummaryRequest(req);
    }
    
    let baseURL: string = operations.FetchVerificationAttemptsSummaryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Attempts/Summary";
    
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
        const res: operations.FetchVerificationAttemptsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2VerificationAttemptsSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchWebhook - Fetch a specific Webhook.
  **/
  fetchWebhook(
    req: operations.FetchWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWebhookRequest(req);
    }
    
    let baseURL: string = operations.FetchWebhookServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listBucket - Retrieve a list of all Buckets for a Rate Limit.
  **/
  listBucket(
    req: operations.ListBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBucketRequest(req);
    }
    
    let baseURL: string = operations.ListBucketServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", req.pathParams);
    
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
        const res: operations.ListBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listBucketResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listChallenge - Retrieve a list of all Challenges for a Factor.
  **/
  listChallenge(
    req: operations.ListChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListChallengeRequest(req);
    }
    
    let baseURL: string = operations.ListChallengeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", req.pathParams);
    
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
        const res: operations.ListChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listChallengeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listEntity - Retrieve a list of all Entities for a Service.
  **/
  listEntity(
    req: operations.ListEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEntityRequest(req);
    }
    
    let baseURL: string = operations.ListEntityServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities", req.pathParams);
    
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
        const res: operations.ListEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEntityResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listFactor - Retrieve a list of all Factors for an Entity.
  **/
  listFactor(
    req: operations.ListFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFactorRequest(req);
    }
    
    let baseURL: string = operations.ListFactorServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", req.pathParams);
    
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
        const res: operations.ListFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFactorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMessagingConfiguration - Retrieve a list of all Messaging Configurations for a Service.
  **/
  listMessagingConfiguration(
    req: operations.ListMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.ListMessagingConfigurationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations", req.pathParams);
    
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
        const res: operations.ListMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMessagingConfigurationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRateLimit - Retrieve a list of all Rate Limits for a service.
  **/
  listRateLimit(
    req: operations.ListRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRateLimitRequest(req);
    }
    
    let baseURL: string = operations.ListRateLimitServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits", req.pathParams);
    
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
        const res: operations.ListRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRateLimitResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listService - Retrieve a list of all Verification Services for an account.
  **/
  listService(
    req: operations.ListServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceRequest(req);
    }
    
    let baseURL: string = operations.ListServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Services";
    
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
        const res: operations.ListServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listServiceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listVerificationAttempt - List all the verification attempts for a given Account.
  **/
  listVerificationAttempt(
    req: operations.ListVerificationAttemptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVerificationAttemptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVerificationAttemptRequest(req);
    }
    
    let baseURL: string = operations.ListVerificationAttemptServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Attempts";
    
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
        const res: operations.ListVerificationAttemptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listVerificationAttemptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listVerificationTemplate - List all the available templates for a given Account.
  **/
  listVerificationTemplate(
    req: operations.ListVerificationTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVerificationTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVerificationTemplateRequest(req);
    }
    
    let baseURL: string = operations.ListVerificationTemplateServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Templates";
    
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
        const res: operations.ListVerificationTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listVerificationTemplateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listWebhook - Retrieve a list of all Webhooks for a Service.
  **/
  listWebhook(
    req: operations.ListWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWebhookRequest(req);
    }
    
    let baseURL: string = operations.ListWebhookServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks", req.pathParams);
    
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
        const res: operations.ListWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateBucket - Update a specific Bucket.
  **/
  updateBucket(
    req: operations.UpdateBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBucketRequest(req);
    }
    
    let baseURL: string = operations.UpdateBucketServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", req.pathParams);

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
        const res: operations.UpdateBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimitBucket = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateChallenge - Verify a specific Challenge.
  **/
  updateChallenge(
    req: operations.UpdateChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateChallengeRequest(req);
    }
    
    let baseURL: string = operations.UpdateChallengeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", req.pathParams);

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
        const res: operations.UpdateChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallenge = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateFactor - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
  **/
  updateFactor(
    req: operations.UpdateFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFactorRequest(req);
    }
    
    let baseURL: string = operations.UpdateFactorServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", req.pathParams);

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
        const res: operations.UpdateFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityFactor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMessagingConfiguration - Update a specific MessagingConfiguration
  **/
  updateMessagingConfiguration(
    req: operations.UpdateMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UpdateMessagingConfigurationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", req.pathParams);

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
        const res: operations.UpdateMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceMessagingConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateRateLimit - Update a specific Rate Limit.
  **/
  updateRateLimit(
    req: operations.UpdateRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRateLimitRequest(req);
    }
    
    let baseURL: string = operations.UpdateRateLimitServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", req.pathParams);

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
        const res: operations.UpdateRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateService - Update a specific Verification Service.
  **/
  updateService(
    req: operations.UpdateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceRequest(req);
    }
    
    let baseURL: string = operations.UpdateServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{Sid}", req.pathParams);

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
        const res: operations.UpdateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateVerification - Update a Verification status
  **/
  updateVerification(
    req: operations.UpdateVerificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateVerificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateVerificationRequest(req);
    }
    
    let baseURL: string = operations.UpdateVerificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Verifications/{Sid}", req.pathParams);

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
        const res: operations.UpdateVerificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateWebhook(
    req: operations.UpdateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWebhookRequest(req);
    }
    
    let baseURL: string = operations.UpdateWebhookServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", req.pathParams);

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
        const res: operations.UpdateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
