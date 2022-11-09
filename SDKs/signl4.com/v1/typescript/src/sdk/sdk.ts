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
  "https://connect.signl4.com/api",
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
  
  // DeleteCategoriesTeamIdCategoryId - Delete an existing category
  /** 
   * Sample Request:
   *             
   *     DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
  **/
  DeleteCategoriesTeamIdCategoryId(
    req: operations.DeleteCategoriesTeamIdCategoryIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCategoriesTeamIdCategoryIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCategoriesTeamIdCategoryIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/{categoryId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCategoriesTeamIdCategoryIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // DeleteScriptsInstancesInstanceId - Deletes a script instance.
  /** 
   * Gets the script instance specified by the passed instance id.
  **/
  DeleteScriptsInstancesInstanceId(
    req: operations.DeleteScriptsInstancesInstanceIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteScriptsInstancesInstanceIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteScriptsInstancesInstanceIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/instances/{instanceId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteScriptsInstancesInstanceIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // DeleteTeamsTeamIdMembershipsUserId - Removes a user or invitation from a team, and may delete the user if he is not in any team.
  DeleteTeamsTeamIdMembershipsUserId(
    req: operations.DeleteTeamsTeamIdMembershipsUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamsTeamIdMembershipsUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamsTeamIdMembershipsUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/memberships/{userId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTeamsTeamIdMembershipsUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteTeamsTeamIdMembershipsUserId200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.deleteTeamsTeamIdMembershipsUserId200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.deleteTeamsTeamIdMembershipsUserId200TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // DeleteTeamsTeamIdSchedulesDutyId - Delete a specific duty.
  DeleteTeamsTeamIdSchedulesDutyId(
    req: operations.DeleteTeamsTeamIdSchedulesDutyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamsTeamIdSchedulesDutyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamsTeamIdSchedulesDutyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/schedules/{dutyId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTeamsTeamIdSchedulesDutyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // DeleteWebhooksWebhookId - Delete Webhook by Id
  /** 
   * Deletes the specified webhook so that it will no longer be notified.
  **/
  DeleteWebhooksWebhookId(
    req: operations.DeleteWebhooksWebhookIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhooksWebhookIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhooksWebhookIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWebhooksWebhookIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetAlertsAlertId - Get Alert
  /** 
   * Gets an alert by id.
  **/
  GetAlertsAlertId(
    req: operations.GetAlertsAlertIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsAlertIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsAlertIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAlertsAlertIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlertsAlertIdAnnotations - Get annotations of an alert
  /** 
   * Get annotations of an alert by id.
  **/
  GetAlertsAlertIdAnnotations(
    req: operations.GetAlertsAlertIdAnnotationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsAlertIdAnnotationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsAlertIdAnnotationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/annotations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAlertsAlertIdAnnotationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertAnnotationInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertAnnotationInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlertsAlertIdAttachments - Get attachments of an alert
  /** 
   * Get attachments of an alert by id.
  **/
  GetAlertsAlertIdAttachments(
    req: operations.GetAlertsAlertIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsAlertIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsAlertIdAttachmentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/attachments", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAlertsAlertIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertAttachmentInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertAttachmentInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlertsAlertIdAttachmentsAttachmentId - Gets a specified attachment of a specified alert.
  GetAlertsAlertIdAttachmentsAttachmentId(
    req: operations.GetAlertsAlertIdAttachmentsAttachmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsAlertIdAttachmentsAttachmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsAlertIdAttachmentsAttachmentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/attachments/{attachmentId}", req.pathParams);
    
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
        let res: operations.GetAlertsAlertIdAttachmentsAttachmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAlertsAlertIdAttachmentsAttachmentId200ApplicationJsonBinaryString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.getAlertsAlertIdAttachmentsAttachmentId200TextJsonBinaryString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAlertsAlertIdAttachmentsAttachmentId200TextPlainBinaryString = out;
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetAlertsAlertIdNotifications - Get alert notifications
  /** 
   * Get notifications of all users by alert id.
  **/
  GetAlertsAlertIdNotifications(
    req: operations.GetAlertsAlertIdNotificationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsAlertIdNotificationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsAlertIdNotificationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/notifications", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAlertsAlertIdNotificationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertNotificationInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertNotificationInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlertsAlertIdOverview - Get an overview alert.
  /** 
   * Get overview alert by id.
  **/
  GetAlertsAlertIdOverview(
    req: operations.GetAlertsAlertIdOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsAlertIdOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsAlertIdOverviewRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/overview", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAlertsAlertIdOverviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overviewAlert = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.overviewAlert = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlertsReport - Get Alert Report
  /** 
   * Returns information about the occurred alert volume in different time periods as well as information about the
   * response behaviour (amount of confirmed and unhandled alerts) of your team members.
  **/
  GetAlertsReport(
    req: operations.GetAlertsReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertsReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertsReportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/report";
    
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
        let res: operations.GetAlertsReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertReport = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertReport = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesImages - Gets the names of all alert category images.
You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
  GetCategoriesImages(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesImagesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/categories/images";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCategoriesImages200ApplicationJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.getCategoriesImages200TextJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesTeamId - Get all categories
  /** 
   * Sample Request:
   *             
   *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
  **/
  GetCategoriesTeamId(
    req: operations.GetCategoriesTeamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTeamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesTeamIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesTeamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categoryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categoryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesTeamIdCategoryId - Get a specific category
  /** 
   * Sample Request:
   *             
   *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
  **/
  GetCategoriesTeamIdCategoryId(
    req: operations.GetCategoriesTeamIdCategoryIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTeamIdCategoryIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesTeamIdCategoryIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/{categoryId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesTeamIdCategoryIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categoryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categoryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesTeamIdCategoryIdMetrics - Get metrics for a specific category
  /** 
   * Sample Request:
   *             
   *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics
  **/
  GetCategoriesTeamIdCategoryIdMetrics(
    req: operations.GetCategoriesTeamIdCategoryIdMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTeamIdCategoryIdMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesTeamIdCategoryIdMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/{categoryId}/metrics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesTeamIdCategoryIdMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categoryMetrics = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categoryMetrics = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesTeamIdCategoryIdSubscriptions - Get category subscriptions
  /** 
   * Sample Request:
   *             
   *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
   *     {
   *     }
  **/
  GetCategoriesTeamIdCategoryIdSubscriptions(
    req: operations.GetCategoriesTeamIdCategoryIdSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTeamIdCategoryIdSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesTeamIdCategoryIdSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/{categoryId}/subscriptions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesTeamIdCategoryIdSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categorySubscriptionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categorySubscriptionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCategoriesTeamIdMetrics - Get metrics for all categories
  /** 
   * Sample Request:
   *             
   *     GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics
  **/
  GetCategoriesTeamIdMetrics(
    req: operations.GetCategoriesTeamIdMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesTeamIdMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesTeamIdMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/metrics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCategoriesTeamIdMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categoryMetrics = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categoryMetrics = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEventsEventIdOverview - Get overview event
  /** 
   * Get overview event by id.
  **/
  GetEventsEventIdOverview(
    req: operations.GetEventsEventIdOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsEventIdOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsEventIdOverviewRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/events/{eventId}/overview", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEventsEventIdOverviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overviewEvent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.overviewEvent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEventsEventIdParameters - Get event parameters
  /** 
   * Get parameters of an event by id.
  **/
  GetEventsEventIdParameters(
    req: operations.GetEventsEventIdParametersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsEventIdParametersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsEventIdParametersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/events/{eventId}/parameters", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEventsEventIdParametersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventParameterInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.eventParameterInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPrepaidBalance - Get your subscription's current prepaid balance.
  GetPrepaidBalance(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPrepaidBalanceResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/prepaid/balance";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPrepaidBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidBalanceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidBalanceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPrepaidSettings - Get your subscription's current prepaid settings.
  GetPrepaidSettings(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPrepaidSettingsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/prepaid/settings";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPrepaidSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPrepaidTransactions - Get your subscription's prepaid transactions.
  GetPrepaidTransactions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPrepaidTransactionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/prepaid/transactions";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPrepaidTransactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidTransactionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidTransactionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetScriptsInstances - Returns all script instances of the SIGNL4 team
  /** 
   * Returns all script instances in the subscription.
  **/
  GetScriptsInstances(
    req: operations.GetScriptsInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScriptsInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScriptsInstancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scripts/instances";
    
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
        let res: operations.GetScriptsInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetScriptsInstancesInstanceId - Returns all information about a given script instance which includes its runtime status.
  /** 
   * Gets the script instance specified by the passed instance id.
  **/
  GetScriptsInstancesInstanceId(
    req: operations.GetScriptsInstancesInstanceIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScriptsInstancesInstanceIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScriptsInstancesInstanceIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/instances/{instanceId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetScriptsInstancesInstanceIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetScriptsInventory - Returns all available inventory scripts which can be added to a SIGNL4 subscription.
  /** 
   * Returns all available inventory scripts which can be added to a SIGNL4 subscription.
  **/
  GetScriptsInventory(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetScriptsInventoryResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scripts/inventory";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetScriptsInventoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.inventoryScriptInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.inventoryScriptInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetScriptsInventoryParsed - Returns all inventory scripts.
  GetScriptsInventoryParsed(
    req: operations.GetScriptsInventoryParsedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScriptsInventoryParsedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScriptsInventoryParsedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scripts/inventory/parsed";
    
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
        let res: operations.GetScriptsInventoryParsedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.inventoryScriptInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.inventoryScriptInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetScriptsInventoryParsedScriptId - Returns an inventory script by its id.
  /** 
   * Gets the script specified by the passed script id.
  **/
  GetScriptsInventoryParsedScriptId(
    req: operations.GetScriptsInventoryParsedScriptIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScriptsInventoryParsedScriptIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScriptsInventoryParsedScriptIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/inventory/parsed/{scriptId}", req.pathParams);
    
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
        let res: operations.GetScriptsInventoryParsedScriptIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptions - Get infos of all available/managed subscriptions.
  GetSubscriptions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscriptions";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.subscriptionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.subscriptionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionId - Get infos of a specific subscription.
  GetSubscriptionsSubscriptionId(
    req: operations.GetSubscriptionsSubscriptionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.subscriptionInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.subscriptionInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdChannelPrices - Returns the subscription's channel price information.
  GetSubscriptionsSubscriptionIdChannelPrices(
    req: operations.GetSubscriptionsSubscriptionIdChannelPricesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdChannelPricesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdChannelPricesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/channelPrices", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdChannelPricesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.channelPriceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.channelPriceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdFeatures - Returns the features of a specified subscription.
  GetSubscriptionsSubscriptionIdFeatures(
    req: operations.GetSubscriptionsSubscriptionIdFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdFeaturesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/features", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.subscriptionFeatures = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.subscriptionFeatures = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdPrepaidBalance - Get a subscription's current prepaid balance.
  GetSubscriptionsSubscriptionIdPrepaidBalance(
    req: operations.GetSubscriptionsSubscriptionIdPrepaidBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdPrepaidBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdPrepaidBalanceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/prepaidBalance", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdPrepaidBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidBalanceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidBalanceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdPrepaidSettings - Get a subscription's current prepaid settings.
  GetSubscriptionsSubscriptionIdPrepaidSettings(
    req: operations.GetSubscriptionsSubscriptionIdPrepaidSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdPrepaidSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdPrepaidSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/prepaidSettings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdPrepaidSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdPrepaidTransactions - Get a subscription's prepaid transactions.
  GetSubscriptionsSubscriptionIdPrepaidTransactions(
    req: operations.GetSubscriptionsSubscriptionIdPrepaidTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdPrepaidTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdPrepaidTransactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/prepaidTransactions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdPrepaidTransactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidTransactionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidTransactionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdTeams - Get infos for all teams of the subscription.
  GetSubscriptionsSubscriptionIdTeams(
    req: operations.GetSubscriptionsSubscriptionIdTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdTeamsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/teams", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdTeamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.teamInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.teamInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionsSubscriptionIdUserLicenses - Gets a subscription's user licenses.
  GetSubscriptionsSubscriptionIdUserLicenses(
    req: operations.GetSubscriptionsSubscriptionIdUserLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsSubscriptionIdUserLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsSubscriptionIdUserLicensesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/userLicenses", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionsSubscriptionIdUserLicensesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userLicenseInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userLicenseInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeams - Get infos of all teams.
  GetTeams(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/teams";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.teamInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.teamInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamId - Gets infos of a specific team.
  GetTeamsTeamId(
    req: operations.GetTeamsTeamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.teamInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.teamInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdAlertReports - Get information about downloadable alert reports
  GetTeamsTeamIdAlertReports(
    req: operations.GetTeamsTeamIdAlertReportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdAlertReportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdAlertReportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/alertReports", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdAlertReportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertAuditReportFileInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertAuditReportFileInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdAlertReportsFileName - Returns Alert Report
  GetTeamsTeamIdAlertReportsFileName(
    req: operations.GetTeamsTeamIdAlertReportsFileNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdAlertReportsFileNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdAlertReportsFileNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/alertReports/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdAlertReportsFileNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTeamsTeamIdAlertReportsFileName200ApplicationJsonBinaryString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.getTeamsTeamIdAlertReportsFileName200TextJsonBinaryString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getTeamsTeamIdAlertReportsFileName200TextPlainBinaryString = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetTeamsTeamIdAlertSettings - Gets alert settings of a specific team.
  GetTeamsTeamIdAlertSettings(
    req: operations.GetTeamsTeamIdAlertSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdAlertSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdAlertSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/alertSettings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdAlertSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertSettings = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertSettings = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdDutyReports - Get Information about downloadable reports
  GetTeamsTeamIdDutyReports(
    req: operations.GetTeamsTeamIdDutyReportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdDutyReportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdDutyReportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/dutyReports", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdDutyReportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dutyAuditReportFileInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.dutyAuditReportFileInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdDutyReportsFileName - Download duty report with a specific fileName
  GetTeamsTeamIdDutyReportsFileName(
    req: operations.GetTeamsTeamIdDutyReportsFileNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdDutyReportsFileNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdDutyReportsFileNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/dutyReports/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdDutyReportsFileNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTeamsTeamIdDutyReportsFileName200ApplicationJsonBinaryString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.getTeamsTeamIdDutyReportsFileName200TextJsonBinaryString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getTeamsTeamIdDutyReportsFileName200TextPlainBinaryString = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetTeamsTeamIdDutysummary - Get duty assistant info for a team
  GetTeamsTeamIdDutysummary(
    req: operations.GetTeamsTeamIdDutysummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdDutysummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdDutysummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/dutysummary", req.pathParams);
    
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
        let res: operations.GetTeamsTeamIdDutysummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.teamDutySummaryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.teamDutySummaryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdEventSources - Gets event sources of a specific team.
  GetTeamsTeamIdEventSources(
    req: operations.GetTeamsTeamIdEventSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdEventSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdEventSourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/eventSources", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdEventSourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventSourceEndpointInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.eventSourceEndpointInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdMemberships - Get all invites of a team.
  GetTeamsTeamIdMemberships(
    req: operations.GetTeamsTeamIdMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdMembershipsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/memberships", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdMembershipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.invitedUserInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.invitedUserInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            break;
          case 400:
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdSchedules - Returns information about all duties that belong to the team.
  GetTeamsTeamIdSchedules(
    req: operations.GetTeamsTeamIdSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdSchedulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/schedules", req.pathParams);
    
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
        let res: operations.GetTeamsTeamIdSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scheduleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdSchedulesScheduleId - Returns information of the duty schedule with the specified Id.
  GetTeamsTeamIdSchedulesScheduleId(
    req: operations.GetTeamsTeamIdSchedulesScheduleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdSchedulesScheduleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdSchedulesScheduleIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/schedules/{scheduleId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdSchedulesScheduleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scheduleInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsTeamIdSetupProgress - Gets setup progress of a specific team.
  GetTeamsTeamIdSetupProgress(
    req: operations.GetTeamsTeamIdSetupProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsTeamIdSetupProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsTeamIdSetupProgressRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/setupProgress", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsTeamIdSetupProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.teamSetupProgress = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.teamSetupProgress = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsers - Get all Users
  /** 
   * Returns a list of user objects with details such as their email address and duty information. Only users who
   * are part of your team will be returned.
  **/
  GetUsers(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserId - Get User by Id
  /** 
   * Returns a user object with details such as his email address and duty information.
  **/
  GetUsersUserId(
    req: operations.GetUsersUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdDutyStatus - Get duty status by user Id
  /** 
   * Returns a object with duty information.
  **/
  GetUsersUserIdDutyStatus(
    req: operations.GetUsersUserIdDutyStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdDutyStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdDutyStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/dutyStatus", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdDutyStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetUsersUserIdImage(
    req: operations.GetUsersUserIdImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/image", req.pathParams);
    
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
        let res: operations.GetUsersUserIdImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdSetupProgress - Gets setup progress of a specific user.
  GetUsersUserIdSetupProgress(
    req: operations.GetUsersUserIdSetupProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdSetupProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdSetupProgressRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/setupProgress", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdSetupProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userSetupProgress = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userSetupProgress = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWebhooks - Get Webhooks
  /** 
   * Returns a collection of defined outbound webhooks in the system.
  **/
  GetWebhooks(
    req: operations.GetWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";
    
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
        let res: operations.GetWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.webhookInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWebhookById - Get Webhook by Id
  /** 
   * Returns information of the webhook specified by the passed id.
  **/
  GetWebhookById(
    req: operations.GetWebhookByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhookByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhookByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWebhookByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getWebhookById200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.getWebhookById200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.getWebhookById200TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostAlerts - Trigger Alert
  /** 
   * Triggers a new alert for your team. All team members on duty will receive alert notifications.
  **/
  PostAlerts(
    req: operations.PostAlertsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsAcknowledgeAll - Confirms all visible alerts
  /** 
   * This method confirms all unhandled alerts your team currently has by a specific user.
  **/
  PostAlertsAcknowledgeAll(
    req: operations.PostAlertsAcknowledgeAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAcknowledgeAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAcknowledgeAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/acknowledgeAll";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAcknowledgeAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsAcknowledgeMultiple - Acknowlegde multiple alerts
  /** 
   * This method confirms all alerts provided.
  **/
  PostAlertsAcknowledgeMultiple(
    req: operations.PostAlertsAcknowledgeMultipleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAcknowledgeMultipleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAcknowledgeMultipleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/acknowledgeMultiple";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAcknowledgeMultipleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostAlertsAlertIdAcknowledge - Acknowledge an alert
  PostAlertsAlertIdAcknowledge(
    req: operations.PostAlertsAlertIdAcknowledgeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAlertIdAcknowledgeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAlertIdAcknowledgeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/acknowledge", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAlertIdAcknowledgeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsAlertIdAnnotate - Annotate Alert
  /** 
   * Annotates an alert by given Annotation Info.
  **/
  PostAlertsAlertIdAnnotate(
    req: operations.PostAlertsAlertIdAnnotateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAlertIdAnnotateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAlertIdAnnotateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/annotate", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAlertIdAnnotateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertAnnotationInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertAnnotationInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsAlertIdClose - Close an alert
  PostAlertsAlertIdClose(
    req: operations.PostAlertsAlertIdCloseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAlertIdCloseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAlertIdCloseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/close", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAlertIdCloseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsAlertIdUndoAcknowledge - Undo the acknowledgement of an alert.
  /** 
   * This method tries to undo an alert acknowledgement.
  **/
  PostAlertsAlertIdUndoAcknowledge(
    req: operations.PostAlertsAlertIdUndoAcknowledgeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAlertIdUndoAcknowledgeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAlertIdUndoAcknowledgeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/undoAcknowledge", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAlertIdUndoAcknowledgeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overviewAlert = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.overviewAlert = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsAlertIdUndoClose - Undo the closure of an alert.
  /** 
   * This method tries to undo an alert close.
  **/
  PostAlertsAlertIdUndoClose(
    req: operations.PostAlertsAlertIdUndoCloseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsAlertIdUndoCloseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsAlertIdUndoCloseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/alerts/{alertId}/undoClose", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsAlertIdUndoCloseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overviewAlert = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.overviewAlert = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsCloseAll - Close all acknowledged alerts.
  /** 
   * This method closes all acknowledged alerts your team currently has.
  **/
  PostAlertsCloseAll(
    req: operations.PostAlertsCloseAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsCloseAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsCloseAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/closeAll";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsCloseAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostAlertsCloseMultiple - Close multiple alerts
  /** 
   * This method closes all alerts provided.
  **/
  PostAlertsCloseMultiple(
    req: operations.PostAlertsCloseMultipleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsCloseMultipleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsCloseMultipleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/closeMultiple";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsCloseMultipleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostAlertsPaged - Gets alerts paged
  PostAlertsPaged(
    req: operations.PostAlertsPagedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsPagedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsPagedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/paged";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsPagedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overviewAlertPagedResultsPublic = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.overviewAlertPagedResultsPublic = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAlertsUndoAcknowledgeMultiple - Queue undo of multiple acknowledgments.
  /** 
   * This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.
  **/
  PostAlertsUndoAcknowledgeMultiple(
    req: operations.PostAlertsUndoAcknowledgeMultipleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsUndoAcknowledgeMultipleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsUndoAcknowledgeMultipleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/undoAcknowledgeMultiple";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsUndoAcknowledgeMultipleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostAlertsUndoCloseMultiple - Withdraw closure of multiple alerts
  /** 
   * This method tries to undo multiple alert closes. The operation is handled in the background.
  **/
  PostAlertsUndoCloseMultiple(
    req: operations.PostAlertsUndoCloseMultipleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAlertsUndoCloseMultipleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAlertsUndoCloseMultipleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/alerts/undoCloseMultiple";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAlertsUndoCloseMultipleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostCategoriesTeamId - Create a new category
  /** 
   * Sample Request:
   *             
   *     POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
   *     {
   *         "name": "Water",
   *         "imageName": "water.svg",
   *         "color": "#0000cc",
   *         "keywordMatching": "Any",
   *         "keywords": [
   *             {
   *                 "value": "H2O"
   *             },
   *             {
   *                 "value": "Water"
   *             }
   *         ]
   *     }
  **/
  PostCategoriesTeamId(
    req: operations.PostCategoriesTeamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoriesTeamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoriesTeamIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCategoriesTeamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.categoryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categoryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostCategoriesTeamIdCategoryIdSubscriptions - Set category subscriptions
  /** 
   * Sample Request:
   *             
   *     POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
   *     {
   *     }
  **/
  PostCategoriesTeamIdCategoryIdSubscriptions(
    req: operations.PostCategoriesTeamIdCategoryIdSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoriesTeamIdCategoryIdSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoriesTeamIdCategoryIdSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/{categoryId}/subscriptions", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCategoriesTeamIdCategoryIdSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categorySubscriptionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categorySubscriptionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostEventsPaged - Get overview event paged.
  /** 
   * Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.
  **/
  PostEventsPaged(
    req: operations.PostEventsPagedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEventsPagedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEventsPagedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/events/paged";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostEventsPagedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overviewEventPagedResultsPublic = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.overviewEventPagedResultsPublic = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostScriptsInstances - Creates a new script instance in the in the SIGNL4 team.
  /** 
   * Creates a new script instance of the script specified in the request body.
  **/
  PostScriptsInstances(
    req: operations.PostScriptsInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScriptsInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScriptsInstancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scripts/instances";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostScriptsInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostScriptsInstancesInstanceIdDisable - Disables a given script instance.
  PostScriptsInstancesInstanceIdDisable(
    req: operations.PostScriptsInstancesInstanceIdDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScriptsInstancesInstanceIdDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScriptsInstancesInstanceIdDisableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/instances/{instanceId}/disable", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostScriptsInstancesInstanceIdDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostScriptsInstancesInstanceIdEnable - Enables a script instance.
  PostScriptsInstancesInstanceIdEnable(
    req: operations.PostScriptsInstancesInstanceIdEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScriptsInstancesInstanceIdEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScriptsInstancesInstanceIdEnableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/instances/{instanceId}/enable", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostScriptsInstancesInstanceIdEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsTeamIdAlertSettings - Sets alert settings of a specific team.
  PostTeamsTeamIdAlertSettings(
    req: operations.PostTeamsTeamIdAlertSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsTeamIdAlertSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsTeamIdAlertSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/alertSettings", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsTeamIdAlertSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.alertSettings = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.alertSettings = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsTeamIdMemberships - Invite users to a team
  PostTeamsTeamIdMemberships(
    req: operations.PostTeamsTeamIdMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsTeamIdMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsTeamIdMembershipsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/memberships", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsTeamIdMembershipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userInvitationResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userInvitationResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsTeamIdMembershipsResendInviteMail - Sends invite email again if an invite exists
  PostTeamsTeamIdMembershipsResendInviteMail(
    req: operations.PostTeamsTeamIdMembershipsResendInviteMailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsTeamIdMembershipsResendInviteMailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsTeamIdMembershipsResendInviteMailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/memberships/resendInviteMail", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsTeamIdMembershipsResendInviteMailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postTeamsTeamIdMembershipsResendInviteMail200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.postTeamsTeamIdMembershipsResendInviteMail200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.postTeamsTeamIdMembershipsResendInviteMail200TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostTeamsTeamIdSchedules - Create/Update given duty schedule.
  PostTeamsTeamIdSchedules(
    req: operations.PostTeamsTeamIdSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsTeamIdSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsTeamIdSchedulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/schedules", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsTeamIdSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scheduleInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsTeamIdSchedulesDeleteRange - Delete duty schedules in range
  PostTeamsTeamIdSchedulesDeleteRange(
    req: operations.PostTeamsTeamIdSchedulesDeleteRangeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsTeamIdSchedulesDeleteRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsTeamIdSchedulesDeleteRangeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/schedules/deleteRange", req.pathParams);
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsTeamIdSchedulesDeleteRangeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scheduleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsTeamIdSchedulesMultiple - Save multiple schedules. It is possible to override existing schedules if you wish
  PostTeamsTeamIdSchedulesMultiple(
    req: operations.PostTeamsTeamIdSchedulesMultipleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsTeamIdSchedulesMultipleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsTeamIdSchedulesMultipleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/schedules/multiple", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsTeamIdSchedulesMultipleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scheduleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdCheckPermissions - Checks if a user has the provided permission.
  PostUsersUserIdCheckPermissions(
    req: operations.PostUsersUserIdCheckPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdCheckPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdCheckPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/checkPermissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdCheckPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdImage - Uploaded a profile image for a specified user.
  PostUsersUserIdImage(
    req: operations.PostUsersUserIdImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/image", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostUsersUserIdPunchIn - Punch User in
  /** 
   * The specified user will be punched in to duty.
  **/
  PostUsersUserIdPunchIn(
    req: operations.PostUsersUserIdPunchInRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdPunchInResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdPunchInRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/punchIn", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdPunchInResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdPunchInAsManager - Punch User in as Manager
  /** 
   * The specified user will be punched in to duty as a manager.
  **/
  PostUsersUserIdPunchInAsManager(
    req: operations.PostUsersUserIdPunchInAsManagerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdPunchInAsManagerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdPunchInAsManagerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/punchInAsManager", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdPunchInAsManagerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdPunchOut - Punch User out
  /** 
   * The specified user will be punched out from duty.
  **/
  PostUsersUserIdPunchOut(
    req: operations.PostUsersUserIdPunchOutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdPunchOutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdPunchOutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/punchOut", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdPunchOutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userDutyInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWebhooks - Create Webhook
  /** 
   * Creates a new outbound webhook that will be notified when certain events occur.
  **/
  PostWebhooks(
    req: operations.PostWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";
    
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.postWebhooks201ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.postWebhooks201TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.postWebhooks201TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostWebhooksWebhookIdDisable - Ability to enable a webHook.
  PostWebhooksWebhookIdDisable(
    req: operations.PostWebhooksWebhookIdDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksWebhookIdDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksWebhookIdDisableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}/disable", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostWebhooksWebhookIdDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.webhookInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWebhooksWebhookIdEnable - Ability to disable a webHook.
  PostWebhooksWebhookIdEnable(
    req: operations.PostWebhooksWebhookIdEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksWebhookIdEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksWebhookIdEnableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}/enable", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostWebhooksWebhookIdEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.webhookInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutCategoriesTeamIdCategoryId - Update an existing category
  /** 
   * Sample Request:
   *             
   *     PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
   *     {
   *         "name": "Water-Updated",
   *         "imageName": "water.svg",
   *         "color": "#0000cc",
   *         "keywordMatching": "All",
   *         "keywords": [
   *             {
   *                 "value": "H2O"
   *             },
   *             {
   *                 "value": "Water"
   *             },
   *             {
   *                 "value": "Wet"
   *             }
   *         ]
   *     }
  **/
  PutCategoriesTeamIdCategoryId(
    req: operations.PutCategoriesTeamIdCategoryIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCategoriesTeamIdCategoryIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCategoriesTeamIdCategoryIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/categories/{teamId}/{categoryId}", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutCategoriesTeamIdCategoryIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.categoryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.categoryInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutPrepaidSettings - Update your subscription's current prepaid settings.
  PutPrepaidSettings(
    req: operations.PutPrepaidSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPrepaidSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPrepaidSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/prepaid/settings";
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutPrepaidSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutScriptsInstancesInstanceId - Updates a given script instance, typically used for updating the configuration of a script.
  /** 
   * Updates the specified script instance.
  **/
  PutScriptsInstancesInstanceId(
    req: operations.PutScriptsInstancesInstanceIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutScriptsInstancesInstanceIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutScriptsInstancesInstanceIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/instances/{instanceId}", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutScriptsInstancesInstanceIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutScriptsInstancesInstanceIdData - Updates custom data of a given script instance which includes its display name.
  /** 
   * Updates the specified script instance.
  **/
  PutScriptsInstancesInstanceIdData(
    req: operations.PutScriptsInstancesInstanceIdDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutScriptsInstancesInstanceIdDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutScriptsInstancesInstanceIdDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scripts/instances/{instanceId}/data", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutScriptsInstancesInstanceIdDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.scriptInstanceDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSubscriptionsSubscriptionIdPrepaidSettings - Update a subscription's current prepaid settings.
  PutSubscriptionsSubscriptionIdPrepaidSettings(
    req: operations.PutSubscriptionsSubscriptionIdPrepaidSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSubscriptionsSubscriptionIdPrepaidSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSubscriptionsSubscriptionIdPrepaidSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/prepaidSettings", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSubscriptionsSubscriptionIdPrepaidSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.prepaidSettingsInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSubscriptionsSubscriptionIdProfile - Updates a subscriptions profile.
  PutSubscriptionsSubscriptionIdProfile(
    req: operations.PutSubscriptionsSubscriptionIdProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSubscriptionsSubscriptionIdProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSubscriptionsSubscriptionIdProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/subscriptions/{subscriptionId}/profile", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSubscriptionsSubscriptionIdProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.subscriptionInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.subscriptionInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutTeamsTeamIdMembershipsUserId - Update user's team membership.
  /** 
   * Updates the user's team membership. You can move the user to another team within the subscription
   * and/or change the user's role.
  **/
  PutTeamsTeamIdMembershipsUserId(
    req: operations.PutTeamsTeamIdMembershipsUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTeamsTeamIdMembershipsUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTeamsTeamIdMembershipsUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/memberships/{userId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutTeamsTeamIdMembershipsUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 204:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutTeamsTeamIdProfile - Updates team profile of a team
  PutTeamsTeamIdProfile(
    req: operations.PutTeamsTeamIdProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTeamsTeamIdProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTeamsTeamIdProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{teamId}/profile", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutTeamsTeamIdProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.teamInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.teamInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutUsersUserIdChangePassword - Updates the password of a user
  PutUsersUserIdChangePassword(
    req: operations.PutUsersUserIdChangePasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUsersUserIdChangePasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUsersUserIdChangePasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/changePassword", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutUsersUserIdChangePasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PutUsersUserIdProfile - Updates user profile of an user
  PutUsersUserIdProfile(
    req: operations.PutUsersUserIdProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUsersUserIdProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUsersUserIdProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{userId}/profile", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutUsersUserIdProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutWebhooksWebhookId - Update Webhook by Id
  /** 
   * Updates the specified webhook.
  **/
  PutWebhooksWebhookId(
    req: operations.PutWebhooksWebhookIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWebhooksWebhookIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWebhooksWebhookIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}", req.pathParams);
    
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
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutWebhooksWebhookIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.webhookInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.errorResponseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
