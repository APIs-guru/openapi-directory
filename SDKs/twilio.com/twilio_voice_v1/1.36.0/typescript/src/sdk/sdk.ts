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
  "https://voice.twilio.com",
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
  
  CreateByocTrunk(
    req: operations.CreateByocTrunkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateByocTrunkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateByocTrunkRequest(req);
    }
    
    let baseURL: string = operations.CREATEBYOCTRUNK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ByocTrunks";
    
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
        let res: operations.CreateByocTrunkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ByocTrunk = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateConnectionPolicy(
    req: operations.CreateConnectionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConnectionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConnectionPolicyRequest(req);
    }
    
    let baseURL: string = operations.CREATECONNECTIONPOLICY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ConnectionPolicies";
    
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
        let res: operations.CreateConnectionPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ConnectionPolicy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateConnectionPolicyTarget(
    req: operations.CreateConnectionPolicyTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConnectionPolicyTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConnectionPolicyTargetRequest(req);
    }
    
    let baseURL: string = operations.CREATECONNECTIONPOLICYTARGET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", req.pathParams);
    
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
        let res: operations.CreateConnectionPolicyTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ConnectionPolicyConnectionPolicyTarget = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDialingPermissionsCountryBulkUpdate - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
  CreateDialingPermissionsCountryBulkUpdate(
    req: operations.CreateDialingPermissionsCountryBulkUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDialingPermissionsCountryBulkUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDialingPermissionsCountryBulkUpdateRequest(req);
    }
    
    let baseURL: string = operations.CREATEDIALINGPERMISSIONSCOUNTRYBULKUPDATE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/DialingPermissions/BulkCountryUpdates";
    
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
        let res: operations.CreateDialingPermissionsCountryBulkUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateIpRecord(
    req: operations.CreateIpRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIpRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIpRecordRequest(req);
    }
    
    let baseURL: string = operations.CREATEIPRECORD_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/IpRecords";
    
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
        let res: operations.CreateIpRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1IpRecord = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSourceIpMapping(
    req: operations.CreateSourceIpMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSourceIpMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSourceIpMappingRequest(req);
    }
    
    let baseURL: string = operations.CREATESOURCEIPMAPPING_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SourceIpMappings";
    
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
        let res: operations.CreateSourceIpMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1SourceIpMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteArchivedCall - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
  DeleteArchivedCall(
    req: operations.DeleteArchivedCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArchivedCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArchivedCallRequest(req);
    }
    
    let baseURL: string = operations.DELETEARCHIVEDCALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Archives/{Date}/Calls/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteArchivedCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteByocTrunk(
    req: operations.DeleteByocTrunkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteByocTrunkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteByocTrunkRequest(req);
    }
    
    let baseURL: string = operations.DELETEBYOCTRUNK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ByocTrunks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteByocTrunkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteConnectionPolicy(
    req: operations.DeleteConnectionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConnectionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConnectionPolicyRequest(req);
    }
    
    let baseURL: string = operations.DELETECONNECTIONPOLICY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConnectionPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteConnectionPolicyTarget(
    req: operations.DeleteConnectionPolicyTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConnectionPolicyTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConnectionPolicyTargetRequest(req);
    }
    
    let baseURL: string = operations.DELETECONNECTIONPOLICYTARGET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConnectionPolicyTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteIpRecord(
    req: operations.DeleteIpRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIpRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIpRecordRequest(req);
    }
    
    let baseURL: string = operations.DELETEIPRECORD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/IpRecords/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteIpRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSourceIpMapping(
    req: operations.DeleteSourceIpMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSourceIpMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSourceIpMappingRequest(req);
    }
    
    let baseURL: string = operations.DELETESOURCEIPMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SourceIpMappings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSourceIpMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchByocTrunk(
    req: operations.FetchByocTrunkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchByocTrunkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchByocTrunkRequest(req);
    }
    
    let baseURL: string = operations.FETCHBYOCTRUNK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ByocTrunks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchByocTrunkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ByocTrunk = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchConnectionPolicy(
    req: operations.FetchConnectionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConnectionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConnectionPolicyRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONNECTIONPOLICY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConnectionPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ConnectionPolicy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchConnectionPolicyTarget(
    req: operations.FetchConnectionPolicyTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConnectionPolicyTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConnectionPolicyTargetRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONNECTIONPOLICYTARGET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConnectionPolicyTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ConnectionPolicyConnectionPolicyTarget = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDialingPermissionsCountry - Retrieve voice dialing country permissions identified by the given ISO country code
  FetchDialingPermissionsCountry(
    req: operations.FetchDialingPermissionsCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDialingPermissionsCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDialingPermissionsCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHDIALINGPERMISSIONSCOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/DialingPermissions/Countries/{IsoCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDialingPermissionsCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1DialingPermissionsDialingPermissionsCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDialingPermissionsSettings - Retrieve voice dialing permissions inheritance for the sub-account
  FetchDialingPermissionsSettings(
    req: operations.FetchDialingPermissionsSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDialingPermissionsSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDialingPermissionsSettingsRequest(req);
    }
    
    let baseURL: string = operations.FETCHDIALINGPERMISSIONSSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Settings";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDialingPermissionsSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1DialingPermissionsDialingPermissionsSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchIpRecord(
    req: operations.FetchIpRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIpRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIpRecordRequest(req);
    }
    
    let baseURL: string = operations.FETCHIPRECORD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/IpRecords/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchIpRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1IpRecord = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSourceIpMapping(
    req: operations.FetchSourceIpMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSourceIpMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSourceIpMappingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSOURCEIPMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SourceIpMappings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSourceIpMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1SourceIpMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListByocTrunk(
    req: operations.ListByocTrunkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListByocTrunkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListByocTrunkRequest(req);
    }
    
    let baseURL: string = operations.LISTBYOCTRUNK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ByocTrunks";
    
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
        let res: operations.ListByocTrunkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listByocTrunkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListConnectionPolicy(
    req: operations.ListConnectionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConnectionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConnectionPolicyRequest(req);
    }
    
    let baseURL: string = operations.LISTCONNECTIONPOLICY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ConnectionPolicies";
    
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
        let res: operations.ListConnectionPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConnectionPolicyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListConnectionPolicyTarget(
    req: operations.ListConnectionPolicyTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConnectionPolicyTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConnectionPolicyTargetRequest(req);
    }
    
    let baseURL: string = operations.LISTCONNECTIONPOLICYTARGET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", req.pathParams);
    
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
        let res: operations.ListConnectionPolicyTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConnectionPolicyTargetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDialingPermissionsCountry - Retrieve all voice dialing country permissions for this account
  ListDialingPermissionsCountry(
    req: operations.ListDialingPermissionsCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDialingPermissionsCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDialingPermissionsCountryRequest(req);
    }
    
    let baseURL: string = operations.LISTDIALINGPERMISSIONSCOUNTRY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/DialingPermissions/Countries";
    
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
        let res: operations.ListDialingPermissionsCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDialingPermissionsCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDialingPermissionsHrsPrefixes - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
  ListDialingPermissionsHrsPrefixes(
    req: operations.ListDialingPermissionsHrsPrefixesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDialingPermissionsHrsPrefixesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDialingPermissionsHrsPrefixesRequest(req);
    }
    
    let baseURL: string = operations.LISTDIALINGPERMISSIONSHRSPREFIXES_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes", req.pathParams);
    
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
        let res: operations.ListDialingPermissionsHrsPrefixesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDialingPermissionsHrsPrefixesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListIpRecord(
    req: operations.ListIpRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIpRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIpRecordRequest(req);
    }
    
    let baseURL: string = operations.LISTIPRECORD_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/IpRecords";
    
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
        let res: operations.ListIpRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIpRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSourceIpMapping(
    req: operations.ListSourceIpMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSourceIpMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSourceIpMappingRequest(req);
    }
    
    let baseURL: string = operations.LISTSOURCEIPMAPPING_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SourceIpMappings";
    
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
        let res: operations.ListSourceIpMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSourceIpMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateByocTrunk(
    req: operations.UpdateByocTrunkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateByocTrunkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateByocTrunkRequest(req);
    }
    
    let baseURL: string = operations.UPDATEBYOCTRUNK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ByocTrunks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateByocTrunkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ByocTrunk = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateConnectionPolicy(
    req: operations.UpdateConnectionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConnectionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConnectionPolicyRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONNECTIONPOLICY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateConnectionPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ConnectionPolicy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateConnectionPolicyTarget(
    req: operations.UpdateConnectionPolicyTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConnectionPolicyTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConnectionPolicyTargetRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONNECTIONPOLICYTARGET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateConnectionPolicyTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1ConnectionPolicyConnectionPolicyTarget = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDialingPermissionsSettings - Update voice dialing permissions inheritance for the sub-account
  UpdateDialingPermissionsSettings(
    req: operations.UpdateDialingPermissionsSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDialingPermissionsSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDialingPermissionsSettingsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDIALINGPERMISSIONSSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Settings";
    
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
        let res: operations.UpdateDialingPermissionsSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1DialingPermissionsDialingPermissionsSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateIpRecord(
    req: operations.UpdateIpRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateIpRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateIpRecordRequest(req);
    }
    
    let baseURL: string = operations.UPDATEIPRECORD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/IpRecords/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateIpRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1IpRecord = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSourceIpMapping(
    req: operations.UpdateSourceIpMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSourceIpMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSourceIpMappingRequest(req);
    }
    
    let baseURL: string = operations.UPDATESOURCEIPMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/SourceIpMappings/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateSourceIpMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voiceV1SourceIpMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
