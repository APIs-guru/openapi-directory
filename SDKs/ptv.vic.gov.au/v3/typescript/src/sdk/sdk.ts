import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://timetableapi.ptv.vic.gov.au",
  "https://timetableapi.ptv.vic.gov.au",
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
  
  // DeparturesGetForStop - View departures for all routes from a stop
  DeparturesGetForStop(
    req: operations.DeparturesGetForStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeparturesGetForStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeparturesGetForStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/departures/route_type/{route_type}/stop/{stop_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DeparturesGetForStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeparturesGetForStopAndRoute - View departures for a specific route from a stop
  DeparturesGetForStopAndRoute(
    req: operations.DeparturesGetForStopAndRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeparturesGetForStopAndRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeparturesGetForStopAndRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DeparturesGetForStopAndRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DirectionsForDirection - View all routes for a direction of travel
  DirectionsForDirection(
    req: operations.DirectionsForDirectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DirectionsForDirectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DirectionsForDirectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/directions/{direction_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DirectionsForDirectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DirectionsForDirectionAndType - View all routes of a particular type for a direction of travel
  DirectionsForDirectionAndType(
    req: operations.DirectionsForDirectionAndTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DirectionsForDirectionAndTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DirectionsForDirectionAndTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/directions/{direction_id}/route_type/{route_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DirectionsForDirectionAndTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DirectionsForRoute - View directions that a route travels in
  DirectionsForRoute(
    req: operations.DirectionsForRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DirectionsForRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DirectionsForRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/directions/route/{route_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DirectionsForRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisruptionsGetAllDisruptions - View all disruptions for all route types
  DisruptionsGetAllDisruptions(
    req: operations.DisruptionsGetAllDisruptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetAllDisruptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetAllDisruptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/disruptions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DisruptionsGetAllDisruptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisruptionsGetDisruptionById - View a specific disruption
  DisruptionsGetDisruptionById(
    req: operations.DisruptionsGetDisruptionByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/{disruption_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DisruptionsGetDisruptionByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisruptionsGetDisruptionModes - Get all disruption modes
  DisruptionsGetDisruptionModes(
    req: operations.DisruptionsGetDisruptionModesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionModesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionModesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/disruptions/modes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DisruptionsGetDisruptionModesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionModesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionModesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisruptionsGetDisruptionsByRoute - View all disruptions for a particular route
  DisruptionsGetDisruptionsByRoute(
    req: operations.DisruptionsGetDisruptionsByRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionsByRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionsByRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/route/{route_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DisruptionsGetDisruptionsByRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisruptionsGetDisruptionsByRouteAndStop - View all disruptions for a particular route and stop
  DisruptionsGetDisruptionsByRouteAndStop(
    req: operations.DisruptionsGetDisruptionsByRouteAndStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionsByRouteAndStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionsByRouteAndStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/route/{route_id}/stop/{stop_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DisruptionsGetDisruptionsByRouteAndStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisruptionsGetDisruptionsByStop - View all disruptions for a particular stop
  DisruptionsGetDisruptionsByStop(
    req: operations.DisruptionsGetDisruptionsByStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionsByStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionsByStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/stop/{stop_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DisruptionsGetDisruptionsByStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FareEstimateGetFareEstimateByZone - Estimate a fare by zone
  FareEstimateGetFareEstimateByZone(
    req: operations.FareEstimateGetFareEstimateByZoneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FareEstimateGetFareEstimateByZoneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FareEstimateGetFareEstimateByZoneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.FareEstimateGetFareEstimateByZoneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3FareEstimateResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3FareEstimateResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OutletsGetAllOutlets - List all ticket outlets
  OutletsGetAllOutlets(
    req: operations.OutletsGetAllOutletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OutletsGetAllOutletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OutletsGetAllOutletsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/outlets";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.OutletsGetAllOutletsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3OutletResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3OutletResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OutletsGetOutletsByGeolocation - List ticket outlets near a specific location
  OutletsGetOutletsByGeolocation(
    req: operations.OutletsGetOutletsByGeolocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OutletsGetOutletsByGeolocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OutletsGetOutletsByGeolocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/outlets/location/{latitude},{longitude}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.OutletsGetOutletsByGeolocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3OutletGeolocationResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3OutletGeolocationResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatternsGetPatternByRun - View the stopping pattern for a specific trip/service run
  PatternsGetPatternByRun(
    req: operations.PatternsGetPatternByRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatternsGetPatternByRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatternsGetPatternByRunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/pattern/run/{run_ref}/route_type/{route_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PatternsGetPatternByRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3StoppingPattern = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3StoppingPattern = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RouteTypesGetRouteTypes - View all route types and their names
  RouteTypesGetRouteTypes(
    req: operations.RouteTypesGetRouteTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RouteTypesGetRouteTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RouteTypesGetRouteTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/route_types";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RouteTypesGetRouteTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RouteTypesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RouteTypesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RoutesOneOrMoreRoutes - View route names and numbers for all routes
  RoutesOneOrMoreRoutes(
    req: operations.RoutesOneOrMoreRoutesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RoutesOneOrMoreRoutesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RoutesOneOrMoreRoutesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/routes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RoutesOneOrMoreRoutesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RoutesRouteFromId - View route name and number for specific route ID
  RoutesRouteFromId(
    req: operations.RoutesRouteFromIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RoutesRouteFromIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RoutesRouteFromIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/routes/{route_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RoutesRouteFromIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RunsForRoute - View all trip/service runs for a specific route ID
  RunsForRoute(
    req: operations.RunsForRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/route/{route_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RunsForRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RunsForRouteAndRouteType - View all trip/service runs for a specific route ID and route type
  RunsForRouteAndRouteType(
    req: operations.RunsForRouteAndRouteTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRouteAndRouteTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRouteAndRouteTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/route/{route_id}/route_type/{route_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RunsForRouteAndRouteTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RunsForRun - View all trip/service runs for a specific run_ref
  RunsForRun(
    req: operations.RunsForRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/{run_ref}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RunsForRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RunsForRunAndRouteType - View the trip/service run for a specific run_ref and route type
  RunsForRunAndRouteType(
    req: operations.RunsForRunAndRouteTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRunAndRouteTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRunAndRouteTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/{run_ref}/route_type/{route_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RunsForRunAndRouteTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3RunResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3RunResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchSearch - View stops, routes and myki ticket outlets that match the search term
  SearchSearch(
    req: operations.SearchSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/search/{search_term}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3SearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3SearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopsStopDetails - View facilities at a specific stop (Metro and V/Line stations only)
  StopsStopDetails(
    req: operations.StopsStopDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopsStopDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopsStopDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/stops/{stop_id}/route_type/{route_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StopsStopDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3StopResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3StopResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopsStopsByGeolocation - View all stops near a specific location
  StopsStopsByGeolocation(
    req: operations.StopsStopsByGeolocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopsStopsByGeolocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopsStopsByGeolocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/stops/location/{latitude},{longitude}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StopsStopsByGeolocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3StopsByDistanceResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3StopsByDistanceResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopsStopsForRoute - View all stops on a specific route
  StopsStopsForRoute(
    req: operations.StopsStopsForRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopsStopsForRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopsStopsForRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/stops/route/{route_id}/route_type/{route_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StopsStopsForRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.v3StopsOnRouteResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3StopsOnRouteResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
