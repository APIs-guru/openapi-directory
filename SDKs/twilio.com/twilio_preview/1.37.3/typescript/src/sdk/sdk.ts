import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
   * createDeployedDevicesCertificate - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
  **/
  createDeployedDevicesCertificate(
    req: operations.CreateDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.CreateDeployedDevicesCertificateServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates", req.pathParams);

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
        const res: operations.CreateDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createDeployedDevicesDeployment - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
  **/
  createDeployedDevicesDeployment(
    req: operations.CreateDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.CreateDeployedDevicesDeploymentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments", req.pathParams);

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
        const res: operations.CreateDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createDeployedDevicesDevice - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
  **/
  createDeployedDevicesDevice(
    req: operations.CreateDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.CreateDeployedDevicesDeviceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices", req.pathParams);

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
        const res: operations.CreateDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createDeployedDevicesFleet - Create a new Fleet for scoping of deployed devices within your account.
  **/
  createDeployedDevicesFleet(
    req: operations.CreateDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.CreateDeployedDevicesFleetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/DeployedDevices/Fleets";

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
        const res: operations.CreateDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createDeployedDevicesKey - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
  **/
  createDeployedDevicesKey(
    req: operations.CreateDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.CreateDeployedDevicesKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys", req.pathParams);

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
        const res: operations.CreateDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createHostedNumbersAuthorizationDocument - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
  **/
  createHostedNumbersAuthorizationDocument(
    req: operations.CreateHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.CreateHostedNumbersAuthorizationDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/AuthorizationDocuments";

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
        const res: operations.CreateHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersAuthorizationDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createHostedNumbersHostedNumberOrder - Host a phone number's capability on Twilio's platform.
  **/
  createHostedNumbersHostedNumberOrder(
    req: operations.CreateHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.CreateHostedNumbersHostedNumberOrderServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/HostedNumberOrders";

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
        const res: operations.CreateHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersHostedNumberOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createMarketplaceInstalledAddOn - Install an Add-on for the Account specified.
  **/
  createMarketplaceInstalledAddOn(
    req: operations.CreateMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.CreateMarketplaceInstalledAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/marketplace/InstalledAddOns";

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
        const res: operations.CreateMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncDocument(
    req: operations.CreateSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents", req.pathParams);

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
        const res: operations.CreateSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncService(
    req: operations.CreateSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/Sync/Services";

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
        const res: operations.CreateSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncSyncList(
    req: operations.CreateSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists", req.pathParams);

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
        const res: operations.CreateSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncSyncListItem(
    req: operations.CreateSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", req.pathParams);

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
        const res: operations.CreateSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncSyncMap(
    req: operations.CreateSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps", req.pathParams);

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
        const res: operations.CreateSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createSyncSyncMapItem(
    req: operations.CreateSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.CreateSyncSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", req.pathParams);

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
        const res: operations.CreateSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTrustedCommsChannel - Associate a channel to a branded channel
  **/
  createTrustedCommsChannel(
    req: operations.CreateTrustedCommsChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTrustedCommsChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTrustedCommsChannelRequest(req);
    }
    
    let baseURL: string = operations.CreateTrustedCommsChannelServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/TrustedComms/BrandedChannels/{BrandedChannelSid}/Channels", req.pathParams);

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
        const res: operations.CreateTrustedCommsChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsBrandedChannelChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandAssistant(
    req: operations.CreateUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandAssistantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/understand/Assistants";

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
        const res: operations.CreateUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandField(
    req: operations.CreateUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandFieldServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", req.pathParams);

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
        const res: operations.CreateUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskField = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandFieldType(
    req: operations.CreateUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandFieldTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes", req.pathParams);

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
        const res: operations.CreateUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandFieldValue(
    req: operations.CreateUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandFieldValueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", req.pathParams);

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
        const res: operations.CreateUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldTypeFieldValue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandModelBuild(
    req: operations.CreateUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandModelBuildServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds", req.pathParams);

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
        const res: operations.CreateUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandQuery(
    req: operations.CreateUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandQueryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries", req.pathParams);

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
        const res: operations.CreateUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandSample(
    req: operations.CreateUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandSampleServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", req.pathParams);

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
        const res: operations.CreateUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createUnderstandTask(
    req: operations.CreateUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.CreateUnderstandTaskServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks", req.pathParams);

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
        const res: operations.CreateUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createWirelessCommand(
    req: operations.CreateWirelessCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWirelessCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWirelessCommandRequest(req);
    }
    
    let baseURL: string = operations.CreateWirelessCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/Commands";

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
        const res: operations.CreateWirelessCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createWirelessRatePlan(
    req: operations.CreateWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.CreateWirelessRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/RatePlans";

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
        const res: operations.CreateWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessRatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDeployedDevicesCertificate - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
  **/
  deleteDeployedDevicesCertificate(
    req: operations.DeleteDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.DeleteDeployedDevicesCertificateServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDeployedDevicesDeployment - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
  **/
  deleteDeployedDevicesDeployment(
    req: operations.DeleteDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.DeleteDeployedDevicesDeploymentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDeployedDevicesDevice - Delete a specific Device from the Fleet, also removing it from associated Deployments.
  **/
  deleteDeployedDevicesDevice(
    req: operations.DeleteDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.DeleteDeployedDevicesDeviceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDeployedDevicesFleet - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
  **/
  deleteDeployedDevicesFleet(
    req: operations.DeleteDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.DeleteDeployedDevicesFleetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDeployedDevicesKey - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
  **/
  deleteDeployedDevicesKey(
    req: operations.DeleteDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.DeleteDeployedDevicesKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteHostedNumbersHostedNumberOrder - Cancel the HostedNumberOrder (only available when the status is in `received`).
  **/
  deleteHostedNumbersHostedNumberOrder(
    req: operations.DeleteHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.DeleteHostedNumbersHostedNumberOrderServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/HostedNumberOrders/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMarketplaceInstalledAddOn - Remove an Add-on installation from your account
  **/
  deleteMarketplaceInstalledAddOn(
    req: operations.DeleteMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.DeleteMarketplaceInstalledAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncDocument(
    req: operations.DeleteSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSyncDocumentPermission - Delete a specific Sync Document Permission.
  **/
  deleteSyncDocumentPermission(
    req: operations.DeleteSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncService(
    req: operations.DeleteSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncSyncList(
    req: operations.DeleteSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncSyncListItem(
    req: operations.DeleteSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSyncSyncListPermission - Delete a specific Sync List Permission.
  **/
  deleteSyncSyncListPermission(
    req: operations.DeleteSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncSyncMap(
    req: operations.DeleteSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSyncSyncMapItem(
    req: operations.DeleteSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSyncSyncMapPermission - Delete a specific Sync Map Permission.
  **/
  deleteSyncSyncMapPermission(
    req: operations.DeleteSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.DeleteSyncSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandAssistant(
    req: operations.DeleteUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandAssistantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandField(
    req: operations.DeleteUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandFieldServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandFieldType(
    req: operations.DeleteUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandFieldTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandFieldValue(
    req: operations.DeleteUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandFieldValueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandModelBuild(
    req: operations.DeleteUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandModelBuildServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandQuery(
    req: operations.DeleteUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandQueryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandSample(
    req: operations.DeleteUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandSampleServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUnderstandTask(
    req: operations.DeleteUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.DeleteUnderstandTaskServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteWirelessRatePlan(
    req: operations.DeleteWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.DeleteWirelessRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchDeployedDevicesCertificate - Fetch information about a specific Certificate credential in the Fleet.
  **/
  fetchDeployedDevicesCertificate(
    req: operations.FetchDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.FetchDeployedDevicesCertificateServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchDeployedDevicesDeployment - Fetch information about a specific Deployment in the Fleet.
  **/
  fetchDeployedDevicesDeployment(
    req: operations.FetchDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.FetchDeployedDevicesDeploymentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchDeployedDevicesDevice - Fetch information about a specific Device in the Fleet.
  **/
  fetchDeployedDevicesDevice(
    req: operations.FetchDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.FetchDeployedDevicesDeviceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchDeployedDevicesFleet - Fetch information about a specific Fleet in your account.
  **/
  fetchDeployedDevicesFleet(
    req: operations.FetchDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.FetchDeployedDevicesFleetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchDeployedDevicesKey - Fetch information about a specific Key credential in the Fleet.
  **/
  fetchDeployedDevicesKey(
    req: operations.FetchDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.FetchDeployedDevicesKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchHostedNumbersAuthorizationDocument - Fetch a specific AuthorizationDocument.
  **/
  fetchHostedNumbersAuthorizationDocument(
    req: operations.FetchHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.FetchHostedNumbersAuthorizationDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/AuthorizationDocuments/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersAuthorizationDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchHostedNumbersHostedNumberOrder - Fetch a specific HostedNumberOrder.
  **/
  fetchHostedNumbersHostedNumberOrder(
    req: operations.FetchHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.FetchHostedNumbersHostedNumberOrderServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/HostedNumberOrders/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersHostedNumberOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMarketplaceAvailableAddOn - Fetch an instance of an Add-on currently available to be installed.
  **/
  fetchMarketplaceAvailableAddOn(
    req: operations.FetchMarketplaceAvailableAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceAvailableAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceAvailableAddOnRequest(req);
    }
    
    let baseURL: string = operations.FetchMarketplaceAvailableAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/AvailableAddOns/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMarketplaceAvailableAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceAvailableAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMarketplaceAvailableAddOnExtension - Fetch an instance of an Extension for the Available Add-on.
  **/
  fetchMarketplaceAvailableAddOnExtension(
    req: operations.FetchMarketplaceAvailableAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceAvailableAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceAvailableAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.FetchMarketplaceAvailableAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMarketplaceAvailableAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceAvailableAddOnAvailableAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMarketplaceInstalledAddOn - Fetch an instance of an Add-on currently installed on this Account.
  **/
  fetchMarketplaceInstalledAddOn(
    req: operations.FetchMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.FetchMarketplaceInstalledAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMarketplaceInstalledAddOnExtension - Fetch an instance of an Extension for the Installed Add-on.
  **/
  fetchMarketplaceInstalledAddOnExtension(
    req: operations.FetchMarketplaceInstalledAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMarketplaceInstalledAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMarketplaceInstalledAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.FetchMarketplaceInstalledAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMarketplaceInstalledAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOnInstalledAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncDocument(
    req: operations.FetchSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSyncDocumentPermission - Fetch a specific Sync Document Permission.
  **/
  fetchSyncDocumentPermission(
    req: operations.FetchSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocumentDocumentPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncService(
    req: operations.FetchSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncSyncList(
    req: operations.FetchSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncSyncListItem(
    req: operations.FetchSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSyncSyncListPermission - Fetch a specific Sync List Permission.
  **/
  fetchSyncSyncListPermission(
    req: operations.FetchSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncSyncMap(
    req: operations.FetchSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMap = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSyncSyncMapItem(
    req: operations.FetchSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSyncSyncMapPermission - Fetch a specific Sync Map Permission.
  **/
  fetchSyncSyncMapPermission(
    req: operations.FetchSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.FetchSyncSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustedCommsBrandedChannel - Fetch a specific Branded Channel.
  **/
  fetchTrustedCommsBrandedChannel(
    req: operations.FetchTrustedCommsBrandedChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsBrandedChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsBrandedChannelRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustedCommsBrandedChannelServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/TrustedComms/BrandedChannels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustedCommsBrandedChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsBrandedChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustedCommsBrandsInformation - Retrieve the newest available BrandInformation
  **/
  fetchTrustedCommsBrandsInformation(
    req: operations.FetchTrustedCommsBrandsInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsBrandsInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsBrandsInformationRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustedCommsBrandsInformationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/TrustedComms/BrandsInformation";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustedCommsBrandsInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsBrandsInformation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustedCommsCps - Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
  **/
  fetchTrustedCommsCps(
    req: operations.FetchTrustedCommsCpsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsCpsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsCpsRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustedCommsCpsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/TrustedComms/CPS";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustedCommsCpsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsCps = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTrustedCommsCurrentCall - Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
  **/
  fetchTrustedCommsCurrentCall(
    req: operations.FetchTrustedCommsCurrentCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrustedCommsCurrentCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrustedCommsCurrentCallRequest(req);
    }
    
    let baseURL: string = operations.FetchTrustedCommsCurrentCallServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/TrustedComms/CurrentCall";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrustedCommsCurrentCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewTrustedCommsCurrentCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandAssistant(
    req: operations.FetchUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandAssistantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandAssistantFallbackActions(
    req: operations.FetchUnderstandAssistantFallbackActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandAssistantFallbackActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandAssistantFallbackActionsRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandAssistantFallbackActionsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FallbackActions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandAssistantFallbackActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantFallbackActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandAssistantInitiationActions(
    req: operations.FetchUnderstandAssistantInitiationActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandAssistantInitiationActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandAssistantInitiationActionsRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandAssistantInitiationActionsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/InitiationActions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandAssistantInitiationActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantInitiationActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandDialogue(
    req: operations.FetchUnderstandDialogueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandDialogueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandDialogueRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandDialogueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Dialogues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandDialogueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantDialogue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandField(
    req: operations.FetchUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandFieldServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskField = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandFieldType(
    req: operations.FetchUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandFieldTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandFieldValue(
    req: operations.FetchUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandFieldValueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldTypeFieldValue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandModelBuild(
    req: operations.FetchUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandModelBuildServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandQuery(
    req: operations.FetchUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandQueryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandSample(
    req: operations.FetchUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandSampleServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchUnderstandStyleSheet - Returns Style sheet JSON object for this Assistant
  **/
  fetchUnderstandStyleSheet(
    req: operations.FetchUnderstandStyleSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandStyleSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandStyleSheetRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandStyleSheetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/StyleSheet", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandStyleSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantStyleSheet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandTask(
    req: operations.FetchUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandTaskServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchUnderstandTaskActions - Returns JSON actions for this Task.
  **/
  fetchUnderstandTaskActions(
    req: operations.FetchUnderstandTaskActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandTaskActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandTaskActionsRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandTaskActionsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandTaskActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskTaskActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchUnderstandTaskStatistics(
    req: operations.FetchUnderstandTaskStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUnderstandTaskStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUnderstandTaskStatisticsRequest(req);
    }
    
    let baseURL: string = operations.FetchUnderstandTaskStatisticsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUnderstandTaskStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskTaskStatistics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchWirelessCommand(
    req: operations.FetchWirelessCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessCommandRequest(req);
    }
    
    let baseURL: string = operations.FetchWirelessCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/Commands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchWirelessCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchWirelessRatePlan(
    req: operations.FetchWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.FetchWirelessRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/RatePlans/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessRatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchWirelessSim(
    req: operations.FetchWirelessSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessSimRequest(req);
    }
    
    let baseURL: string = operations.FetchWirelessSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchWirelessSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessSim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchWirelessUsage(
    req: operations.FetchWirelessUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWirelessUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWirelessUsageRequest(req);
    }
    
    let baseURL: string = operations.FetchWirelessUsageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/Sims/{SimSid}/Usage", req.pathParams);
    
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
        const res: operations.FetchWirelessUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessSimUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDeployedDevicesCertificate - Retrieve a list of all Certificate credentials belonging to the Fleet.
  **/
  listDeployedDevicesCertificate(
    req: operations.ListDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.ListDeployedDevicesCertificateServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates", req.pathParams);
    
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
        const res: operations.ListDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesCertificateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDeployedDevicesDeployment - Retrieve a list of all Deployments belonging to the Fleet.
  **/
  listDeployedDevicesDeployment(
    req: operations.ListDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.ListDeployedDevicesDeploymentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments", req.pathParams);
    
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
        const res: operations.ListDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesDeploymentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDeployedDevicesDevice - Retrieve a list of all Devices belonging to the Fleet.
  **/
  listDeployedDevicesDevice(
    req: operations.ListDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.ListDeployedDevicesDeviceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices", req.pathParams);
    
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
        const res: operations.ListDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesDeviceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDeployedDevicesFleet - Retrieve a list of all Fleets belonging to your account.
  **/
  listDeployedDevicesFleet(
    req: operations.ListDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.ListDeployedDevicesFleetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/DeployedDevices/Fleets";
    
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
        const res: operations.ListDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesFleetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDeployedDevicesKey - Retrieve a list of all Keys credentials belonging to the Fleet.
  **/
  listDeployedDevicesKey(
    req: operations.ListDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.ListDeployedDevicesKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys", req.pathParams);
    
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
        const res: operations.ListDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDeployedDevicesKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listHostedNumbersAuthorizationDocument - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
  **/
  listHostedNumbersAuthorizationDocument(
    req: operations.ListHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.ListHostedNumbersAuthorizationDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/AuthorizationDocuments";
    
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
        const res: operations.ListHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listHostedNumbersAuthorizationDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listHostedNumbersDependentHostedNumberOrder - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
  **/
  listHostedNumbersDependentHostedNumberOrder(
    req: operations.ListHostedNumbersDependentHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHostedNumbersDependentHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHostedNumbersDependentHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.ListHostedNumbersDependentHostedNumberOrderServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders", req.pathParams);
    
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
        const res: operations.ListHostedNumbersDependentHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listHostedNumbersDependentHostedNumberOrderResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listHostedNumbersHostedNumberOrder - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
  **/
  listHostedNumbersHostedNumberOrder(
    req: operations.ListHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.ListHostedNumbersHostedNumberOrderServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/HostedNumbers/HostedNumberOrders";
    
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
        const res: operations.ListHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listHostedNumbersHostedNumberOrderResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMarketplaceAvailableAddOn - Retrieve a list of Add-ons currently available to be installed.
  **/
  listMarketplaceAvailableAddOn(
    req: operations.ListMarketplaceAvailableAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceAvailableAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceAvailableAddOnRequest(req);
    }
    
    let baseURL: string = operations.ListMarketplaceAvailableAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/marketplace/AvailableAddOns";
    
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
        const res: operations.ListMarketplaceAvailableAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceAvailableAddOnResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMarketplaceAvailableAddOnExtension - Retrieve a list of Extensions for the Available Add-on.
  **/
  listMarketplaceAvailableAddOnExtension(
    req: operations.ListMarketplaceAvailableAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceAvailableAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceAvailableAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.ListMarketplaceAvailableAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions", req.pathParams);
    
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
        const res: operations.ListMarketplaceAvailableAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceAvailableAddOnExtensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMarketplaceInstalledAddOn - Retrieve a list of Add-ons currently installed on this Account.
  **/
  listMarketplaceInstalledAddOn(
    req: operations.ListMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.ListMarketplaceInstalledAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/marketplace/InstalledAddOns";
    
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
        const res: operations.ListMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceInstalledAddOnResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMarketplaceInstalledAddOnExtension - Retrieve a list of Extensions for the Installed Add-on.
  **/
  listMarketplaceInstalledAddOnExtension(
    req: operations.ListMarketplaceInstalledAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMarketplaceInstalledAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMarketplaceInstalledAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.ListMarketplaceInstalledAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions", req.pathParams);
    
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
        const res: operations.ListMarketplaceInstalledAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMarketplaceInstalledAddOnExtensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncDocument(
    req: operations.ListSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.ListSyncDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents", req.pathParams);
    
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
        const res: operations.ListSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncDocumentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSyncDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
  **/
  listSyncDocumentPermission(
    req: operations.ListSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.ListSyncDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", req.pathParams);
    
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
        const res: operations.ListSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncDocumentPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncService(
    req: operations.ListSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.ListSyncServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/Sync/Services";
    
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
        const res: operations.ListSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncServiceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncSyncList(
    req: operations.ListSyncSyncListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncListRequest(req);
    }
    
    let baseURL: string = operations.ListSyncSyncListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists", req.pathParams);
    
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
        const res: operations.ListSyncSyncListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncSyncListItem(
    req: operations.ListSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.ListSyncSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", req.pathParams);
    
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
        const res: operations.ListSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncListItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSyncSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
  **/
  listSyncSyncListPermission(
    req: operations.ListSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.ListSyncSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions", req.pathParams);
    
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
        const res: operations.ListSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncListPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncSyncMap(
    req: operations.ListSyncSyncMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncMapRequest(req);
    }
    
    let baseURL: string = operations.ListSyncSyncMapServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps", req.pathParams);
    
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
        const res: operations.ListSyncSyncMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncMapResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSyncSyncMapItem(
    req: operations.ListSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.ListSyncSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", req.pathParams);
    
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
        const res: operations.ListSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncMapItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSyncSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
  **/
  listSyncSyncMapPermission(
    req: operations.ListSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.ListSyncSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions", req.pathParams);
    
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
        const res: operations.ListSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSyncSyncMapPermissionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandAssistant(
    req: operations.ListUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandAssistantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/understand/Assistants";
    
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
        const res: operations.ListUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandAssistantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandField(
    req: operations.ListUnderstandFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandFieldRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandFieldServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", req.pathParams);
    
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
        const res: operations.ListUnderstandFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandFieldResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandFieldType(
    req: operations.ListUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandFieldTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes", req.pathParams);
    
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
        const res: operations.ListUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandFieldTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandFieldValue(
    req: operations.ListUnderstandFieldValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandFieldValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandFieldValueRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandFieldValueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", req.pathParams);
    
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
        const res: operations.ListUnderstandFieldValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandFieldValueResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandModelBuild(
    req: operations.ListUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandModelBuildServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds", req.pathParams);
    
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
        const res: operations.ListUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandModelBuildResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandQuery(
    req: operations.ListUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandQueryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries", req.pathParams);
    
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
        const res: operations.ListUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandQueryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandSample(
    req: operations.ListUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandSampleServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", req.pathParams);
    
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
        const res: operations.ListUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandSampleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUnderstandTask(
    req: operations.ListUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.ListUnderstandTaskServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks", req.pathParams);
    
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
        const res: operations.ListUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnderstandTaskResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listWirelessCommand(
    req: operations.ListWirelessCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWirelessCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWirelessCommandRequest(req);
    }
    
    let baseURL: string = operations.ListWirelessCommandServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/Commands";
    
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
        const res: operations.ListWirelessCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWirelessCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listWirelessRatePlan(
    req: operations.ListWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.ListWirelessRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/RatePlans";
    
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
        const res: operations.ListWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWirelessRatePlanResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listWirelessSim(
    req: operations.ListWirelessSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWirelessSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWirelessSimRequest(req);
    }
    
    let baseURL: string = operations.ListWirelessSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/wireless/Sims";
    
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
        const res: operations.ListWirelessSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWirelessSimResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeployedDevicesCertificate - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
  **/
  updateDeployedDevicesCertificate(
    req: operations.UpdateDeployedDevicesCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesCertificateRequest(req);
    }
    
    let baseURL: string = operations.UpdateDeployedDevicesCertificateServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", req.pathParams);

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
        const res: operations.UpdateDeployedDevicesCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeployedDevicesDeployment - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
  **/
  updateDeployedDevicesDeployment(
    req: operations.UpdateDeployedDevicesDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesDeploymentRequest(req);
    }
    
    let baseURL: string = operations.UpdateDeployedDevicesDeploymentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", req.pathParams);

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
        const res: operations.UpdateDeployedDevicesDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeployedDevicesDevice - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
  **/
  updateDeployedDevicesDevice(
    req: operations.UpdateDeployedDevicesDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesDeviceRequest(req);
    }
    
    let baseURL: string = operations.UpdateDeployedDevicesDeviceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", req.pathParams);

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
        const res: operations.UpdateDeployedDevicesDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeployedDevicesFleet - Update the friendly name property of a specific Fleet in your account.
  **/
  updateDeployedDevicesFleet(
    req: operations.UpdateDeployedDevicesFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesFleetRequest(req);
    }
    
    let baseURL: string = operations.UpdateDeployedDevicesFleetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{Sid}", req.pathParams);

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
        const res: operations.UpdateDeployedDevicesFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeployedDevicesKey - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
  **/
  updateDeployedDevicesKey(
    req: operations.UpdateDeployedDevicesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeployedDevicesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeployedDevicesKeyRequest(req);
    }
    
    let baseURL: string = operations.UpdateDeployedDevicesKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", req.pathParams);

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
        const res: operations.UpdateDeployedDevicesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewDeployedDevicesFleetKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateHostedNumbersAuthorizationDocument - Updates a specific AuthorizationDocument.
  **/
  updateHostedNumbersAuthorizationDocument(
    req: operations.UpdateHostedNumbersAuthorizationDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateHostedNumbersAuthorizationDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateHostedNumbersAuthorizationDocumentRequest(req);
    }
    
    let baseURL: string = operations.UpdateHostedNumbersAuthorizationDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/AuthorizationDocuments/{Sid}", req.pathParams);

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
        const res: operations.UpdateHostedNumbersAuthorizationDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersAuthorizationDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateHostedNumbersHostedNumberOrder - Updates a specific HostedNumberOrder.
  **/
  updateHostedNumbersHostedNumberOrder(
    req: operations.UpdateHostedNumbersHostedNumberOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateHostedNumbersHostedNumberOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateHostedNumbersHostedNumberOrderRequest(req);
    }
    
    let baseURL: string = operations.UpdateHostedNumbersHostedNumberOrderServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/HostedNumbers/HostedNumberOrders/{Sid}", req.pathParams);

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
        const res: operations.UpdateHostedNumbersHostedNumberOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewHostedNumbersHostedNumberOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMarketplaceInstalledAddOn - Update an Add-on installation for the Account specified.
  **/
  updateMarketplaceInstalledAddOn(
    req: operations.UpdateMarketplaceInstalledAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMarketplaceInstalledAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMarketplaceInstalledAddOnRequest(req);
    }
    
    let baseURL: string = operations.UpdateMarketplaceInstalledAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{Sid}", req.pathParams);

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
        const res: operations.UpdateMarketplaceInstalledAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMarketplaceInstalledAddOnExtension - Update an Extension for an Add-on installation.
  **/
  updateMarketplaceInstalledAddOnExtension(
    req: operations.UpdateMarketplaceInstalledAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMarketplaceInstalledAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMarketplaceInstalledAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.UpdateMarketplaceInstalledAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", req.pathParams);

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
        const res: operations.UpdateMarketplaceInstalledAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewMarketplaceInstalledAddOnInstalledAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncDocument(
    req: operations.UpdateSyncDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncDocumentRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncDocumentServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{Sid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.UpdateSyncDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocument = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSyncDocumentPermission - Update an identity's access to a specific Sync Document.
  **/
  updateSyncDocumentPermission(
    req: operations.UpdateSyncDocumentPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncDocumentPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncDocumentPermissionRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncDocumentPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", req.pathParams);

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
        const res: operations.UpdateSyncDocumentPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceDocumentDocumentPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncService(
    req: operations.UpdateSyncServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncServiceRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncServiceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{Sid}", req.pathParams);

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
        const res: operations.UpdateSyncServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncSyncListItem(
    req: operations.UpdateSyncSyncListItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncListItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncListItemRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncSyncListItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.UpdateSyncSyncListItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSyncSyncListPermission - Update an identity's access to a specific Sync List.
  **/
  updateSyncSyncListPermission(
    req: operations.UpdateSyncSyncListPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncListPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncListPermissionRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncSyncListPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", req.pathParams);

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
        const res: operations.UpdateSyncSyncListPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncListSyncListPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSyncSyncMapItem(
    req: operations.UpdateSyncSyncMapItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncMapItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncMapItemRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncSyncMapItemServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.UpdateSyncSyncMapItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapItem = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSyncSyncMapPermission - Update an identity's access to a specific Sync Map.
  **/
  updateSyncSyncMapPermission(
    req: operations.UpdateSyncSyncMapPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyncSyncMapPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyncSyncMapPermissionRequest(req);
    }
    
    let baseURL: string = operations.UpdateSyncSyncMapPermissionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", req.pathParams);

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
        const res: operations.UpdateSyncSyncMapPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewSyncServiceSyncMapSyncMapPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandAssistant(
    req: operations.UpdateUnderstandAssistantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandAssistantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandAssistantRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandAssistantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{Sid}", req.pathParams);

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
        const res: operations.UpdateUnderstandAssistantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandAssistantFallbackActions(
    req: operations.UpdateUnderstandAssistantFallbackActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandAssistantFallbackActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandAssistantFallbackActionsRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandAssistantFallbackActionsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FallbackActions", req.pathParams);

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
        const res: operations.UpdateUnderstandAssistantFallbackActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantFallbackActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandAssistantInitiationActions(
    req: operations.UpdateUnderstandAssistantInitiationActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandAssistantInitiationActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandAssistantInitiationActionsRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandAssistantInitiationActionsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/InitiationActions", req.pathParams);

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
        const res: operations.UpdateUnderstandAssistantInitiationActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantAssistantInitiationActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandFieldType(
    req: operations.UpdateUnderstandFieldTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandFieldTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandFieldTypeRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandFieldTypeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", req.pathParams);

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
        const res: operations.UpdateUnderstandFieldTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantFieldType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandModelBuild(
    req: operations.UpdateUnderstandModelBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandModelBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandModelBuildRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandModelBuildServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", req.pathParams);

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
        const res: operations.UpdateUnderstandModelBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantModelBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandQuery(
    req: operations.UpdateUnderstandQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandQueryRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandQueryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", req.pathParams);

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
        const res: operations.UpdateUnderstandQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantQuery = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandSample(
    req: operations.UpdateUnderstandSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandSampleRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandSampleServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", req.pathParams);

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
        const res: operations.UpdateUnderstandSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskSample = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUnderstandStyleSheet - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
  **/
  updateUnderstandStyleSheet(
    req: operations.UpdateUnderstandStyleSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandStyleSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandStyleSheetRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandStyleSheetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/StyleSheet", req.pathParams);

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
        const res: operations.UpdateUnderstandStyleSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantStyleSheet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateUnderstandTask(
    req: operations.UpdateUnderstandTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandTaskRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandTaskServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", req.pathParams);

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
        const res: operations.UpdateUnderstandTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTask = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUnderstandTaskActions - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
  **/
  updateUnderstandTaskActions(
    req: operations.UpdateUnderstandTaskActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUnderstandTaskActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUnderstandTaskActionsRequest(req);
    }
    
    let baseURL: string = operations.UpdateUnderstandTaskActionsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", req.pathParams);

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
        const res: operations.UpdateUnderstandTaskActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewUnderstandAssistantTaskTaskActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateWirelessRatePlan(
    req: operations.UpdateWirelessRatePlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWirelessRatePlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWirelessRatePlanRequest(req);
    }
    
    let baseURL: string = operations.UpdateWirelessRatePlanServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/RatePlans/{Sid}", req.pathParams);

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
        const res: operations.UpdateWirelessRatePlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessRatePlan = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateWirelessSim(
    req: operations.UpdateWirelessSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWirelessSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWirelessSimRequest(req);
    }
    
    let baseURL: string = operations.UpdateWirelessSimServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/wireless/Sims/{Sid}", req.pathParams);

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
        const res: operations.UpdateWirelessSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previewWirelessSim = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
