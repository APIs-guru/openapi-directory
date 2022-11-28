import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.twilio.com",
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
   * createAccount - Create a new Twilio Subaccount from the account making the request
  **/
  createAccount(
    req: operations.CreateAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAccountRequest(req);
    }
    
    let baseURL: string = operations.CreateAccountServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/2010-04-01/Accounts.json";

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
        const res: operations.CreateAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010Account = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createAddress(
    req: operations.CreateAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAddressRequest(req);
    }
    
    let baseURL: string = operations.CreateAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", req.pathParams);

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
        const res: operations.CreateAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createApplication - Create a new application within your account
  **/
  createApplication(
    req: operations.CreateApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateApplicationRequest(req);
    }
    
    let baseURL: string = operations.CreateApplicationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications.json", req.pathParams);

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
        const res: operations.CreateApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCall - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
  **/
  createCall(
    req: operations.CreateCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallRequest(req);
    }
    
    let baseURL: string = operations.CreateCallServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls.json", req.pathParams);

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
        const res: operations.CreateCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCallFeedbackSummary - Create a FeedbackSummary resource for a call
  **/
  createCallFeedbackSummary(
    req: operations.CreateCallFeedbackSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallFeedbackSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallFeedbackSummaryRequest(req);
    }
    
    let baseURL: string = operations.CreateCallFeedbackSummaryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary.json", req.pathParams);

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
        const res: operations.CreateCallFeedbackSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedbackSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCallRecording - Create a recording for the call
  **/
  createCallRecording(
    req: operations.CreateCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.CreateCallRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", req.pathParams);

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
        const res: operations.CreateCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createIncomingPhoneNumber - Purchase a phone-number for the account.
  **/
  createIncomingPhoneNumber(
    req: operations.CreateIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.CreateIncomingPhoneNumberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", req.pathParams);

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
        const res: operations.CreateIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createIncomingPhoneNumberAssignedAddOn - Assign an Add-on installation to the Number specified.
  **/
  createIncomingPhoneNumberAssignedAddOn(
    req: operations.CreateIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.CreateIncomingPhoneNumberAssignedAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", req.pathParams);

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
        const res: operations.CreateIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createIncomingPhoneNumberLocal(
    req: operations.CreateIncomingPhoneNumberLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberLocalRequest(req);
    }
    
    let baseURL: string = operations.CreateIncomingPhoneNumberLocalServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", req.pathParams);

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
        const res: operations.CreateIncomingPhoneNumberLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createIncomingPhoneNumberMobile(
    req: operations.CreateIncomingPhoneNumberMobileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberMobileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberMobileRequest(req);
    }
    
    let baseURL: string = operations.CreateIncomingPhoneNumberMobileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", req.pathParams);

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
        const res: operations.CreateIncomingPhoneNumberMobileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createIncomingPhoneNumberTollFree(
    req: operations.CreateIncomingPhoneNumberTollFreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberTollFreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberTollFreeRequest(req);
    }
    
    let baseURL: string = operations.CreateIncomingPhoneNumberTollFreeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", req.pathParams);

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
        const res: operations.CreateIncomingPhoneNumberTollFreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createMessage - Send a message from the account used to make the request
  **/
  createMessage(
    req: operations.CreateMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessageRequest(req);
    }
    
    let baseURL: string = operations.CreateMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages.json", req.pathParams);

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
        const res: operations.CreateMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createMessageFeedback(
    req: operations.CreateMessageFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessageFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessageFeedbackRequest(req);
    }
    
    let baseURL: string = operations.CreateMessageFeedbackServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json", req.pathParams);

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
        const res: operations.CreateMessageFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessageMessageFeedback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createNewKey(
    req: operations.CreateNewKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewKeyRequest(req);
    }
    
    let baseURL: string = operations.CreateNewKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys.json", req.pathParams);

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
        const res: operations.CreateNewKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountNewKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNewSigningKey - Create a new Signing Key for the account making the request.
  **/
  createNewSigningKey(
    req: operations.CreateNewSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.CreateNewSigningKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", req.pathParams);

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
        const res: operations.CreateNewSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountNewSigningKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createParticipant(
    req: operations.CreateParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateParticipantRequest(req);
    }
    
    let baseURL: string = operations.CreateParticipantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", req.pathParams);

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
        const res: operations.CreateParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createPayments - create an instance of payments. This will start a new payments session
  **/
  createPayments(
    req: operations.CreatePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePaymentsRequest(req);
    }
    
    let baseURL: string = operations.CreatePaymentsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json", req.pathParams);

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
        const res: operations.CreatePaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallPayments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createQueue - Create a queue
  **/
  createQueue(
    req: operations.CreateQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateQueueRequest(req);
    }
    
    let baseURL: string = operations.CreateQueueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues.json", req.pathParams);

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
        const res: operations.CreateQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipAuthCallsCredentialListMapping - Create a new credential list mapping resource
  **/
  createSipAuthCallsCredentialListMapping(
    req: operations.CreateSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.CreateSipAuthCallsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", req.pathParams);

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
        const res: operations.CreateSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipAuthCallsIpAccessControlListMapping - Create a new IP Access Control List mapping
  **/
  createSipAuthCallsIpAccessControlListMapping(
    req: operations.CreateSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.CreateSipAuthCallsIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", req.pathParams);

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
        const res: operations.CreateSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipAuthRegistrationsCredentialListMapping - Create a new credential list mapping resource
  **/
  createSipAuthRegistrationsCredentialListMapping(
    req: operations.CreateSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.CreateSipAuthRegistrationsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", req.pathParams);

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
        const res: operations.CreateSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipCredential - Create a new credential resource.
  **/
  createSipCredential(
    req: operations.CreateSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.CreateSipCredentialServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", req.pathParams);

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
        const res: operations.CreateSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialListSipCredential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipCredentialList - Create a Credential List
  **/
  createSipCredentialList(
    req: operations.CreateSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.CreateSipCredentialListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", req.pathParams);

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
        const res: operations.CreateSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipCredentialListMapping - Create a CredentialListMapping resource for an account.
  **/
  createSipCredentialListMapping(
    req: operations.CreateSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.CreateSipCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", req.pathParams);

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
        const res: operations.CreateSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipDomain - Create a new Domain
  **/
  createSipDomain(
    req: operations.CreateSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipDomainRequest(req);
    }
    
    let baseURL: string = operations.CreateSipDomainServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", req.pathParams);

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
        const res: operations.CreateSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipIpAccessControlList - Create a new IpAccessControlList resource
  **/
  createSipIpAccessControlList(
    req: operations.CreateSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.CreateSipIpAccessControlListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", req.pathParams);

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
        const res: operations.CreateSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipIpAccessControlListMapping - Create a new IpAccessControlListMapping resource.
  **/
  createSipIpAccessControlListMapping(
    req: operations.CreateSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.CreateSipIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", req.pathParams);

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
        const res: operations.CreateSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSipIpAddress - Create a new IpAddress resource.
  **/
  createSipIpAddress(
    req: operations.CreateSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.CreateSipIpAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", req.pathParams);

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
        const res: operations.CreateSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSiprec - Create a Siprec
  **/
  createSiprec(
    req: operations.CreateSiprecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSiprecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSiprecRequest(req);
    }
    
    let baseURL: string = operations.CreateSiprecServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json", req.pathParams);

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
        const res: operations.CreateSiprecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallSiprec = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createStream - Create a Stream
  **/
  createStream(
    req: operations.CreateStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateStreamRequest(req);
    }
    
    let baseURL: string = operations.CreateStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json", req.pathParams);

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
        const res: operations.CreateStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createToken - Create a new token for ICE servers
  **/
  createToken(
    req: operations.CreateTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTokenRequest(req);
    }
    
    let baseURL: string = operations.CreateTokenServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Tokens.json", req.pathParams);

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
        const res: operations.CreateTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createUsageTrigger - Create a new UsageTrigger
  **/
  createUsageTrigger(
    req: operations.CreateUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.CreateUsageTriggerServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", req.pathParams);

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
        const res: operations.CreateUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountUsageUsageTrigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createUserDefinedMessage - Create a new User Defined Message for the given Call SID.
  **/
  createUserDefinedMessage(
    req: operations.CreateUserDefinedMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserDefinedMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserDefinedMessageRequest(req);
    }
    
    let baseURL: string = operations.CreateUserDefinedMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json", req.pathParams);

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
        const res: operations.CreateUserDefinedMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallUserDefinedMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createUserDefinedMessageSubscription - Subscribe to User Defined Messages for a given Call SID.
  **/
  createUserDefinedMessageSubscription(
    req: operations.CreateUserDefinedMessageSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserDefinedMessageSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserDefinedMessageSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.CreateUserDefinedMessageSubscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json", req.pathParams);

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
        const res: operations.CreateUserDefinedMessageSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallUserDefinedMessageSubscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  createValidationRequest(
    req: operations.CreateValidationRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateValidationRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateValidationRequestRequest(req);
    }
    
    let baseURL: string = operations.CreateValidationRequestServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", req.pathParams);

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
        const res: operations.CreateValidationRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountValidationRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteAddress(
    req: operations.DeleteAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddressRequest(req);
    }
    
    let baseURL: string = operations.DeleteAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteApplication - Delete the application by the specified application sid
  **/
  deleteApplication(
    req: operations.DeleteApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApplicationRequest(req);
    }
    
    let baseURL: string = operations.DeleteApplicationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCall - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
  **/
  deleteCall(
    req: operations.DeleteCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCallRequest(req);
    }
    
    let baseURL: string = operations.DeleteCallServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCallFeedbackSummary - Delete a FeedbackSummary resource from a call
  **/
  deleteCallFeedbackSummary(
    req: operations.DeleteCallFeedbackSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCallFeedbackSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCallFeedbackSummaryRequest(req);
    }
    
    let baseURL: string = operations.DeleteCallFeedbackSummaryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCallFeedbackSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCallRecording - Delete a recording from your account
  **/
  deleteCallRecording(
    req: operations.DeleteCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.DeleteCallRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteConferenceRecording - Delete a recording from your account
  **/
  deleteConferenceRecording(
    req: operations.DeleteConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.DeleteConferenceRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteConnectApp - Delete an instance of a connect-app
  **/
  deleteConnectApp(
    req: operations.DeleteConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConnectAppRequest(req);
    }
    
    let baseURL: string = operations.DeleteConnectAppServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteIncomingPhoneNumber - Delete a phone-numbers belonging to the account used to make the request.
  **/
  deleteIncomingPhoneNumber(
    req: operations.DeleteIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.DeleteIncomingPhoneNumberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteIncomingPhoneNumberAssignedAddOn - Remove the assignment of an Add-on installation from the Number specified.
  **/
  deleteIncomingPhoneNumberAssignedAddOn(
    req: operations.DeleteIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.DeleteIncomingPhoneNumberAssignedAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteKey(
    req: operations.DeleteKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteKeyRequest(req);
    }
    
    let baseURL: string = operations.DeleteKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMedia - Delete media from your account. Once delete, you will no longer be billed
  **/
  deleteMedia(
    req: operations.DeleteMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMediaRequest(req);
    }
    
    let baseURL: string = operations.DeleteMediaServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMessage - Deletes a message record from your account
  **/
  deleteMessage(
    req: operations.DeleteMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessageRequest(req);
    }
    
    let baseURL: string = operations.DeleteMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOutgoingCallerId - Delete the caller-id specified from the account
  **/
  deleteOutgoingCallerId(
    req: operations.DeleteOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.DeleteOutgoingCallerIdServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteParticipant - Kick a participant from a given conference
  **/
  deleteParticipant(
    req: operations.DeleteParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteParticipantRequest(req);
    }
    
    let baseURL: string = operations.DeleteParticipantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteQueue - Remove an empty queue
  **/
  deleteQueue(
    req: operations.DeleteQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteQueueRequest(req);
    }
    
    let baseURL: string = operations.DeleteQueueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRecording - Delete a recording from your account
  **/
  deleteRecording(
    req: operations.DeleteRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingRequest(req);
    }
    
    let baseURL: string = operations.DeleteRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRecordingAddOnResult - Delete a result and purge all associated Payloads
  **/
  deleteRecordingAddOnResult(
    req: operations.DeleteRecordingAddOnResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingAddOnResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingAddOnResultRequest(req);
    }
    
    let baseURL: string = operations.DeleteRecordingAddOnResultServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRecordingAddOnResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRecordingAddOnResultPayload - Delete a payload from the result along with all associated Data
  **/
  deleteRecordingAddOnResultPayload(
    req: operations.DeleteRecordingAddOnResultPayloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingAddOnResultPayloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingAddOnResultPayloadRequest(req);
    }
    
    let baseURL: string = operations.DeleteRecordingAddOnResultPayloadServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRecordingAddOnResultPayloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRecordingTranscription(
    req: operations.DeleteRecordingTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.DeleteRecordingTranscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRecordingTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteSigningKey(
    req: operations.DeleteSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.DeleteSigningKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipAuthCallsCredentialListMapping - Delete a credential list mapping from the requested domain
  **/
  deleteSipAuthCallsCredentialListMapping(
    req: operations.DeleteSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipAuthCallsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipAuthCallsIpAccessControlListMapping - Delete an IP Access Control List mapping from the requested domain
  **/
  deleteSipAuthCallsIpAccessControlListMapping(
    req: operations.DeleteSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipAuthCallsIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipAuthRegistrationsCredentialListMapping - Delete a credential list mapping from the requested domain
  **/
  deleteSipAuthRegistrationsCredentialListMapping(
    req: operations.DeleteSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipAuthRegistrationsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipCredential - Delete a credential resource.
  **/
  deleteSipCredential(
    req: operations.DeleteSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipCredentialServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipCredentialList - Delete a Credential List
  **/
  deleteSipCredentialList(
    req: operations.DeleteSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipCredentialListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipCredentialListMapping - Delete a CredentialListMapping resource from an account.
  **/
  deleteSipCredentialListMapping(
    req: operations.DeleteSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipDomain - Delete an instance of a Domain
  **/
  deleteSipDomain(
    req: operations.DeleteSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipDomainRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipDomainServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipIpAccessControlList - Delete an IpAccessControlList from the requested account
  **/
  deleteSipIpAccessControlList(
    req: operations.DeleteSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipIpAccessControlListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipIpAccessControlListMapping - Delete an IpAccessControlListMapping resource.
  **/
  deleteSipIpAccessControlListMapping(
    req: operations.DeleteSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSipIpAddress - Delete an IpAddress resource.
  **/
  deleteSipIpAddress(
    req: operations.DeleteSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.DeleteSipIpAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTranscription - Delete a transcription from the account used to make the request
  **/
  deleteTranscription(
    req: operations.DeleteTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.DeleteTranscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteUsageTrigger(
    req: operations.DeleteUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.DeleteUsageTriggerServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserDefinedMessageSubscription - Delete a specific User Defined Message Subscription.
  **/
  deleteUserDefinedMessageSubscription(
    req: operations.DeleteUserDefinedMessageSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserDefinedMessageSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserDefinedMessageSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.DeleteUserDefinedMessageSubscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserDefinedMessageSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchAccount - Fetch the account specified by the provided Account Sid
  **/
  fetchAccount(
    req: operations.FetchAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAccountRequest(req);
    }
    
    let baseURL: string = operations.FetchAccountServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010Account = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchAddress(
    req: operations.FetchAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAddressRequest(req);
    }
    
    let baseURL: string = operations.FetchAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchApplication - Fetch the application specified by the provided sid
  **/
  fetchApplication(
    req: operations.FetchApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchApplicationRequest(req);
    }
    
    let baseURL: string = operations.FetchApplicationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchAuthorizedConnectApp - Fetch an instance of an authorized-connect-app
  **/
  fetchAuthorizedConnectApp(
    req: operations.FetchAuthorizedConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAuthorizedConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAuthorizedConnectAppRequest(req);
    }
    
    let baseURL: string = operations.FetchAuthorizedConnectAppServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchAuthorizedConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAuthorizedConnectApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchAvailablePhoneNumberCountry(
    req: operations.FetchAvailablePhoneNumberCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAvailablePhoneNumberCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAvailablePhoneNumberCountryRequest(req);
    }
    
    let baseURL: string = operations.FetchAvailablePhoneNumberCountryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchAvailablePhoneNumberCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAvailablePhoneNumberCountry = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchBalance - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
  **/
  fetchBalance(
    req: operations.FetchBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchBalanceRequest(req);
    }
    
    let baseURL: string = operations.FetchBalanceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Balance.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountBalance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCall - Fetch the call specified by the provided Call SID
  **/
  fetchCall(
    req: operations.FetchCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallRequest(req);
    }
    
    let baseURL: string = operations.FetchCallServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCallFeedback - Fetch a Feedback resource from a call
  **/
  fetchCallFeedback(
    req: operations.FetchCallFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallFeedbackRequest(req);
    }
    
    let baseURL: string = operations.FetchCallFeedbackServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCallFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCallFeedbackSummary - Fetch a FeedbackSummary resource from a call
  **/
  fetchCallFeedbackSummary(
    req: operations.FetchCallFeedbackSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallFeedbackSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallFeedbackSummaryRequest(req);
    }
    
    let baseURL: string = operations.FetchCallFeedbackSummaryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCallFeedbackSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedbackSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchCallNotification(
    req: operations.FetchCallNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallNotificationRequest(req);
    }
    
    let baseURL: string = operations.FetchCallNotificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCallNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallNotificationInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchCallRecording - Fetch an instance of a recording for a call
  **/
  fetchCallRecording(
    req: operations.FetchCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.FetchCallRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchConference - Fetch an instance of a conference
  **/
  fetchConference(
    req: operations.FetchConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConferenceRequest(req);
    }
    
    let baseURL: string = operations.FetchConferenceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchConferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchConferenceRecording - Fetch an instance of a recording for a call
  **/
  fetchConferenceRecording(
    req: operations.FetchConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.FetchConferenceRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceConferenceRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchConnectApp - Fetch an instance of a connect-app
  **/
  fetchConnectApp(
    req: operations.FetchConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConnectAppRequest(req);
    }
    
    let baseURL: string = operations.FetchConnectAppServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConnectApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchIncomingPhoneNumber - Fetch an incoming-phone-number belonging to the account used to make the request.
  **/
  fetchIncomingPhoneNumber(
    req: operations.FetchIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.FetchIncomingPhoneNumberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchIncomingPhoneNumberAssignedAddOn - Fetch an instance of an Add-on installation currently assigned to this Number.
  **/
  fetchIncomingPhoneNumberAssignedAddOn(
    req: operations.FetchIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.FetchIncomingPhoneNumberAssignedAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchIncomingPhoneNumberAssignedAddOnExtension - Fetch an instance of an Extension for the Assigned Add-on.
  **/
  fetchIncomingPhoneNumberAssignedAddOnExtension(
    req: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.FetchIncomingPhoneNumberAssignedAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchKey(
    req: operations.FetchKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchKeyRequest(req);
    }
    
    let baseURL: string = operations.FetchKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMedia - Fetch a single media instance belonging to the account used to make the request
  **/
  fetchMedia(
    req: operations.FetchMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMediaRequest(req);
    }
    
    let baseURL: string = operations.FetchMediaServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessageMedia = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMember - Fetch a specific member from the queue
  **/
  fetchMember(
    req: operations.FetchMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMemberRequest(req);
    }
    
    let baseURL: string = operations.FetchMemberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueueMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchMessage - Fetch a message belonging to the account used to make the request
  **/
  fetchMessage(
    req: operations.FetchMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMessageRequest(req);
    }
    
    let baseURL: string = operations.FetchMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchNotification - Fetch a notification belonging to the account used to make the request
  **/
  fetchNotification(
    req: operations.FetchNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchNotificationRequest(req);
    }
    
    let baseURL: string = operations.FetchNotificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountNotificationInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchOutgoingCallerId - Fetch an outgoing-caller-id belonging to the account used to make the request
  **/
  fetchOutgoingCallerId(
    req: operations.FetchOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.FetchOutgoingCallerIdServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountOutgoingCallerId = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchParticipant - Fetch an instance of a participant
  **/
  fetchParticipant(
    req: operations.FetchParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchParticipantRequest(req);
    }
    
    let baseURL: string = operations.FetchParticipantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchQueue - Fetch an instance of a queue identified by the QueueSid
  **/
  fetchQueue(
    req: operations.FetchQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchQueueRequest(req);
    }
    
    let baseURL: string = operations.FetchQueueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchRecording - Fetch an instance of a recording
  **/
  fetchRecording(
    req: operations.FetchRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingRequest(req);
    }
    
    let baseURL: string = operations.FetchRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", req.pathParams);
    
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
        const res: operations.FetchRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchRecordingAddOnResult - Fetch an instance of an AddOnResult
  **/
  fetchRecordingAddOnResult(
    req: operations.FetchRecordingAddOnResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingAddOnResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingAddOnResultRequest(req);
    }
    
    let baseURL: string = operations.FetchRecordingAddOnResultServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRecordingAddOnResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecordingRecordingAddOnResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchRecordingAddOnResultPayload - Fetch an instance of a result payload
  **/
  fetchRecordingAddOnResultPayload(
    req: operations.FetchRecordingAddOnResultPayloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingAddOnResultPayloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingAddOnResultPayloadRequest(req);
    }
    
    let baseURL: string = operations.FetchRecordingAddOnResultPayloadServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRecordingAddOnResultPayloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchRecordingTranscription(
    req: operations.FetchRecordingTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.FetchRecordingTranscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRecordingTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecordingRecordingTranscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchShortCode - Fetch an instance of a short code
  **/
  fetchShortCode(
    req: operations.FetchShortCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchShortCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchShortCodeRequest(req);
    }
    
    let baseURL: string = operations.FetchShortCodeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchShortCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountShortCode = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  fetchSigningKey(
    req: operations.FetchSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.FetchSigningKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSigningKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipAuthCallsCredentialListMapping - Fetch a specific instance of a credential list mapping
  **/
  fetchSipAuthCallsCredentialListMapping(
    req: operations.FetchSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.FetchSipAuthCallsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipAuthCallsIpAccessControlListMapping - Fetch a specific instance of an IP Access Control List mapping
  **/
  fetchSipAuthCallsIpAccessControlListMapping(
    req: operations.FetchSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.FetchSipAuthCallsIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipAuthRegistrationsCredentialListMapping - Fetch a specific instance of a credential list mapping
  **/
  fetchSipAuthRegistrationsCredentialListMapping(
    req: operations.FetchSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.FetchSipAuthRegistrationsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipCredential - Fetch a single credential.
  **/
  fetchSipCredential(
    req: operations.FetchSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.FetchSipCredentialServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialListSipCredential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipCredentialList - Get a Credential List
  **/
  fetchSipCredentialList(
    req: operations.FetchSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.FetchSipCredentialListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipCredentialListMapping - Fetch a single CredentialListMapping resource from an account.
  **/
  fetchSipCredentialListMapping(
    req: operations.FetchSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.FetchSipCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipDomain - Fetch an instance of a Domain
  **/
  fetchSipDomain(
    req: operations.FetchSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipDomainRequest(req);
    }
    
    let baseURL: string = operations.FetchSipDomainServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipIpAccessControlList - Fetch a specific instance of an IpAccessControlList
  **/
  fetchSipIpAccessControlList(
    req: operations.FetchSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.FetchSipIpAccessControlListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipIpAccessControlListMapping - Fetch an IpAccessControlListMapping resource.
  **/
  fetchSipIpAccessControlListMapping(
    req: operations.FetchSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.FetchSipIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchSipIpAddress - Read one IpAddress resource.
  **/
  fetchSipIpAddress(
    req: operations.FetchSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.FetchSipIpAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchTranscription - Fetch an instance of a Transcription
  **/
  fetchTranscription(
    req: operations.FetchTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.FetchTranscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountTranscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchUsageTrigger - Fetch and instance of a usage-trigger
  **/
  fetchUsageTrigger(
    req: operations.FetchUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.FetchUsageTriggerServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountUsageUsageTrigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAccount - Retrieves a collection of Accounts belonging to the account used to make the request
  **/
  listAccount(
    req: operations.ListAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountRequest(req);
    }
    
    let baseURL: string = operations.ListAccountServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/2010-04-01/Accounts.json";
    
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
        const res: operations.ListAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAccountResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAddress(
    req: operations.ListAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAddressRequest(req);
    }
    
    let baseURL: string = operations.ListAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", req.pathParams);
    
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
        const res: operations.ListAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listApplication - Retrieve a list of applications representing an application within the requesting account
  **/
  listApplication(
    req: operations.ListApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListApplicationRequest(req);
    }
    
    let baseURL: string = operations.ListApplicationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications.json", req.pathParams);
    
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
        const res: operations.ListApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listApplicationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAuthorizedConnectApp - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
  **/
  listAuthorizedConnectApp(
    req: operations.ListAuthorizedConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAuthorizedConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAuthorizedConnectAppRequest(req);
    }
    
    let baseURL: string = operations.ListAuthorizedConnectAppServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json", req.pathParams);
    
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
        const res: operations.ListAuthorizedConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAuthorizedConnectAppResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberCountry(
    req: operations.ListAvailablePhoneNumberCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberCountryRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberCountryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberLocal(
    req: operations.ListAvailablePhoneNumberLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberLocalRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberLocalServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberLocalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberMachineToMachine(
    req: operations.ListAvailablePhoneNumberMachineToMachineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberMachineToMachineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberMachineToMachineRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberMachineToMachineServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberMachineToMachineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberMachineToMachineResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberMobile(
    req: operations.ListAvailablePhoneNumberMobileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberMobileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberMobileRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberMobileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberMobileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberMobileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberNational(
    req: operations.ListAvailablePhoneNumberNationalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberNationalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberNationalRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberNationalServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberNationalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberNationalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberSharedCost(
    req: operations.ListAvailablePhoneNumberSharedCostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberSharedCostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberSharedCostRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberSharedCostServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberSharedCostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberSharedCostResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberTollFree(
    req: operations.ListAvailablePhoneNumberTollFreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberTollFreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberTollFreeRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberTollFreeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberTollFreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberTollFreeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listAvailablePhoneNumberVoip(
    req: operations.ListAvailablePhoneNumberVoipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberVoipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberVoipRequest(req);
    }
    
    let baseURL: string = operations.ListAvailablePhoneNumberVoipServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json", req.pathParams);
    
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
        const res: operations.ListAvailablePhoneNumberVoipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberVoipResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCall - Retrieves a collection of calls made to and from your account
  **/
  listCall(
    req: operations.ListCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallRequest(req);
    }
    
    let baseURL: string = operations.ListCallServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls.json", req.pathParams);
    
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
        const res: operations.ListCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCallResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCallEvent - Retrieve a list of all events for a call.
  **/
  listCallEvent(
    req: operations.ListCallEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallEventRequest(req);
    }
    
    let baseURL: string = operations.ListCallEventServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json", req.pathParams);
    
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
        const res: operations.ListCallEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCallEventResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listCallNotification(
    req: operations.ListCallNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallNotificationRequest(req);
    }
    
    let baseURL: string = operations.ListCallNotificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json", req.pathParams);
    
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
        const res: operations.ListCallNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCallNotificationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listCallRecording - Retrieve a list of recordings belonging to the call used to make the request
  **/
  listCallRecording(
    req: operations.ListCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.ListCallRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", req.pathParams);
    
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
        const res: operations.ListCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCallRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listConference - Retrieve a list of conferences belonging to the account used to make the request
  **/
  listConference(
    req: operations.ListConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConferenceRequest(req);
    }
    
    let baseURL: string = operations.ListConferenceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences.json", req.pathParams);
    
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
        const res: operations.ListConferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listConferenceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listConferenceRecording - Retrieve a list of recordings belonging to the call used to make the request
  **/
  listConferenceRecording(
    req: operations.ListConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.ListConferenceRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json", req.pathParams);
    
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
        const res: operations.ListConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listConferenceRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listConnectApp - Retrieve a list of connect-apps belonging to the account used to make the request
  **/
  listConnectApp(
    req: operations.ListConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConnectAppRequest(req);
    }
    
    let baseURL: string = operations.ListConnectAppServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps.json", req.pathParams);
    
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
        const res: operations.ListConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listConnectAppResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listDependentPhoneNumber(
    req: operations.ListDependentPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDependentPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDependentPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.ListDependentPhoneNumberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json", req.pathParams);
    
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
        const res: operations.ListDependentPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDependentPhoneNumberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listIncomingPhoneNumber - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
  **/
  listIncomingPhoneNumber(
    req: operations.ListIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.ListIncomingPhoneNumberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", req.pathParams);
    
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
        const res: operations.ListIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listIncomingPhoneNumberAssignedAddOn - Retrieve a list of Add-on installations currently assigned to this Number.
  **/
  listIncomingPhoneNumberAssignedAddOn(
    req: operations.ListIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.ListIncomingPhoneNumberAssignedAddOnServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", req.pathParams);
    
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
        const res: operations.ListIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberAssignedAddOnResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listIncomingPhoneNumberAssignedAddOnExtension - Retrieve a list of Extensions for the Assigned Add-on.
  **/
  listIncomingPhoneNumberAssignedAddOnExtension(
    req: operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.ListIncomingPhoneNumberAssignedAddOnExtensionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json", req.pathParams);
    
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
        const res: operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberAssignedAddOnExtensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listIncomingPhoneNumberLocal(
    req: operations.ListIncomingPhoneNumberLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberLocalRequest(req);
    }
    
    let baseURL: string = operations.ListIncomingPhoneNumberLocalServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", req.pathParams);
    
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
        const res: operations.ListIncomingPhoneNumberLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberLocalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listIncomingPhoneNumberMobile(
    req: operations.ListIncomingPhoneNumberMobileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberMobileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberMobileRequest(req);
    }
    
    let baseURL: string = operations.ListIncomingPhoneNumberMobileServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", req.pathParams);
    
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
        const res: operations.ListIncomingPhoneNumberMobileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberMobileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listIncomingPhoneNumberTollFree(
    req: operations.ListIncomingPhoneNumberTollFreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberTollFreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberTollFreeRequest(req);
    }
    
    let baseURL: string = operations.ListIncomingPhoneNumberTollFreeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", req.pathParams);
    
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
        const res: operations.ListIncomingPhoneNumberTollFreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberTollFreeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listKey(
    req: operations.ListKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListKeyRequest(req);
    }
    
    let baseURL: string = operations.ListKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys.json", req.pathParams);
    
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
        const res: operations.ListKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMedia - Retrieve a list of Media resources belonging to the account used to make the request
  **/
  listMedia(
    req: operations.ListMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMediaRequest(req);
    }
    
    let baseURL: string = operations.ListMediaServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json", req.pathParams);
    
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
        const res: operations.ListMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMediaResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMember - Retrieve the members of the queue
  **/
  listMember(
    req: operations.ListMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMemberRequest(req);
    }
    
    let baseURL: string = operations.ListMemberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json", req.pathParams);
    
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
        const res: operations.ListMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMemberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listMessage - Retrieve a list of messages belonging to the account used to make the request
  **/
  listMessage(
    req: operations.ListMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMessageRequest(req);
    }
    
    let baseURL: string = operations.ListMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages.json", req.pathParams);
    
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
        const res: operations.ListMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listMessageResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listNotification - Retrieve a list of notifications belonging to the account used to make the request
  **/
  listNotification(
    req: operations.ListNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNotificationRequest(req);
    }
    
    let baseURL: string = operations.ListNotificationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Notifications.json", req.pathParams);
    
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
        const res: operations.ListNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listNotificationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listOutgoingCallerId - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
  **/
  listOutgoingCallerId(
    req: operations.ListOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.ListOutgoingCallerIdServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", req.pathParams);
    
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
        const res: operations.ListOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listOutgoingCallerIdResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listParticipant - Retrieve a list of participants belonging to the account used to make the request
  **/
  listParticipant(
    req: operations.ListParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListParticipantRequest(req);
    }
    
    let baseURL: string = operations.ListParticipantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", req.pathParams);
    
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
        const res: operations.ListParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listQueue - Retrieve a list of queues belonging to the account used to make the request
  **/
  listQueue(
    req: operations.ListQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListQueueRequest(req);
    }
    
    let baseURL: string = operations.ListQueueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues.json", req.pathParams);
    
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
        const res: operations.ListQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listQueueResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRecording - Retrieve a list of recordings belonging to the account used to make the request
  **/
  listRecording(
    req: operations.ListRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingRequest(req);
    }
    
    let baseURL: string = operations.ListRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings.json", req.pathParams);
    
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
        const res: operations.ListRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRecordingAddOnResult - Retrieve a list of results belonging to the recording
  **/
  listRecordingAddOnResult(
    req: operations.ListRecordingAddOnResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingAddOnResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingAddOnResultRequest(req);
    }
    
    let baseURL: string = operations.ListRecordingAddOnResultServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json", req.pathParams);
    
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
        const res: operations.ListRecordingAddOnResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRecordingAddOnResultResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRecordingAddOnResultPayload - Retrieve a list of payloads belonging to the AddOnResult
  **/
  listRecordingAddOnResultPayload(
    req: operations.ListRecordingAddOnResultPayloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingAddOnResultPayloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingAddOnResultPayloadRequest(req);
    }
    
    let baseURL: string = operations.ListRecordingAddOnResultPayloadServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json", req.pathParams);
    
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
        const res: operations.ListRecordingAddOnResultPayloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRecordingAddOnResultPayloadResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listRecordingTranscription(
    req: operations.ListRecordingTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.ListRecordingTranscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json", req.pathParams);
    
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
        const res: operations.ListRecordingTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRecordingTranscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listShortCode - Retrieve a list of short-codes belonging to the account used to make the request
  **/
  listShortCode(
    req: operations.ListShortCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListShortCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListShortCodeRequest(req);
    }
    
    let baseURL: string = operations.ListShortCodeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json", req.pathParams);
    
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
        const res: operations.ListShortCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listShortCodeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listSigningKey(
    req: operations.ListSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.ListSigningKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", req.pathParams);
    
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
        const res: operations.ListSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSigningKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipAuthCallsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
  **/
  listSipAuthCallsCredentialListMapping(
    req: operations.ListSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.ListSipAuthCallsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", req.pathParams);
    
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
        const res: operations.ListSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipAuthCallsCredentialListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipAuthCallsIpAccessControlListMapping - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
  **/
  listSipAuthCallsIpAccessControlListMapping(
    req: operations.ListSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.ListSipAuthCallsIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", req.pathParams);
    
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
        const res: operations.ListSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipAuthCallsIpAccessControlListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipAuthRegistrationsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
  **/
  listSipAuthRegistrationsCredentialListMapping(
    req: operations.ListSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.ListSipAuthRegistrationsCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", req.pathParams);
    
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
        const res: operations.ListSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipAuthRegistrationsCredentialListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipCredential - Retrieve a list of credentials.
  **/
  listSipCredential(
    req: operations.ListSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.ListSipCredentialServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", req.pathParams);
    
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
        const res: operations.ListSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipCredentialResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipCredentialList - Get All Credential Lists
  **/
  listSipCredentialList(
    req: operations.ListSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.ListSipCredentialListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", req.pathParams);
    
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
        const res: operations.ListSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipCredentialListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipCredentialListMapping - Read multiple CredentialListMapping resources from an account.
  **/
  listSipCredentialListMapping(
    req: operations.ListSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.ListSipCredentialListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", req.pathParams);
    
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
        const res: operations.ListSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipCredentialListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipDomain - Retrieve a list of domains belonging to the account used to make the request
  **/
  listSipDomain(
    req: operations.ListSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipDomainRequest(req);
    }
    
    let baseURL: string = operations.ListSipDomainServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", req.pathParams);
    
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
        const res: operations.ListSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipDomainResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipIpAccessControlList - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
  **/
  listSipIpAccessControlList(
    req: operations.ListSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.ListSipIpAccessControlListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", req.pathParams);
    
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
        const res: operations.ListSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipIpAccessControlListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipIpAccessControlListMapping - Retrieve a list of IpAccessControlListMapping resources.
  **/
  listSipIpAccessControlListMapping(
    req: operations.ListSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.ListSipIpAccessControlListMappingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", req.pathParams);
    
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
        const res: operations.ListSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipIpAccessControlListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listSipIpAddress - Read multiple IpAddress resources.
  **/
  listSipIpAddress(
    req: operations.ListSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.ListSipIpAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", req.pathParams);
    
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
        const res: operations.ListSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listSipIpAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTranscription - Retrieve a list of transcriptions belonging to the account used to make the request
  **/
  listTranscription(
    req: operations.ListTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.ListTranscriptionServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Transcriptions.json", req.pathParams);
    
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
        const res: operations.ListTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTranscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listUsageRecord - Retrieve a list of usage-records belonging to the account used to make the request
  **/
  listUsageRecord(
    req: operations.ListUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordAllTime(
    req: operations.ListUsageRecordAllTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordAllTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordAllTimeRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordAllTimeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordAllTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordAllTimeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordDaily(
    req: operations.ListUsageRecordDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordDailyRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordDailyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Daily.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordDailyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordDailyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordLastMonth(
    req: operations.ListUsageRecordLastMonthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordLastMonthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordLastMonthRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordLastMonthServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/LastMonth.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordLastMonthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordLastMonthResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordMonthly(
    req: operations.ListUsageRecordMonthlyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordMonthlyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordMonthlyRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordMonthlyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordMonthlyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordMonthlyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordThisMonth(
    req: operations.ListUsageRecordThisMonthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordThisMonthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordThisMonthRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordThisMonthServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/ThisMonth.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordThisMonthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordThisMonthResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordToday(
    req: operations.ListUsageRecordTodayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordTodayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordTodayRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordTodayServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordTodayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordTodayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordYearly(
    req: operations.ListUsageRecordYearlyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordYearlyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordYearlyRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordYearlyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordYearlyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordYearlyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  listUsageRecordYesterday(
    req: operations.ListUsageRecordYesterdayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordYesterdayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordYesterdayRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordYesterdayServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json", req.pathParams);
    
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
        const res: operations.ListUsageRecordYesterdayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordYesterdayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listUsageTrigger - Retrieve a list of usage-triggers belonging to the account used to make the request
  **/
  listUsageTrigger(
    req: operations.ListUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.ListUsageTriggerServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", req.pathParams);
    
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
        const res: operations.ListUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUsageTriggerResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateAccount - Modify the properties of a given Account
  **/
  updateAccount(
    req: operations.UpdateAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAccountRequest(req);
    }
    
    let baseURL: string = operations.UpdateAccountServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010Account = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateAddress(
    req: operations.UpdateAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAddressRequest(req);
    }
    
    let baseURL: string = operations.UpdateAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateApplication - Updates the application's properties
  **/
  updateApplication(
    req: operations.UpdateApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateApplicationRequest(req);
    }
    
    let baseURL: string = operations.UpdateApplicationServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCall - Initiates a call redirect or terminates a call
  **/
  updateCall(
    req: operations.UpdateCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCallRequest(req);
    }
    
    let baseURL: string = operations.UpdateCallServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCallFeedback - Update a Feedback resource for a call
  **/
  updateCallFeedback(
    req: operations.UpdateCallFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCallFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCallFeedbackRequest(req);
    }
    
    let baseURL: string = operations.UpdateCallFeedbackServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", req.pathParams);

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
        const res: operations.UpdateCallFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCallRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
  **/
  updateCallRecording(
    req: operations.UpdateCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.UpdateCallRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateConference(
    req: operations.UpdateConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConferenceRequest(req);
    }
    
    let baseURL: string = operations.UpdateConferenceServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateConferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateConferenceRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
  **/
  updateConferenceRecording(
    req: operations.UpdateConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.UpdateConferenceRecordingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceConferenceRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateConnectApp - Update a connect-app with the specified parameters
  **/
  updateConnectApp(
    req: operations.UpdateConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConnectAppRequest(req);
    }
    
    let baseURL: string = operations.UpdateConnectAppServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConnectApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateIncomingPhoneNumber - Update an incoming-phone-number instance.
  **/
  updateIncomingPhoneNumber(
    req: operations.UpdateIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.UpdateIncomingPhoneNumberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateKey(
    req: operations.UpdateKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateKeyRequest(req);
    }
    
    let baseURL: string = operations.UpdateKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMember - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
  **/
  updateMember(
    req: operations.UpdateMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMemberRequest(req);
    }
    
    let baseURL: string = operations.UpdateMemberServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", req.pathParams);

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
        const res: operations.UpdateMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueueMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMessage - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
  **/
  updateMessage(
    req: operations.UpdateMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMessageRequest(req);
    }
    
    let baseURL: string = operations.UpdateMessageServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOutgoingCallerId - Updates the caller-id
  **/
  updateOutgoingCallerId(
    req: operations.UpdateOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.UpdateOutgoingCallerIdServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountOutgoingCallerId = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateParticipant - Update the properties of the participant
  **/
  updateParticipant(
    req: operations.UpdateParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateParticipantRequest(req);
    }
    
    let baseURL: string = operations.UpdateParticipantServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", req.pathParams);

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
        const res: operations.UpdateParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePayments - update an instance of payments with different phases of payment flows.
  **/
  updatePayments(
    req: operations.UpdatePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentsRequest(req);
    }
    
    let baseURL: string = operations.UpdatePaymentsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json", req.pathParams);

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
        const res: operations.UpdatePaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallPayments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateQueue - Update the queue with the new parameters
  **/
  updateQueue(
    req: operations.UpdateQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateQueueRequest(req);
    }
    
    let baseURL: string = operations.UpdateQueueServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateShortCode - Update a short code with the following parameters
  **/
  updateShortCode(
    req: operations.UpdateShortCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateShortCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateShortCodeRequest(req);
    }
    
    let baseURL: string = operations.UpdateShortCodeServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateShortCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountShortCode = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  updateSigningKey(
    req: operations.UpdateSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.UpdateSigningKeyServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSigningKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSipCredential - Update a credential resource.
  **/
  updateSipCredential(
    req: operations.UpdateSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.UpdateSipCredentialServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialListSipCredential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSipCredentialList - Update a Credential List
  **/
  updateSipCredentialList(
    req: operations.UpdateSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.UpdateSipCredentialListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSipDomain - Update the attributes of a domain
  **/
  updateSipDomain(
    req: operations.UpdateSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipDomainRequest(req);
    }
    
    let baseURL: string = operations.UpdateSipDomainServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSipIpAccessControlList - Rename an IpAccessControlList
  **/
  updateSipIpAccessControlList(
    req: operations.UpdateSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.UpdateSipIpAccessControlListServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSipIpAddress - Update an IpAddress resource.
  **/
  updateSipIpAddress(
    req: operations.UpdateSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.UpdateSipIpAddressServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSiprec - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
  **/
  updateSiprec(
    req: operations.UpdateSiprecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSiprecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSiprecRequest(req);
    }
    
    let baseURL: string = operations.UpdateSiprecServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateSiprecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallSiprec = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateStream - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
  **/
  updateStream(
    req: operations.UpdateStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateStreamRequest(req);
    }
    
    let baseURL: string = operations.UpdateStreamServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUsageTrigger - Update an instance of a usage trigger
  **/
  updateUsageTrigger(
    req: operations.UpdateUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.UpdateUsageTriggerServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", req.pathParams);

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
        const res: operations.UpdateUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountUsageUsageTrigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
