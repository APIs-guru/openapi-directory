import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class InvestmentProductTransactions {
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
   * executeBuyTrasaction - Execute Buy Transaction(s)
   *
   * Invoke execution of one or more buy transactions as defined in the request
  **/
  executeBuyTrasaction(
    req: operations.ExecuteBuyTrasactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExecuteBuyTrasactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExecuteBuyTrasactionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tenant/transactions/v1/buy";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ExecuteBuyTrasactionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction400ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction409ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeBuyTrasaction500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * executeSellTrasaction - Execute Sell Transaction(s)
   *
   * Invoke execution of one or more Sell transactions as defined in the request
  **/
  executeSellTrasaction(
    req: operations.ExecuteSellTrasactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExecuteSellTrasactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExecuteSellTrasactionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tenant/transactions/v1/sell";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ExecuteSellTrasactionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction400ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction409ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSellTrasaction500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
