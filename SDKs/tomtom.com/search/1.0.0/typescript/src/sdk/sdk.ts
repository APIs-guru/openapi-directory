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
   * getSearchVersionNumberAdditionalDataExt - Additional Data
  **/
  getSearchVersionNumberAdditionalDataExt(
    req: operations.GetSearchVersionNumberAdditionalDataExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberAdditionalDataExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberAdditionalDataExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/additionalData.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberAdditionalDataExtResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getSearchVersionNumberCSCategoryExt - Low Bandwith Category Search
  **/
  getSearchVersionNumberCSCategoryExt(
    req: operations.GetSearchVersionNumberCSCategoryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberCSCategoryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberCSCategoryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/cS/{category}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberCSCategoryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberCategorySearchQueryExt - Category Search
  **/
  getSearchVersionNumberCategorySearchQueryExt(
    req: operations.GetSearchVersionNumberCategorySearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberCategorySearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberCategorySearchQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/categorySearch/{query}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberCategorySearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberGeocodeQueryExt - Geocode
  **/
  getSearchVersionNumberGeocodeQueryExt(
    req: operations.GetSearchVersionNumberGeocodeQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeocodeQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeocodeQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geocode/{query}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberGeocodeQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberGeometryFilterExt - Geometry Filter
  **/
  getSearchVersionNumberGeometryFilterExt(
    req: operations.GetSearchVersionNumberGeometryFilterExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeometryFilterExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeometryFilterExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometryFilter.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberGeometryFilterExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberGeometrySearchQueryExt - Geometry Search
  **/
  getSearchVersionNumberGeometrySearchQueryExt(
    req: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeometrySearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeometrySearchQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometrySearch/{query}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberGeometrySearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberNearbySearchExt - Nearby Search
  **/
  getSearchVersionNumberNearbySearchExt(
    req: operations.GetSearchVersionNumberNearbySearchExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberNearbySearchExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberNearbySearchExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/nearbySearch/.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberNearbySearchExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberPoiSearchQueryExt - Points of Interest Search
  **/
  getSearchVersionNumberPoiSearchQueryExt(
    req: operations.GetSearchVersionNumberPoiSearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberPoiSearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberPoiSearchQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/poiSearch/{query}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberPoiSearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
  **/
  getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(
    req: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
  **/
  getSearchVersionNumberReverseGeocodePositionExt(
    req: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberReverseGeocodePositionExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberReverseGeocodePositionExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberReverseGeocodePositionExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
  **/
  getSearchVersionNumberRoutedFilterPositionHeadingExt(
    req: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberRoutedSearchQueryPositionHeadingExt - Routed Search
  **/
  getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(
    req: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberSQueryExt - Low bandwith Search
  **/
  getSearchVersionNumberSQueryExt(
    req: operations.GetSearchVersionNumberSQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberSQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberSQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/s/{query}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberSQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberSearchQueryExt - Fuzzy Search
  **/
  getSearchVersionNumberSearchQueryExt(
    req: operations.GetSearchVersionNumberSearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberSearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberSearchQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/search/{query}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberSearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearchVersionNumberStructuredGeocodeExt - Structured Geocode
  **/
  getSearchVersionNumberStructuredGeocodeExt(
    req: operations.GetSearchVersionNumberStructuredGeocodeExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberStructuredGeocodeExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberStructuredGeocodeExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/structuredGeocode.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberStructuredGeocodeExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSearchVersionNumberGeometryFilterExt - Geometry Filter
  **/
  postSearchVersionNumberGeometryFilterExt(
    req: operations.PostSearchVersionNumberGeometryFilterExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberGeometryFilterExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberGeometryFilterExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometryFilter.{ext}", req.pathParams);

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
        const res: operations.PostSearchVersionNumberGeometryFilterExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSearchVersionNumberGeometrySearchQueryExt - Geometry Search
  **/
  postSearchVersionNumberGeometrySearchQueryExt(
    req: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberGeometrySearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberGeometrySearchQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometrySearch/{query}.{ext}", req.pathParams);

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
        const res: operations.PostSearchVersionNumberGeometrySearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
  **/
  postSearchVersionNumberRoutedFilterPositionHeadingExt(
    req: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", req.pathParams);

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
        const res: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSearchVersionNumberSearchAlongRouteQueryExt - Along Route Search
  **/
  postSearchVersionNumberSearchAlongRouteQueryExt(
    req: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", req.pathParams);

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
        const res: operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
