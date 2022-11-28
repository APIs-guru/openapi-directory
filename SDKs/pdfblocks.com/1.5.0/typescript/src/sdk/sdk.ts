import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.pdfblocks.com",
	"https://eu.api.pdfblocks.com",
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

/* SDK Documentation: https://www.pdfblocks.com/docs/api/v1 - Documentation and examples*/
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
   * addImageWatermarkV1 - Add an image watermark to a PDF
   *
   * Add an image watermark to each page of a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/add-watermark-image - Documentation and examples
  **/
  addImageWatermarkV1(
    req: operations.AddImageWatermarkV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.AddImageWatermarkV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddImageWatermarkV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/add_watermark/image";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddImageWatermarkV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.addImageWatermarkV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.addImageWatermarkV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addPasswordV1 - Add a password to a PDF
   *
   * Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.
   *
   * https://www.pdfblocks.com/docs/api/v1/add-password - Documentation and examples
  **/
  addPasswordV1(
    req: operations.AddPasswordV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPasswordV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddPasswordV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/add_password";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddPasswordV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.addPasswordV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.addPasswordV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addRestrictionsV1 - Add restrictions to a PDF
   *
   * Add restrictions to prevent copying, printing, and modifying a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/add-restrictions - Documentation and examples
  **/
  addRestrictionsV1(
    req: operations.AddRestrictionsV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.AddRestrictionsV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddRestrictionsV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/add_restrictions";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddRestrictionsV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.addRestrictionsV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.addRestrictionsV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addTextWatermarkV1 - Add a text watermark to a PDF
   *
   * Add a text watermark to each page of a PDF document. Choose from several watermark templates.
   *
   * https://www.pdfblocks.com/docs/api/v1/add-watermark-text - Documentation and examples
  **/
  addTextWatermarkV1(
    req: operations.AddTextWatermarkV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTextWatermarkV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTextWatermarkV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/add_watermark/text";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddTextWatermarkV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.addTextWatermarkV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.addTextWatermarkV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * extractPagesV1 - Extract pages from a PDF
   *
   * Extract one or more pages from a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/extract-pages - Documentation and examples
  **/
  extractPagesV1(
    req: operations.ExtractPagesV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ExtractPagesV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExtractPagesV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/extract_pages";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.ExtractPagesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.extractPagesV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.extractPagesV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergeDocumentsV1 - Merge PDF documents
   *
   * Combine multiple PDF documents into a single PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/merge-documents - Documentation and examples
  **/
  mergeDocumentsV1(
    req: operations.MergeDocumentsV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.MergeDocumentsV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergeDocumentsV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/merge_documents";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.MergeDocumentsV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.mergeDocumentsV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.mergeDocumentsV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removePagesV1 - Remove pages from a PDF
   *
   * Remove one or more pages from a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/remove-pages - Documentation and examples
  **/
  removePagesV1(
    req: operations.RemovePagesV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.RemovePagesV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemovePagesV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/remove_pages";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RemovePagesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.removePagesV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.removePagesV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removePasswordV1 - Remove the password from a PDF
   *
   * Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.
   *
   * https://www.pdfblocks.com/docs/api/v1/remove-password - Documentation and examples
  **/
  removePasswordV1(
    req: operations.RemovePasswordV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.RemovePasswordV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemovePasswordV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/remove_password";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RemovePasswordV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.removePasswordV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.removePasswordV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeRestrictionsV1 - Remove the restrictions from a PDF
   *
   * Remove all the restrictions from a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/remove-restrictions - Documentation and examples
  **/
  removeRestrictionsV1(
    req: operations.RemoveRestrictionsV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveRestrictionsV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveRestrictionsV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/remove_restrictions";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RemoveRestrictionsV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.removeRestrictionsV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.removeRestrictionsV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeSignaturesV1 - Remove the signatures from a PDF
   *
   * Remove the cryptographic signatures and timestamps from a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/remove-signatures - Documentation and examples
  **/
  removeSignaturesV1(
    req: operations.RemoveSignaturesV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveSignaturesV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveSignaturesV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/remove_signatures";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RemoveSignaturesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.removeSignaturesV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.removeSignaturesV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reversePagesV1 - Reverse the pages of a PDF
   *
   * Reverse the order of the pages of a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/reverse-pages - Documentation and examples
  **/
  reversePagesV1(
    req: operations.ReversePagesV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ReversePagesV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReversePagesV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/reverse_pages";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.ReversePagesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.reversePagesV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.reversePagesV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * rotatePagesV1 - Rotate pages in a PDF
   *
   * Rotate one or more pages in a PDF document.
   *
   * https://www.pdfblocks.com/docs/api/v1/rotate-pages - Documentation and examples
  **/
  rotatePagesV1(
    req: operations.RotatePagesV1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.RotatePagesV1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RotatePagesV1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/rotate_pages";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RotatePagesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.rotatePagesV1200ApplicationPdfBinaryString = out;
            }
            break;
          case (httpRes?.status >= 400 && httpRes?.status < 500):
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.rotatePagesV14XxApplicationProblemPlusJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
