import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class VbaDocuments {
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
   * getBenefitsDocumentUploadDownload - Download zip of "what the server sees"
   *
   * An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
  **/
  getBenefitsDocumentUploadDownload(
    req: operations.GetBenefitsDocumentUploadDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBenefitsDocumentUploadDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBenefitsDocumentUploadDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/uploads/{id}/download", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBenefitsDocumentUploadDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getBenefitsDocumentUploadDownload200ApplicationZipBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadDownload401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadDownload403ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadDownload404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadDownload429ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadDownload500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBenefitsDocumentUploadStatus - Get status for a previous benefits document upload
  **/
  getBenefitsDocumentUploadStatus(
    req: operations.GetBenefitsDocumentUploadStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBenefitsDocumentUploadStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBenefitsDocumentUploadStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/uploads/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBenefitsDocumentUploadStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatus200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatus401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatus403ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatus404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatus429ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatus500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBenefitsDocumentUploadStatusReport - Get a bulk status report for a list of previous uploads
  **/
  getBenefitsDocumentUploadStatusReport(
    req: operations.GetBenefitsDocumentUploadStatusReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBenefitsDocumentUploadStatusReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBenefitsDocumentUploadStatusReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploads/report";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetBenefitsDocumentUploadStatusReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatusReport200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatusReport401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatusReport403ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatusReport422ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatusReport429ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBenefitsDocumentUploadStatusReport500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postBenefitsDocumentUpload - Get a location for subsequent document upload PUT request
  **/
  postBenefitsDocumentUpload(
    req: operations.PostBenefitsDocumentUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBenefitsDocumentUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBenefitsDocumentUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploads";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostBenefitsDocumentUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postBenefitsDocumentUpload202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postBenefitsDocumentUpload401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postBenefitsDocumentUpload403ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postBenefitsDocumentUpload422ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postBenefitsDocumentUpload429ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postBenefitsDocumentUpload500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putBenefitsDocumentUpload - Accepts document upload.
   *
   * Accepts document metadata, document binary, and attachment binaries.Full URL, including
   * query parameters, provided from POST `/document_uploads`.
   * 
   * ## Example Payload
   * 
   * The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
   * endpoint. Most programming languages should have provisions for assembling a multipart
   * payload like this without having to do so manually.
   * 
   * ```
   * --17de1ed8f01442b2a2d7a93506314b76
   * Content-Disposition: form-data; name="metadata"
   * Content-Type: application/json
   * 
   * {"veteranFirstName": "Jane",
   * "veteranLastName": "Doe",
   * "fileNumber": "012345678",
   * "zipCode": "97202",
   * "source": "MyVSO",
   * "docType": "21-22"
   * "businessLine": "CMP"}
   * --17de1ed8f01442b2a2d7a93506314b76
   * Content-Disposition: form-data; name="content"
   * Content-Type: application/pdf
   * 
   * <Binary PDF contents>
   * --17de1ed8f01442b2a2d7a93506314b76
   * Content-Disposition: form-data; name="attachment1"
   * Content-Type: application/pdf
   * 
   * <Binary PDF attachment contents>
   * --17de1ed8f01442b2a2d7a93506314b76--
   * ```
   * 
   * This PUT request would have an overall HTTP Content-Type header:
   * 
   * ```
   * Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
   * ```
   * 
   * Note that the Content-Disposition parameter "name" in each part must be the expected values
   * "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named 
   * exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
   * are invalid.
   * 
   * This is an example curl command:
   * 
   * ```
   * curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
   * ```
   * 
  **/
  putBenefitsDocumentUpload(
    req: operations.PutBenefitsDocumentUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutBenefitsDocumentUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutBenefitsDocumentUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/path";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutBenefitsDocumentUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putBenefitsDocumentUpload401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putBenefitsDocumentUpload422ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putBenefitsDocumentUpload429ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putBenefitsDocumentUpload500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
