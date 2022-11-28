import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://wireless.twilio.com",
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
   * createCommand - Send a Command to a Sim.
  **/
  createCommand(
    req: operations.CreateCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCommandRequest(req);
    }
    
    let baseURL: string = operations.CreateCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Commands";

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
        const res: operations.CreateCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Command = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createRatePlan(
    req: operations.CreateRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRatePlanRequest(req);
    }
    
    let baseURL: string = operations.CreateRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RatePlans";

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
        const res: operations.CreateRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1RatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCommand - Delete a Command instance from your account.
  **/
  deleteCommand(
    req: operations.DeleteCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCommandRequest(req);
    }
    
    let baseURL: string = operations.DeleteCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Commands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRatePlan(
    req: operations.DeleteRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRatePlanRequest(req);
    }
    
    let baseURL: string = operations.DeleteRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSim - Delete a Sim resource on your Account.
  **/
  deleteSim(
    req: operations.DeleteSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSimRequest(req);
    }
    
    let baseURL: string = operations.DeleteSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCommand - Fetch a Command instance from your account.
  **/
  fetchCommand(
    req: operations.FetchCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCommandRequest(req);
    }
    
    let baseURL: string = operations.FetchCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Commands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Command = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchRatePlan(
    req: operations.FetchRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRatePlanRequest(req);
    }
    
    let baseURL: string = operations.FetchRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1RatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSim - Fetch a Sim resource on your Account.
  **/
  fetchSim(
    req: operations.FetchSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSimRequest(req);
    }
    
    let baseURL: string = operations.FetchSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAccountUsageRecord(
    req: operations.ListAccountUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.ListAccountUsageRecordServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/UsageRecords";
    
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
        const res: operations.ListAccountUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAccountUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCommand - Retrieve a list of Commands from your account.
  **/
  listCommand(
    req: operations.ListCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommandRequest(req);
    }
    
    let baseURL: string = operations.ListCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Commands";
    
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
        const res: operations.ListCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listDataSession(
    req: operations.ListDataSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDataSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDataSessionRequest(req);
    }
    
    let baseURL: string = operations.ListDataSessionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{SimSid}/DataSessions", req.pathParams);
    
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
        const res: operations.ListDataSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDataSessionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listRatePlan(
    req: operations.ListRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRatePlanRequest(req);
    }
    
    let baseURL: string = operations.ListRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RatePlans";
    
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
        const res: operations.ListRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRatePlanResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSim - Retrieve a list of Sim resources on your Account.
  **/
  listSim(
    req: operations.ListSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSimRequest(req);
    }
    
    let baseURL: string = operations.ListSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Sims";
    
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
        const res: operations.ListSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSimResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecord(
    req: operations.ListUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{SimSid}/UsageRecords", req.pathParams);
    
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
        const res: operations.ListUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateRatePlan(
    req: operations.UpdateRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRatePlanRequest(req);
    }
    
    let baseURL: string = operations.UpdateRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/RatePlans/{Sid}", req.pathParams);

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
        const res: operations.UpdateRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1RatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSim - Updates the given properties of a Sim resource on your Account.
  **/
  updateSim(
    req: operations.UpdateSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSimRequest(req);
    }
    
    let baseURL: string = operations.UpdateSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);

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
        const res: operations.UpdateSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
