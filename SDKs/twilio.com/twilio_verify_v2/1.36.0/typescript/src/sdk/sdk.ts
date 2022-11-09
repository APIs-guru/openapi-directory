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
  
  // CreateAccessToken - Create a new enrollment Access Token for the Entity
  CreateAccessToken(
    req: operations.CreateAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAccessTokenRequest(req);
    }
    
    let baseURL: string = operations.CREATEACCESSTOKEN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/AccessTokens", req.pathParams);
    
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
        let res: operations.CreateAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceAccessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateBucket - Create a new Bucket for a Rate Limit
  CreateBucket(
    req: operations.CreateBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBucketRequest(req);
    }
    
    let baseURL: string = operations.CREATEBUCKET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", req.pathParams);
    
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
        let res: operations.CreateBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimitBucket = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateChallenge - Create a new Challenge for the Factor
  CreateChallenge(
    req: operations.CreateChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateChallengeRequest(req);
    }
    
    let baseURL: string = operations.CREATECHALLENGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", req.pathParams);
    
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
        let res: operations.CreateChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallenge = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateEntity - Create a new Entity for the Service
  CreateEntity(
    req: operations.CreateEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEntityRequest(req);
    }
    
    let baseURL: string = operations.CREATEENTITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities", req.pathParams);
    
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
        let res: operations.CreateEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateMessagingConfiguration - Create a new MessagingConfiguration for a service.
  CreateMessagingConfiguration(
    req: operations.CreateMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.CREATEMESSAGINGCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations", req.pathParams);
    
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
        let res: operations.CreateMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceMessagingConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateNewFactor - Create a new Factor for the Entity
  CreateNewFactor(
    req: operations.CreateNewFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewFactorRequest(req);
    }
    
    let baseURL: string = operations.CREATENEWFACTOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", req.pathParams);
    
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
        let res: operations.CreateNewFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityNewFactor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateNotification - Create a new Notification for the corresponding Challenge
  CreateNotification(
    req: operations.CreateNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNotificationRequest(req);
    }
    
    let baseURL: string = operations.CREATENOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications", req.pathParams);
    
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
        let res: operations.CreateNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallengeNotification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateRateLimit - Create a new Rate Limit for a Service
  CreateRateLimit(
    req: operations.CreateRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRateLimitRequest(req);
    }
    
    let baseURL: string = operations.CREATERATELIMIT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits", req.pathParams);
    
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
        let res: operations.CreateRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSafelist - Add a new phone number to SafeList.
  CreateSafelist(
    req: operations.CreateSafelistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSafelistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSafelistRequest(req);
    }
    
    let baseURL: string = operations.CREATESAFELIST_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/SafeList/Numbers";
    
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
        let res: operations.CreateSafelistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2Safelist = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateService - Create a new Verification Service.
  CreateService(
    req: operations.CreateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Services";
    
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
        let res: operations.CreateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateVerification - Create a new Verification using a Service
  CreateVerification(
    req: operations.CreateVerificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateVerificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateVerificationRequest(req);
    }
    
    let baseURL: string = operations.CREATEVERIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Verifications", req.pathParams);
    
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
        let res: operations.CreateVerificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateVerificationCheck - challenge a specific Verification Check.
  CreateVerificationCheck(
    req: operations.CreateVerificationCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateVerificationCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateVerificationCheckRequest(req);
    }
    
    let baseURL: string = operations.CREATEVERIFICATIONCHECK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/VerificationCheck", req.pathParams);
    
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
        let res: operations.CreateVerificationCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerificationCheck = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateWebhook - Create a new Webhook for the Service
  CreateWebhook(
    req: operations.CreateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWebhookRequest(req);
    }
    
    let baseURL: string = operations.CREATEWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks", req.pathParams);
    
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
        let res: operations.CreateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteBucket - Delete a specific Bucket.
  DeleteBucket(
    req: operations.DeleteBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBucketRequest(req);
    }
    
    let baseURL: string = operations.DELETEBUCKET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEntity - Delete a specific Entity.
  DeleteEntity(
    req: operations.DeleteEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEntityRequest(req);
    }
    
    let baseURL: string = operations.DELETEENTITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFactor - Delete a specific Factor.
  DeleteFactor(
    req: operations.DeleteFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFactorRequest(req);
    }
    
    let baseURL: string = operations.DELETEFACTOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMessagingConfiguration - Delete a specific MessagingConfiguration.
  DeleteMessagingConfiguration(
    req: operations.DeleteMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.DELETEMESSAGINGCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRateLimit - Delete a specific Rate Limit.
  DeleteRateLimit(
    req: operations.DeleteRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRateLimitRequest(req);
    }
    
    let baseURL: string = operations.DELETERATELIMIT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSafelist - Remove a phone number from SafeList.
  DeleteSafelist(
    req: operations.DeleteSafelistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSafelistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSafelistRequest(req);
    }
    
    let baseURL: string = operations.DELETESAFELIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/SafeList/Numbers/{PhoneNumber}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSafelistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteService - Delete a specific Verification Service Instance.
  DeleteService(
    req: operations.DeleteServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteWebhook - Delete a specific Webhook.
  DeleteWebhook(
    req: operations.DeleteWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhookRequest(req);
    }
    
    let baseURL: string = operations.DELETEWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchAccessToken - Fetch an Access Token for the Entity
  FetchAccessToken(
    req: operations.FetchAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAccessTokenRequest(req);
    }
    
    let baseURL: string = operations.FETCHACCESSTOKEN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/AccessTokens/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceAccessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchBucket - Fetch a specific Bucket.
  FetchBucket(
    req: operations.FetchBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchBucketRequest(req);
    }
    
    let baseURL: string = operations.FETCHBUCKET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimitBucket = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchChallenge - Fetch a specific Challenge.
  FetchChallenge(
    req: operations.FetchChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchChallengeRequest(req);
    }
    
    let baseURL: string = operations.FETCHCHALLENGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallenge = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEntity - Fetch a specific Entity.
  FetchEntity(
    req: operations.FetchEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEntityRequest(req);
    }
    
    let baseURL: string = operations.FETCHENTITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchFactor - Fetch a specific Factor.
  FetchFactor(
    req: operations.FetchFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFactorRequest(req);
    }
    
    let baseURL: string = operations.FETCHFACTOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityFactor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchForm - Fetch the forms for a specific Form Type.
  FetchForm(
    req: operations.FetchFormRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFormRequest(req);
    }
    
    let baseURL: string = operations.FETCHFORM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Forms/{FormType}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFormResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2Form = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMessagingConfiguration - Fetch a specific MessagingConfiguration.
  FetchMessagingConfiguration(
    req: operations.FetchMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FETCHMESSAGINGCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceMessagingConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRateLimit - Fetch a specific Rate Limit.
  FetchRateLimit(
    req: operations.FetchRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRateLimitRequest(req);
    }
    
    let baseURL: string = operations.FETCHRATELIMIT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSafelist - Check if a phone number exists in SafeList.
  FetchSafelist(
    req: operations.FetchSafelistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSafelistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSafelistRequest(req);
    }
    
    let baseURL: string = operations.FETCHSAFELIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/SafeList/Numbers/{PhoneNumber}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSafelistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2Safelist = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchService - Fetch specific Verification Service Instance.
  FetchService(
    req: operations.FetchServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVerification - Fetch a specific Verification
  FetchVerification(
    req: operations.FetchVerificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVerificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVerificationRequest(req);
    }
    
    let baseURL: string = operations.FETCHVERIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Verifications/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchVerificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVerificationAttempt - Fetch a specific verification attempt.
  FetchVerificationAttempt(
    req: operations.FetchVerificationAttemptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVerificationAttemptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVerificationAttemptRequest(req);
    }
    
    let baseURL: string = operations.FETCHVERIFICATIONATTEMPT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Attempts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchVerificationAttemptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2VerificationAttempt = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVerificationAttemptsSummary - Get a summary of how many attempts were made and how many were converted.
  FetchVerificationAttemptsSummary(
    req: operations.FetchVerificationAttemptsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVerificationAttemptsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVerificationAttemptsSummaryRequest(req);
    }
    
    let baseURL: string = operations.FETCHVERIFICATIONATTEMPTSSUMMARY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Attempts/Summary";
    
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
        let res: operations.FetchVerificationAttemptsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2VerificationAttemptsSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchWebhook - Fetch a specific Webhook.
  FetchWebhook(
    req: operations.FetchWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWebhookRequest(req);
    }
    
    let baseURL: string = operations.FETCHWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListBucket - Retrieve a list of all Buckets for a Rate Limit.
  ListBucket(
    req: operations.ListBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBucketRequest(req);
    }
    
    let baseURL: string = operations.LISTBUCKET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", req.pathParams);
    
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
        let res: operations.ListBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listBucketResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListChallenge - Retrieve a list of all Challenges for a Factor.
  ListChallenge(
    req: operations.ListChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListChallengeRequest(req);
    }
    
    let baseURL: string = operations.LISTCHALLENGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", req.pathParams);
    
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
        let res: operations.ListChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listChallengeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEntity - Retrieve a list of all Entities for a Service.
  ListEntity(
    req: operations.ListEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEntityRequest(req);
    }
    
    let baseURL: string = operations.LISTENTITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities", req.pathParams);
    
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
        let res: operations.ListEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEntityResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFactor - Retrieve a list of all Factors for an Entity.
  ListFactor(
    req: operations.ListFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFactorRequest(req);
    }
    
    let baseURL: string = operations.LISTFACTOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", req.pathParams);
    
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
        let res: operations.ListFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFactorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMessagingConfiguration - Retrieve a list of all Messaging Configurations for a Service.
  ListMessagingConfiguration(
    req: operations.ListMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.LISTMESSAGINGCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations", req.pathParams);
    
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
        let res: operations.ListMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMessagingConfigurationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRateLimit - Retrieve a list of all Rate Limits for a service.
  ListRateLimit(
    req: operations.ListRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRateLimitRequest(req);
    }
    
    let baseURL: string = operations.LISTRATELIMIT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits", req.pathParams);
    
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
        let res: operations.ListRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRateLimitResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListService - Retrieve a list of all Verification Services for an account.
  ListService(
    req: operations.ListServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Services";
    
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
        let res: operations.ListServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVerificationAttempt - List all the verification attempts for a given Account.
  ListVerificationAttempt(
    req: operations.ListVerificationAttemptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVerificationAttemptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVerificationAttemptRequest(req);
    }
    
    let baseURL: string = operations.LISTVERIFICATIONATTEMPT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Attempts";
    
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
        let res: operations.ListVerificationAttemptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVerificationAttemptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVerificationTemplate - List all the available templates for a given Account.
  ListVerificationTemplate(
    req: operations.ListVerificationTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVerificationTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVerificationTemplateRequest(req);
    }
    
    let baseURL: string = operations.LISTVERIFICATIONTEMPLATE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Templates";
    
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
        let res: operations.ListVerificationTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVerificationTemplateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListWebhook - Retrieve a list of all Webhooks for a Service.
  ListWebhook(
    req: operations.ListWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWebhookRequest(req);
    }
    
    let baseURL: string = operations.LISTWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks", req.pathParams);
    
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
        let res: operations.ListWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateBucket - Update a specific Bucket.
  UpdateBucket(
    req: operations.UpdateBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBucketRequest(req);
    }
    
    let baseURL: string = operations.UPDATEBUCKET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimitBucket = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateChallenge - Verify a specific Challenge.
  UpdateChallenge(
    req: operations.UpdateChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateChallengeRequest(req);
    }
    
    let baseURL: string = operations.UPDATECHALLENGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityChallenge = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateFactor - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
  UpdateFactor(
    req: operations.UpdateFactorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFactorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFactorRequest(req);
    }
    
    let baseURL: string = operations.UPDATEFACTOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateFactorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceEntityFactor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMessagingConfiguration - Update a specific MessagingConfiguration
  UpdateMessagingConfiguration(
    req: operations.UpdateMessagingConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMessagingConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMessagingConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMESSAGINGCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", req.pathParams);
    
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
        let res: operations.UpdateMessagingConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceMessagingConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRateLimit - Update a specific Rate Limit.
  UpdateRateLimit(
    req: operations.UpdateRateLimitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRateLimitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRateLimitRequest(req);
    }
    
    let baseURL: string = operations.UPDATERATELIMIT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateRateLimitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceRateLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateService - Update a specific Verification Service.
  UpdateService(
    req: operations.UpdateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateVerification - Update a Verification status
  UpdateVerification(
    req: operations.UpdateVerificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateVerificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateVerificationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEVERIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Verifications/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateVerificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceVerification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWebhook(
    req: operations.UpdateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWebhookRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyV2ServiceWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
