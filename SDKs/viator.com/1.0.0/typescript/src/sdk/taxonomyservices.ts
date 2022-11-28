import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class TaxonomyServices {
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
   * taxonomyAttractions - /taxonomy/attractions
   *
   * Get attractions
   * - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
   * - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
   * 
  **/
  taxonomyAttractions(
    req: operations.TaxonomyAttractionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomyAttractionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomyAttractionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomy/attractions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.TaxonomyAttractionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxonomyAttractions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * taxonomyCategories - /taxonomy/categories
   *
   * Get all product categories
   * - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
   * - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
   * - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
   * 
  **/
  taxonomyCategories(
    req: operations.TaxonomyCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomyCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomyCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomy/categories";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TaxonomyCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxonomyCategories200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * taxonomyDestinations - /taxonomy/destinations
   *
   * Get details of all destinations supported by this API
   * - Retrieves all the country taxonomy/city nodes as a flat list
   * - Returns a complete list of Viator destinations, including destination names and parent identifiers
   * - Used to provide navigation through drill down lists or combo boxes
   * 
  **/
  taxonomyDestinations(
    req: operations.TaxonomyDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomyDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomyDestinationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomy/destinations";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.TaxonomyDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxonomyDestinations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
