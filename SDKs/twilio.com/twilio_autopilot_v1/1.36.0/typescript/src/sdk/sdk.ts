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
  "https://autopilot.twilio.com",
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
  
  CreateAssistant(
    req: operations.CreateAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAssistantRequest(req);
    }
    
    let baseURL: string = operations.CREATEASSISTANT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Assistants";
    
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
        let res: operations.CreateAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1Assistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateField(
    req: operations.CreateFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFieldRequest(req);
    }
    
    let baseURL: string = operations.CREATEFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", req.pathParams);
    
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
        let res: operations.CreateFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskField = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateFieldType(
    req: operations.CreateFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.CREATEFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes", req.pathParams);
    
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
        let res: operations.CreateFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateFieldValue(
    req: operations.CreateFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFieldValueRequest(req);
    }
    
    let baseURL: string = operations.CREATEFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", req.pathParams);
    
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
        let res: operations.CreateFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantFieldTypeFieldValue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateModelBuild(
    req: operations.CreateModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateModelBuildRequest(req);
    }
    
    let baseURL: string = operations.CREATEMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/ModelBuilds", req.pathParams);
    
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
        let res: operations.CreateModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateQuery(
    req: operations.CreateQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateQueryRequest(req);
    }
    
    let baseURL: string = operations.CREATEQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Queries", req.pathParams);
    
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
        let res: operations.CreateQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSample(
    req: operations.CreateSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSampleRequest(req);
    }
    
    let baseURL: string = operations.CREATESAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", req.pathParams);
    
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
        let res: operations.CreateSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateTask(
    req: operations.CreateTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTaskRequest(req);
    }
    
    let baseURL: string = operations.CREATETASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks", req.pathParams);
    
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
        let res: operations.CreateTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWebhook(
    req: operations.CreateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWebhookRequest(req);
    }
    
    let baseURL: string = operations.CREATEWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Webhooks", req.pathParams);
    
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
                res.autopilotV1AssistantWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteAssistant(
    req: operations.DeleteAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAssistantRequest(req);
    }
    
    let baseURL: string = operations.DELETEASSISTANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteField(
    req: operations.DeleteFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFieldRequest(req);
    }
    
    let baseURL: string = operations.DELETEFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteFieldType(
    req: operations.DeleteFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.DELETEFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteFieldValue(
    req: operations.DeleteFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFieldValueRequest(req);
    }
    
    let baseURL: string = operations.DELETEFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteModelBuild(
    req: operations.DeleteModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModelBuildRequest(req);
    }
    
    let baseURL: string = operations.DELETEMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteQuery(
    req: operations.DeleteQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteQueryRequest(req);
    }
    
    let baseURL: string = operations.DELETEQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSample(
    req: operations.DeleteSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSampleRequest(req);
    }
    
    let baseURL: string = operations.DELETESAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteTask(
    req: operations.DeleteTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTaskRequest(req);
    }
    
    let baseURL: string = operations.DELETETASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteWebhook(
    req: operations.DeleteWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhookRequest(req);
    }
    
    let baseURL: string = operations.DELETEWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Webhooks/{Sid}", req.pathParams);
    
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

  
  FetchAssistant(
    req: operations.FetchAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAssistantRequest(req);
    }
    
    let baseURL: string = operations.FETCHASSISTANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1Assistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchDefaults(
    req: operations.FetchDefaultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDefaultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDefaultsRequest(req);
    }
    
    let baseURL: string = operations.FETCHDEFAULTS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Defaults", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDefaultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantDefaults = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchDialogue(
    req: operations.FetchDialogueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDialogueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDialogueRequest(req);
    }
    
    let baseURL: string = operations.FETCHDIALOGUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Dialogues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDialogueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantDialogue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchField(
    req: operations.FetchFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFieldRequest(req);
    }
    
    let baseURL: string = operations.FETCHFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskField = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchFieldType(
    req: operations.FetchFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.FETCHFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchFieldValue(
    req: operations.FetchFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFieldValueRequest(req);
    }
    
    let baseURL: string = operations.FETCHFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantFieldTypeFieldValue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchModelBuild(
    req: operations.FetchModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchModelBuildRequest(req);
    }
    
    let baseURL: string = operations.FETCHMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchQuery(
    req: operations.FetchQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchQueryRequest(req);
    }
    
    let baseURL: string = operations.FETCHQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSample(
    req: operations.FetchSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSampleRequest(req);
    }
    
    let baseURL: string = operations.FETCHSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchStyleSheet - Returns Style sheet JSON object for the Assistant
  FetchStyleSheet(
    req: operations.FetchStyleSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchStyleSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchStyleSheetRequest(req);
    }
    
    let baseURL: string = operations.FETCHSTYLESHEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/StyleSheet", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchStyleSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantStyleSheet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTask(
    req: operations.FetchTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTaskActions - Returns JSON actions for the Task.
  FetchTaskActions(
    req: operations.FetchTaskActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskActionsRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTaskActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskTaskActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskStatistics(
    req: operations.FetchTaskStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKSTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTaskStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskTaskStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWebhook(
    req: operations.FetchWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWebhookRequest(req);
    }
    
    let baseURL: string = operations.FETCHWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Webhooks/{Sid}", req.pathParams);
    
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
                res.autopilotV1AssistantWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAssistant(
    req: operations.ListAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAssistantRequest(req);
    }
    
    let baseURL: string = operations.LISTASSISTANT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Assistants";
    
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
        let res: operations.ListAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAssistantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListField(
    req: operations.ListFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFieldRequest(req);
    }
    
    let baseURL: string = operations.LISTFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", req.pathParams);
    
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
        let res: operations.ListFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFieldResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListFieldType(
    req: operations.ListFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.LISTFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes", req.pathParams);
    
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
        let res: operations.ListFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFieldTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListFieldValue(
    req: operations.ListFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFieldValueRequest(req);
    }
    
    let baseURL: string = operations.LISTFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", req.pathParams);
    
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
        let res: operations.ListFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFieldValueResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListModelBuild(
    req: operations.ListModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListModelBuildRequest(req);
    }
    
    let baseURL: string = operations.LISTMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/ModelBuilds", req.pathParams);
    
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
        let res: operations.ListModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listModelBuildResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListQuery(
    req: operations.ListQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListQueryRequest(req);
    }
    
    let baseURL: string = operations.LISTQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Queries", req.pathParams);
    
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
        let res: operations.ListQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listQueryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSample(
    req: operations.ListSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSampleRequest(req);
    }
    
    let baseURL: string = operations.LISTSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", req.pathParams);
    
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
        let res: operations.ListSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSampleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListTask(
    req: operations.ListTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTaskRequest(req);
    }
    
    let baseURL: string = operations.LISTTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks", req.pathParams);
    
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
        let res: operations.ListTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTaskResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWebhook(
    req: operations.ListWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWebhookRequest(req);
    }
    
    let baseURL: string = operations.LISTWEBHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Webhooks", req.pathParams);
    
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

  
  UpdateAssistant(
    req: operations.UpdateAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAssistantRequest(req);
    }
    
    let baseURL: string = operations.UPDATEASSISTANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1Assistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateDefaults(
    req: operations.UpdateDefaultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDefaultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDefaultsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDEFAULTS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Defaults", req.pathParams);
    
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
        let res: operations.UpdateDefaultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantDefaults = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateFieldType(
    req: operations.UpdateFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.UPDATEFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateModelBuild(
    req: operations.UpdateModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateModelBuildRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateQuery(
    req: operations.UpdateQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateQueryRequest(req);
    }
    
    let baseURL: string = operations.UPDATEQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateRestoreAssistant(
    req: operations.UpdateRestoreAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRestoreAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRestoreAssistantRequest(req);
    }
    
    let baseURL: string = operations.UPDATERESTOREASSISTANT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Assistants/Restore";
    
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
        let res: operations.UpdateRestoreAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1RestoreAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSample(
    req: operations.UpdateSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSampleRequest(req);
    }
    
    let baseURL: string = operations.UPDATESAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateStyleSheet - Updates the style sheet for an Assistant identified by `assistant_sid`.
  UpdateStyleSheet(
    req: operations.UpdateStyleSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateStyleSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateStyleSheetRequest(req);
    }
    
    let baseURL: string = operations.UPDATESTYLESHEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/StyleSheet", req.pathParams);
    
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
        let res: operations.UpdateStyleSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantStyleSheet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateTask(
    req: operations.UpdateTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskRequest(req);
    }
    
    let baseURL: string = operations.UPDATETASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateTaskActions - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
  UpdateTaskActions(
    req: operations.UpdateTaskActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskActionsRequest(req);
    }
    
    let baseURL: string = operations.UPDATETASKACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", req.pathParams);
    
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
        let res: operations.UpdateTaskActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.autopilotV1AssistantTaskTaskActions = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Assistants/{AssistantSid}/Webhooks/{Sid}", req.pathParams);
    
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
                res.autopilotV1AssistantWebhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
