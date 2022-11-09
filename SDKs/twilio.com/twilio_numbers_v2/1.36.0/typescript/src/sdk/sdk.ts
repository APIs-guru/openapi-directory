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
  "https://numbers.twilio.com",
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
  
  // CreateBundle - Create a new Bundle.
  CreateBundle(
    req: operations.CreateBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBundleRequest(req);
    }
    
    let baseURL: string = operations.CREATEBUNDLE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/Bundles";
    
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
        let res: operations.CreateBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundle = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateBundleCopy - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
  CreateBundleCopy(
    req: operations.CreateBundleCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBundleCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBundleCopyRequest(req);
    }
    
    let baseURL: string = operations.CREATEBUNDLECOPY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", req.pathParams);
    
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
        let res: operations.CreateBundleCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundleBundleCopy = httpRes?.data;
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/EndUsers";
    
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
                res.numbersV2RegulatoryComplianceEndUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateEvaluation - Creates an evaluation for a bundle
  CreateEvaluation(
    req: operations.CreateEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEvaluationRequest(req);
    }
    
    let baseURL: string = operations.CREATEEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundleEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateItemAssignment - Create a new Assigned Item.
  CreateItemAssignment(
    req: operations.CreateItemAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateItemAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateItemAssignmentRequest(req);
    }
    
    let baseURL: string = operations.CREATEITEMASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", req.pathParams);
    
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
        let res: operations.CreateItemAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundleItemAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateReplaceItems - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
  CreateReplaceItems(
    req: operations.CreateReplaceItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateReplaceItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateReplaceItemsRequest(req);
    }
    
    let baseURL: string = operations.CREATEREPLACEITEMS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems", req.pathParams);
    
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
        let res: operations.CreateReplaceItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundleReplaceItems = httpRes?.data;
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/SupportingDocuments";
    
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
                res.numbersV2RegulatoryComplianceSupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteBundle - Delete a specific Bundle.
  DeleteBundle(
    req: operations.DeleteBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBundleRequest(req);
    }
    
    let baseURL: string = operations.DELETEBUNDLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteBundleResponse = {statusCode: httpRes.status, contentType: contentType};
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", req.pathParams);
    
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

  
  // DeleteItemAssignment - Remove an Assignment Item Instance.
  DeleteItemAssignment(
    req: operations.DeleteItemAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemAssignmentRequest(req);
    }
    
    let baseURL: string = operations.DELETEITEMASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteItemAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", req.pathParams);
    
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

  
  // FetchBundle - Fetch a specific Bundle instance.
  FetchBundle(
    req: operations.FetchBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchBundleRequest(req);
    }
    
    let baseURL: string = operations.FETCHBUNDLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundle = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", req.pathParams);
    
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
                res.numbersV2RegulatoryComplianceEndUser = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUserTypes/{Sid}", req.pathParams);
    
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
                res.numbersV2RegulatoryComplianceEndUserType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEvaluation - Fetch specific Evaluation Instance.
  FetchEvaluation(
    req: operations.FetchEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEvaluationRequest(req);
    }
    
    let baseURL: string = operations.FETCHEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundleEvaluation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchItemAssignment - Fetch specific Assigned Item Instance.
  FetchItemAssignment(
    req: operations.FetchItemAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchItemAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchItemAssignmentRequest(req);
    }
    
    let baseURL: string = operations.FETCHITEMASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchItemAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundleItemAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRegulation - Fetch specific Regulation Instance.
  FetchRegulation(
    req: operations.FetchRegulationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRegulationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRegulationRequest(req);
    }
    
    let baseURL: string = operations.FETCHREGULATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Regulations/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRegulationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceRegulation = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", req.pathParams);
    
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
                res.numbersV2RegulatoryComplianceSupportingDocument = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}", req.pathParams);
    
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
                res.numbersV2RegulatoryComplianceSupportingDocumentType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListBundle - Retrieve a list of all Bundles for an account.
  ListBundle(
    req: operations.ListBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBundleRequest(req);
    }
    
    let baseURL: string = operations.LISTBUNDLE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/Bundles";
    
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
        let res: operations.ListBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListBundleCopy - Retrieve a list of all Bundles Copies for a Bundle.
  ListBundleCopy(
    req: operations.ListBundleCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBundleCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBundleCopyRequest(req);
    }
    
    let baseURL: string = operations.LISTBUNDLECOPY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", req.pathParams);
    
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
        let res: operations.ListBundleCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listBundleCopyResponse = httpRes?.data;
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/EndUsers";
    
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/EndUserTypes";
    
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

  
  // ListEvaluation - Retrieve a list of Evaluations associated to the Bundle resource.
  ListEvaluation(
    req: operations.ListEvaluationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEvaluationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEvaluationRequest(req);
    }
    
    let baseURL: string = operations.LISTEVALUATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", req.pathParams);
    
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
        let res: operations.ListEvaluationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEvaluationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListItemAssignment - Retrieve a list of all Assigned Items for an account.
  ListItemAssignment(
    req: operations.ListItemAssignmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListItemAssignmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListItemAssignmentRequest(req);
    }
    
    let baseURL: string = operations.LISTITEMASSIGNMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", req.pathParams);
    
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
        let res: operations.ListItemAssignmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listItemAssignmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRegulation - Retrieve a list of all Regulations.
  ListRegulation(
    req: operations.ListRegulationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRegulationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRegulationRequest(req);
    }
    
    let baseURL: string = operations.LISTREGULATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/Regulations";
    
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
        let res: operations.ListRegulationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRegulationResponse = httpRes?.data;
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/SupportingDocuments";
    
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/SupportingDocumentTypes";
    
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

  
  // UpdateBundle - Updates a Bundle in an account.
  UpdateBundle(
    req: operations.UpdateBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBundleRequest(req);
    }
    
    let baseURL: string = operations.UPDATEBUNDLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.numbersV2RegulatoryComplianceBundle = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", req.pathParams);
    
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
                res.numbersV2RegulatoryComplianceEndUser = httpRes?.data;
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
    const url: string = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", req.pathParams);
    
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
                res.numbersV2RegulatoryComplianceSupportingDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
