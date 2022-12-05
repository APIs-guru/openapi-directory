import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class InvestmentProducts {
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
   * getConfiguredInvestmentProductPrices - Get Current Prices of all Investment Products
   *
   * Returns current prices of all the investment products configured for this tenancy
  **/
  getConfiguredInvestmentProductPrices(
    req: operations.GetConfiguredInvestmentProductPricesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfiguredInvestmentProductPricesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfiguredInvestmentProductPricesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tenant/investment-products/v1/getCurrentPrices";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

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
        const res: operations.GetConfiguredInvestmentProductPricesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProductPrices200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProductPrices401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProductPrices403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProductPrices404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProductPrices429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProductPrices500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfiguredInvestmentProducts - Get Configured Investment Products
   *
   * Returns all the investment products configured for this tenancy. Request can be filtered by status to return all `active` or `inactive` investment products
  **/
  getConfiguredInvestmentProducts(
    req: operations.GetConfiguredInvestmentProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfiguredInvestmentProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfiguredInvestmentProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tenant/investment-products/v1";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

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
        const res: operations.GetConfiguredInvestmentProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProducts200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProducts401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProducts403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProducts404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProducts429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getConfiguredInvestmentProducts500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInvestmentProduct - Get details of a given Investment Product
   *
   * Returns the requested investment product
  **/
  getInvestmentProduct(
    req: operations.GetInvestmentProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvestmentProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvestmentProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/tenant/investment-products/v1/{category_id}/{investment_product_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvestmentProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProduct200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProduct401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProduct403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProduct404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProduct429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProduct500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInvestmentProductPrice - Get Current Price of an Investment Product
   *
   * Returns current price of the requested investment product
  **/
  getInvestmentProductPrice(
    req: operations.GetInvestmentProductPriceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvestmentProductPriceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvestmentProductPriceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/tenant/investment-products/v1/{category_id}/{investment_product_id}/getCurrentPrice", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvestmentProductPriceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProductPrice200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProductPrice401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProductPrice403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProductPrice404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProductPrice429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getInvestmentProductPrice500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
