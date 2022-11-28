import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
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
   * getMapVersionNumberCopyrightsCaptionFormat - Captions
   *
   * This API returns copyright captions for the map service.
  **/
  getMapVersionNumberCopyrightsCaptionFormat(
    req: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsCaptionFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsCaptionFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights/caption.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsCaptionFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberCopyrightsFormat - Copyrights whole world
   *
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for the whole world.
  **/
  getMapVersionNumberCopyrightsFormat(
    req: operations.GetMapVersionNumberCopyrightsFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
   *
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for a specific bounding box.
  **/
  getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(
    req: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
   *
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for the a specific map tile.
  **/
  getMapVersionNumberCopyrightsZoomXYFormat(
    req: operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberStaticimage - Static Image
   *
   * The Static Image service renders a rectangular raster image
   * in the style, size, and zoom level specified. The image can be requested
   * using either a center point plus width and height or a bounding box.
  **/
  getMapVersionNumberStaticimage(
    req: operations.GetMapVersionNumberStaticimageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberStaticimageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberStaticimageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/staticimage", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberStaticimageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberTileLayerStyleZoomXYFormat - Tile
   *
   * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
  **/
  getMapVersionNumberTileLayerStyleZoomXYFormat(
    req: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberTileLayerStyleZoomXYPbf - Tile
   *
   * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
  **/
  getMapVersionNumberTileLayerStyleZoomXYPbf(
    req: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml - WMTS
   *
   * The WMTS GetCapabilities call implements version 1.0.0 of
   * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
   * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
   * calls to TomTom's raster map tile service. See the
   * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
   * for more information on WMTS.
  **/
  getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(
    req: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCapabilities - GetCapabilities
   *
   * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
   * the Web Map Service (WMS). It provides descriptions of the other calls
   * that are available in the implementation.
  **/
  getCapabilities(
    req: operations.GetCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCapabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/wms//", req.pathParams);
    
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
        const res: operations.GetCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMap - GetMap
   *
   * The GetMap call implements the Web Map Service 1.1.1 standard
   * to access TomTom raster map tiles. This service is described
   * in the response to the GetCapabilities API call.
  **/
  getMap(
    req: operations.GetMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/map/{versionNumber}/wms/", req.pathParams);
    
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
        const res: operations.GetMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
