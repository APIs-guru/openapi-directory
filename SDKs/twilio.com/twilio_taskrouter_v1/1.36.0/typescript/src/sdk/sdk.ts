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
  "https://taskrouter.twilio.com",
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
  
  CreateActivity(
    req: operations.CreateActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateActivityRequest(req);
    }
    
    let baseURL: string = operations.CREATEACTIVITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Activities", req.pathParams);
    
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
        let res: operations.CreateActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceActivity = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks", req.pathParams);
    
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
                res.taskrouterV1WorkspaceTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateTaskChannel(
    req: operations.CreateTaskChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTaskChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTaskChannelRequest(req);
    }
    
    let baseURL: string = operations.CREATETASKCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskChannels", req.pathParams);
    
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
        let res: operations.CreateTaskChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateTaskQueue(
    req: operations.CreateTaskQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTaskQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTaskQueueRequest(req);
    }
    
    let baseURL: string = operations.CREATETASKQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues", req.pathParams);
    
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
        let res: operations.CreateTaskQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWorker(
    req: operations.CreateWorkerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWorkerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWorkerRequest(req);
    }
    
    let baseURL: string = operations.CREATEWORKER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers", req.pathParams);
    
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
        let res: operations.CreateWorkerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorker = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWorkflow(
    req: operations.CreateWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWorkflowRequest(req);
    }
    
    let baseURL: string = operations.CREATEWORKFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows", req.pathParams);
    
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
        let res: operations.CreateWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkflow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWorkspace(
    req: operations.CreateWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWorkspaceRequest(req);
    }
    
    let baseURL: string = operations.CREATEWORKSPACE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Workspaces";
    
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
        let res: operations.CreateWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1Workspace = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteActivity(
    req: operations.DeleteActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteActivityRequest(req);
    }
    
    let baseURL: string = operations.DELETEACTIVITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteActivityResponse = {statusCode: httpRes.status, contentType: contentType};
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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

  
  DeleteTaskChannel(
    req: operations.DeleteTaskChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTaskChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTaskChannelRequest(req);
    }
    
    let baseURL: string = operations.DELETETASKCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTaskChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteTaskQueue(
    req: operations.DeleteTaskQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTaskQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTaskQueueRequest(req);
    }
    
    let baseURL: string = operations.DELETETASKQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTaskQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteWorker(
    req: operations.DeleteWorkerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkerRequest(req);
    }
    
    let baseURL: string = operations.DELETEWORKER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWorkerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteWorkflow(
    req: operations.DeleteWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkflowRequest(req);
    }
    
    let baseURL: string = operations.DELETEWORKFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteWorkspace(
    req: operations.DeleteWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspaceRequest(req);
    }
    
    let baseURL: string = operations.DELETEWORKSPACE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchActivity(
    req: operations.FetchActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchActivityRequest(req);
    }
    
    let baseURL: string = operations.FETCHACTIVITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceActivity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchEvent(
    req: operations.FetchEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEventRequest(req);
    }
    
    let baseURL: string = operations.FETCHEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Events/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceEvent = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", req.pathParams);
    
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
                res.taskrouterV1WorkspaceTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskChannel(
    req: operations.FetchTaskChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskChannelRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTaskChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskQueue(
    req: operations.FetchTaskQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskQueueRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTaskQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskQueueCumulativeStatistics(
    req: operations.FetchTaskQueueCumulativeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskQueueCumulativeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskQueueCumulativeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKQUEUECUMULATIVESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics", req.pathParams);
    
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
        let res: operations.FetchTaskQueueCumulativeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskQueueRealTimeStatistics(
    req: operations.FetchTaskQueueRealTimeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskQueueRealTimeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskQueueRealTimeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKQUEUEREALTIMESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics", req.pathParams);
    
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
        let res: operations.FetchTaskQueueRealTimeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskQueueStatistics(
    req: operations.FetchTaskQueueStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskQueueStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskQueueStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKQUEUESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics", req.pathParams);
    
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
        let res: operations.FetchTaskQueueStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskQueueTaskQueueStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchTaskReservation(
    req: operations.FetchTaskReservationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTaskReservationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTaskReservationRequest(req);
    }
    
    let baseURL: string = operations.FETCHTASKRESERVATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTaskReservationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskTaskReservation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorker(
    req: operations.FetchWorkerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkerRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWorkerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorker = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkerChannel(
    req: operations.FetchWorkerChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkerChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkerChannelRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKERCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWorkerChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkerChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkerInstanceStatistics(
    req: operations.FetchWorkerInstanceStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkerInstanceStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkerInstanceStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKERINSTANCESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics", req.pathParams);
    
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
        let res: operations.FetchWorkerInstanceStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkerInstanceStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkerReservation(
    req: operations.FetchWorkerReservationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkerReservationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkerReservationRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKERRESERVATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWorkerReservationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkerReservation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkerStatistics(
    req: operations.FetchWorkerStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkerStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkerStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKERSTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/Statistics", req.pathParams);
    
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
        let res: operations.FetchWorkerStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkerStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkersCumulativeStatistics(
    req: operations.FetchWorkersCumulativeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkersCumulativeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkersCumulativeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKERSCUMULATIVESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics", req.pathParams);
    
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
        let res: operations.FetchWorkersCumulativeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkersRealTimeStatistics(
    req: operations.FetchWorkersRealTimeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkersRealTimeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkersRealTimeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKERSREALTIMESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics", req.pathParams);
    
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
        let res: operations.FetchWorkersRealTimeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkflow(
    req: operations.FetchWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkflowRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkflow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkflowCumulativeStatistics(
    req: operations.FetchWorkflowCumulativeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkflowCumulativeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkflowCumulativeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKFLOWCUMULATIVESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics", req.pathParams);
    
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
        let res: operations.FetchWorkflowCumulativeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkflowRealTimeStatistics(
    req: operations.FetchWorkflowRealTimeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkflowRealTimeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkflowRealTimeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKFLOWREALTIMESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics", req.pathParams);
    
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
        let res: operations.FetchWorkflowRealTimeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkflowStatistics(
    req: operations.FetchWorkflowStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkflowStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkflowStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKFLOWSTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics", req.pathParams);
    
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
        let res: operations.FetchWorkflowStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkflowWorkflowStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkspace(
    req: operations.FetchWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkspaceRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKSPACE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1Workspace = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkspaceCumulativeStatistics(
    req: operations.FetchWorkspaceCumulativeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkspaceCumulativeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkspaceCumulativeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKSPACECUMULATIVESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/CumulativeStatistics", req.pathParams);
    
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
        let res: operations.FetchWorkspaceCumulativeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkspaceCumulativeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkspaceRealTimeStatistics(
    req: operations.FetchWorkspaceRealTimeStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkspaceRealTimeStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkspaceRealTimeStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKSPACEREALTIMESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/RealTimeStatistics", req.pathParams);
    
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
        let res: operations.FetchWorkspaceRealTimeStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkspaceRealTimeStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWorkspaceStatistics(
    req: operations.FetchWorkspaceStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWorkspaceStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWorkspaceStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHWORKSPACESTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Statistics", req.pathParams);
    
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
        let res: operations.FetchWorkspaceStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkspaceStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListActivity(
    req: operations.ListActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListActivityRequest(req);
    }
    
    let baseURL: string = operations.LISTACTIVITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Activities", req.pathParams);
    
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
        let res: operations.ListActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listActivityResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListEvent(
    req: operations.ListEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventRequest(req);
    }
    
    let baseURL: string = operations.LISTEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Events", req.pathParams);
    
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
        let res: operations.ListEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEventResponse = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks", req.pathParams);
    
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

  
  ListTaskChannel(
    req: operations.ListTaskChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTaskChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTaskChannelRequest(req);
    }
    
    let baseURL: string = operations.LISTTASKCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskChannels", req.pathParams);
    
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
        let res: operations.ListTaskChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTaskChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListTaskQueue(
    req: operations.ListTaskQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTaskQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTaskQueueRequest(req);
    }
    
    let baseURL: string = operations.LISTTASKQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues", req.pathParams);
    
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
        let res: operations.ListTaskQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTaskQueueResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListTaskQueuesStatistics(
    req: operations.ListTaskQueuesStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTaskQueuesStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTaskQueuesStatisticsRequest(req);
    }
    
    let baseURL: string = operations.LISTTASKQUEUESSTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics", req.pathParams);
    
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
        let res: operations.ListTaskQueuesStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTaskQueuesStatisticsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListTaskReservation(
    req: operations.ListTaskReservationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTaskReservationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTaskReservationRequest(req);
    }
    
    let baseURL: string = operations.LISTTASKRESERVATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations", req.pathParams);
    
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
        let res: operations.ListTaskReservationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTaskReservationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWorker(
    req: operations.ListWorkerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkerRequest(req);
    }
    
    let baseURL: string = operations.LISTWORKER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers", req.pathParams);
    
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
        let res: operations.ListWorkerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWorkerResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWorkerChannel(
    req: operations.ListWorkerChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkerChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkerChannelRequest(req);
    }
    
    let baseURL: string = operations.LISTWORKERCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels", req.pathParams);
    
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
        let res: operations.ListWorkerChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWorkerChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWorkerReservation(
    req: operations.ListWorkerReservationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkerReservationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkerReservationRequest(req);
    }
    
    let baseURL: string = operations.LISTWORKERRESERVATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations", req.pathParams);
    
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
        let res: operations.ListWorkerReservationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWorkerReservationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWorkflow(
    req: operations.ListWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkflowRequest(req);
    }
    
    let baseURL: string = operations.LISTWORKFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows", req.pathParams);
    
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
        let res: operations.ListWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWorkflowResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWorkspace(
    req: operations.ListWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkspaceRequest(req);
    }
    
    let baseURL: string = operations.LISTWORKSPACE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Workspaces";
    
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
        let res: operations.ListWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWorkspaceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateActivity(
    req: operations.UpdateActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateActivityRequest(req);
    }
    
    let baseURL: string = operations.UPDATEACTIVITY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceActivity = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateTaskChannel(
    req: operations.UpdateTaskChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskChannelRequest(req);
    }
    
    let baseURL: string = operations.UPDATETASKCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateTaskChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateTaskQueue(
    req: operations.UpdateTaskQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskQueueRequest(req);
    }
    
    let baseURL: string = operations.UPDATETASKQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateTaskQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateTaskReservation(
    req: operations.UpdateTaskReservationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskReservationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskReservationRequest(req);
    }
    
    let baseURL: string = operations.UPDATETASKRESERVATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateTaskReservationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceTaskTaskReservation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWorker(
    req: operations.UpdateWorkerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkerRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWORKER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWorkerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorker = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWorkerChannel(
    req: operations.UpdateWorkerChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkerChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkerChannelRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWORKERCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWorkerChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkerChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWorkerReservation(
    req: operations.UpdateWorkerReservationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkerReservationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkerReservationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWORKERRESERVATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWorkerReservationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkerWorkerReservation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWorkflow(
    req: operations.UpdateWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkflowRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWORKFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1WorkspaceWorkflow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWorkspace(
    req: operations.UpdateWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkspaceRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWORKSPACE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Workspaces/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskrouterV1Workspace = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
