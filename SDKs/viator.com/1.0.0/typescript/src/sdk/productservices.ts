import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ProductServices {
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
   * availableProducts - /available/products
   *
   * Find products that are available
   * 
   *  This endpoint returns available products filtered by product code, date range or number of adult travelers
   * 
   * 
   *  - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   *  
   * 
  **/
  availableProducts(
    req: operations.AvailableProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AvailableProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AvailableProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/available/products";

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
        const res: operations.AvailableProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.availableProducts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * product - /product
   *
   * Get product information
   * This service provides all product details required for a product display page, as well as information required for price checks and booking, such as: 
   * - age bands
   * - tour grades
   * - language options 
   * - booking questions
   * - hotel pickup flags
   * 
   * **currencyCode (in query):** 
   * - use this parameter to specify the currency in which product pricing should be displayed
   * - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
   * - "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
   * - **Note**: you will be billed in the currency in which the booking was made
   * 
   * **Product photos**
   * 
   * &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;
   * 
   * **Videos**
   * 
   * - Videos are no longer provided via this API
   * 
  **/
  product(
    req: operations.ProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product";
    
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
        const res: operations.ProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.product200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * productPhotos - /product/photos
   *
   * Get photos of a product submitted by users
  **/
  productPhotos(
    req: operations.ProductPhotosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductPhotosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductPhotosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product/photos";
    
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
        const res: operations.ProductPhotosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productPhotos200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * productReviews - /product/reviews
   *
   * Get user-submitted reviews of a product
   * 
   * **Note**: 
   * - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. 
   * - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
   * - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
   * - Only reviews in the language specified in the Accept-Language request header will be returned
   * 
   * **Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":
   * 
   * ```javascript
   * https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
   * ```
   * 
  **/
  productReviews(
    req: operations.ProductReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product/reviews";
    
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
        const res: operations.ProductReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productReviews200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchFreetext - /search/freetext
   *
   * Free text search
   * - This service provides a **free text search across all products and destinations**
   * - The `text` parameter is required
   * - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content
   * 
  **/
  searchFreetext(
    req: operations.SearchFreetextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFreetextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFreetextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/freetext";

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
        const res: operations.SearchFreetextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchFreetext200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchProducts - /search/products
   *
   * Search for products
   * This service is used to search for products based on various criteria; such as:
   * * the destination (locale) in which it operates
   * * its association with a tourist attraction
   * * its category and/or subcategory
   * * the time period during which it operates
   * The fields you include in the request body for this service determine the kind of search that will be performed.
   * 
   * **&lt;u&gt;Note&lt;/u&gt;**: 
   * 
   * * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
   * * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
   * * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
   * * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.
   * 
   * **&lt;u&gt;Examples&lt;/u&gt;**:
   * 
   * **Search by destination**:
   * 
   * * E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
   * ```javascript
   * {
   *     "destId": 684,
   *     "subCatId": 26052,
   *     "sortOrder": "REVIEW_AVG_RATING_D",
   *     "topX": "1-3"
   * }
   * ```
   * 
   * **Search by attraction-link**:
   * 
   * * E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
   * ```javascript
   * {
   *     "seoId": 1115,
   *     "sortOrder": "PRICE_FROM_D",
   *     "topX": "1-3"
   * }
   * ```
   * 
   * **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
   * - Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination. 
   * - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service. 
   * ```javascript
   * {
   *     "destId": 684,
   *     "startDate": "2020-02-21",
   *     "endDate": "2020-03-21",
   *     "sortOrder": "PRICE_FROM_D",
   *     "topX": "1-3"
   * }
   * ```
   * 
   * - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.
   * 
  **/
  searchProducts(
    req: operations.SearchProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/products";

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
        const res: operations.SearchProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchProducts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchProductsCodes - /search/products/codes
   *
   * Search by product code
   * - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
   * - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).
   * 
  **/
  searchProductsCodes(
    req: operations.SearchProductsCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProductsCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProductsCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/products/codes";

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
        const res: operations.SearchProductsCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchProductsCodes200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
