import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SwitchInstruction {
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
   * executeSwitchTrasaction - Execute Switch Instruction
   *
   * Send a switch instruction with details of the investment products to be sold, free cash to be used (if any) and investment products to be bought.
  **/
  executeSwitchTrasaction(
    req: operations.ExecuteSwitchTrasactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExecuteSwitchTrasactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExecuteSwitchTrasactionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tenant/transactions/v1/switch";

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
        const res: operations.ExecuteSwitchTrasactionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction400ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction409ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.executeSwitchTrasaction500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSwitch - Retrieve Switch instruction from Switch ID
   *
   * Retrieve the status of an existing switch instruction from the `switch_transaction_id`. If the status of the individual buy/sell transactions are required, you must send the request with include_details = `true`.
  **/
  getSwitch(
    req: operations.GetSwitchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSwitchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSwitchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/tenant/transactions/v1/switch/{switch_transaction_id}", req.pathParams);
    
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
        const res: operations.GetSwitchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch400ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch401ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch403ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch404ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch409ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch429ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSwitch500ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
