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
  "https://bulkexports.twilio.com",
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
  
  CreateExportCustomJob(
    req: operations.CreateExportCustomJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateExportCustomJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateExportCustomJobRequest(req);
    }
    
    let baseURL: string = operations.CREATEEXPORTCUSTOMJOB_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}/Jobs", req.pathParams);
    
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
        let res: operations.CreateExportCustomJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportExportCustomJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteJob(
    req: operations.DeleteJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteJobRequest(req);
    }
    
    let baseURL: string = operations.DELETEJOB_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/Jobs/{JobSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDay - Fetch a specific Day.
  FetchDay(
    req: operations.FetchDayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDayRequest(req);
    }
    
    let baseURL: string = operations.FETCHDAY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}/Days/{Day}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 307:
            if (MatchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportDayInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchExport - Fetch a specific Export.
  FetchExport(
    req: operations.FetchExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExportRequest(req);
    }
    
    let baseURL: string = operations.FETCHEXPORT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bulkexportsV1Export = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchExportConfiguration - Fetch a specific Export Configuration.
  FetchExportConfiguration(
    req: operations.FetchExportConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExportConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExportConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FETCHEXPORTCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}/Configuration", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchExportConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchJob(
    req: operations.FetchJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchJobRequest(req);
    }
    
    let baseURL: string = operations.FETCHJOB_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/Jobs/{JobSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDay - Retrieve a list of all Days for a resource.
  ListDay(
    req: operations.ListDayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDayRequest(req);
    }
    
    let baseURL: string = operations.LISTDAY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}/Days", req.pathParams);
    
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
        let res: operations.ListDayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListExportCustomJob(
    req: operations.ListExportCustomJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListExportCustomJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListExportCustomJobRequest(req);
    }
    
    let baseURL: string = operations.LISTEXPORTCUSTOMJOB_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}/Jobs", req.pathParams);
    
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
        let res: operations.ListExportCustomJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listExportCustomJobResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateExportConfiguration - Update a specific Export Configuration.
  UpdateExportConfiguration(
    req: operations.UpdateExportConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateExportConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateExportConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEEXPORTCONFIGURATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Exports/{ResourceType}/Configuration", req.pathParams);
    
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
        let res: operations.UpdateExportConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
