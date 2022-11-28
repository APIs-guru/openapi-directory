import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://graph.windows.net",
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
   * applicationsAddOwner - Add an owner to an application.
  **/
  applicationsAddOwner(
    req: operations.ApplicationsAddOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsAddOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsAddOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/$links/owners", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsAddOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsCreate - Create a new application.
  **/
  applicationsCreate(
    req: operations.ApplicationsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.application = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.application = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsDelete - Delete an application.
  **/
  applicationsDelete(
    req: operations.ApplicationsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsGet - Get an application by object ID.
  **/
  applicationsGet(
    req: operations.ApplicationsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}", req.pathParams);
    
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
        const res: operations.ApplicationsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.application = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.application = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsGetServicePrincipalsIdByAppId - Gets an object id for a given application id from the current tenant.
  **/
  applicationsGetServicePrincipalsIdByAppId(
    req: operations.ApplicationsGetServicePrincipalsIdByAppIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsGetServicePrincipalsIdByAppIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsGetServicePrincipalsIdByAppIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId", req.pathParams);
    
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
        const res: operations.ApplicationsGetServicePrincipalsIdByAppIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.servicePrincipalObjectResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.servicePrincipalObjectResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsList - Lists applications by filter parameters.
  **/
  applicationsList(
    req: operations.ApplicationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications", req.pathParams);
    
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
        const res: operations.ApplicationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.applicationListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.applicationListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsListKeyCredentials - Get the keyCredentials associated with an application.
  **/
  applicationsListKeyCredentials(
    req: operations.ApplicationsListKeyCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsListKeyCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsListKeyCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/keyCredentials", req.pathParams);
    
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
        const res: operations.ApplicationsListKeyCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyCredentialListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.keyCredentialListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsListOwners - Directory objects that are owners of the application.
   *
   * The owners are a set of non-admin users who are allowed to modify this object.
  **/
  applicationsListOwners(
    req: operations.ApplicationsListOwnersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsListOwnersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsListOwnersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/owners", req.pathParams);
    
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
        const res: operations.ApplicationsListOwnersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsListPasswordCredentials - Get the passwordCredentials associated with an application.
  **/
  applicationsListPasswordCredentials(
    req: operations.ApplicationsListPasswordCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsListPasswordCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsListPasswordCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/passwordCredentials", req.pathParams);
    
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
        const res: operations.ApplicationsListPasswordCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.passwordCredentialListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.passwordCredentialListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsPatch - Update an existing application.
  **/
  applicationsPatch(
    req: operations.ApplicationsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsRemoveOwner - Remove a member from owners.
  **/
  applicationsRemoveOwner(
    req: operations.ApplicationsRemoveOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsRemoveOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsRemoveOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsRemoveOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsUpdateKeyCredentials - Update the keyCredentials associated with an application.
  **/
  applicationsUpdateKeyCredentials(
    req: operations.ApplicationsUpdateKeyCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsUpdateKeyCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsUpdateKeyCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/keyCredentials", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsUpdateKeyCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applicationsUpdatePasswordCredentials - Update passwordCredentials associated with an application.
  **/
  applicationsUpdatePasswordCredentials(
    req: operations.ApplicationsUpdatePasswordCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplicationsUpdatePasswordCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplicationsUpdatePasswordCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/applications/{applicationObjectId}/passwordCredentials", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplicationsUpdatePasswordCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletedApplicationsHardDelete - Hard-delete an application.
  **/
  deletedApplicationsHardDelete(
    req: operations.DeletedApplicationsHardDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletedApplicationsHardDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletedApplicationsHardDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/deletedApplications/{applicationObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletedApplicationsHardDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletedApplicationsList - Gets a list of deleted applications in the directory.
  **/
  deletedApplicationsList(
    req: operations.DeletedApplicationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletedApplicationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletedApplicationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/deletedApplications", req.pathParams);
    
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
        const res: operations.DeletedApplicationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.applicationListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.applicationListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletedApplicationsRestore - Restores the deleted application in the directory.
  **/
  deletedApplicationsRestore(
    req: operations.DeletedApplicationsRestoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletedApplicationsRestoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletedApplicationsRestoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/deletedApplications/{objectId}/restore", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletedApplicationsRestoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.application = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.application = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * domainsGet - Gets a specific domain in the current tenant.
  **/
  domainsGet(
    req: operations.DomainsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DomainsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DomainsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/domains/{domainName}", req.pathParams);
    
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
        const res: operations.DomainsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.domain = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.domain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * domainsList - Gets a list of domains for the current tenant.
  **/
  domainsList(
    req: operations.DomainsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DomainsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DomainsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/domains", req.pathParams);
    
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
        const res: operations.DomainsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.domainListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.domainListResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsAddMember - Add a member to a group.
  **/
  groupsAddMember(
    req: operations.GroupsAddMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsAddMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsAddMemberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{groupObjectId}/$links/members", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsAddMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsAddOwner - Add an owner to a group.
  **/
  groupsAddOwner(
    req: operations.GroupsAddOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsAddOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsAddOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}/$links/owners", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsAddOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsCreate - Create a group in the directory.
  **/
  groupsCreate(
    req: operations.GroupsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.adGroup = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.adGroup = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsDelete - Delete a group from the directory.
  **/
  groupsDelete(
    req: operations.GroupsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsGet - Gets group information from the directory.
  **/
  groupsGet(
    req: operations.GroupsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}", req.pathParams);
    
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
        const res: operations.GroupsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.adGroup = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.adGroup = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsGetGroupMembers - Gets the members of a group.
  **/
  groupsGetGroupMembers(
    req: operations.GroupsGetGroupMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsGetGroupMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsGetGroupMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}/members", req.pathParams);
    
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
        const res: operations.GroupsGetGroupMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsGetMemberGroups - Gets a collection of object IDs of groups of which the specified group is a member.
  **/
  groupsGetMemberGroups(
    req: operations.GroupsGetMemberGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsGetMemberGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsGetMemberGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}/getMemberGroups", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsGetMemberGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupGetMemberGroupsResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.groupGetMemberGroupsResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsIsMemberOf - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
  **/
  groupsIsMemberOf(
    req: operations.GroupsIsMemberOfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsIsMemberOfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsIsMemberOfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/isMemberOf", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsIsMemberOfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.checkGroupMembershipResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.checkGroupMembershipResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsList - Gets list of groups for the current tenant.
  **/
  groupsList(
    req: operations.GroupsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups", req.pathParams);
    
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
        const res: operations.GroupsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.groupListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsListOwners - Directory objects that are owners of the group.
   *
   * The owners are a set of non-admin users who are allowed to modify this object.
  **/
  groupsListOwners(
    req: operations.GroupsListOwnersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsListOwnersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsListOwnersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}/owners", req.pathParams);
    
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
        const res: operations.GroupsListOwnersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsRemoveMember - Remove a member from a group.
  **/
  groupsRemoveMember(
    req: operations.GroupsRemoveMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsRemoveMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsRemoveMemberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsRemoveMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * groupsRemoveOwner - Remove a member from owners.
  **/
  groupsRemoveOwner(
    req: operations.GroupsRemoveOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GroupsRemoveOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GroupsRemoveOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GroupsRemoveOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * oAuth2PermissionGrantCreate - Grants OAuth2 permissions for the relevant resource Ids of an app.
  **/
  oAuth2PermissionGrantCreate(
    req: operations.OAuth2PermissionGrantCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OAuth2PermissionGrantCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OAuth2PermissionGrantCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/oauth2PermissionGrants", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OAuth2PermissionGrantCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oAuth2PermissionGrant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * oAuth2PermissionGrantDelete - Delete a OAuth2 permission grant for the relevant resource Ids of an app.
  **/
  oAuth2PermissionGrantDelete(
    req: operations.OAuth2PermissionGrantDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OAuth2PermissionGrantDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OAuth2PermissionGrantDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/oauth2PermissionGrants/{objectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OAuth2PermissionGrantDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * oAuth2PermissionGrantList - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
  **/
  oAuth2PermissionGrantList(
    req: operations.OAuth2PermissionGrantListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OAuth2PermissionGrantListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OAuth2PermissionGrantListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/oauth2PermissionGrants", req.pathParams);
    
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
        const res: operations.OAuth2PermissionGrantListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oAuth2PermissionGrantListResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * objectsGetObjectsByObjectIds - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.
  **/
  objectsGetObjectsByObjectIds(
    req: operations.ObjectsGetObjectsByObjectIdsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectsGetObjectsByObjectIdsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectsGetObjectsByObjectIdsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/getObjectsByObjectIds", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObjectsGetObjectsByObjectIdsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsAddOwner - Add an owner to a service principal.
  **/
  servicePrincipalsAddOwner(
    req: operations.ServicePrincipalsAddOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsAddOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsAddOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/$links/owners", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsAddOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsCreate - Creates a service principal in the directory.
  **/
  servicePrincipalsCreate(
    req: operations.ServicePrincipalsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.servicePrincipal = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.servicePrincipal = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsDelete - Deletes a service principal from the directory.
  **/
  servicePrincipalsDelete(
    req: operations.ServicePrincipalsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsGet - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
  **/
  servicePrincipalsGet(
    req: operations.ServicePrincipalsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}", req.pathParams);
    
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
        const res: operations.ServicePrincipalsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.servicePrincipal = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.servicePrincipal = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsList - Gets a list of service principals from the current tenant.
  **/
  servicePrincipalsList(
    req: operations.ServicePrincipalsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.servicePrincipalListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.servicePrincipalListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsListAppRoleAssignedTo - Principals (users, groups, and service principals) that are assigned to this service principal.
  **/
  servicePrincipalsListAppRoleAssignedTo(
    req: operations.ServicePrincipalsListAppRoleAssignedToRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListAppRoleAssignedToResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListAppRoleAssignedToRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListAppRoleAssignedToResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appRoleAssignmentListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.appRoleAssignmentListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsListAppRoleAssignments - Applications that the service principal is assigned to.
  **/
  servicePrincipalsListAppRoleAssignments(
    req: operations.ServicePrincipalsListAppRoleAssignmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListAppRoleAssignmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListAppRoleAssignmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignments", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListAppRoleAssignmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appRoleAssignmentListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.appRoleAssignmentListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsListKeyCredentials - Get the keyCredentials associated with the specified service principal.
  **/
  servicePrincipalsListKeyCredentials(
    req: operations.ServicePrincipalsListKeyCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListKeyCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListKeyCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/keyCredentials", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListKeyCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyCredentialListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.keyCredentialListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsListOwners - Directory objects that are owners of this service principal.
   *
   * The owners are a set of non-admin users who are allowed to modify this object.
  **/
  servicePrincipalsListOwners(
    req: operations.ServicePrincipalsListOwnersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListOwnersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListOwnersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/owners", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListOwnersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsListPasswordCredentials - Gets the passwordCredentials associated with a service principal.
  **/
  servicePrincipalsListPasswordCredentials(
    req: operations.ServicePrincipalsListPasswordCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListPasswordCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListPasswordCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListPasswordCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.passwordCredentialListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.passwordCredentialListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsRemoveOwner - Remove a member from owners.
  **/
  servicePrincipalsRemoveOwner(
    req: operations.ServicePrincipalsRemoveOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsRemoveOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsRemoveOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/$links/owners/{ownerObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsRemoveOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsUpdate - Updates a service principal in the directory.
  **/
  servicePrincipalsUpdate(
    req: operations.ServicePrincipalsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsUpdateKeyCredentials - Update the keyCredentials associated with a service principal.
  **/
  servicePrincipalsUpdateKeyCredentials(
    req: operations.ServicePrincipalsUpdateKeyCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsUpdateKeyCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsUpdateKeyCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/keyCredentials", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsUpdateKeyCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * servicePrincipalsUpdatePasswordCredentials - Updates the passwordCredentials associated with a service principal.
  **/
  servicePrincipalsUpdatePasswordCredentials(
    req: operations.ServicePrincipalsUpdatePasswordCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsUpdatePasswordCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsUpdatePasswordCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ServicePrincipalsUpdatePasswordCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * signedInUserGet - Gets the details for the currently logged-in user.
  **/
  signedInUserGet(
    req: operations.SignedInUserGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SignedInUserGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SignedInUserGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/me", req.pathParams);
    
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
        const res: operations.SignedInUserGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.user = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * signedInUserListOwnedObjects - Get the list of directory objects that are owned by the user.
  **/
  signedInUserListOwnedObjects(
    req: operations.SignedInUserListOwnedObjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SignedInUserListOwnedObjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SignedInUserListOwnedObjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/me/ownedObjects", req.pathParams);
    
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
        const res: operations.SignedInUserListOwnedObjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersCreate - Create a new user.
  **/
  usersCreate(
    req: operations.UsersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/users", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.user = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersDelete - Delete a user.
  **/
  usersDelete(
    req: operations.UsersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/users/{upnOrObjectId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGet - Gets user information from the directory.
  **/
  usersGet(
    req: operations.UsersGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/users/{upnOrObjectId}", req.pathParams);
    
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
        const res: operations.UsersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.user = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGetMemberGroups - Gets a collection that contains the object IDs of the groups of which the user is a member.
  **/
  usersGetMemberGroups(
    req: operations.UsersGetMemberGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetMemberGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetMemberGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/users/{objectId}/getMemberGroups", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersGetMemberGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userGetMemberGroupsResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.userGetMemberGroupsResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersList - Gets list of users for the current tenant.
  **/
  usersList(
    req: operations.UsersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/users", req.pathParams);
    
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
        const res: operations.UsersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userListResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.userListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersUpdate - Updates a user.
  **/
  usersUpdate(
    req: operations.UsersUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{tenantID}/users/{upnOrObjectId}", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
