import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://preview.twilio.com",
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
  
  // CreateDeployedDevicesCertificate - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
  CreateDeployedDevicesCertificate(
    req: operations.CreateDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.CREATEDEPLOYEDDEVICESCERTIFICATE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates", req.pathParams);
    
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
        let res: operations.CreateDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDeployedDevicesDeployment - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
  CreateDeployedDevicesDeployment(
    req: operations.CreateDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.CREATEDEPLOYEDDEVICESDEPLOYMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments", req.pathParams);
    
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
        let res: operations.CreateDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDeployedDevicesDevice - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
  CreateDeployedDevicesDevice(
    req: operations.CreateDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.CREATEDEPLOYEDDEVICESDEVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices", req.pathParams);
    
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
        let res: operations.CreateDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDeployedDevicesFleet - Create a new Fleet for scoping of deployed devices within your account.
  CreateDeployedDevicesFleet(
    req: operations.CreateDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.CREATEDEPLOYEDDEVICESFLEET_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/DeployedDevices/Fleets";
    
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
        let res: operations.CreateDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDeployedDevicesKey - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
  CreateDeployedDevicesKey(
    req: operations.CreateDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.CREATEDEPLOYEDDEVICESKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys", req.pathParams);
    
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
        let res: operations.CreateDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateHostedNumbersAuthorizationDocument - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
  CreateHostedNumbersAuthorizationDocument(
    req: operations.CreateHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.CREATEHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/AuthorizationDocuments";
    
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
        let res: operations.CreateHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersAuthorizationDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateHostedNumbersHostedNumberOrder - Host a phone number's capability on Twilio's platform.
  CreateHostedNumbersHostedNumberOrder(
    req: operations.CreateHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.CREATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/HostedNumberOrders";
    
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
        let res: operations.CreateHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersHostedNumberOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateMarketplaceInstalledAddOn - Install an Add-on for the Account specified.
  CreateMarketplaceInstalledAddOn(
    req: operations.CreateMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.CREATEMARKETPLACEINSTALLEDADDON_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/marketplace/InstalledAddOns";
    
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
        let res: operations.CreateMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSyncDocument(
    req: operations.CreateSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.CREATESYNCDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents", req.pathParams);
    
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
        let res: operations.CreateSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSyncService(
    req: operations.CreateSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.CREATESYNCSERVICE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/Sync/Services";
    
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
        let res: operations.CreateSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSyncSyncList(
    req: operations.CreateSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.CREATESYNCSYNCLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists", req.pathParams);
    
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
        let res: operations.CreateSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSyncSyncListItem(
    req: operations.CreateSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.CREATESYNCSYNCLISTITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", req.pathParams);
    
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
        let res: operations.CreateSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSyncSyncMap(
    req: operations.CreateSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.CREATESYNCSYNCMAP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps", req.pathParams);
    
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
        let res: operations.CreateSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateSyncSyncMapItem(
    req: operations.CreateSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.CREATESYNCSYNCMAPITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", req.pathParams);
    
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
        let res: operations.CreateSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTrustedCommsChannel - Associate a channel to a branded channel
  CreateTrustedCommsChannel(
    req: operations.CreateTrustedCommsChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustedCommsChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustedCommsChannelRequest(req);
    }
    
    let baseURL: string = operations.CREATETRUSTEDCOMMSCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/TrustedComms/BrandedChannels/{BrandedChannelSid}/Channels", req.pathParams);
    
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
        let res: operations.CreateTrustedCommsChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsBrandedChannelChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandAssistant(
    req: operations.CreateUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDASSISTANT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/understand/Assistants";
    
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
        let res: operations.CreateUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandField(
    req: operations.CreateUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", req.pathParams);
    
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
        let res: operations.CreateUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskField = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandFieldType(
    req: operations.CreateUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes", req.pathParams);
    
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
        let res: operations.CreateUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandFieldValue(
    req: operations.CreateUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", req.pathParams);
    
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
        let res: operations.CreateUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldTypeFieldValue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandModelBuild(
    req: operations.CreateUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds", req.pathParams);
    
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
        let res: operations.CreateUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandQuery(
    req: operations.CreateUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries", req.pathParams);
    
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
        let res: operations.CreateUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandSample(
    req: operations.CreateUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", req.pathParams);
    
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
        let res: operations.CreateUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateUnderstandTask(
    req: operations.CreateUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.CREATEUNDERSTANDTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks", req.pathParams);
    
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
        let res: operations.CreateUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWirelessCommand(
    req: operations.CreateWirelessCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWirelessCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWirelessCommandRequest(req);
    }
    
    let baseURL: string = operations.CREATEWIRELESSCOMMAND_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/Commands";
    
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
        let res: operations.CreateWirelessCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWirelessRatePlan(
    req: operations.CreateWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.CREATEWIRELESSRATEPLAN_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/RatePlans";
    
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
        let res: operations.CreateWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessRatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDeployedDevicesCertificate - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
  DeleteDeployedDevicesCertificate(
    req: operations.DeleteDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.DELETEDEPLOYEDDEVICESCERTIFICATE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDeployedDevicesDeployment - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
  DeleteDeployedDevicesDeployment(
    req: operations.DeleteDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.DELETEDEPLOYEDDEVICESDEPLOYMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDeployedDevicesDevice - Delete a specific Device from the Fleet, also removing it from associated Deployments.
  DeleteDeployedDevicesDevice(
    req: operations.DeleteDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.DELETEDEPLOYEDDEVICESDEVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDeployedDevicesFleet - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
  DeleteDeployedDevicesFleet(
    req: operations.DeleteDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.DELETEDEPLOYEDDEVICESFLEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDeployedDevicesKey - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
  DeleteDeployedDevicesKey(
    req: operations.DeleteDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.DELETEDEPLOYEDDEVICESKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteHostedNumbersHostedNumberOrder - Cancel the HostedNumberOrder (only available when the status is in `received`).
  DeleteHostedNumbersHostedNumberOrder(
    req: operations.DeleteHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.DELETEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/HostedNumberOrders/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMarketplaceInstalledAddOn - Remove an Add-on installation from your account
  DeleteMarketplaceInstalledAddOn(
    req: operations.DeleteMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.DELETEMARKETPLACEINSTALLEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSyncDocument(
    req: operations.DeleteSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSyncDocumentPermission - Delete a specific Sync Document Permission.
  DeleteSyncDocumentPermission(
    req: operations.DeleteSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCDOCUMENTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSyncService(
    req: operations.DeleteSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSyncSyncList(
    req: operations.DeleteSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSYNCLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSyncSyncListItem(
    req: operations.DeleteSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSYNCLISTITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSyncSyncListPermission - Delete a specific Sync List Permission.
  DeleteSyncSyncListPermission(
    req: operations.DeleteSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSYNCLISTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSyncSyncMap(
    req: operations.DeleteSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSYNCMAP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSyncSyncMapItem(
    req: operations.DeleteSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSYNCMAPITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSyncSyncMapPermission - Delete a specific Sync Map Permission.
  DeleteSyncSyncMapPermission(
    req: operations.DeleteSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.DELETESYNCSYNCMAPPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandAssistant(
    req: operations.DeleteUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDASSISTANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandField(
    req: operations.DeleteUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandFieldType(
    req: operations.DeleteUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandFieldValue(
    req: operations.DeleteUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandModelBuild(
    req: operations.DeleteUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandQuery(
    req: operations.DeleteUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandSample(
    req: operations.DeleteUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUnderstandTask(
    req: operations.DeleteUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.DELETEUNDERSTANDTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteWirelessRatePlan(
    req: operations.DeleteWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.DELETEWIRELESSRATEPLAN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDeployedDevicesCertificate - Fetch information about a specific Certificate credential in the Fleet.
  FetchDeployedDevicesCertificate(
    req: operations.FetchDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.FETCHDEPLOYEDDEVICESCERTIFICATE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDeployedDevicesDeployment - Fetch information about a specific Deployment in the Fleet.
  FetchDeployedDevicesDeployment(
    req: operations.FetchDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.FETCHDEPLOYEDDEVICESDEPLOYMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDeployedDevicesDevice - Fetch information about a specific Device in the Fleet.
  FetchDeployedDevicesDevice(
    req: operations.FetchDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.FETCHDEPLOYEDDEVICESDEVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDeployedDevicesFleet - Fetch information about a specific Fleet in your account.
  FetchDeployedDevicesFleet(
    req: operations.FetchDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.FETCHDEPLOYEDDEVICESFLEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchDeployedDevicesKey - Fetch information about a specific Key credential in the Fleet.
  FetchDeployedDevicesKey(
    req: operations.FetchDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.FETCHDEPLOYEDDEVICESKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchHostedNumbersAuthorizationDocument - Fetch a specific AuthorizationDocument.
  FetchHostedNumbersAuthorizationDocument(
    req: operations.FetchHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.FETCHHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/AuthorizationDocuments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersAuthorizationDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchHostedNumbersHostedNumberOrder - Fetch a specific HostedNumberOrder.
  FetchHostedNumbersHostedNumberOrder(
    req: operations.FetchHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.FETCHHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/HostedNumberOrders/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersHostedNumberOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMarketplaceAvailableAddOn - Fetch an instance of an Add-on currently available to be installed.
  FetchMarketplaceAvailableAddOn(
    req: operations.FetchMarketplaceAvailableAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceAvailableAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceAvailableAddOnRequest(req);
    }
    
    let baseURL: string = operations.FETCHMARKETPLACEAVAILABLEADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/AvailableAddOns/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMarketplaceAvailableAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceAvailableAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMarketplaceAvailableAddOnExtension - Fetch an instance of an Extension for the Available Add-on.
  FetchMarketplaceAvailableAddOnExtension(
    req: operations.FetchMarketplaceAvailableAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceAvailableAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceAvailableAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.FETCHMARKETPLACEAVAILABLEADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMarketplaceAvailableAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceAvailableAddOnAvailableAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMarketplaceInstalledAddOn - Fetch an instance of an Add-on currently installed on this Account.
  FetchMarketplaceInstalledAddOn(
    req: operations.FetchMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.FETCHMARKETPLACEINSTALLEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMarketplaceInstalledAddOnExtension - Fetch an instance of an Extension for the Installed Add-on.
  FetchMarketplaceInstalledAddOnExtension(
    req: operations.FetchMarketplaceInstalledAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceInstalledAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceInstalledAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.FETCHMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMarketplaceInstalledAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOnInstalledAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSyncDocument(
    req: operations.FetchSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSyncDocumentPermission - Fetch a specific Sync Document Permission.
  FetchSyncDocumentPermission(
    req: operations.FetchSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCDOCUMENTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocumentDocumentPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSyncService(
    req: operations.FetchSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSyncSyncList(
    req: operations.FetchSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSYNCLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSyncSyncListItem(
    req: operations.FetchSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSYNCLISTITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSyncSyncListPermission - Fetch a specific Sync List Permission.
  FetchSyncSyncListPermission(
    req: operations.FetchSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSYNCLISTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSyncSyncMap(
    req: operations.FetchSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSYNCMAP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSyncSyncMapItem(
    req: operations.FetchSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSYNCMAPITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSyncSyncMapPermission - Fetch a specific Sync Map Permission.
  FetchSyncSyncMapPermission(
    req: operations.FetchSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.FETCHSYNCSYNCMAPPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustedCommsBrandedChannel - Fetch a specific Branded Channel.
  FetchTrustedCommsBrandedChannel(
    req: operations.FetchTrustedCommsBrandedChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsBrandedChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsBrandedChannelRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTEDCOMMSBRANDEDCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/TrustedComms/BrandedChannels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustedCommsBrandedChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsBrandedChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustedCommsBrandsInformation - Retrieve the newest available BrandInformation
  FetchTrustedCommsBrandsInformation(
    req: operations.FetchTrustedCommsBrandsInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsBrandsInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsBrandsInformationRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTEDCOMMSBRANDSINFORMATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/TrustedComms/BrandsInformation";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustedCommsBrandsInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsBrandsInformation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustedCommsCps - Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
  FetchTrustedCommsCps(
    req: operations.FetchTrustedCommsCpsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsCpsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsCpsRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTEDCOMMSCPS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/TrustedComms/CPS";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustedCommsCpsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsCps = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrustedCommsCurrentCall - Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
  FetchTrustedCommsCurrentCall(
    req: operations.FetchTrustedCommsCurrentCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsCurrentCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsCurrentCallRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUSTEDCOMMSCURRENTCALL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/TrustedComms/CurrentCall";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrustedCommsCurrentCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsCurrentCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandAssistant(
    req: operations.FetchUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDASSISTANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandAssistantFallbackActions(
    req: operations.FetchUnderstandAssistantFallbackActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandAssistantFallbackActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandAssistantFallbackActionsRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDASSISTANTFALLBACKACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FallbackActions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandAssistantFallbackActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantFallbackActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandAssistantInitiationActions(
    req: operations.FetchUnderstandAssistantInitiationActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandAssistantInitiationActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandAssistantInitiationActionsRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDASSISTANTINITIATIONACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/InitiationActions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandAssistantInitiationActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantInitiationActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandDialogue(
    req: operations.FetchUnderstandDialogueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandDialogueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandDialogueRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDDIALOGUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Dialogues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandDialogueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantDialogue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandField(
    req: operations.FetchUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskField = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandFieldType(
    req: operations.FetchUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandFieldValue(
    req: operations.FetchUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldTypeFieldValue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandModelBuild(
    req: operations.FetchUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandQuery(
    req: operations.FetchUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandSample(
    req: operations.FetchUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchUnderstandStyleSheet - Returns Style sheet JSON object for this Assistant
  FetchUnderstandStyleSheet(
    req: operations.FetchUnderstandStyleSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandStyleSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandStyleSheetRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDSTYLESHEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/StyleSheet", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandStyleSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantStyleSheet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandTask(
    req: operations.FetchUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchUnderstandTaskActions - Returns JSON actions for this Task.
  FetchUnderstandTaskActions(
    req: operations.FetchUnderstandTaskActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandTaskActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandTaskActionsRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDTASKACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandTaskActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskTaskActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchUnderstandTaskStatistics(
    req: operations.FetchUnderstandTaskStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandTaskStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandTaskStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FETCHUNDERSTANDTASKSTATISTICS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUnderstandTaskStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskTaskStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWirelessCommand(
    req: operations.FetchWirelessCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessCommandRequest(req);
    }
    
    let baseURL: string = operations.FETCHWIRELESSCOMMAND_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/Commands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWirelessCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWirelessRatePlan(
    req: operations.FetchWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.FETCHWIRELESSRATEPLAN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessRatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWirelessSim(
    req: operations.FetchWirelessSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessSimRequest(req);
    }
    
    let baseURL: string = operations.FETCHWIRELESSSIM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWirelessSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessSim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWirelessUsage(
    req: operations.FetchWirelessUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessUsageRequest(req);
    }
    
    let baseURL: string = operations.FETCHWIRELESSUSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/Sims/{SimSid}/Usage", req.pathParams);
    
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
        let res: operations.FetchWirelessUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessSimUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDeployedDevicesCertificate - Retrieve a list of all Certificate credentials belonging to the Fleet.
  ListDeployedDevicesCertificate(
    req: operations.ListDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.LISTDEPLOYEDDEVICESCERTIFICATE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates", req.pathParams);
    
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
        let res: operations.ListDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesCertificateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDeployedDevicesDeployment - Retrieve a list of all Deployments belonging to the Fleet.
  ListDeployedDevicesDeployment(
    req: operations.ListDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.LISTDEPLOYEDDEVICESDEPLOYMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments", req.pathParams);
    
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
        let res: operations.ListDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesDeploymentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDeployedDevicesDevice - Retrieve a list of all Devices belonging to the Fleet.
  ListDeployedDevicesDevice(
    req: operations.ListDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.LISTDEPLOYEDDEVICESDEVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices", req.pathParams);
    
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
        let res: operations.ListDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesDeviceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDeployedDevicesFleet - Retrieve a list of all Fleets belonging to your account.
  ListDeployedDevicesFleet(
    req: operations.ListDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.LISTDEPLOYEDDEVICESFLEET_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/DeployedDevices/Fleets";
    
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
        let res: operations.ListDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesFleetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDeployedDevicesKey - Retrieve a list of all Keys credentials belonging to the Fleet.
  ListDeployedDevicesKey(
    req: operations.ListDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.LISTDEPLOYEDDEVICESKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys", req.pathParams);
    
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
        let res: operations.ListDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListHostedNumbersAuthorizationDocument - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
  ListHostedNumbersAuthorizationDocument(
    req: operations.ListHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.LISTHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/AuthorizationDocuments";
    
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
        let res: operations.ListHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listHostedNumbersAuthorizationDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListHostedNumbersDependentHostedNumberOrder - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
  ListHostedNumbersDependentHostedNumberOrder(
    req: operations.ListHostedNumbersDependentHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHostedNumbersDependentHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHostedNumbersDependentHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.LISTHOSTEDNUMBERSDEPENDENTHOSTEDNUMBERORDER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders", req.pathParams);
    
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
        let res: operations.ListHostedNumbersDependentHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listHostedNumbersDependentHostedNumberOrderResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListHostedNumbersHostedNumberOrder - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
  ListHostedNumbersHostedNumberOrder(
    req: operations.ListHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.LISTHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/HostedNumberOrders";
    
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
        let res: operations.ListHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listHostedNumbersHostedNumberOrderResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMarketplaceAvailableAddOn - Retrieve a list of Add-ons currently available to be installed.
  ListMarketplaceAvailableAddOn(
    req: operations.ListMarketplaceAvailableAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceAvailableAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceAvailableAddOnRequest(req);
    }
    
    let baseURL: string = operations.LISTMARKETPLACEAVAILABLEADDON_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/marketplace/AvailableAddOns";
    
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
        let res: operations.ListMarketplaceAvailableAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceAvailableAddOnResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMarketplaceAvailableAddOnExtension - Retrieve a list of Extensions for the Available Add-on.
  ListMarketplaceAvailableAddOnExtension(
    req: operations.ListMarketplaceAvailableAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceAvailableAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceAvailableAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.LISTMARKETPLACEAVAILABLEADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions", req.pathParams);
    
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
        let res: operations.ListMarketplaceAvailableAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceAvailableAddOnExtensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMarketplaceInstalledAddOn - Retrieve a list of Add-ons currently installed on this Account.
  ListMarketplaceInstalledAddOn(
    req: operations.ListMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.LISTMARKETPLACEINSTALLEDADDON_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/marketplace/InstalledAddOns";
    
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
        let res: operations.ListMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceInstalledAddOnResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMarketplaceInstalledAddOnExtension - Retrieve a list of Extensions for the Installed Add-on.
  ListMarketplaceInstalledAddOnExtension(
    req: operations.ListMarketplaceInstalledAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceInstalledAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceInstalledAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.LISTMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions", req.pathParams);
    
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
        let res: operations.ListMarketplaceInstalledAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceInstalledAddOnExtensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSyncDocument(
    req: operations.ListSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents", req.pathParams);
    
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
        let res: operations.ListSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSyncDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
  ListSyncDocumentPermission(
    req: operations.ListSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCDOCUMENTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", req.pathParams);
    
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
        let res: operations.ListSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncDocumentPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSyncService(
    req: operations.ListSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSERVICE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/Sync/Services";
    
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
        let res: operations.ListSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncServiceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSyncSyncList(
    req: operations.ListSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSYNCLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists", req.pathParams);
    
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
        let res: operations.ListSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSyncSyncListItem(
    req: operations.ListSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSYNCLISTITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", req.pathParams);
    
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
        let res: operations.ListSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncListItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSyncSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
  ListSyncSyncListPermission(
    req: operations.ListSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSYNCLISTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions", req.pathParams);
    
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
        let res: operations.ListSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncListPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSyncSyncMap(
    req: operations.ListSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSYNCMAP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps", req.pathParams);
    
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
        let res: operations.ListSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncMapResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSyncSyncMapItem(
    req: operations.ListSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSYNCMAPITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", req.pathParams);
    
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
        let res: operations.ListSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncMapItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSyncSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
  ListSyncSyncMapPermission(
    req: operations.ListSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.LISTSYNCSYNCMAPPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions", req.pathParams);
    
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
        let res: operations.ListSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncMapPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandAssistant(
    req: operations.ListUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDASSISTANT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/understand/Assistants";
    
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
        let res: operations.ListUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandAssistantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandField(
    req: operations.ListUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDFIELD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", req.pathParams);
    
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
        let res: operations.ListUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandFieldResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandFieldType(
    req: operations.ListUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes", req.pathParams);
    
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
        let res: operations.ListUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandFieldTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandFieldValue(
    req: operations.ListUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDFIELDVALUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", req.pathParams);
    
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
        let res: operations.ListUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandFieldValueResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandModelBuild(
    req: operations.ListUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds", req.pathParams);
    
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
        let res: operations.ListUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandModelBuildResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandQuery(
    req: operations.ListUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries", req.pathParams);
    
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
        let res: operations.ListUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandQueryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandSample(
    req: operations.ListUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", req.pathParams);
    
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
        let res: operations.ListUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandSampleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUnderstandTask(
    req: operations.ListUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.LISTUNDERSTANDTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks", req.pathParams);
    
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
        let res: operations.ListUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUnderstandTaskResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWirelessCommand(
    req: operations.ListWirelessCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWirelessCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWirelessCommandRequest(req);
    }
    
    let baseURL: string = operations.LISTWIRELESSCOMMAND_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/Commands";
    
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
        let res: operations.ListWirelessCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWirelessCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWirelessRatePlan(
    req: operations.ListWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.LISTWIRELESSRATEPLAN_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/RatePlans";
    
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
        let res: operations.ListWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWirelessRatePlanResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWirelessSim(
    req: operations.ListWirelessSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWirelessSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWirelessSimRequest(req);
    }
    
    let baseURL: string = operations.LISTWIRELESSSIM_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/Sims";
    
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
        let res: operations.ListWirelessSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWirelessSimResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeployedDevicesCertificate - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
  UpdateDeployedDevicesCertificate(
    req: operations.UpdateDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDEPLOYEDDEVICESCERTIFICATE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeployedDevicesDeployment - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
  UpdateDeployedDevicesDeployment(
    req: operations.UpdateDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDEPLOYEDDEVICESDEPLOYMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeployedDevicesDevice - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
  UpdateDeployedDevicesDevice(
    req: operations.UpdateDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDEPLOYEDDEVICESDEVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeployedDevicesFleet - Update the friendly name property of a specific Fleet in your account.
  UpdateDeployedDevicesFleet(
    req: operations.UpdateDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDEPLOYEDDEVICESFLEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeployedDevicesKey - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
  UpdateDeployedDevicesKey(
    req: operations.UpdateDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.UPDATEDEPLOYEDDEVICESKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateHostedNumbersAuthorizationDocument - Updates a specific AuthorizationDocument.
  UpdateHostedNumbersAuthorizationDocument(
    req: operations.UpdateHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.UPDATEHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/AuthorizationDocuments/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersAuthorizationDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateHostedNumbersHostedNumberOrder - Updates a specific HostedNumberOrder.
  UpdateHostedNumbersHostedNumberOrder(
    req: operations.UpdateHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.UPDATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/HostedNumberOrders/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersHostedNumberOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMarketplaceInstalledAddOn - Update an Add-on installation for the Account specified.
  UpdateMarketplaceInstalledAddOn(
    req: operations.UpdateMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMARKETPLACEINSTALLEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMarketplaceInstalledAddOnExtension - Update an Extension for an Add-on installation.
  UpdateMarketplaceInstalledAddOnExtension(
    req: operations.UpdateMarketplaceInstalledAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMarketplaceInstalledAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMarketplaceInstalledAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateMarketplaceInstalledAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOnInstalledAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSyncDocument(
    req: operations.UpdateSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCDOCUMENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSyncDocumentPermission - Update an identity's access to a specific Sync Document.
  UpdateSyncDocumentPermission(
    req: operations.UpdateSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCDOCUMENTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
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
        let res: operations.UpdateSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocumentDocumentPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSyncService(
    req: operations.UpdateSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCSERVICE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSyncSyncListItem(
    req: operations.UpdateSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCSYNCLISTITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSyncSyncListPermission - Update an identity's access to a specific Sync List.
  UpdateSyncSyncListPermission(
    req: operations.UpdateSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCSYNCLISTPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
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
        let res: operations.UpdateSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSyncSyncMapItem(
    req: operations.UpdateSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCSYNCMAPITEM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSyncSyncMapPermission - Update an identity's access to a specific Sync Map.
  UpdateSyncSyncMapPermission(
    req: operations.UpdateSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.UPDATESYNCSYNCMAPPERMISSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
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
        let res: operations.UpdateSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandAssistant(
    req: operations.UpdateUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDASSISTANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandAssistantFallbackActions(
    req: operations.UpdateUnderstandAssistantFallbackActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandAssistantFallbackActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandAssistantFallbackActionsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDASSISTANTFALLBACKACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FallbackActions", req.pathParams);
    
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
        let res: operations.UpdateUnderstandAssistantFallbackActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantFallbackActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandAssistantInitiationActions(
    req: operations.UpdateUnderstandAssistantInitiationActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandAssistantInitiationActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandAssistantInitiationActionsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDASSISTANTINITIATIONACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/InitiationActions", req.pathParams);
    
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
        let res: operations.UpdateUnderstandAssistantInitiationActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantInitiationActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandFieldType(
    req: operations.UpdateUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDFIELDTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandModelBuild(
    req: operations.UpdateUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDMODELBUILD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandQuery(
    req: operations.UpdateUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDQUERY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandSample(
    req: operations.UpdateUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDSAMPLE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUnderstandStyleSheet - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
  UpdateUnderstandStyleSheet(
    req: operations.UpdateUnderstandStyleSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandStyleSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandStyleSheetRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDSTYLESHEET_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/StyleSheet", req.pathParams);
    
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
        let res: operations.UpdateUnderstandStyleSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantStyleSheet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateUnderstandTask(
    req: operations.UpdateUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDTASK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUnderstandTaskActions - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
  UpdateUnderstandTaskActions(
    req: operations.UpdateUnderstandTaskActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandTaskActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandTaskActionsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUNDERSTANDTASKACTIONS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", req.pathParams);
    
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
        let res: operations.UpdateUnderstandTaskActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskTaskActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWirelessRatePlan(
    req: operations.UpdateWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWIRELESSRATEPLAN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/RatePlans/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessRatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWirelessSim(
    req: operations.UpdateWirelessSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWirelessSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWirelessSimRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWIRELESSSIM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/wireless/Sims/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWirelessSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewWirelessSim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
