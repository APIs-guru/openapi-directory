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
  
  // GetSearchVersionNumberAdditionalDataExt - Additional Data
  GetSearchVersionNumberAdditionalDataExt(
    req: operations.GetSearchVersionNumberAdditionalDataExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberAdditionalDataExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberAdditionalDataExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/additionalData.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberAdditionalDataExtResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  // GetSearchVersionNumberCSCategoryExt - Low Bandwith Category Search
  GetSearchVersionNumberCSCategoryExt(
    req: operations.GetSearchVersionNumberCSCategoryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberCSCategoryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberCSCategoryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/cS/{category}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberCSCategoryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberCategorySearchQueryExt - Category Search
  GetSearchVersionNumberCategorySearchQueryExt(
    req: operations.GetSearchVersionNumberCategorySearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberCategorySearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberCategorySearchQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/categorySearch/{query}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberCategorySearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberGeocodeQueryExt - Geocode
  GetSearchVersionNumberGeocodeQueryExt(
    req: operations.GetSearchVersionNumberGeocodeQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeocodeQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeocodeQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geocode/{query}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberGeocodeQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberGeometryFilterExt - Geometry Filter
  GetSearchVersionNumberGeometryFilterExt(
    req: operations.GetSearchVersionNumberGeometryFilterExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeometryFilterExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeometryFilterExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometryFilter.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberGeometryFilterExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberGeometrySearchQueryExt - Geometry Search
  GetSearchVersionNumberGeometrySearchQueryExt(
    req: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeometrySearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeometrySearchQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometrySearch/{query}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberGeometrySearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberNearbySearchExt - Nearby Search
  GetSearchVersionNumberNearbySearchExt(
    req: operations.GetSearchVersionNumberNearbySearchExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberNearbySearchExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberNearbySearchExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/nearbySearch/.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberNearbySearchExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberPoiSearchQueryExt - Points of Interest Search
  GetSearchVersionNumberPoiSearchQueryExt(
    req: operations.GetSearchVersionNumberPoiSearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberPoiSearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberPoiSearchQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/poiSearch/{query}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberPoiSearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
  GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt(
    req: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
  GetSearchVersionNumberReverseGeocodePositionExt(
    req: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberReverseGeocodePositionExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberReverseGeocodePositionExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberReverseGeocodePositionExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
  GetSearchVersionNumberRoutedFilterPositionHeadingExt(
    req: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt - Routed Search
  GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt(
    req: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberSQueryExt - Low bandwith Search
  GetSearchVersionNumberSQueryExt(
    req: operations.GetSearchVersionNumberSQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberSQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberSQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/s/{query}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberSQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberSearchQueryExt - Fuzzy Search
  GetSearchVersionNumberSearchQueryExt(
    req: operations.GetSearchVersionNumberSearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberSearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberSearchQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/search/{query}.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberSearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSearchVersionNumberStructuredGeocodeExt - Structured Geocode
  GetSearchVersionNumberStructuredGeocodeExt(
    req: operations.GetSearchVersionNumberStructuredGeocodeExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberStructuredGeocodeExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberStructuredGeocodeExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/structuredGeocode.{ext}", req.pathParams);
    
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
        let res: operations.GetSearchVersionNumberStructuredGeocodeExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSearchVersionNumberGeometryFilterExt - Geometry Filter
  PostSearchVersionNumberGeometryFilterExt(
    req: operations.PostSearchVersionNumberGeometryFilterExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberGeometryFilterExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberGeometryFilterExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometryFilter.{ext}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostSearchVersionNumberGeometryFilterExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSearchVersionNumberGeometrySearchQueryExt - Geometry Search
  PostSearchVersionNumberGeometrySearchQueryExt(
    req: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberGeometrySearchQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberGeometrySearchQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/geometrySearch/{query}.{ext}", req.pathParams);
    
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
        let res: operations.PostSearchVersionNumberGeometrySearchQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
  PostSearchVersionNumberRoutedFilterPositionHeadingExt(
    req: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", req.pathParams);
    
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
        let res: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSearchVersionNumberSearchAlongRouteQueryExt - Along Route Search
  PostSearchVersionNumberSearchAlongRouteQueryExt(
    req: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", req.pathParams);
    
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
        let res: operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
          case 405:
            break;
          case 596:
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
