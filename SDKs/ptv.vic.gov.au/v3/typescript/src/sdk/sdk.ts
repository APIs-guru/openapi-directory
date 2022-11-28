import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
   * departuresGetForStop - View departures for all routes from a stop
  **/
  departuresGetForStop(
    req: operations.DeparturesGetForStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeparturesGetForStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeparturesGetForStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/departures/route_type/{route_type}/stop/{stop_id}", req.pathParams);
    
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
        const res: operations.DeparturesGetForStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * departuresGetForStopAndRoute - View departures for a specific route from a stop
  **/
  departuresGetForStopAndRoute(
    req: operations.DeparturesGetForStopAndRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeparturesGetForStopAndRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeparturesGetForStopAndRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id}", req.pathParams);
    
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
        const res: operations.DeparturesGetForStopAndRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DeparturesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * directionsForDirection - View all routes for a direction of travel
  **/
  directionsForDirection(
    req: operations.DirectionsForDirectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DirectionsForDirectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DirectionsForDirectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/directions/{direction_id}", req.pathParams);
    
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
        const res: operations.DirectionsForDirectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * directionsForDirectionAndType - View all routes of a particular type for a direction of travel
  **/
  directionsForDirectionAndType(
    req: operations.DirectionsForDirectionAndTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DirectionsForDirectionAndTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DirectionsForDirectionAndTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/directions/{direction_id}/route_type/{route_type}", req.pathParams);
    
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
        const res: operations.DirectionsForDirectionAndTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * directionsForRoute - View directions that a route travels in
  **/
  directionsForRoute(
    req: operations.DirectionsForRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DirectionsForRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DirectionsForRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/directions/route/{route_id}", req.pathParams);
    
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
        const res: operations.DirectionsForRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DirectionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disruptionsGetAllDisruptions - View all disruptions for all route types
  **/
  disruptionsGetAllDisruptions(
    req: operations.DisruptionsGetAllDisruptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetAllDisruptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetAllDisruptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/disruptions";
    
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
        const res: operations.DisruptionsGetAllDisruptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disruptionsGetDisruptionById - View a specific disruption
  **/
  disruptionsGetDisruptionById(
    req: operations.DisruptionsGetDisruptionByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/{disruption_id}", req.pathParams);
    
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
        const res: operations.DisruptionsGetDisruptionByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disruptionsGetDisruptionModes - Get all disruption modes
  **/
  disruptionsGetDisruptionModes(
    req: operations.DisruptionsGetDisruptionModesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionModesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionModesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/disruptions/modes";
    
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
        const res: operations.DisruptionsGetDisruptionModesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionModesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionModesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disruptionsGetDisruptionsByRoute - View all disruptions for a particular route
  **/
  disruptionsGetDisruptionsByRoute(
    req: operations.DisruptionsGetDisruptionsByRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionsByRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionsByRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/route/{route_id}", req.pathParams);
    
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
        const res: operations.DisruptionsGetDisruptionsByRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disruptionsGetDisruptionsByRouteAndStop - View all disruptions for a particular route and stop
  **/
  disruptionsGetDisruptionsByRouteAndStop(
    req: operations.DisruptionsGetDisruptionsByRouteAndStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionsByRouteAndStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionsByRouteAndStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/route/{route_id}/stop/{stop_id}", req.pathParams);
    
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
        const res: operations.DisruptionsGetDisruptionsByRouteAndStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disruptionsGetDisruptionsByStop - View all disruptions for a particular stop
  **/
  disruptionsGetDisruptionsByStop(
    req: operations.DisruptionsGetDisruptionsByStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisruptionsGetDisruptionsByStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisruptionsGetDisruptionsByStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/disruptions/stop/{stop_id}", req.pathParams);
    
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
        const res: operations.DisruptionsGetDisruptionsByStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3DisruptionsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fareEstimateGetFareEstimateByZone - Estimate a fare by zone
  **/
  fareEstimateGetFareEstimateByZone(
    req: operations.FareEstimateGetFareEstimateByZoneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FareEstimateGetFareEstimateByZoneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FareEstimateGetFareEstimateByZoneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}", req.pathParams);
    
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
        const res: operations.FareEstimateGetFareEstimateByZoneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3FareEstimateResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3FareEstimateResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * outletsGetAllOutlets - List all ticket outlets
  **/
  outletsGetAllOutlets(
    req: operations.OutletsGetAllOutletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OutletsGetAllOutletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OutletsGetAllOutletsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/outlets";
    
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
        const res: operations.OutletsGetAllOutletsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3OutletResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3OutletResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * outletsGetOutletsByGeolocation - List ticket outlets near a specific location
  **/
  outletsGetOutletsByGeolocation(
    req: operations.OutletsGetOutletsByGeolocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OutletsGetOutletsByGeolocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OutletsGetOutletsByGeolocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/outlets/location/{latitude},{longitude}", req.pathParams);
    
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
        const res: operations.OutletsGetOutletsByGeolocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3OutletGeolocationResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3OutletGeolocationResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patternsGetPatternByRun - View the stopping pattern for a specific trip/service run
  **/
  patternsGetPatternByRun(
    req: operations.PatternsGetPatternByRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatternsGetPatternByRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatternsGetPatternByRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/pattern/run/{run_ref}/route_type/{route_type}", req.pathParams);
    
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
        const res: operations.PatternsGetPatternByRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3StoppingPattern = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3StoppingPattern = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * routeTypesGetRouteTypes - View all route types and their names
  **/
  routeTypesGetRouteTypes(
    req: operations.RouteTypesGetRouteTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RouteTypesGetRouteTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RouteTypesGetRouteTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/route_types";
    
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
        const res: operations.RouteTypesGetRouteTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RouteTypesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RouteTypesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * routesOneOrMoreRoutes - View route names and numbers for all routes
  **/
  routesOneOrMoreRoutes(
    req: operations.RoutesOneOrMoreRoutesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RoutesOneOrMoreRoutesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RoutesOneOrMoreRoutesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/routes";
    
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
        const res: operations.RoutesOneOrMoreRoutesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * routesRouteFromId - View route name and number for specific route ID
  **/
  routesRouteFromId(
    req: operations.RoutesRouteFromIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RoutesRouteFromIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RoutesRouteFromIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/routes/{route_id}", req.pathParams);
    
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
        const res: operations.RoutesRouteFromIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RouteResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * runsForRoute - View all trip/service runs for a specific route ID
  **/
  runsForRoute(
    req: operations.RunsForRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/route/{route_id}", req.pathParams);
    
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
        const res: operations.RunsForRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * runsForRouteAndRouteType - View all trip/service runs for a specific route ID and route type
  **/
  runsForRouteAndRouteType(
    req: operations.RunsForRouteAndRouteTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRouteAndRouteTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRouteAndRouteTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/route/{route_id}/route_type/{route_type}", req.pathParams);
    
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
        const res: operations.RunsForRouteAndRouteTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * runsForRun - View all trip/service runs for a specific run_ref
  **/
  runsForRun(
    req: operations.RunsForRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/{run_ref}", req.pathParams);
    
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
        const res: operations.RunsForRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RunsResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * runsForRunAndRouteType - View the trip/service run for a specific run_ref and route type
  **/
  runsForRunAndRouteType(
    req: operations.RunsForRunAndRouteTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunsForRunAndRouteTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunsForRunAndRouteTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/runs/{run_ref}/route_type/{route_type}", req.pathParams);
    
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
        const res: operations.RunsForRunAndRouteTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3RunResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3RunResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchSearch - View stops, routes and myki ticket outlets that match the search term
  **/
  searchSearch(
    req: operations.SearchSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/search/{search_term}", req.pathParams);
    
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
        const res: operations.SearchSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3SearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3SearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopsStopDetails - View facilities at a specific stop (Metro and V/Line stations only)
  **/
  stopsStopDetails(
    req: operations.StopsStopDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopsStopDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopsStopDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/stops/{stop_id}/route_type/{route_type}", req.pathParams);
    
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
        const res: operations.StopsStopDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3StopResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3StopResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopsStopsByGeolocation - View all stops near a specific location
  **/
  stopsStopsByGeolocation(
    req: operations.StopsStopsByGeolocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopsStopsByGeolocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopsStopsByGeolocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/stops/location/{latitude},{longitude}", req.pathParams);
    
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
        const res: operations.StopsStopsByGeolocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3StopsByDistanceResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3StopsByDistanceResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopsStopsForRoute - View all stops on a specific route
  **/
  stopsStopsForRoute(
    req: operations.StopsStopsForRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopsStopsForRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopsStopsForRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/stops/route/{route_id}/route_type/{route_type}", req.pathParams);
    
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
        const res: operations.StopsStopsForRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3StopsOnRouteResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3StopsOnRouteResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
