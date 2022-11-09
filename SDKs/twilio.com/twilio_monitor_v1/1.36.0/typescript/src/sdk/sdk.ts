import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://monitor.twilio.com",
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
  
  FetchAlert(
    req: operations.FetchAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAlertRequest(req);
    }
    
    let baseURL: string = operations.FETCHALERT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Alerts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.monitorV1AlertInstance = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v1/Events/{Sid}", req.pathParams);
    
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
                res.monitorV1Event = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAlert(
    req: operations.ListAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAlertRequest(req);
    }
    
    let baseURL: string = operations.LISTALERT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Alerts";
    
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
        let res: operations.ListAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAlertResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEvent - Returns a list of events in the account, sorted by event-date.
  ListEvent(
    req: operations.ListEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventRequest(req);
    }
    
    let baseURL: string = operations.LISTEVENT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Events";
    
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

}
