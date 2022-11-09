import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
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
  
  // GetMapVersionNumberCopyrightsCaptionFormat - Captions
  /** 
   * This API returns copyright captions for the map service.
  **/
  GetMapVersionNumberCopyrightsCaptionFormat(
    req: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsCaptionFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsCaptionFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights/caption.{format}", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberCopyrightsCaptionFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 304:
            break;
          case 400:
            break;
          case 403:
            break;
          case 410:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberCopyrightsFormat - Copyrights whole world
  /** 
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for the whole world.
  **/
  GetMapVersionNumberCopyrightsFormat(
    req: operations.GetMapVersionNumberCopyrightsFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights.{format}", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberCopyrightsFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 304:
            break;
          case 400:
            break;
          case 403:
            break;
          case 410:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
  /** 
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for a specific bounding box.
  **/
  GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(
    req: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 304:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 410:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
  /** 
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for the a specific map tile.
  **/
  GetMapVersionNumberCopyrightsZoomXYFormat(
    req: operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 304:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 410:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberStaticimage - Static Image
  /** 
   * The Static Image service renders a rectangular raster image
   * in the style, size, and zoom level specified. The image can be requested
   * using either a center point plus width and height or a bounding box.
  **/
  GetMapVersionNumberStaticimage(
    req: operations.GetMapVersionNumberStaticimageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberStaticimageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberStaticimageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/staticimage", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberStaticimageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberTileLayerStyleZoomXYFormat - Tile
  /** 
   * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
  **/
  GetMapVersionNumberTileLayerStyleZoomXYFormat(
    req: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 302:
            break;
          case 400:
            break;
          case 403:
            break;
          case 410:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberTileLayerStyleZoomXYPbf - Tile
  /** 
   * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
  **/
  GetMapVersionNumberTileLayerStyleZoomXYPbf(
    req: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf", req.pathParams);
    
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
        let res: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml - WMTS
  /** 
   * The WMTS GetCapabilities call implements version 1.0.0 of
   * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
   * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
   * calls to TomTom's raster map tile service. See the
   * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
   * for more information on WMTS.
  **/
  GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(
    req: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 401:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCapabilities - GetCapabilities
  /** 
   * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
   * the Web Map Service (WMS). It provides descriptions of the other calls
   * that are available in the implementation.
  **/
  GetCapabilities(
    req: operations.GetCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCapabilitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/wms//", req.pathParams);
    
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
        let res: operations.GetCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 202:
            break;
          case 401:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMap - GetMap
  /** 
   * The GetMap call implements the Web Map Service 1.1.1 standard
   * to access TomTom raster map tiles. This service is described
   * in the response to the GetCapabilities API call.
  **/
  GetMap(
    req: operations.GetMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/wms/", req.pathParams);
    
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
        let res: operations.GetMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 202:
            break;
          case 401:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
