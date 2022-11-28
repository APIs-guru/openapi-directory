import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://trusthub.twilio.com",
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


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
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
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * createCustomerProfile - Create a new Customer-Profile.
  **/
  createCustomerProfile(
    req: operations.CreateCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.CreateCustomerProfileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CustomerProfiles";

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
        const res: operations.CreateCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCustomerProfileChannelEndpointAssignment - Create a new Assigned Item.
  **/
  createCustomerProfileChannelEndpointAssignment(
    req: operations.CreateCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CreateCustomerProfileChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", req.pathParams);

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
        const res: operations.CreateCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCustomerProfileEntityAssignment - Create a new Assigned Item.
  **/
  createCustomerProfileEntityAssignment(
    req: operations.CreateCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CreateCustomerProfileEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", req.pathParams);

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
        const res: operations.CreateCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCustomerProfileEvaluation - Create a new Evaluation
  **/
  createCustomerProfileEvaluation(
    req: operations.CreateCustomerProfileEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileEvaluationRequest(req);
    }
    
    let baseURL: string = operations.CreateCustomerProfileEvaluationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", req.pathParams);

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
        const res: operations.CreateCustomerProfileEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createEndUser - Create a new End User.
  **/
  createEndUser(
    req: operations.CreateEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEndUserRequest(req);
    }
    
    let baseURL: string = operations.CreateEndUserServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/EndUsers";

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
        const res: operations.CreateEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSupportingDocument - Create a new Supporting Document.
  **/
  createSupportingDocument(
    req: operations.CreateSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.CreateSupportingDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SupportingDocuments";

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
        const res: operations.CreateSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTrustProduct - Create a new Customer-Profile.
  **/
  createTrustProduct(
    req: operations.CreateTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductRequest(req);
    }
    
    let baseURL: string = operations.CreateTrustProductServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/TrustProducts";

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
        const res: operations.CreateTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProduct = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTrustProductChannelEndpointAssignment - Create a new Assigned Item.
  **/
  createTrustProductChannelEndpointAssignment(
    req: operations.CreateTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CreateTrustProductChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", req.pathParams);

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
        const res: operations.CreateTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTrustProductEntityAssignment - Create a new Assigned Item.
  **/
  createTrustProductEntityAssignment(
    req: operations.CreateTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CreateTrustProductEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", req.pathParams);

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
        const res: operations.CreateTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTrustProductEvaluation - Create a new Evaluation
  **/
  createTrustProductEvaluation(
    req: operations.CreateTrustProductEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductEvaluationRequest(req);
    }
    
    let baseURL: string = operations.CreateTrustProductEvaluationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/Evaluations", req.pathParams);

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
        const res: operations.CreateTrustProductEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCustomerProfile - Delete a specific Customer-Profile.
  **/
  deleteCustomerProfile(
    req: operations.DeleteCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.DeleteCustomerProfileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCustomerProfileChannelEndpointAssignment - Remove an Assignment Item Instance.
  **/
  deleteCustomerProfileChannelEndpointAssignment(
    req: operations.DeleteCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DeleteCustomerProfileChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCustomerProfileEntityAssignment - Remove an Assignment Item Instance.
  **/
  deleteCustomerProfileEntityAssignment(
    req: operations.DeleteCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DeleteCustomerProfileEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteEndUser - Delete a specific End User.
  **/
  deleteEndUser(
    req: operations.DeleteEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEndUserRequest(req);
    }
    
    let baseURL: string = operations.DeleteEndUserServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUsers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSupportingDocument - Delete a specific Supporting Document.
  **/
  deleteSupportingDocument(
    req: operations.DeleteSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.DeleteSupportingDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocuments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTrustProduct - Delete a specific Customer-Profile.
  **/
  deleteTrustProduct(
    req: operations.DeleteTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTrustProductRequest(req);
    }
    
    let baseURL: string = operations.DeleteTrustProductServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTrustProductChannelEndpointAssignment - Remove an Assignment Item Instance.
  **/
  deleteTrustProductChannelEndpointAssignment(
    req: operations.DeleteTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DeleteTrustProductChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTrustProductEntityAssignment - Remove an Assignment Item Instance.
  **/
  deleteTrustProductEntityAssignment(
    req: operations.DeleteTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DeleteTrustProductEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCustomerProfile - Fetch a specific Customer-Profile instance.
  **/
  fetchCustomerProfile(
    req: operations.FetchCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.FetchCustomerProfileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCustomerProfileChannelEndpointAssignment - Fetch specific Assigned Item Instance.
  **/
  fetchCustomerProfileChannelEndpointAssignment(
    req: operations.FetchCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FetchCustomerProfileChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCustomerProfileEntityAssignment - Fetch specific Assigned Item Instance.
  **/
  fetchCustomerProfileEntityAssignment(
    req: operations.FetchCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FetchCustomerProfileEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCustomerProfileEvaluation - Fetch specific Evaluation Instance.
  **/
  fetchCustomerProfileEvaluation(
    req: operations.FetchCustomerProfileEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileEvaluationRequest(req);
    }
    
    let baseURL: string = operations.FetchCustomerProfileEvaluationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCustomerProfileEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchEndUser - Fetch specific End User Instance.
  **/
  fetchEndUser(
    req: operations.FetchEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEndUserRequest(req);
    }
    
    let baseURL: string = operations.FetchEndUserServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUsers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchEndUserType - Fetch a specific End-User Type Instance.
  **/
  fetchEndUserType(
    req: operations.FetchEndUserTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEndUserTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEndUserTypeRequest(req);
    }
    
    let baseURL: string = operations.FetchEndUserTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUserTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchEndUserTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUserType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchPolicies - Fetch specific Policy Instance.
  **/
  fetchPolicies(
    req: operations.FetchPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPoliciesRequest(req);
    }
    
    let baseURL: string = operations.FetchPoliciesServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/Policies/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1Policies = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSupportingDocument - Fetch specific Supporting Document Instance.
  **/
  fetchSupportingDocument(
    req: operations.FetchSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.FetchSupportingDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocuments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
  **/
  fetchSupportingDocumentType(
    req: operations.FetchSupportingDocumentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSupportingDocumentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSupportingDocumentTypeRequest(req);
    }
    
    let baseURL: string = operations.FetchSupportingDocumentTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocumentTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSupportingDocumentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocumentType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustProduct - Fetch a specific Customer-Profile instance.
  **/
  fetchTrustProduct(
    req: operations.FetchTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustProductServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProduct = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustProductChannelEndpointAssignment - Fetch specific Assigned Item Instance.
  **/
  fetchTrustProductChannelEndpointAssignment(
    req: operations.FetchTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustProductChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustProductEntityAssignment - Fetch specific Assigned Item Instance.
  **/
  fetchTrustProductEntityAssignment(
    req: operations.FetchTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustProductEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustProductEvaluation - Fetch specific Evaluation Instance.
  **/
  fetchTrustProductEvaluation(
    req: operations.FetchTrustProductEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductEvaluationRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustProductEvaluationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustProductEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCustomerProfile - Retrieve a list of all Customer-Profiles for an account.
  **/
  listCustomerProfile(
    req: operations.ListCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.ListCustomerProfileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CustomerProfiles";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCustomerProfileChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
  **/
  listCustomerProfileChannelEndpointAssignment(
    req: operations.ListCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.ListCustomerProfileChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileChannelEndpointAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCustomerProfileEntityAssignment - Retrieve a list of all Assigned Items for an account.
  **/
  listCustomerProfileEntityAssignment(
    req: operations.ListCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.ListCustomerProfileEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileEntityAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCustomerProfileEvaluation - Retrieve a list of Evaluations associated to the customer_profile resource.
  **/
  listCustomerProfileEvaluation(
    req: operations.ListCustomerProfileEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileEvaluationRequest(req);
    }
    
    let baseURL: string = operations.ListCustomerProfileEvaluationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListCustomerProfileEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileEvaluationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listEndUser - Retrieve a list of all End User for an account.
  **/
  listEndUser(
    req: operations.ListEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEndUserRequest(req);
    }
    
    let baseURL: string = operations.ListEndUserServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/EndUsers";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEndUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listEndUserType - Retrieve a list of all End-User Types.
  **/
  listEndUserType(
    req: operations.ListEndUserTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEndUserTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEndUserTypeRequest(req);
    }
    
    let baseURL: string = operations.ListEndUserTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/EndUserTypes";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListEndUserTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEndUserTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listPolicies - Retrieve a list of all Policys.
  **/
  listPolicies(
    req: operations.ListPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPoliciesRequest(req);
    }
    
    let baseURL: string = operations.ListPoliciesServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Policies";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPoliciesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSupportingDocument - Retrieve a list of all Supporting Document for an account.
  **/
  listSupportingDocument(
    req: operations.ListSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.ListSupportingDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SupportingDocuments";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSupportingDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSupportingDocumentType - Retrieve a list of all Supporting Document Types.
  **/
  listSupportingDocumentType(
    req: operations.ListSupportingDocumentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupportingDocumentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSupportingDocumentTypeRequest(req);
    }
    
    let baseURL: string = operations.ListSupportingDocumentTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SupportingDocumentTypes";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListSupportingDocumentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSupportingDocumentTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTrustProduct - Retrieve a list of all Customer-Profiles for an account.
  **/
  listTrustProduct(
    req: operations.ListTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductRequest(req);
    }
    
    let baseURL: string = operations.ListTrustProductServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/TrustProducts";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTrustProductResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTrustProductChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
  **/
  listTrustProductChannelEndpointAssignment(
    req: operations.ListTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.ListTrustProductChannelEndpointAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTrustProductChannelEndpointAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTrustProductEntityAssignment - Retrieve a list of all Assigned Items for an account.
  **/
  listTrustProductEntityAssignment(
    req: operations.ListTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.ListTrustProductEntityAssignmentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTrustProductEntityAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTrustProductEvaluation - Retrieve a list of Evaluations associated to the trust_product resource.
  **/
  listTrustProductEvaluation(
    req: operations.ListTrustProductEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductEvaluationRequest(req);
    }
    
    let baseURL: string = operations.ListTrustProductEvaluationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/Evaluations", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListTrustProductEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTrustProductEvaluationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCustomerProfile - Updates a Customer-Profile in an account.
  **/
  updateCustomerProfile(
    req: operations.UpdateCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.UpdateCustomerProfileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{Sid}", req.pathParams);

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
        const res: operations.UpdateCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateEndUser - Update an existing End User.
  **/
  updateEndUser(
    req: operations.UpdateEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEndUserRequest(req);
    }
    
    let baseURL: string = operations.UpdateEndUserServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUsers/{Sid}", req.pathParams);

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
        const res: operations.UpdateEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSupportingDocument - Update an existing Supporting Document.
  **/
  updateSupportingDocument(
    req: operations.UpdateSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.UpdateSupportingDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocuments/{Sid}", req.pathParams);

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
        const res: operations.UpdateSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTrustProduct - Updates a Customer-Profile in an account.
  **/
  updateTrustProduct(
    req: operations.UpdateTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTrustProductRequest(req);
    }
    
    let baseURL: string = operations.UpdateTrustProductServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{Sid}", req.pathParams);

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
        const res: operations.UpdateTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProduct = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
