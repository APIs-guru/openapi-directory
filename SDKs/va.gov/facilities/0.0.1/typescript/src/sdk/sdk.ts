import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://sandbox-api.va.gov/services/va_facilities/{version}",
  "https://api.va.gov/services/va_facilities/{version}",
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
  
  // GetAllFacilities - Bulk download information for all facilities
  /** 
   * Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.
  **/
  GetAllFacilities(
    req: operations.GetAllFacilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllFacilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllFacilitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/facilities/all";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllFacilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/vnd.geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/csv`)) {
                res.getAllFacilities200TextCsvString = JSON.stringify(httpRes?.data);
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFacilitiesByLocation - Query facilities by location or IDs, with optional filters
  /** 
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
  GetFacilitiesByLocation(
    req: operations.GetFacilitiesByLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacilitiesByLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacilitiesByLocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/facilities";
    
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
        let res: operations.GetFacilitiesByLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/vnd.geo+json`)) {
                res.geoFacilitiesResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.facilitiesResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFacilityById - Retrieve a specific facility by ID
  GetFacilityById(
    req: operations.GetFacilityByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacilityByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacilityByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/facilities/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFacilityByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/geo+json`)) {
                res.geoFacilityReadResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/vnd.geo+json`)) {
                res.geoFacilityReadResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.facilityReadResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFacilityIds - Bulk download of all facility IDs
  /** 
   * Retrieves all available facility IDs only
  **/
  GetFacilityIds(
    req: operations.GetFacilityIdsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacilityIdsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacilityIdsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ids";
    
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
        let res: operations.GetFacilityIdsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.facilitiesIdsResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNearbyFacilities - Retrieve all VA health facilities reachable by driving within the specified time period
  /** 
   * Retrieve all VA health facilities that are located within a specified drive time from a specified location based on address (`street_address`, `city`, `state`, and `zip`) or coordinates (`lat` and `lng`). Optional filter parameters include `drive_time` and `services[]`. 
   * 
   * Results of this operation are paginated. Responses include pagination information in the standard JSON API "links" and "meta" elements. 
   * 
   * The "attributes" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.
   * 
   * To retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.
  **/
  GetNearbyFacilities(
    req: operations.GetNearbyFacilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNearbyFacilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNearbyFacilitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/nearby";
    
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
        let res: operations.GetNearbyFacilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nearbyResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericError = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
