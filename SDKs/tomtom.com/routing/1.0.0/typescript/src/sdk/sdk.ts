import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.tomtom.com",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * getRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
   *
   * Calculates a set of locations that can be reached from the origin point.
  **/
  getRoutingVersionNumberCalculateReachableRangeOriginContentType(
    req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
   *
   * Calculates a route between an origin and a destination.
  **/
  getRoutingVersionNumberCalculateRouteLocationsContentType(
    req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
   *
   * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
  **/
  postRoutingVersionNumberCalculateReachableRangeOriginContentType(
    req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
   *
   * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
  **/
  postRoutingVersionNumberCalculateRouteLocationsContentType(
    req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
