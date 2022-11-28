import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PurchaseInvoices {
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
   * getInvoiceJson - Get Purchase invoice data as JSON
   *
   * Get a specific PurchaseInvoice, in JSON format. Recommended way of getting a PurchaseInvoice, since it provides the data in a JSON object and the JSON format is the richest we have that supports all features a PurchaseInvoice can have.
  **/
  getInvoiceJson(
    req: operations.GetInvoiceJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/purchase_invoices/{guid}", req.pathParams);
    
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
        const res: operations.GetInvoiceJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.purchaseInvoice = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInvoiceUbl - Get Purchase invoice data as JSON with a Base64-encoded SI-1.2 UBL string
   *
   * Get a specific PurchaseInvoice. Using /json as {packaging} is recommended (in which case you can just omit it), however, this endpoint allows getting the invoice in a differently serialized format such as UBL.
  **/
  getInvoiceUbl(
    req: operations.GetInvoiceUblRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceUblResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceUblRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/purchase_invoices/{guid}/{packaging}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceUblResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.purchaseInvoiceUbl = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInvoiceUblVersioned - Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version
   *
   * Get a specific PurchaseInvoice in a non-JSON serialized format with version.
  **/
  getInvoiceUblVersioned(
    req: operations.GetInvoiceUblVersionedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceUblVersionedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceUblVersionedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/purchase_invoices/{guid}/{packaging}/{package_version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceUblVersionedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.purchaseInvoiceUbl = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
