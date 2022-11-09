import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
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
  
  // CreateCustomerProfile - Create a new Customer-Profile.
  CreateCustomerProfile(
    req: operations.CreateCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.CREATECUSTOMERPROFILE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CustomerProfiles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCustomerProfileChannelEndpointAssignment - Create a new Assigned Item.
  CreateCustomerProfileChannelEndpointAssignment(
    req: operations.CreateCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CREATECUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCustomerProfileEntityAssignment - Create a new Assigned Item.
  CreateCustomerProfileEntityAssignment(
    req: operations.CreateCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CREATECUSTOMERPROFILEENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCustomerProfileEvaluation - Create a new Evaluation
  CreateCustomerProfileEvaluation(
    req: operations.CreateCustomerProfileEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerProfileEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerProfileEvaluationRequest(req);
    }
    
    let baseURL: string = operations.CREATECUSTOMERPROFILEEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCustomerProfileEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateEndUser - Create a new End User.
  CreateEndUser(
    req: operations.CreateEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEndUserRequest(req);
    }
    
    let baseURL: string = operations.CREATEENDUSER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/EndUsers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSupportingDocument - Create a new Supporting Document.
  CreateSupportingDocument(
    req: operations.CreateSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.CREATESUPPORTINGDOCUMENT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SupportingDocuments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTrustProduct - Create a new Customer-Profile.
  CreateTrustProduct(
    req: operations.CreateTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductRequest(req);
    }
    
    let baseURL: string = operations.CREATETRUSTPRODUCT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/TrustProducts";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProduct = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTrustProductChannelEndpointAssignment - Create a new Assigned Item.
  CreateTrustProductChannelEndpointAssignment(
    req: operations.CreateTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CREATETRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTrustProductEntityAssignment - Create a new Assigned Item.
  CreateTrustProductEntityAssignment(
    req: operations.CreateTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CREATETRUSTPRODUCTENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTrustProductEvaluation - Create a new Evaluation
  CreateTrustProductEvaluation(
    req: operations.CreateTrustProductEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustProductEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustProductEvaluationRequest(req);
    }
    
    let baseURL: string = operations.CREATETRUSTPRODUCTEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/Evaluations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateTrustProductEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCustomerProfile - Delete a specific Customer-Profile.
  DeleteCustomerProfile(
    req: operations.DeleteCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.DELETECUSTOMERPROFILE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCustomerProfileChannelEndpointAssignment - Remove an Assignment Item Instance.
  DeleteCustomerProfileChannelEndpointAssignment(
    req: operations.DeleteCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DELETECUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCustomerProfileEntityAssignment - Remove an Assignment Item Instance.
  DeleteCustomerProfileEntityAssignment(
    req: operations.DeleteCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DELETECUSTOMERPROFILEENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEndUser - Delete a specific End User.
  DeleteEndUser(
    req: operations.DeleteEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEndUserRequest(req);
    }
    
    let baseURL: string = operations.DELETEENDUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUsers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSupportingDocument - Delete a specific Supporting Document.
  DeleteSupportingDocument(
    req: operations.DeleteSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.DELETESUPPORTINGDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocuments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTrustProduct - Delete a specific Customer-Profile.
  DeleteTrustProduct(
    req: operations.DeleteTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTrustProductRequest(req);
    }
    
    let baseURL: string = operations.DELETETRUSTPRODUCT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTrustProductChannelEndpointAssignment - Remove an Assignment Item Instance.
  DeleteTrustProductChannelEndpointAssignment(
    req: operations.DeleteTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DELETETRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTrustProductEntityAssignment - Remove an Assignment Item Instance.
  DeleteTrustProductEntityAssignment(
    req: operations.DeleteTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DELETETRUSTPRODUCTENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCustomerProfile - Fetch a specific Customer-Profile instance.
  FetchCustomerProfile(
    req: operations.FetchCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.FETCHCUSTOMERPROFILE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCustomerProfileChannelEndpointAssignment - Fetch specific Assigned Item Instance.
  FetchCustomerProfileChannelEndpointAssignment(
    req: operations.FetchCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FETCHCUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCustomerProfileEntityAssignment - Fetch specific Assigned Item Instance.
  FetchCustomerProfileEntityAssignment(
    req: operations.FetchCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FETCHCUSTOMERPROFILEENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCustomerProfileEvaluation - Fetch specific Evaluation Instance.
  FetchCustomerProfileEvaluation(
    req: operations.FetchCustomerProfileEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomerProfileEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomerProfileEvaluationRequest(req);
    }
    
    let baseURL: string = operations.FETCHCUSTOMERPROFILEEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCustomerProfileEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfileCustomerProfileEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEndUser - Fetch specific End User Instance.
  FetchEndUser(
    req: operations.FetchEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEndUserRequest(req);
    }
    
    let baseURL: string = operations.FETCHENDUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUsers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEndUserType - Fetch a specific End-User Type Instance.
  FetchEndUserType(
    req: operations.FetchEndUserTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEndUserTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEndUserTypeRequest(req);
    }
    
    let baseURL: string = operations.FETCHENDUSERTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUserTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEndUserTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUserType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchPolicies - Fetch specific Policy Instance.
  FetchPolicies(
    req: operations.FetchPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPoliciesRequest(req);
    }
    
    let baseURL: string = operations.FETCHPOLICIES_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Policies/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1Policies = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSupportingDocument - Fetch specific Supporting Document Instance.
  FetchSupportingDocument(
    req: operations.FetchSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.FETCHSUPPORTINGDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocuments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
  FetchSupportingDocumentType(
    req: operations.FetchSupportingDocumentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSupportingDocumentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSupportingDocumentTypeRequest(req);
    }
    
    let baseURL: string = operations.FETCHSUPPORTINGDOCUMENTTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocumentTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSupportingDocumentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocumentType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustProduct - Fetch a specific Customer-Profile instance.
  FetchTrustProduct(
    req: operations.FetchTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTPRODUCT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProduct = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustProductChannelEndpointAssignment - Fetch specific Assigned Item Instance.
  FetchTrustProductChannelEndpointAssignment(
    req: operations.FetchTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductChannelEndpointAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustProductEntityAssignment - Fetch specific Assigned Item Instance.
  FetchTrustProductEntityAssignment(
    req: operations.FetchTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTPRODUCTENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEntityAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustProductEvaluation - Fetch specific Evaluation Instance.
  FetchTrustProductEvaluation(
    req: operations.FetchTrustProductEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustProductEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustProductEvaluationRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTPRODUCTEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustProductEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProductTrustProductEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCustomerProfile - Retrieve a list of all Customer-Profiles for an account.
  ListCustomerProfile(
    req: operations.ListCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.LISTCUSTOMERPROFILE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CustomerProfiles";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCustomerProfileChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
  ListCustomerProfileChannelEndpointAssignment(
    req: operations.ListCustomerProfileChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.LISTCUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListCustomerProfileChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileChannelEndpointAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCustomerProfileEntityAssignment - Retrieve a list of all Assigned Items for an account.
  ListCustomerProfileEntityAssignment(
    req: operations.ListCustomerProfileEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.LISTCUSTOMERPROFILEENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListCustomerProfileEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileEntityAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCustomerProfileEvaluation - Retrieve a list of Evaluations associated to the customer_profile resource.
  ListCustomerProfileEvaluation(
    req: operations.ListCustomerProfileEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerProfileEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerProfileEvaluationRequest(req);
    }
    
    let baseURL: string = operations.LISTCUSTOMERPROFILEEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListCustomerProfileEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCustomerProfileEvaluationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEndUser - Retrieve a list of all End User for an account.
  ListEndUser(
    req: operations.ListEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEndUserRequest(req);
    }
    
    let baseURL: string = operations.LISTENDUSER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/EndUsers";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEndUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEndUserType - Retrieve a list of all End-User Types.
  ListEndUserType(
    req: operations.ListEndUserTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEndUserTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEndUserTypeRequest(req);
    }
    
    let baseURL: string = operations.LISTENDUSERTYPE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/EndUserTypes";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListEndUserTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEndUserTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListPolicies - Retrieve a list of all Policys.
  ListPolicies(
    req: operations.ListPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPoliciesRequest(req);
    }
    
    let baseURL: string = operations.LISTPOLICIES_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Policies";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listPoliciesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSupportingDocument - Retrieve a list of all Supporting Document for an account.
  ListSupportingDocument(
    req: operations.ListSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.LISTSUPPORTINGDOCUMENT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SupportingDocuments";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSupportingDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSupportingDocumentType - Retrieve a list of all Supporting Document Types.
  ListSupportingDocumentType(
    req: operations.ListSupportingDocumentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupportingDocumentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSupportingDocumentTypeRequest(req);
    }
    
    let baseURL: string = operations.LISTSUPPORTINGDOCUMENTTYPE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SupportingDocumentTypes";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListSupportingDocumentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSupportingDocumentTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTrustProduct - Retrieve a list of all Customer-Profiles for an account.
  ListTrustProduct(
    req: operations.ListTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductRequest(req);
    }
    
    let baseURL: string = operations.LISTTRUSTPRODUCT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/TrustProducts";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTrustProductResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTrustProductChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
  ListTrustProductChannelEndpointAssignment(
    req: operations.ListTrustProductChannelEndpointAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductChannelEndpointAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductChannelEndpointAssignmentRequest(req);
    }
    
    let baseURL: string = operations.LISTTRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListTrustProductChannelEndpointAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTrustProductChannelEndpointAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTrustProductEntityAssignment - Retrieve a list of all Assigned Items for an account.
  ListTrustProductEntityAssignment(
    req: operations.ListTrustProductEntityAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductEntityAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductEntityAssignmentRequest(req);
    }
    
    let baseURL: string = operations.LISTTRUSTPRODUCTENTITYASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListTrustProductEntityAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTrustProductEntityAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTrustProductEvaluation - Retrieve a list of Evaluations associated to the trust_product resource.
  ListTrustProductEvaluation(
    req: operations.ListTrustProductEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrustProductEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrustProductEvaluationRequest(req);
    }
    
    let baseURL: string = operations.LISTTRUSTPRODUCTEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{TrustProductSid}/Evaluations", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.ListTrustProductEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTrustProductEvaluationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCustomerProfile - Updates a Customer-Profile in an account.
  UpdateCustomerProfile(
    req: operations.UpdateCustomerProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCustomerProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCustomerProfileRequest(req);
    }
    
    let baseURL: string = operations.UPDATECUSTOMERPROFILE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CustomerProfiles/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateCustomerProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1CustomerProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEndUser - Update an existing End User.
  UpdateEndUser(
    req: operations.UpdateEndUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEndUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEndUserRequest(req);
    }
    
    let baseURL: string = operations.UPDATEENDUSER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/EndUsers/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEndUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1EndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSupportingDocument - Update an existing Supporting Document.
  UpdateSupportingDocument(
    req: operations.UpdateSupportingDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSupportingDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSupportingDocumentRequest(req);
    }
    
    let baseURL: string = operations.UPDATESUPPORTINGDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SupportingDocuments/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSupportingDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1SupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateTrustProduct - Updates a Customer-Profile in an account.
  UpdateTrustProduct(
    req: operations.UpdateTrustProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTrustProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTrustProductRequest(req);
    }
    
    let baseURL: string = operations.UPDATETRUSTPRODUCT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/TrustProducts/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateTrustProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trusthubV1TrustProduct = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
