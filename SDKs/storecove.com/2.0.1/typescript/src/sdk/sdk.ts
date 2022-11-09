import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.storecove.com/api/v2",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
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
  
  // CreateAdministration - Create a new Administration
  /** 
   * Create a new Administration. An Administration is an email destination for purchase invoices.
  **/
  CreateAdministration(
    req: operations.CreateAdministrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAdministrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAdministrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{legal_entity_id}/administrations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateAdministrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.administration = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDocumentSubmission - *** NOTE: Experimental. Only to be used for sending Invoice Response documents. *** Submit a new document.
  /** 
   * Submit a document for delivery. This endpoint will replace the /invoice_submissions endpoint, but for now should only be used to send Invoice Response doucments.
  **/
  CreateDocumentSubmission(
    req: operations.CreateDocumentSubmissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDocumentSubmissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDocumentSubmissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/document_submissions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDocumentSubmissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.documentSubmissionResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInvoiceSubmission - Submit a new invoice
  /** 
   * Submit an invoice for delivery.
  **/
  CreateInvoiceSubmission(
    req: operations.CreateInvoiceSubmissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInvoiceSubmissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInvoiceSubmissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invoice_submissions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateInvoiceSubmissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.invoiceSubmissionResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateLegalEntity - Create a new LegalEntity
  /** 
   * Create a new LegalEntity.
  **/
  CreateLegalEntity(
    req: operations.CreateLegalEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateLegalEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateLegalEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/legal_entities";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateLegalEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.legalEntity = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePeppolIdentifier - Create a new PeppolIdentifier
  /** 
   * Create a new PeppolIdentifier.
  **/
  CreatePeppolIdentifier(
    req: operations.CreatePeppolIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePeppolIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePeppolIdentifierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{legal_entity_id}/peppol_identifiers", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreatePeppolIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.peppolIdentifier = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAdministration - Delete Administration
  /** 
   * Delete an Administration
  **/
  DeleteAdministration(
    req: operations.DeleteAdministrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{legal_entity_id}/administrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAdministrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteLegalEntity - Delete LegalEntity
  /** 
   * Delete a specific LegalEntity.
  **/
  DeleteLegalEntity(
    req: operations.DeleteLegalEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLegalEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLegalEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteLegalEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePeppolIdentifier - Delete PeppolIdentifier
  /** 
   * Delete a PeppolIdentifier.
  **/
  DeletePeppolIdentifier(
    req: operations.DeletePeppolIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePeppolIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePeppolIdentifierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePeppolIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteWebhookInstance - DELETE a WebhookInstance
  /** 
   * DELETE a specific WebhookInstance
  **/
  DeleteWebhookInstance(
    req: operations.DeleteWebhookInstanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhookInstanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhookInstanceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhook_instances/{guid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWebhookInstanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DiscoveryReceives - Disover Network Participant
  /** 
   * Discover a network participant and capabilities.
  **/
  DiscoveryReceives(
    req: operations.DiscoveryReceivesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DiscoveryReceivesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DiscoveryReceivesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/discovery/receives";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DiscoveryReceivesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.discoveredParticipant = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAdministration - Get Administration
  /** 
   * Get an Administration
  **/
  GetAdministration(
    req: operations.GetAdministrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{legal_entity_id}/administrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAdministrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.administration = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoiceJson - Get Purchase invoice data as JSON
  /** 
   * Get a specific PurchaseInvoice, in JSON format. Recommended way of getting a PurchaseInvoice, since it provides the data in a JSON object and the JSON format is the richest we have that supports all features a PurchaseInvoice can have.
  **/
  GetInvoiceJson(
    req: operations.GetInvoiceJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/purchase_invoices/{guid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetInvoiceJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.purchaseInvoice = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoiceUbl - Get Purchase invoice data as JSON with a Base64-encoded SI-1.2 UBL string
  /** 
   * Get a specific PurchaseInvoice. Using /json as {packaging} is recommended (in which case you can just omit it), however, this endpoint allows getting the invoice in a differently serialized format such as UBL.
  **/
  GetInvoiceUbl(
    req: operations.GetInvoiceUblRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceUblResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceUblRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/purchase_invoices/{guid}/{packaging}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoiceUblResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.purchaseInvoiceUbl = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoiceUblVersioned - Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version
  /** 
   * Get a specific PurchaseInvoice in a non-JSON serialized format with version.
  **/
  GetInvoiceUblVersioned(
    req: operations.GetInvoiceUblVersionedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceUblVersionedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceUblVersionedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/purchase_invoices/{guid}/{packaging}/{package_version}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoiceUblVersionedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.purchaseInvoiceUbl = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLegalEntity - Get LegalEntity
  /** 
   * Get a specific LegalEntity.
  **/
  GetLegalEntity(
    req: operations.GetLegalEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLegalEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLegalEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLegalEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.legalEntity = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWebhookInstances - GET a WebhookInstance
  /** 
   * GET a WebhookInstance from the queue. After processing it successfully, DELETE it and GET the next one. When a 204 is received, the queue is empty and the polling process can sleep for a while.
  **/
  GetWebhookInstances(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhookInstancesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhook_instances/";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWebhookInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookInstance = httpRes?.data;
            }
            break;
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PreflightInvoiceRecipient - Preflight an invoice recipient
  /** 
   * Check whether Storecove can deliver an invoice for a list of ids.
  **/
  PreflightInvoiceRecipient(
    req: operations.PreflightInvoiceRecipientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreflightInvoiceRecipientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreflightInvoiceRecipientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invoice_submissions/preflight";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PreflightInvoiceRecipientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.preflightInvoiceRecipientResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ShowInvoiceSubmissionEvidence - Get InvoiceSubmission Evidence
  /** 
   * Get evidence for an InvoiceSubmission by GUID with corresponding status
  **/
  ShowInvoiceSubmissionEvidence(
    req: operations.ShowInvoiceSubmissionEvidenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShowInvoiceSubmissionEvidenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShowInvoiceSubmissionEvidenceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/invoice_submissions/{guid}/evidence", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ShowInvoiceSubmissionEvidenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.invoiceSubmissionEvidence = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateAdministration - Update Administration
  /** 
   * Update an Administration
  **/
  UpdateAdministration(
    req: operations.UpdateAdministrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAdministrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAdministrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{legal_entity_id}/administrations/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateAdministrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.administration = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateLegalEntity - Update LegalEntity
  /** 
   * Update a specific LegalEntity.
  **/
  UpdateLegalEntity(
    req: operations.UpdateLegalEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLegalEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLegalEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/legal_entities/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateLegalEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.legalEntity = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
