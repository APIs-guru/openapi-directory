import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://sync.twilio.com",
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
  
  createDocument(
    req: operations.CreateDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDocumentRequest(req);
    }
    
    let baseURL: string = operations.CreateDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents", req.pathParams);

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
        const res: operations.CreateDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Services";

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
                res.syncV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createStreamMessage - Create a new Stream Message.
  **/
  createStreamMessage(
    req: operations.CreateStreamMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateStreamMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateStreamMessageRequest(req);
    }
    
    let baseURL: string = operations.CreateStreamMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages", req.pathParams);

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
        const res: operations.CreateStreamMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncStreamStreamMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncList(
    req: operations.CreateSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncListRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists", req.pathParams);

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
        const res: operations.CreateSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncListItem(
    req: operations.CreateSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items", req.pathParams);

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
        const res: operations.CreateSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncMap(
    req: operations.CreateSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncMapRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps", req.pathParams);

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
        const res: operations.CreateSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncMapItem(
    req: operations.CreateSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items", req.pathParams);

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
        const res: operations.CreateSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSyncStream - Create a new Stream.
  **/
  createSyncStream(
    req: operations.CreateSyncStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncStreamRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Streams", req.pathParams);

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
        const res: operations.CreateSyncStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteDocument(
    req: operations.DeleteDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDocumentRequest(req);
    }
    
    let baseURL: string = operations.DeleteDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDocumentPermission - Delete a specific Sync Document Permission.
  **/
  deleteDocumentPermission(
    req: operations.DeleteDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.DeleteDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);
    
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

  
  deleteSyncList(
    req: operations.DeleteSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncListRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncListItem(
    req: operations.DeleteSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSyncListPermission - Delete a specific Sync List Permission.
  **/
  deleteSyncListPermission(
    req: operations.DeleteSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncMap(
    req: operations.DeleteSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncMapRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncMapItem(
    req: operations.DeleteSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSyncMapPermission - Delete a specific Sync Map Permission.
  **/
  deleteSyncMapPermission(
    req: operations.DeleteSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSyncStream - Delete a specific Stream.
  **/
  deleteSyncStream(
    req: operations.DeleteSyncStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncStreamRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Streams/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchDocument(
    req: operations.FetchDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDocumentRequest(req);
    }
    
    let baseURL: string = operations.FetchDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchDocumentPermission - Fetch a specific Sync Document Permission.
  **/
  fetchDocumentPermission(
    req: operations.FetchDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.FetchDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceDocumentDocumentPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);
    
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
                res.syncV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncList(
    req: operations.FetchSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncListRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncListItem(
    req: operations.FetchSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSyncListPermission - Fetch a specific Sync List Permission.
  **/
  fetchSyncListPermission(
    req: operations.FetchSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncListSyncListPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncMap(
    req: operations.FetchSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncMapRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncMapItem(
    req: operations.FetchSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSyncMapPermission - Fetch a specific Sync Map Permission.
  **/
  fetchSyncMapPermission(
    req: operations.FetchSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMapSyncMapPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSyncStream - Fetch a specific Stream.
  **/
  fetchSyncStream(
    req: operations.FetchSyncStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncStreamRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Streams/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listDocument(
    req: operations.ListDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDocumentRequest(req);
    }
    
    let baseURL: string = operations.ListDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents", req.pathParams);
    
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
        const res: operations.ListDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
  **/
  listDocumentPermission(
    req: operations.ListDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.ListDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", req.pathParams);
    
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
        const res: operations.ListDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDocumentPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Services";
    
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

  
  listSyncList(
    req: operations.ListSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncListRequest(req);
    }
    
    let baseURL: string = operations.ListSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists", req.pathParams);
    
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
        const res: operations.ListSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncListItem(
    req: operations.ListSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.ListSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items", req.pathParams);
    
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
        const res: operations.ListSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncListItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
  **/
  listSyncListPermission(
    req: operations.ListSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.ListSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions", req.pathParams);
    
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
        const res: operations.ListSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncListPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncMap(
    req: operations.ListSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncMapRequest(req);
    }
    
    let baseURL: string = operations.ListSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps", req.pathParams);
    
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
        const res: operations.ListSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncMapResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncMapItem(
    req: operations.ListSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.ListSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items", req.pathParams);
    
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
        const res: operations.ListSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncMapItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
  **/
  listSyncMapPermission(
    req: operations.ListSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.ListSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions", req.pathParams);
    
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
        const res: operations.ListSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncMapPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSyncStream - Retrieve a list of all Streams in a Service Instance.
  **/
  listSyncStream(
    req: operations.ListSyncStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncStreamRequest(req);
    }
    
    let baseURL: string = operations.ListSyncStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Streams", req.pathParams);
    
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
        const res: operations.ListSyncStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncStreamResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateDocument(
    req: operations.UpdateDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDocumentRequest(req);
    }
    
    let baseURL: string = operations.UpdateDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDocumentPermission - Update an identity's access to a specific Sync Document.
  **/
  updateDocumentPermission(
    req: operations.UpdateDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.UpdateDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);

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
        const res: operations.UpdateDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceDocumentDocumentPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);

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
                res.syncV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncList(
    req: operations.UpdateSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncListRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);

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
        const res: operations.UpdateSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncListItem(
    req: operations.UpdateSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSyncListPermission - Update an identity's access to a specific Sync List.
  **/
  updateSyncListPermission(
    req: operations.UpdateSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);

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
        const res: operations.UpdateSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncListSyncListPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncMap(
    req: operations.UpdateSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncMapRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);

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
        const res: operations.UpdateSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncMapItem(
    req: operations.UpdateSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSyncMapPermission - Update an identity's access to a specific Sync Map.
  **/
  updateSyncMapPermission(
    req: operations.UpdateSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);

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
        const res: operations.UpdateSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncMapSyncMapPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSyncStream - Update a specific Stream.
  **/
  updateSyncStream(
    req: operations.UpdateSyncStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncStreamRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Services/{ServiceSid}/Streams/{Sid}", req.pathParams);

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
        const res: operations.UpdateSyncStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncV1ServiceSyncStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
