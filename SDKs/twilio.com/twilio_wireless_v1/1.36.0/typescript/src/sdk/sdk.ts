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
  
  // CreateCommand - Send a Command to a Sim.
  CreateCommand(
    req: operations.CreateCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCommandRequest(req);
    }
    
    let baseURL: string = operations.CREATECOMMAND_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Commands";
    
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
        let res: operations.CreateCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Command = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateRatePlan(
    req: operations.CreateRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRatePlanRequest(req);
    }
    
    let baseURL: string = operations.CREATERATEPLAN_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RatePlans";
    
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
        let res: operations.CreateRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1RatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCommand - Delete a Command instance from your account.
  DeleteCommand(
    req: operations.DeleteCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCommandRequest(req);
    }
    
    let baseURL: string = operations.DELETECOMMAND_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Commands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRatePlan(
    req: operations.DeleteRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRatePlanRequest(req);
    }
    
    let baseURL: string = operations.DELETERATEPLAN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSim - Delete a Sim resource on your Account.
  DeleteSim(
    req: operations.DeleteSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSimRequest(req);
    }
    
    let baseURL: string = operations.DELETESIM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCommand - Fetch a Command instance from your account.
  FetchCommand(
    req: operations.FetchCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCommandRequest(req);
    }
    
    let baseURL: string = operations.FETCHCOMMAND_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Commands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Command = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchRatePlan(
    req: operations.FetchRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRatePlanRequest(req);
    }
    
    let baseURL: string = operations.FETCHRATEPLAN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1RatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSim - Fetch a Sim resource on your Account.
  FetchSim(
    req: operations.FetchSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSimRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAccountUsageRecord(
    req: operations.ListAccountUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.LISTACCOUNTUSAGERECORD_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/UsageRecords";
    
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
        let res: operations.ListAccountUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAccountUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCommand - Retrieve a list of Commands from your account.
  ListCommand(
    req: operations.ListCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommandRequest(req);
    }
    
    let baseURL: string = operations.LISTCOMMAND_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Commands";
    
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
        let res: operations.ListCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListDataSession(
    req: operations.ListDataSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDataSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDataSessionRequest(req);
    }
    
    let baseURL: string = operations.LISTDATASESSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{SimSid}/DataSessions", req.pathParams);
    
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
        let res: operations.ListDataSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDataSessionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListRatePlan(
    req: operations.ListRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRatePlanRequest(req);
    }
    
    let baseURL: string = operations.LISTRATEPLAN_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RatePlans";
    
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
        let res: operations.ListRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRatePlanResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSim - Retrieve a list of Sim resources on your Account.
  ListSim(
    req: operations.ListSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSimRequest(req);
    }
    
    let baseURL: string = operations.LISTSIM_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Sims";
    
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
        let res: operations.ListSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSimResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecord(
    req: operations.ListUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{SimSid}/UsageRecords", req.pathParams);
    
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
        let res: operations.ListUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateRatePlan(
    req: operations.UpdateRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRatePlanRequest(req);
    }
    
    let baseURL: string = operations.UPDATERATEPLAN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/RatePlans/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1RatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSim - Updates the given properties of a Sim resource on your Account.
  UpdateSim(
    req: operations.UpdateSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSimRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.wirelessV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
