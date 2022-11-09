import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://conversations.twilio.com",
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
  
  // CreateConfigurationAddress - Create a new address configuration
  CreateConfigurationAddress(
    req: operations.CreateConfigurationAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConfigurationAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConfigurationAddressRequest(req);
    }
    
    let baseURL: string = operations.CREATECONFIGURATIONADDRESS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration/Addresses";
    
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
        let res: operations.CreateConfigurationAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConfigurationAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConversation - Create a new conversation in your account's default service
  CreateConversation(
    req: operations.CreateConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConversationRequest(req);
    }
    
    let baseURL: string = operations.CREATECONVERSATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Conversations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Conversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConversationMessage - Add a new message to the conversation
  CreateConversationMessage(
    req: operations.CreateConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.CREATECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConversationParticipant - Add a new participant to the conversation
  CreateConversationParticipant(
    req: operations.CreateConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.CREATECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Participants", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConversationScopedWebhook - Create a new webhook scoped to the conversation
  CreateConversationScopedWebhook(
    req: operations.CreateConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.CREATECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Webhooks", req.pathParams);
    
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
        let res: operations.CreateConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationScopedWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCredential - Add a new push notification credential to your account
  CreateCredential(
    req: operations.CreateCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCredentialRequest(req);
    }
    
    let baseURL: string = operations.CREATECREDENTIAL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials";
    
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
        let res: operations.CreateCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Credential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateRole - Create a new user role in your account's default service
  CreateRole(
    req: operations.CreateRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRoleRequest(req);
    }
    
    let baseURL: string = operations.CREATEROLE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Roles";
    
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
        let res: operations.CreateRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Role = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateService - Create a new conversation service on your account
  CreateService(
    req: operations.CreateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Services";
    
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
                res.conversationsV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateServiceConversation - Create a new conversation in your service
  CreateServiceConversation(
    req: operations.CreateServiceConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceConversationRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateServiceConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateServiceConversationMessage - Add a new message to the conversation in a specific service
  CreateServiceConversationMessage(
    req: operations.CreateServiceConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateServiceConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateServiceConversationParticipant - Add a new participant to the conversation in a specific service
  CreateServiceConversationParticipant(
    req: operations.CreateServiceConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateServiceConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateServiceConversationScopedWebhook - Create a new webhook scoped to the conversation in a specific service
  CreateServiceConversationScopedWebhook(
    req: operations.CreateServiceConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", req.pathParams);
    
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
        let res: operations.CreateServiceConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateServiceRole - Create a new user role in your service
  CreateServiceRole(
    req: operations.CreateServiceRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceRoleRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Roles", req.pathParams);
    
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
        let res: operations.CreateServiceRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateServiceUser - Add a new conversation user to your service
  CreateServiceUser(
    req: operations.CreateServiceUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceUserRequest(req);
    }
    
    let baseURL: string = operations.CREATESERVICEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateServiceUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateUser - Add a new conversation user to your account's default service
  CreateUser(
    req: operations.CreateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserRequest(req);
    }
    
    let baseURL: string = operations.CREATEUSER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Users";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1User = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConfigurationAddress - Remove an existing address configuration
  DeleteConfigurationAddress(
    req: operations.DeleteConfigurationAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigurationAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConfigurationAddressRequest(req);
    }
    
    let baseURL: string = operations.DELETECONFIGURATIONADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Configuration/Addresses/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConfigurationAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConversation - Remove a conversation from your account's default service
  DeleteConversation(
    req: operations.DeleteConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConversationRequest(req);
    }
    
    let baseURL: string = operations.DELETECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConversationMessage - Remove a message from the conversation
  DeleteConversationMessage(
    req: operations.DeleteConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.DELETECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConversationParticipant - Remove a participant from the conversation
  DeleteConversationParticipant(
    req: operations.DeleteConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.DELETECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConversationScopedWebhook - Remove an existing webhook scoped to the conversation
  DeleteConversationScopedWebhook(
    req: operations.DeleteConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.DELETECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCredential - Remove a push notification credential from your account
  DeleteCredential(
    req: operations.DeleteCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCredentialRequest(req);
    }
    
    let baseURL: string = operations.DELETECREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRole - Remove a user role from your account's default service
  DeleteRole(
    req: operations.DeleteRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRoleRequest(req);
    }
    
    let baseURL: string = operations.DELETEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Roles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteService - Remove a conversation service with all its nested resources from your account
  DeleteService(
    req: operations.DeleteServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);
    
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

  
  // DeleteServiceBinding - Remove a push notification binding from the conversation service
  DeleteServiceBinding(
    req: operations.DeleteServiceBindingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceBindingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceBindingRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICEBINDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceBindingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceConversation - Remove a conversation from your service
  DeleteServiceConversation(
    req: operations.DeleteServiceConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceConversationRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceConversationMessage - Remove a message from the conversation
  DeleteServiceConversationMessage(
    req: operations.DeleteServiceConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceConversationParticipant - Remove a participant from the conversation
  DeleteServiceConversationParticipant(
    req: operations.DeleteServiceConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceConversationScopedWebhook - Remove an existing webhook scoped to the conversation
  DeleteServiceConversationScopedWebhook(
    req: operations.DeleteServiceConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceRole - Remove a user role from your service
  DeleteServiceRole(
    req: operations.DeleteServiceRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceRoleRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceUser - Remove a conversation user from your service
  DeleteServiceUser(
    req: operations.DeleteServiceUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceUserRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteServiceUserConversation - Delete a specific User Conversation.
  DeleteServiceUserConversation(
    req: operations.DeleteServiceUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceUserConversationRequest(req);
    }
    
    let baseURL: string = operations.DELETESERVICEUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteServiceUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUser - Remove a conversation user from your account's default service
  DeleteUser(
    req: operations.DeleteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserRequest(req);
    }
    
    let baseURL: string = operations.DELETEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUserConversation - Delete a specific User Conversation.
  DeleteUserConversation(
    req: operations.DeleteUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserConversationRequest(req);
    }
    
    let baseURL: string = operations.DELETEUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConfiguration - Fetch the global configuration of conversations on your account
  FetchConfiguration(
    req: operations.FetchConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFIGURATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Configuration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConfigurationAddress - Fetch an address configuration 
  FetchConfigurationAddress(
    req: operations.FetchConfigurationAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConfigurationAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConfigurationAddressRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFIGURATIONADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Configuration/Addresses/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConfigurationAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConfigurationAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchConfigurationWebhook(
    req: operations.FetchConfigurationWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConfigurationWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConfigurationWebhookRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFIGURATIONWEBHOOK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration/Webhooks";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConfigurationWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConfigurationConfigurationWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConversation - Fetch a conversation from your account's default service
  FetchConversation(
    req: operations.FetchConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConversationRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Conversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConversationMessage - Fetch a message from the conversation
  FetchConversationMessage(
    req: operations.FetchConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConversationMessageReceipt - Fetch the delivery and read receipts of the conversation message
  FetchConversationMessageReceipt(
    req: operations.FetchConversationMessageReceiptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConversationMessageReceiptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConversationMessageReceiptRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONVERSATIONMESSAGERECEIPT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConversationMessageReceiptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationMessageConversationMessageReceipt = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConversationParticipant - Fetch a participant of the conversation
  FetchConversationParticipant(
    req: operations.FetchConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConversationScopedWebhook - Fetch the configuration of a conversation-scoped webhook
  FetchConversationScopedWebhook(
    req: operations.FetchConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationScopedWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCredential - Fetch a push notification credential from your account
  FetchCredential(
    req: operations.FetchCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCredentialRequest(req);
    }
    
    let baseURL: string = operations.FETCHCREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Credential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRole - Fetch a user role from your account's default service
  FetchRole(
    req: operations.FetchRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoleRequest(req);
    }
    
    let baseURL: string = operations.FETCHROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Roles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Role = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchService - Fetch a conversation service from your account
  FetchService(
    req: operations.FetchServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);
    
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
                res.conversationsV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceBinding - Fetch a push notification binding from the conversation service
  FetchServiceBinding(
    req: operations.FetchServiceBindingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceBindingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceBindingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICEBINDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceBindingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceBinding = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceConfiguration - Fetch the configuration of a conversation service
  FetchServiceConfiguration(
    req: operations.FetchServiceConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICECONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Configuration", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceConversation - Fetch a conversation from your service
  FetchServiceConversation(
    req: operations.FetchServiceConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceConversationRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceConversationMessage - Fetch a message from the conversation
  FetchServiceConversationMessage(
    req: operations.FetchServiceConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceConversationMessageReceipt - Fetch the delivery and read receipts of the conversation message
  FetchServiceConversationMessageReceipt(
    req: operations.FetchServiceConversationMessageReceiptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceConversationMessageReceiptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceConversationMessageReceiptRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICECONVERSATIONMESSAGERECEIPT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceConversationMessageReceiptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceConversationParticipant - Fetch a participant of the conversation
  FetchServiceConversationParticipant(
    req: operations.FetchServiceConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceConversationScopedWebhook - Fetch the configuration of a conversation-scoped webhook
  FetchServiceConversationScopedWebhook(
    req: operations.FetchServiceConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceNotification - Fetch push notification service settings
  FetchServiceNotification(
    req: operations.FetchServiceNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceNotificationRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICENOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConfigurationServiceNotification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceRole - Fetch a user role from your service
  FetchServiceRole(
    req: operations.FetchServiceRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceRoleRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceUser - Fetch a conversation user from your service
  FetchServiceUser(
    req: operations.FetchServiceUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceUserRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceUserConversation - Fetch a specific User Conversation.
  FetchServiceUserConversation(
    req: operations.FetchServiceUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceUserConversationRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICEUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceUserServiceUserConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchServiceWebhookConfiguration - Fetch a specific service webhook configuration.
  FetchServiceWebhookConfiguration(
    req: operations.FetchServiceWebhookConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceWebhookConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceWebhookConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FETCHSERVICEWEBHOOKCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchServiceWebhookConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchUser - Fetch a conversation user from your account's default service
  FetchUser(
    req: operations.FetchUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUserRequest(req);
    }
    
    let baseURL: string = operations.FETCHUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1User = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchUserConversation - Fetch a specific User Conversation.
  FetchUserConversation(
    req: operations.FetchUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUserConversationRequest(req);
    }
    
    let baseURL: string = operations.FETCHUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1UserUserConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConfigurationAddress - Retrieve a list of address configurations for an account
  ListConfigurationAddress(
    req: operations.ListConfigurationAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConfigurationAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConfigurationAddressRequest(req);
    }
    
    let baseURL: string = operations.LISTCONFIGURATIONADDRESS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration/Addresses";
    
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
        let res: operations.ListConfigurationAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConfigurationAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConversation - Retrieve a list of conversations in your account's default service
  ListConversation(
    req: operations.ListConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConversationRequest(req);
    }
    
    let baseURL: string = operations.LISTCONVERSATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Conversations";
    
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
        let res: operations.ListConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConversationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConversationMessage - Retrieve a list of all messages in the conversation
  ListConversationMessage(
    req: operations.ListConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.LISTCONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages", req.pathParams);
    
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
        let res: operations.ListConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConversationMessageResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConversationMessageReceipt - Retrieve a list of all delivery and read receipts of the conversation message
  ListConversationMessageReceipt(
    req: operations.ListConversationMessageReceiptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConversationMessageReceiptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConversationMessageReceiptRequest(req);
    }
    
    let baseURL: string = operations.LISTCONVERSATIONMESSAGERECEIPT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", req.pathParams);
    
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
        let res: operations.ListConversationMessageReceiptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConversationMessageReceiptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConversationParticipant - Retrieve a list of all participants of the conversation
  ListConversationParticipant(
    req: operations.ListConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.LISTCONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Participants", req.pathParams);
    
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
        let res: operations.ListConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConversationParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConversationScopedWebhook - Retrieve a list of all webhooks scoped to the conversation
  ListConversationScopedWebhook(
    req: operations.ListConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.LISTCONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Webhooks", req.pathParams);
    
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
        let res: operations.ListConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConversationScopedWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCredential - Retrieve a list of all push notification credentials on your account
  ListCredential(
    req: operations.ListCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCredentialRequest(req);
    }
    
    let baseURL: string = operations.LISTCREDENTIAL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials";
    
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
        let res: operations.ListCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCredentialResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListParticipantConversation - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
  ListParticipantConversation(
    req: operations.ListParticipantConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListParticipantConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListParticipantConversationRequest(req);
    }
    
    let baseURL: string = operations.LISTPARTICIPANTCONVERSATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ParticipantConversations";
    
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
        let res: operations.ListParticipantConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listParticipantConversationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRole - Retrieve a list of all user roles in your account's default service
  ListRole(
    req: operations.ListRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoleRequest(req);
    }
    
    let baseURL: string = operations.LISTROLE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Roles";
    
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
        let res: operations.ListRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRoleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListService - Retrieve a list of all conversation services on your account
  ListService(
    req: operations.ListServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Services";
    
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

  
  // ListServiceBinding - Retrieve a list of all push notification bindings in the conversation service
  ListServiceBinding(
    req: operations.ListServiceBindingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceBindingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceBindingRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICEBINDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Bindings", req.pathParams);
    
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
        let res: operations.ListServiceBindingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceBindingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceConversation - Retrieve a list of conversations in your service
  ListServiceConversation(
    req: operations.ListServiceConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceConversationRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations", req.pathParams);
    
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
        let res: operations.ListServiceConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceConversationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceConversationMessage - Retrieve a list of all messages in the conversation
  ListServiceConversationMessage(
    req: operations.ListServiceConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", req.pathParams);
    
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
        let res: operations.ListServiceConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceConversationMessageResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceConversationMessageReceipt - Retrieve a list of all delivery and read receipts of the conversation message
  ListServiceConversationMessageReceipt(
    req: operations.ListServiceConversationMessageReceiptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceConversationMessageReceiptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceConversationMessageReceiptRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICECONVERSATIONMESSAGERECEIPT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", req.pathParams);
    
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
        let res: operations.ListServiceConversationMessageReceiptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceConversationMessageReceiptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceConversationParticipant - Retrieve a list of all participants of the conversation
  ListServiceConversationParticipant(
    req: operations.ListServiceConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", req.pathParams);
    
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
        let res: operations.ListServiceConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceConversationParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceConversationScopedWebhook - Retrieve a list of all webhooks scoped to the conversation
  ListServiceConversationScopedWebhook(
    req: operations.ListServiceConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", req.pathParams);
    
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
        let res: operations.ListServiceConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceConversationScopedWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceParticipantConversation - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
  ListServiceParticipantConversation(
    req: operations.ListServiceParticipantConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceParticipantConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceParticipantConversationRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICEPARTICIPANTCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/ParticipantConversations", req.pathParams);
    
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
        let res: operations.ListServiceParticipantConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceParticipantConversationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceRole - Retrieve a list of all user roles in your service
  ListServiceRole(
    req: operations.ListServiceRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceRoleRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Roles", req.pathParams);
    
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
        let res: operations.ListServiceRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceRoleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceUser - Retrieve a list of all conversation users in your service
  ListServiceUser(
    req: operations.ListServiceUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceUserRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users", req.pathParams);
    
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
        let res: operations.ListServiceUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListServiceUserConversation - Retrieve a list of all User Conversations for the User.
  ListServiceUserConversation(
    req: operations.ListServiceUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceUserConversationRequest(req);
    }
    
    let baseURL: string = operations.LISTSERVICEUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations", req.pathParams);
    
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
        let res: operations.ListServiceUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listServiceUserConversationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUser - Retrieve a list of all conversation users in your account's default service
  ListUser(
    req: operations.ListUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserRequest(req);
    }
    
    let baseURL: string = operations.LISTUSER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Users";
    
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
        let res: operations.ListUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUserConversation - Retrieve a list of all User Conversations for the User.
  ListUserConversation(
    req: operations.ListUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserConversationRequest(req);
    }
    
    let baseURL: string = operations.LISTUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{UserSid}/Conversations", req.pathParams);
    
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
        let res: operations.ListUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUserConversationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConfiguration - Update the global configuration of conversations on your account
  UpdateConfiguration(
    req: operations.UpdateConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONFIGURATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration";
    
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
        let res: operations.UpdateConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Configuration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConfigurationAddress - Update an existing address configuration
  UpdateConfigurationAddress(
    req: operations.UpdateConfigurationAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigurationAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigurationAddressRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONFIGURATIONADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Configuration/Addresses/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateConfigurationAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConfigurationAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateConfigurationWebhook(
    req: operations.UpdateConfigurationWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigurationWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigurationWebhookRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONFIGURATIONWEBHOOK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration/Webhooks";
    
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
        let res: operations.UpdateConfigurationWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConfigurationConfigurationWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConversation - Update an existing conversation in your account's default service
  UpdateConversation(
    req: operations.UpdateConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConversationRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Conversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConversationMessage - Update an existing message in the conversation
  UpdateConversationMessage(
    req: operations.UpdateConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConversationParticipant - Update an existing participant in the conversation
  UpdateConversationParticipant(
    req: operations.UpdateConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConversationScopedWebhook - Update an existing conversation-scoped webhook
  UpdateConversationScopedWebhook(
    req: operations.UpdateConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ConversationConversationScopedWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCredential - Update an existing push notification credential on your account
  UpdateCredential(
    req: operations.UpdateCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCredentialRequest(req);
    }
    
    let baseURL: string = operations.UPDATECREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Credentials/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Credential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRole - Update an existing user role in your account's default service
  UpdateRole(
    req: operations.UpdateRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoleRequest(req);
    }
    
    let baseURL: string = operations.UPDATEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Roles/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1Role = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceConfiguration - Update configuration settings of a conversation service
  UpdateServiceConfiguration(
    req: operations.UpdateServiceConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICECONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Configuration", req.pathParams);
    
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
        let res: operations.UpdateServiceConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceConversation - Update an existing conversation in your service
  UpdateServiceConversation(
    req: operations.UpdateServiceConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceConversationRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICECONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateServiceConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceConversationMessage - Update an existing message in the conversation
  UpdateServiceConversationMessage(
    req: operations.UpdateServiceConversationMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceConversationMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceConversationMessageRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICECONVERSATIONMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateServiceConversationMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceConversationParticipant - Update an existing participant in the conversation
  UpdateServiceConversationParticipant(
    req: operations.UpdateServiceConversationParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceConversationParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceConversationParticipantRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICECONVERSATIONPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateServiceConversationParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceConversationScopedWebhook - Update an existing conversation-scoped webhook
  UpdateServiceConversationScopedWebhook(
    req: operations.UpdateServiceConversationScopedWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceConversationScopedWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceConversationScopedWebhookRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateServiceConversationScopedWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceNotification - Update push notification service settings
  UpdateServiceNotification(
    req: operations.UpdateServiceNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceNotificationRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICENOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", req.pathParams);
    
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
        let res: operations.UpdateServiceNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConfigurationServiceNotification = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceRole - Update an existing user role in your service
  UpdateServiceRole(
    req: operations.UpdateServiceRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceRoleRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICEROLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateServiceRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceUser - Update an existing conversation user in your service
  UpdateServiceUser(
    req: operations.UpdateServiceUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceUserRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateServiceUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceUserConversation - Update a specific User Conversation.
  UpdateServiceUserConversation(
    req: operations.UpdateServiceUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceUserConversationRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICEUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", req.pathParams);
    
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
        let res: operations.UpdateServiceUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceUserServiceUserConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateServiceWebhookConfiguration - Update a specific Webhook.
  UpdateServiceWebhookConfiguration(
    req: operations.UpdateServiceWebhookConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceWebhookConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceWebhookConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UPDATESERVICEWEBHOOKCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", req.pathParams);
    
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
        let res: operations.UpdateServiceWebhookConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUser - Update an existing conversation user in your account's default service
  UpdateUser(
    req: operations.UpdateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1User = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserConversation - Update a specific User Conversation.
  UpdateUserConversation(
    req: operations.UpdateUserConversationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserConversationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserConversationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUSERCONVERSATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", req.pathParams);
    
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
        let res: operations.UpdateUserConversationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.conversationsV1UserUserConversation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
