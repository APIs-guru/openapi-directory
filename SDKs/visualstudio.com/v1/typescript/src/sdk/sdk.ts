import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://online.visualstudio.com",
	"https://online.visualstudio.com",
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
  
  deleteApiV1EnvironmentsEnvironmentId(
    req: operations.DeleteApiV1EnvironmentsEnvironmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1EnvironmentsEnvironmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1EnvironmentsEnvironmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiV1EnvironmentsEnvironmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1EnvironmentsEnvironmentIdPortsPort(
    req: operations.DeleteApiV1EnvironmentsEnvironmentIdPortsPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1EnvironmentsEnvironmentIdPortsPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1EnvironmentsEnvironmentIdPortsPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/ports/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiV1EnvironmentsEnvironmentIdPortsPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1GenevaActionsEnvironmentsEnvironmentId(
    req: operations.DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Environments/{environmentId}", req.pathParams);
    
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
        const res: operations.DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1SecretsSecretId(
    req: operations.DeleteApiV1SecretsSecretIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1SecretsSecretIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1SecretsSecretIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Secrets/{secretId}", req.pathParams);
    
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
        const res: operations.DeleteApiV1SecretsSecretIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1TenantTenantId(
    req: operations.DeleteApiV1TenantTenantIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1TenantTenantIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1TenantTenantIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Tenant/{tenantId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiV1TenantTenantIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1UserSubscriptions(
    req: operations.DeleteApiV1UserSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1UserSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1UserSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/UserSubscriptions";
    
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
        const res: operations.DeleteApiV1UserSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1TenantTenantIdPoolGroupPoolGroupName(
    req: operations.DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1TenantTenantIdPoolPoolName(
    req: operations.DeleteApiV1TenantTenantIdPoolPoolNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1TenantTenantIdPoolPoolNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1TenantTenantIdPoolPoolNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/Pool/{poolName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiV1TenantTenantIdPoolPoolNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteApiV1TenantTenantIdPoolPoolNameVmVmName(
    req: operations.DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1AgentsFamily(
    req: operations.GetApiV1AgentsFamilyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1AgentsFamilyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1AgentsFamilyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Agents/{family}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1AgentsFamilyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.agentResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1Environments(
    req: operations.GetApiV1EnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1EnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1EnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Environments";
    
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
        const res: operations.GetApiV1EnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1EnvironmentsEnvironmentIdArchive(
    req: operations.GetApiV1EnvironmentsEnvironmentIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1EnvironmentsEnvironmentIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1EnvironmentsEnvironmentIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/archive", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1EnvironmentsEnvironmentIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unfilteredCloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.unfilteredCloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1EnvironmentsEnvironmentIdHeartbeattoken(
    req: operations.GetApiV1EnvironmentsEnvironmentIdHeartbeattokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1EnvironmentsEnvironmentIdHeartbeattokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1EnvironmentsEnvironmentIdHeartbeattokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/heartbeattoken", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1EnvironmentsEnvironmentIdHeartbeattokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1EnvironmentsEnvironmentIdLogs(
    req: operations.GetApiV1EnvironmentsEnvironmentIdLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1EnvironmentsEnvironmentIdLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1EnvironmentsEnvironmentIdLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/logs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1EnvironmentsEnvironmentIdLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getApiV1EnvironmentsEnvironmentIdLogs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.getApiV1EnvironmentsEnvironmentIdLogs200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.getApiV1EnvironmentsEnvironmentIdLogs200TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1EnvironmentsEnvironmentIdState(
    req: operations.GetApiV1EnvironmentsEnvironmentIdStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1EnvironmentsEnvironmentIdStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1EnvironmentsEnvironmentIdStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/state", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1EnvironmentsEnvironmentIdStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1EnvironmentsEnvironmentIdUpdates(
    req: operations.GetApiV1EnvironmentsEnvironmentIdUpdatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1EnvironmentsEnvironmentIdUpdatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1EnvironmentsEnvironmentIdUpdatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/updates", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1EnvironmentsEnvironmentIdUpdatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1GenevaActionsBillingEnvironmentId(
    req: operations.GetApiV1GenevaActionsBillingEnvironmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1GenevaActionsBillingEnvironmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1GenevaActionsBillingEnvironmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Billing/{environmentId}", req.pathParams);
    
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
        const res: operations.GetApiV1GenevaActionsBillingEnvironmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.billSummary = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.billSummary = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1GenevaActionsBillingEnvironmentIdStateChanges(
    req: operations.GetApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Billing/{environmentId}/state-changes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environmentStateChange = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.environmentStateChange = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1GenevaActionsConfigurationTargetKey(
    req: operations.GetApiV1GenevaActionsConfigurationTargetKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1GenevaActionsConfigurationTargetKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1GenevaActionsConfigurationTargetKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Configuration/{target}/{key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1GenevaActionsConfigurationTargetKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.systemConfigurationResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.systemConfigurationResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1GenevaActionsEnvironmentsEnvironmentId(
    req: operations.GetApiV1GenevaActionsEnvironmentsEnvironmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1GenevaActionsEnvironmentsEnvironmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1GenevaActionsEnvironmentsEnvironmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1GenevaActionsEnvironmentsEnvironmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1Locations(
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1LocationsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Locations";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1LocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.locationsResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.locationsResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1LocationsLocation(
    req: operations.GetApiV1LocationsLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1LocationsLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1LocationsLocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Locations/{location}", req.pathParams);
    
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
        const res: operations.GetApiV1LocationsLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.locationInfoResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.locationInfoResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1Plans(
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1PlansResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Plans";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1PlansResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.planResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.planResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1PlansSubscriptionIdResourceGroupNameResourceName(
    req: operations.GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Plans/{subscriptionId}/{resourceGroupName}/{resourceName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.planResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.planResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1Sas(
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1SasResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Sas";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1SasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scopedSecretResultBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.scopedSecretResultBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1Secrets(
    req: operations.GetApiV1SecretsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1SecretsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1SecretsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Secrets";
    
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
        const res: operations.GetApiV1SecretsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scopedSecretResultBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.scopedSecretResultBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1TenantTenantId(
    req: operations.GetApiV1TenantTenantIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1TenantTenantIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1TenantTenantIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Tenant/{tenantId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1TenantTenantIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tenantInfoResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.tenantInfoResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1PoolsDefault(
    req: operations.GetApiV1PoolsDefaultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1PoolsDefaultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1PoolsDefaultRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/pools/default";
    
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
        const res: operations.GetApiV1PoolsDefaultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.poolStatusResponseBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.poolStatusResponseBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1TenantTenantIdPoolGroupPoolGroupName(
    req: operations.GetApiV1TenantTenantIdPoolGroupPoolGroupNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1TenantTenantIdPoolGroupPoolGroupNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1TenantTenantIdPoolGroupPoolGroupNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1TenantTenantIdPoolGroupPoolGroupNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.poolGroupResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.poolGroupResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1TenantTenantIdPoolPoolName(
    req: operations.GetApiV1TenantTenantIdPoolPoolNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1TenantTenantIdPoolPoolNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1TenantTenantIdPoolPoolNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/Pool/{poolName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1TenantTenantIdPoolPoolNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1TenantTenantIdPoolPoolNameVm(
    req: operations.GetApiV1TenantTenantIdPoolPoolNameVmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1TenantTenantIdPoolPoolNameVmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1TenantTenantIdPoolPoolNameVmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1TenantTenantIdPoolPoolNameVmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.vmResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.vmResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getApiV1TenantTenantIdPoolPoolNameVmVmName(
    req: operations.GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.vmResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.vmResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getHealth(
    config?: AxiosRequestConfig
  ): Promise<operations.GetHealthResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHealthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getWarmup(
    config?: AxiosRequestConfig
  ): Promise<operations.GetWarmupResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/warmup";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWarmupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getEnvironmentRoute(
    req: operations.GetEnvironmentRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}", req.pathParams);
    
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
        const res: operations.GetEnvironmentRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  patchApiV1EnvironmentsEnvironmentId(
    req: operations.PatchApiV1EnvironmentsEnvironmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchApiV1EnvironmentsEnvironmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchApiV1EnvironmentsEnvironmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchApiV1EnvironmentsEnvironmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  patchApiV1EnvironmentsEnvironmentIdFolder(
    req: operations.PatchApiV1EnvironmentsEnvironmentIdFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchApiV1EnvironmentsEnvironmentIdFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchApiV1EnvironmentsEnvironmentIdFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/folder", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchApiV1EnvironmentsEnvironmentIdFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  patchApiV1EnvironmentsEnvironmentIdRestore(
    req: operations.PatchApiV1EnvironmentsEnvironmentIdRestoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchApiV1EnvironmentsEnvironmentIdRestoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchApiV1EnvironmentsEnvironmentIdRestoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/restore", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "patch",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchApiV1EnvironmentsEnvironmentIdRestoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  patchApiV1TenantTenantIdPoolGroupPoolGroupName(
    req: operations.PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  patchApiV1TenantTenantIdPoolPoolName(
    req: operations.PatchApiV1TenantTenantIdPoolPoolNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchApiV1TenantTenantIdPoolPoolNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchApiV1TenantTenantIdPoolPoolNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/Pool/{poolName}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchApiV1TenantTenantIdPoolPoolNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1AgentTelemetry(
    req: operations.PostApiV1AgentTelemetryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1AgentTelemetryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1AgentTelemetryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/AgentTelemetry";

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
        const res: operations.PostApiV1AgentTelemetryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1Environments(
    req: operations.PostApiV1EnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1EnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1EnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Environments";

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
        const res: operations.PostApiV1EnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 307:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1EnvironmentsEnvironmentIdArchive(
    req: operations.PostApiV1EnvironmentsEnvironmentIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1EnvironmentsEnvironmentIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1EnvironmentsEnvironmentIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/archive", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1EnvironmentsEnvironmentIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1EnvironmentsEnvironmentIdExport(
    req: operations.PostApiV1EnvironmentsEnvironmentIdExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1EnvironmentsEnvironmentIdExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1EnvironmentsEnvironmentIdExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/export", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1EnvironmentsEnvironmentIdExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1EnvironmentsEnvironmentIdShutdown(
    req: operations.PostApiV1EnvironmentsEnvironmentIdShutdownRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1EnvironmentsEnvironmentIdShutdownResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1EnvironmentsEnvironmentIdShutdownRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/shutdown", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1EnvironmentsEnvironmentIdShutdownResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1EnvironmentsEnvironmentIdStart(
    req: operations.PostApiV1EnvironmentsEnvironmentIdStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1EnvironmentsEnvironmentIdStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1EnvironmentsEnvironmentIdStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/start", req.pathParams);
    
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
        const res: operations.PostApiV1EnvironmentsEnvironmentIdStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1GenevaActionsBillingEnvironmentIdStateChanges(
    req: operations.PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Billing/{environmentId}/state-changes", req.pathParams);

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
        const res: operations.PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environmentStateChange = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.environmentStateChange = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1GenevaActionsConfigurationTarget(
    req: operations.PostApiV1GenevaActionsConfigurationTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1GenevaActionsConfigurationTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1GenevaActionsConfigurationTargetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Configuration/{target}", req.pathParams);

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
        const res: operations.PostApiV1GenevaActionsConfigurationTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.systemConfigurationResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.systemConfigurationResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1GenevaActionsPrivacyRefreshProfileTelemetryProperties(
    req: operations.PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties";

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
        const res: operations.PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.refreshProfileTelemetryPropertiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.refreshProfileTelemetryPropertiesResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1HeartBeat(
    req: operations.PostApiV1HeartBeatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1HeartBeatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1HeartBeatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/HeartBeat";

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
        const res: operations.PostApiV1HeartBeatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1PrebuildsPoolsPoolIdInstances(
    req: operations.PostApiV1PrebuildsPoolsPoolIdInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1PrebuildsPoolsPoolIdInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1PrebuildsPoolsPoolIdInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Prebuilds/pools/{poolId}/instances", req.pathParams);

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
        const res: operations.PostApiV1PrebuildsPoolsPoolIdInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1PrebuildsTemplates(
    req: operations.PostApiV1PrebuildsTemplatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1PrebuildsTemplatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1PrebuildsTemplatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Prebuilds/templates";

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
        const res: operations.PostApiV1PrebuildsTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1Secrets(
    req: operations.PostApiV1SecretsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SecretsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SecretsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/Secrets";

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
        const res: operations.PostApiV1SecretsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scopedSecretResultBody = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.scopedSecretResultBody = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBegin(
    req: operations.PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/providers/{providerNamespace}/{resourceType}/resourceReadBegin", req.pathParams);

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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespaces(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/deleteAllCodespaces", req.pathParams);
    
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironments(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/deleteAllEnvironments", req.pathParams);
    
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegates(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/deleteDelegates", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespaces(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/readAllCodespaces", req.pathParams);
    
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironments(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/readAllEnvironments", req.pathParams);
    
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegates(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/readDelegates", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompleted(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceCreationCompleted", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidate(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceCreationValidate", req.pathParams);

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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidate(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceDeletionValidate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompleted(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourcePatchCompleted", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidate(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourcePatchValidate", req.pathParams);

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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBegin(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/resourceReadBegin", req.pathParams);

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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespaces(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/writeCodespaces", req.pathParams);
    
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegates(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/writeDelegates", req.pathParams);

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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironments(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}/writeEnvironments", req.pathParams);
    
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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBegin(
    req: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/resourceReadBegin", req.pathParams);

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
        const res: operations.PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1UserSubscriptions(
    req: operations.PostApiV1UserSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1UserSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1UserSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/UserSubscriptions";
    
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
        const res: operations.PostApiV1UserSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1TenantTenantIdPoolPoolNameVmVmNameStart(
    req: operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postApiV1TenantTenantIdPoolPoolNameVmVmNameStop(
    req: operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1EnvironmentsEnvironmentIdPortsPort(
    req: operations.PutApiV1EnvironmentsEnvironmentIdPortsPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1EnvironmentsEnvironmentIdPortsPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1EnvironmentsEnvironmentIdPortsPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/ports/{port}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1EnvironmentsEnvironmentIdPortsPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.messageCodes = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1GenevaActionsEnvironmentsEnvironmentIdArchive(
    req: operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Environments/{environmentId}/archive", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdown(
    req: operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/GenevaActions/Environments/{environmentId}/shutdown", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1PrebuildsPoolsPoolIdInstances(
    req: operations.PutApiV1PrebuildsPoolsPoolIdInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1PrebuildsPoolsPoolIdInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1PrebuildsPoolsPoolIdInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Prebuilds/pools/{poolId}/instances", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1PrebuildsPoolsPoolIdInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1SecretsSecretId(
    req: operations.PutApiV1SecretsSecretIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1SecretsSecretIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1SecretsSecretIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Secrets/{secretId}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1SecretsSecretIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scopedSecretResultBody = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.scopedSecretResultBody = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotification(
    req: operations.PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/providers/{providerNamespace}/{resourceType}/SubscriptionLifeCycleNotification", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceName(
    req: operations.PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/{resourceType}/{resourceName}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1TenantTenantId(
    req: operations.PutApiV1TenantTenantIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1TenantTenantIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1TenantTenantIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Tenant/{tenantId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1TenantTenantIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1TenantTenantIdPoolGroupPoolGroupName(
    req: operations.PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1TenantTenantIdPoolGroupPoolGroupNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1TenantTenantIdPoolGroupPoolGroupNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1TenantTenantIdPoolPoolName(
    req: operations.PutApiV1TenantTenantIdPoolPoolNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1TenantTenantIdPoolPoolNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1TenantTenantIdPoolPoolNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/Pool/{poolName}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1TenantTenantIdPoolPoolNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.poolResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putApiV1TenantTenantIdPoolPoolNameVmVmName(
    req: operations.PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.vmResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.vmResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.vmResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.vmResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateEnvironmentRoute(
    req: operations.UpdateEnvironmentRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEnvironmentRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEnvironmentRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/Environments/{environmentId}/_callback", req.pathParams);

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
        const res: operations.UpdateEnvironmentRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.cloudEnvironmentResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
