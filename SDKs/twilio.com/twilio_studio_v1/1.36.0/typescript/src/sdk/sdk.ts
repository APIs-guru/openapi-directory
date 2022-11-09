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
  "https://studio.twilio.com",
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
  
  // CreateEngagement - Triggers a new Engagement for the Flow
  CreateEngagement(
    req: operations.CreateEngagementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEngagementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEngagementRequest(req);
    }
    
    let baseURL: string = operations.CREATEENGAGEMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements", req.pathParams);
    
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
        let res: operations.CreateEngagementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowEngagement = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateExecution - Triggers a new Execution for the Flow
  CreateExecution(
    req: operations.CreateExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateExecutionRequest(req);
    }
    
    let baseURL: string = operations.CREATEEXECUTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions", req.pathParams);
    
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
        let res: operations.CreateExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowExecution = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEngagement - Delete this Engagement and all Steps relating to it.
  DeleteEngagement(
    req: operations.DeleteEngagementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEngagementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEngagementRequest(req);
    }
    
    let baseURL: string = operations.DELETEENGAGEMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEngagementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteExecution - Delete the Execution and all Steps relating to it.
  DeleteExecution(
    req: operations.DeleteExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteExecutionRequest(req);
    }
    
    let baseURL: string = operations.DELETEEXECUTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFlow - Delete a specific Flow.
  DeleteFlow(
    req: operations.DeleteFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFlowRequest(req);
    }
    
    let baseURL: string = operations.DELETEFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEngagement - Retrieve an Engagement
  FetchEngagement(
    req: operations.FetchEngagementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEngagementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEngagementRequest(req);
    }
    
    let baseURL: string = operations.FETCHENGAGEMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEngagementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowEngagement = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEngagementContext - Retrieve the most recent context for an Engagement.
  FetchEngagementContext(
    req: operations.FetchEngagementContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEngagementContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEngagementContextRequest(req);
    }
    
    let baseURL: string = operations.FETCHENGAGEMENTCONTEXT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEngagementContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowEngagementEngagementContext = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchExecution - Retrieve an Execution
  FetchExecution(
    req: operations.FetchExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionRequest(req);
    }
    
    let baseURL: string = operations.FETCHEXECUTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowExecution = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchExecutionContext - Retrieve the most recent context for an Execution.
  FetchExecutionContext(
    req: operations.FetchExecutionContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionContextRequest(req);
    }
    
    let baseURL: string = operations.FETCHEXECUTIONCONTEXT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchExecutionContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowExecutionExecutionContext = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchExecutionStep - Retrieve a Step.
  FetchExecutionStep(
    req: operations.FetchExecutionStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionStepRequest(req);
    }
    
    let baseURL: string = operations.FETCHEXECUTIONSTEP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchExecutionStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowExecutionExecutionStep = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchExecutionStepContext - Retrieve the context for an Execution Step.
  FetchExecutionStepContext(
    req: operations.FetchExecutionStepContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionStepContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionStepContextRequest(req);
    }
    
    let baseURL: string = operations.FETCHEXECUTIONSTEPCONTEXT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchExecutionStepContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowExecutionExecutionStepExecutionStepContext = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchFlow - Retrieve a specific Flow.
  FetchFlow(
    req: operations.FetchFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFlowRequest(req);
    }
    
    let baseURL: string = operations.FETCHFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1Flow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchStep - Retrieve a Step.
  FetchStep(
    req: operations.FetchStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchStepRequest(req);
    }
    
    let baseURL: string = operations.FETCHSTEP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowEngagementStep = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchStepContext - Retrieve the context for an Engagement Step.
  FetchStepContext(
    req: operations.FetchStepContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchStepContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchStepContextRequest(req);
    }
    
    let baseURL: string = operations.FETCHSTEPCONTEXT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchStepContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowEngagementStepStepContext = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEngagement - Retrieve a list of all Engagements for the Flow.
  ListEngagement(
    req: operations.ListEngagementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEngagementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEngagementRequest(req);
    }
    
    let baseURL: string = operations.LISTENGAGEMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements", req.pathParams);
    
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
        let res: operations.ListEngagementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEngagementResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListExecution - Retrieve a list of all Executions for the Flow.
  ListExecution(
    req: operations.ListExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListExecutionRequest(req);
    }
    
    let baseURL: string = operations.LISTEXECUTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions", req.pathParams);
    
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
        let res: operations.ListExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listExecutionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListExecutionStep - Retrieve a list of all Steps for an Execution.
  ListExecutionStep(
    req: operations.ListExecutionStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListExecutionStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListExecutionStepRequest(req);
    }
    
    let baseURL: string = operations.LISTEXECUTIONSTEP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps", req.pathParams);
    
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
        let res: operations.ListExecutionStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listExecutionStepResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFlow - Retrieve a list of all Flows.
  ListFlow(
    req: operations.ListFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFlowRequest(req);
    }
    
    let baseURL: string = operations.LISTFLOW_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Flows";
    
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
        let res: operations.ListFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFlowResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListStep - Retrieve a list of all Steps for an Engagement.
  ListStep(
    req: operations.ListStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListStepRequest(req);
    }
    
    let baseURL: string = operations.LISTSTEP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps", req.pathParams);
    
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
        let res: operations.ListStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listStepResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateExecution - Update the status of an Execution to `ended`.
  UpdateExecution(
    req: operations.UpdateExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateExecutionRequest(req);
    }
    
    let baseURL: string = operations.UPDATEEXECUTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Flows/{FlowSid}/Executions/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.studioV1FlowExecution = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
