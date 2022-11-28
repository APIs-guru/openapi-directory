import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Facilities {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getAllFacilities - Bulk download information for all facilities
   *
   * Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.
  **/
  getAllFacilities(
    req: operations.GetAllFacilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllFacilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllFacilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/facilities/all";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllFacilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/vnd.geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/csv`)) {
                res.getAllFacilities200TextCsvString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFacilitiesByLocation - Query facilities by location or IDs, with optional filters
   *
   * Query facilities by bounding box, latitude and longitude, state, visn, or zip code. Bounding box is specified as four `bbox[]` parameters, long1, lat1, long2, lat2. (Relative order is unimportant.)
   * 
   * A query by latitude and longitude returns all facilities in the system, sorted by distance from that location.
   * 
   * All location queries support filtering by facility type, available services, and mobile status.
   * 
   * One can also retrieve facilities by ID using a comma-separated list like `?ids=id1,id2`. When requesting multiple facilities by ID, the API will return as many results as it can find matches for, omitting IDs where there is no match. It will not return an HTTP error code if it is unable to match a requested ID. Clients may supply IDs up to the limit their HTTP client enforces for URI path lengths. (Usually 2048 characters.)
   * 
   * Results are paginated. JSON responses include pagination information in the standard JSON API "links" and "meta" elements. 
   * 
   * ### Parameter combinations
   * You may optionally specify `page` and `per_page` with any query. You must specify one of the following parameter combinations: 
   * 
   * - `bbox[]`, with the option of any combination of `type`, `services[]`, or `mobile`
   * 
   * - `ids`
   * 
   * - `lat` and `long`, with the option of any combination of `ids`, `type`, `services[]`, or `mobile`
   * 
   * - `state`, with the option of any combination of `type`, `services[]`, or `mobile`
   * 
   * - `visn`
   * 
   * - `zip`, with the option of any combination of `type`, `services[]`, or `mobile`
   * 
   *  Invalid combinations will return `400 Bad Request`.
  **/
  getFacilitiesByLocation(
    req: operations.GetFacilitiesByLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacilitiesByLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacilitiesByLocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/facilities";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetFacilitiesByLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/vnd.geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.facilitiesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFacilityById - Retrieve a specific facility by ID
  **/
  getFacilityById(
    req: operations.GetFacilityByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacilityByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacilityByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/facilities/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFacilityByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/geo+json`)) {
                res.geoFacilityReadResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/vnd.geo+json`)) {
                res.geoFacilityReadResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.facilityReadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFacilityIds - Bulk download of all facility IDs
   *
   * Retrieves all available facility IDs only
  **/
  getFacilityIds(
    req: operations.GetFacilityIdsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacilityIdsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacilityIdsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ids";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetFacilityIdsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.facilitiesIdsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNearbyFacilities - Retrieve all VA health facilities reachable by driving within the specified time period
   *
   * Retrieve all VA health facilities that are located within a specified drive time from a specified location based on address (`street_address`, `city`, `state`, and `zip`) or coordinates (`lat` and `lng`). Optional filter parameters include `drive_time` and `services[]`. 
   * 
   * Results of this operation are paginated. Responses include pagination information in the standard JSON API "links" and "meta" elements. 
   * 
   * The "attributes" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.
   * 
   * To retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.
  **/
  getNearbyFacilities(
    req: operations.GetNearbyFacilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNearbyFacilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNearbyFacilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/nearby";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNearbyFacilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nearbyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
