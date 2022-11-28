import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Calls {
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
   * callAnswer - Answer call (On supported devices)
  **/
  callAnswer(
    req: operations.CallAnswerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CallAnswerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CallAnswerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}/answer", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CallAnswerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.call = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * callHold - Put call on hold
  **/
  callHold(
    req: operations.CallHoldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CallHoldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CallHoldRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}/hold", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CallHoldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.call = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * callTransfer - Transfer call
  **/
  callTransfer(
    req: operations.CallTransferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CallTransferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CallTransferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}/transfer", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CallTransferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.call = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * callUnold - Unhold
  **/
  callUnold(
    req: operations.CallUnoldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CallUnoldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CallUnoldRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}/hold", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CallUnoldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.call = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * callVmTransfer - Send call to voicemail
  **/
  callVmTransfer(
    req: operations.CallVmTransferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CallVmTransferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CallVmTransferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}/vmtransfer", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CallVmTransferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.call = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCall - Place a call
  **/
  createCall(
    req: operations.CreateCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/calls";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.calls = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * destroyCall - End a call
  **/
  destroyCall(
    req: operations.DestroyCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyCallRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DestroyCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.calls = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCallsCount - Get calls count
  **/
  getCallsCount(
    req: operations.GetCallsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCallsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCallsCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/calls/count";
    
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
        const res: operations.GetCallsCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventsCount = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRoles - Get a call
  **/
  getRoles(
    req: operations.GetRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/calls/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.calls = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCalls - List active calls
   *
   * Lists currently active calls
  **/
  listCalls(
    req: operations.ListCallsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/calls";
    
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
        const res: operations.ListCallsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.calls = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
