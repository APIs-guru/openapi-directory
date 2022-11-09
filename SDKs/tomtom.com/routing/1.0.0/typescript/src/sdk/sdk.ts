import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
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
  
  // GetRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
  /** 
   * Calculates a set of locations that can be reached from the origin point.
  **/
  GetRoutingVersionNumberCalculateReachableRangeOriginContentType(
    req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 408:
            break;
          case 414:
            break;
          case 500:
            break;
          case 502:
            break;
          case 503:
            break;
          case 504:
            break;
          case 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
  /** 
   * Calculates a route between an origin and a destination.
  **/
  GetRoutingVersionNumberCalculateRouteLocationsContentType(
    req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 408:
            break;
          case 414:
            break;
          case 500:
            break;
          case 502:
            break;
          case 503:
            break;
          case 504:
            break;
          case 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
  /** 
   * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
  **/
  PostRoutingVersionNumberCalculateReachableRangeOriginContentType(
    req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 408:
            break;
          case 414:
            break;
          case 500:
            break;
          case 502:
            break;
          case 503:
            break;
          case 504:
            break;
          case 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
  /** 
   * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
  **/
  PostRoutingVersionNumberCalculateRouteLocationsContentType(
    req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 408:
            break;
          case 414:
            break;
          case 500:
            break;
          case 502:
            break;
          case 503:
            break;
          case 504:
            break;
          case 596:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
