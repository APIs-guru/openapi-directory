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
  
  // CreateAccount - Create a new Twilio Subaccount from the account making the request
  CreateAccount(
    req: operations.CreateAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAccountRequest(req);
    }
    
    let baseURL: string = operations.CREATEACCOUNT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/2010-04-01/Accounts.json";
    
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
        let res: operations.CreateAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010Account = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateAddress(
    req: operations.CreateAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAddressRequest(req);
    }
    
    let baseURL: string = operations.CREATEADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", req.pathParams);
    
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
        let res: operations.CreateAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateApplication - Create a new application within your account
  CreateApplication(
    req: operations.CreateApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateApplicationRequest(req);
    }
    
    let baseURL: string = operations.CREATEAPPLICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications.json", req.pathParams);
    
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
        let res: operations.CreateApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCall - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
  CreateCall(
    req: operations.CreateCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallRequest(req);
    }
    
    let baseURL: string = operations.CREATECALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls.json", req.pathParams);
    
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
        let res: operations.CreateCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCallFeedbackSummary - Create a FeedbackSummary resource for a call
  CreateCallFeedbackSummary(
    req: operations.CreateCallFeedbackSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallFeedbackSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallFeedbackSummaryRequest(req);
    }
    
    let baseURL: string = operations.CREATECALLFEEDBACKSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary.json", req.pathParams);
    
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
        let res: operations.CreateCallFeedbackSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedbackSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCallRecording - Create a recording for the call
  CreateCallRecording(
    req: operations.CreateCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.CREATECALLRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", req.pathParams);
    
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
        let res: operations.CreateCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateIncomingPhoneNumber - Purchase a phone-number for the account.
  CreateIncomingPhoneNumber(
    req: operations.CreateIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.CREATEINCOMINGPHONENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", req.pathParams);
    
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
        let res: operations.CreateIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateIncomingPhoneNumberAssignedAddOn - Assign an Add-on installation to the Number specified.
  CreateIncomingPhoneNumberAssignedAddOn(
    req: operations.CreateIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.CREATEINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", req.pathParams);
    
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
        let res: operations.CreateIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateIncomingPhoneNumberLocal(
    req: operations.CreateIncomingPhoneNumberLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberLocalRequest(req);
    }
    
    let baseURL: string = operations.CREATEINCOMINGPHONENUMBERLOCAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", req.pathParams);
    
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
        let res: operations.CreateIncomingPhoneNumberLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateIncomingPhoneNumberMobile(
    req: operations.CreateIncomingPhoneNumberMobileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberMobileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberMobileRequest(req);
    }
    
    let baseURL: string = operations.CREATEINCOMINGPHONENUMBERMOBILE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", req.pathParams);
    
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
        let res: operations.CreateIncomingPhoneNumberMobileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateIncomingPhoneNumberTollFree(
    req: operations.CreateIncomingPhoneNumberTollFreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIncomingPhoneNumberTollFreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIncomingPhoneNumberTollFreeRequest(req);
    }
    
    let baseURL: string = operations.CREATEINCOMINGPHONENUMBERTOLLFREE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", req.pathParams);
    
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
        let res: operations.CreateIncomingPhoneNumberTollFreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateMessage - Send a message from the account used to make the request
  CreateMessage(
    req: operations.CreateMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessageRequest(req);
    }
    
    let baseURL: string = operations.CREATEMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages.json", req.pathParams);
    
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
        let res: operations.CreateMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateMessageFeedback(
    req: operations.CreateMessageFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessageFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessageFeedbackRequest(req);
    }
    
    let baseURL: string = operations.CREATEMESSAGEFEEDBACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json", req.pathParams);
    
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
        let res: operations.CreateMessageFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessageMessageFeedback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateNewKey(
    req: operations.CreateNewKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewKeyRequest(req);
    }
    
    let baseURL: string = operations.CREATENEWKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys.json", req.pathParams);
    
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
        let res: operations.CreateNewKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountNewKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateNewSigningKey - Create a new Signing Key for the account making the request.
  CreateNewSigningKey(
    req: operations.CreateNewSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.CREATENEWSIGNINGKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", req.pathParams);
    
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
        let res: operations.CreateNewSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountNewSigningKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateParticipant(
    req: operations.CreateParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateParticipantRequest(req);
    }
    
    let baseURL: string = operations.CREATEPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", req.pathParams);
    
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
        let res: operations.CreateParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePayments - create an instance of payments. This will start a new payments session
  CreatePayments(
    req: operations.CreatePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePaymentsRequest(req);
    }
    
    let baseURL: string = operations.CREATEPAYMENTS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json", req.pathParams);
    
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
        let res: operations.CreatePaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallPayments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateQueue - Create a queue
  CreateQueue(
    req: operations.CreateQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateQueueRequest(req);
    }
    
    let baseURL: string = operations.CREATEQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues.json", req.pathParams);
    
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
        let res: operations.CreateQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipAuthCallsCredentialListMapping - Create a new credential list mapping resource
  CreateSipAuthCallsCredentialListMapping(
    req: operations.CreateSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", req.pathParams);
    
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
        let res: operations.CreateSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipAuthCallsIpAccessControlListMapping - Create a new IP Access Control List mapping
  CreateSipAuthCallsIpAccessControlListMapping(
    req: operations.CreateSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", req.pathParams);
    
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
        let res: operations.CreateSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipAuthRegistrationsCredentialListMapping - Create a new credential list mapping resource
  CreateSipAuthRegistrationsCredentialListMapping(
    req: operations.CreateSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", req.pathParams);
    
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
        let res: operations.CreateSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipCredential - Create a new credential resource.
  CreateSipCredential(
    req: operations.CreateSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPCREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", req.pathParams);
    
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
        let res: operations.CreateSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialListSipCredential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipCredentialList - Create a Credential List
  CreateSipCredentialList(
    req: operations.CreateSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPCREDENTIALLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", req.pathParams);
    
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
        let res: operations.CreateSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipCredentialListMapping - Create a CredentialListMapping resource for an account.
  CreateSipCredentialListMapping(
    req: operations.CreateSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", req.pathParams);
    
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
        let res: operations.CreateSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipDomain - Create a new Domain
  CreateSipDomain(
    req: operations.CreateSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipDomainRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPDOMAIN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", req.pathParams);
    
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
        let res: operations.CreateSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipIpAccessControlList - Create a new IpAccessControlList resource
  CreateSipIpAccessControlList(
    req: operations.CreateSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPIPACCESSCONTROLLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", req.pathParams);
    
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
        let res: operations.CreateSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipIpAccessControlListMapping - Create a new IpAccessControlListMapping resource.
  CreateSipIpAccessControlListMapping(
    req: operations.CreateSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", req.pathParams);
    
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
        let res: operations.CreateSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSipIpAddress - Create a new IpAddress resource.
  CreateSipIpAddress(
    req: operations.CreateSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPIPADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", req.pathParams);
    
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
        let res: operations.CreateSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSiprec - Create a Siprec
  CreateSiprec(
    req: operations.CreateSiprecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSiprecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSiprecRequest(req);
    }
    
    let baseURL: string = operations.CREATESIPREC_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json", req.pathParams);
    
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
        let res: operations.CreateSiprecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallSiprec = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateStream - Create a Stream
  CreateStream(
    req: operations.CreateStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateStreamRequest(req);
    }
    
    let baseURL: string = operations.CREATESTREAM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json", req.pathParams);
    
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
        let res: operations.CreateStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateToken - Create a new token for ICE servers
  CreateToken(
    req: operations.CreateTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTokenRequest(req);
    }
    
    let baseURL: string = operations.CREATETOKEN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Tokens.json", req.pathParams);
    
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
        let res: operations.CreateTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateUsageTrigger - Create a new UsageTrigger
  CreateUsageTrigger(
    req: operations.CreateUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.CREATEUSAGETRIGGER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", req.pathParams);
    
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
        let res: operations.CreateUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountUsageUsageTrigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateValidationRequest(
    req: operations.CreateValidationRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateValidationRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateValidationRequestRequest(req);
    }
    
    let baseURL: string = operations.CREATEVALIDATIONREQUEST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", req.pathParams);
    
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
        let res: operations.CreateValidationRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountValidationRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteAddress(
    req: operations.DeleteAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddressRequest(req);
    }
    
    let baseURL: string = operations.DELETEADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteApplication - Delete the application by the specified application sid
  DeleteApplication(
    req: operations.DeleteApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApplicationRequest(req);
    }
    
    let baseURL: string = operations.DELETEAPPLICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCall - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
  DeleteCall(
    req: operations.DeleteCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCallRequest(req);
    }
    
    let baseURL: string = operations.DELETECALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCallFeedbackSummary - Delete a FeedbackSummary resource from a call
  DeleteCallFeedbackSummary(
    req: operations.DeleteCallFeedbackSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCallFeedbackSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCallFeedbackSummaryRequest(req);
    }
    
    let baseURL: string = operations.DELETECALLFEEDBACKSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCallFeedbackSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCallRecording - Delete a recording from your account
  DeleteCallRecording(
    req: operations.DeleteCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.DELETECALLRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConferenceRecording - Delete a recording from your account
  DeleteConferenceRecording(
    req: operations.DeleteConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.DELETECONFERENCERECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConnectApp - Delete an instance of a connect-app
  DeleteConnectApp(
    req: operations.DeleteConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConnectAppRequest(req);
    }
    
    let baseURL: string = operations.DELETECONNECTAPP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteIncomingPhoneNumber - Delete a phone-numbers belonging to the account used to make the request.
  DeleteIncomingPhoneNumber(
    req: operations.DeleteIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.DELETEINCOMINGPHONENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteIncomingPhoneNumberAssignedAddOn - Remove the assignment of an Add-on installation from the Number specified.
  DeleteIncomingPhoneNumberAssignedAddOn(
    req: operations.DeleteIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.DELETEINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteKey(
    req: operations.DeleteKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteKeyRequest(req);
    }
    
    let baseURL: string = operations.DELETEKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMedia - Delete media from your account. Once delete, you will no longer be billed
  DeleteMedia(
    req: operations.DeleteMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMediaRequest(req);
    }
    
    let baseURL: string = operations.DELETEMEDIA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMessage - Deletes a message record from your account
  DeleteMessage(
    req: operations.DeleteMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessageRequest(req);
    }
    
    let baseURL: string = operations.DELETEMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteOutgoingCallerId - Delete the caller-id specified from the account
  DeleteOutgoingCallerId(
    req: operations.DeleteOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.DELETEOUTGOINGCALLERID_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteParticipant - Kick a participant from a given conference
  DeleteParticipant(
    req: operations.DeleteParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteParticipantRequest(req);
    }
    
    let baseURL: string = operations.DELETEPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteQueue - Remove an empty queue
  DeleteQueue(
    req: operations.DeleteQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteQueueRequest(req);
    }
    
    let baseURL: string = operations.DELETEQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRecording - Delete a recording from your account
  DeleteRecording(
    req: operations.DeleteRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingRequest(req);
    }
    
    let baseURL: string = operations.DELETERECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRecordingAddOnResult - Delete a result and purge all associated Payloads
  DeleteRecordingAddOnResult(
    req: operations.DeleteRecordingAddOnResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingAddOnResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingAddOnResultRequest(req);
    }
    
    let baseURL: string = operations.DELETERECORDINGADDONRESULT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRecordingAddOnResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRecordingAddOnResultPayload - Delete a payload from the result along with all associated Data
  DeleteRecordingAddOnResultPayload(
    req: operations.DeleteRecordingAddOnResultPayloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingAddOnResultPayloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingAddOnResultPayloadRequest(req);
    }
    
    let baseURL: string = operations.DELETERECORDINGADDONRESULTPAYLOAD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRecordingAddOnResultPayloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRecordingTranscription(
    req: operations.DeleteRecordingTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.DELETERECORDINGTRANSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRecordingTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteSigningKey(
    req: operations.DeleteSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.DELETESIGNINGKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipAuthCallsCredentialListMapping - Delete a credential list mapping from the requested domain
  DeleteSipAuthCallsCredentialListMapping(
    req: operations.DeleteSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipAuthCallsIpAccessControlListMapping - Delete an IP Access Control List mapping from the requested domain
  DeleteSipAuthCallsIpAccessControlListMapping(
    req: operations.DeleteSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipAuthRegistrationsCredentialListMapping - Delete a credential list mapping from the requested domain
  DeleteSipAuthRegistrationsCredentialListMapping(
    req: operations.DeleteSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipCredential - Delete a credential resource.
  DeleteSipCredential(
    req: operations.DeleteSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPCREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipCredentialList - Delete a Credential List
  DeleteSipCredentialList(
    req: operations.DeleteSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPCREDENTIALLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipCredentialListMapping - Delete a CredentialListMapping resource from an account.
  DeleteSipCredentialListMapping(
    req: operations.DeleteSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipDomain - Delete an instance of a Domain
  DeleteSipDomain(
    req: operations.DeleteSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipDomainRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPDOMAIN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipIpAccessControlList - Delete an IpAccessControlList from the requested account
  DeleteSipIpAccessControlList(
    req: operations.DeleteSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPIPACCESSCONTROLLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipIpAccessControlListMapping - Delete an IpAccessControlListMapping resource.
  DeleteSipIpAccessControlListMapping(
    req: operations.DeleteSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSipIpAddress - Delete an IpAddress resource.
  DeleteSipIpAddress(
    req: operations.DeleteSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.DELETESIPIPADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTranscription - Delete a transcription from the account used to make the request
  DeleteTranscription(
    req: operations.DeleteTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.DELETETRANSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteUsageTrigger(
    req: operations.DeleteUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.DELETEUSAGETRIGGER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchAccount - Fetch the account specified by the provided Account Sid
  FetchAccount(
    req: operations.FetchAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAccountRequest(req);
    }
    
    let baseURL: string = operations.FETCHACCOUNT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010Account = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchAddress(
    req: operations.FetchAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAddressRequest(req);
    }
    
    let baseURL: string = operations.FETCHADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchApplication - Fetch the application specified by the provided sid
  FetchApplication(
    req: operations.FetchApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchApplicationRequest(req);
    }
    
    let baseURL: string = operations.FETCHAPPLICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchAuthorizedConnectApp - Fetch an instance of an authorized-connect-app
  FetchAuthorizedConnectApp(
    req: operations.FetchAuthorizedConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAuthorizedConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAuthorizedConnectAppRequest(req);
    }
    
    let baseURL: string = operations.FETCHAUTHORIZEDCONNECTAPP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAuthorizedConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAuthorizedConnectApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchAvailablePhoneNumberCountry(
    req: operations.FetchAvailablePhoneNumberCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAvailablePhoneNumberCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAvailablePhoneNumberCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHAVAILABLEPHONENUMBERCOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAvailablePhoneNumberCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAvailablePhoneNumberCountry = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchBalance - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
  FetchBalance(
    req: operations.FetchBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchBalanceRequest(req);
    }
    
    let baseURL: string = operations.FETCHBALANCE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Balance.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountBalance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCall - Fetch the call specified by the provided Call SID
  FetchCall(
    req: operations.FetchCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallRequest(req);
    }
    
    let baseURL: string = operations.FETCHCALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCallFeedback - Fetch a Feedback resource from a call
  FetchCallFeedback(
    req: operations.FetchCallFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallFeedbackRequest(req);
    }
    
    let baseURL: string = operations.FETCHCALLFEEDBACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCallFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCallFeedbackSummary - Fetch a FeedbackSummary resource from a call
  FetchCallFeedbackSummary(
    req: operations.FetchCallFeedbackSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallFeedbackSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallFeedbackSummaryRequest(req);
    }
    
    let baseURL: string = operations.FETCHCALLFEEDBACKSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCallFeedbackSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedbackSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchCallNotification(
    req: operations.FetchCallNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallNotificationRequest(req);
    }
    
    let baseURL: string = operations.FETCHCALLNOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCallNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallNotificationInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCallRecording - Fetch an instance of a recording for a call
  FetchCallRecording(
    req: operations.FetchCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.FETCHCALLRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConference - Fetch an instance of a conference
  FetchConference(
    req: operations.FetchConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConferenceRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFERENCE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConferenceRecording - Fetch an instance of a recording for a call
  FetchConferenceRecording(
    req: operations.FetchConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFERENCERECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceConferenceRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConnectApp - Fetch an instance of a connect-app
  FetchConnectApp(
    req: operations.FetchConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConnectAppRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONNECTAPP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConnectApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchIncomingPhoneNumber - Fetch an incoming-phone-number belonging to the account used to make the request.
  FetchIncomingPhoneNumber(
    req: operations.FetchIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.FETCHINCOMINGPHONENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchIncomingPhoneNumberAssignedAddOn - Fetch an instance of an Add-on installation currently assigned to this Number.
  FetchIncomingPhoneNumberAssignedAddOn(
    req: operations.FetchIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.FETCHINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchIncomingPhoneNumberAssignedAddOnExtension - Fetch an instance of an Extension for the Assigned Add-on.
  FetchIncomingPhoneNumberAssignedAddOnExtension(
    req: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.FETCHINCOMINGPHONENUMBERASSIGNEDADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchKey(
    req: operations.FetchKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchKeyRequest(req);
    }
    
    let baseURL: string = operations.FETCHKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMedia - Fetch a single media instance belonging to the account used to make the request
  FetchMedia(
    req: operations.FetchMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMediaRequest(req);
    }
    
    let baseURL: string = operations.FETCHMEDIA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessageMedia = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMember - Fetch a specific member from the queue
  FetchMember(
    req: operations.FetchMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMemberRequest(req);
    }
    
    let baseURL: string = operations.FETCHMEMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueueMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMessage - Fetch a message belonging to the account used to make the request
  FetchMessage(
    req: operations.FetchMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMessageRequest(req);
    }
    
    let baseURL: string = operations.FETCHMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchNotification - Fetch a notification belonging to the account used to make the request
  FetchNotification(
    req: operations.FetchNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchNotificationRequest(req);
    }
    
    let baseURL: string = operations.FETCHNOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountNotificationInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchOutgoingCallerId - Fetch an outgoing-caller-id belonging to the account used to make the request
  FetchOutgoingCallerId(
    req: operations.FetchOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.FETCHOUTGOINGCALLERID_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountOutgoingCallerId = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchParticipant - Fetch an instance of a participant
  FetchParticipant(
    req: operations.FetchParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchParticipantRequest(req);
    }
    
    let baseURL: string = operations.FETCHPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchQueue - Fetch an instance of a queue identified by the QueueSid
  FetchQueue(
    req: operations.FetchQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchQueueRequest(req);
    }
    
    let baseURL: string = operations.FETCHQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRecording - Fetch an instance of a recording
  FetchRecording(
    req: operations.FetchRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingRequest(req);
    }
    
    let baseURL: string = operations.FETCHRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", req.pathParams);
    
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
        let res: operations.FetchRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRecordingAddOnResult - Fetch an instance of an AddOnResult
  FetchRecordingAddOnResult(
    req: operations.FetchRecordingAddOnResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingAddOnResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingAddOnResultRequest(req);
    }
    
    let baseURL: string = operations.FETCHRECORDINGADDONRESULT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRecordingAddOnResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecordingRecordingAddOnResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRecordingAddOnResultPayload - Fetch an instance of a result payload
  FetchRecordingAddOnResultPayload(
    req: operations.FetchRecordingAddOnResultPayloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingAddOnResultPayloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingAddOnResultPayloadRequest(req);
    }
    
    let baseURL: string = operations.FETCHRECORDINGADDONRESULTPAYLOAD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRecordingAddOnResultPayloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchRecordingTranscription(
    req: operations.FetchRecordingTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.FETCHRECORDINGTRANSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRecordingTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountRecordingRecordingTranscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchShortCode - Fetch an instance of a short code
  FetchShortCode(
    req: operations.FetchShortCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchShortCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchShortCodeRequest(req);
    }
    
    let baseURL: string = operations.FETCHSHORTCODE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchShortCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountShortCode = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSigningKey(
    req: operations.FetchSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIGNINGKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSigningKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipAuthCallsCredentialListMapping - Fetch a specific instance of a credential list mapping
  FetchSipAuthCallsCredentialListMapping(
    req: operations.FetchSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipAuthCallsIpAccessControlListMapping - Fetch a specific instance of an IP Access Control List mapping
  FetchSipAuthCallsIpAccessControlListMapping(
    req: operations.FetchSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipAuthRegistrationsCredentialListMapping - Fetch a specific instance of a credential list mapping
  FetchSipAuthRegistrationsCredentialListMapping(
    req: operations.FetchSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipCredential - Fetch a single credential.
  FetchSipCredential(
    req: operations.FetchSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPCREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialListSipCredential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipCredentialList - Get a Credential List
  FetchSipCredentialList(
    req: operations.FetchSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPCREDENTIALLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipCredentialListMapping - Fetch a single CredentialListMapping resource from an account.
  FetchSipCredentialListMapping(
    req: operations.FetchSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipCredentialListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipDomain - Fetch an instance of a Domain
  FetchSipDomain(
    req: operations.FetchSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipDomainRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPDOMAIN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipIpAccessControlList - Fetch a specific instance of an IpAccessControlList
  FetchSipIpAccessControlList(
    req: operations.FetchSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPIPACCESSCONTROLLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipIpAccessControlListMapping - Fetch an IpAccessControlListMapping resource.
  FetchSipIpAccessControlListMapping(
    req: operations.FetchSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSipIpAddress - Read one IpAddress resource.
  FetchSipIpAddress(
    req: operations.FetchSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.FETCHSIPIPADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTranscription - Fetch an instance of a Transcription
  FetchTranscription(
    req: operations.FetchTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRANSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountTranscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchUsageTrigger - Fetch and instance of a usage-trigger
  FetchUsageTrigger(
    req: operations.FetchUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.FETCHUSAGETRIGGER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountUsageUsageTrigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAccount - Retrieves a collection of Accounts belonging to the account used to make the request
  ListAccount(
    req: operations.ListAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountRequest(req);
    }
    
    let baseURL: string = operations.LISTACCOUNT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/2010-04-01/Accounts.json";
    
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
        let res: operations.ListAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAccountResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAddress(
    req: operations.ListAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAddressRequest(req);
    }
    
    let baseURL: string = operations.LISTADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", req.pathParams);
    
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
        let res: operations.ListAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListApplication - Retrieve a list of applications representing an application within the requesting account
  ListApplication(
    req: operations.ListApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListApplicationRequest(req);
    }
    
    let baseURL: string = operations.LISTAPPLICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications.json", req.pathParams);
    
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
        let res: operations.ListApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listApplicationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAuthorizedConnectApp - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
  ListAuthorizedConnectApp(
    req: operations.ListAuthorizedConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAuthorizedConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAuthorizedConnectAppRequest(req);
    }
    
    let baseURL: string = operations.LISTAUTHORIZEDCONNECTAPP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json", req.pathParams);
    
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
        let res: operations.ListAuthorizedConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAuthorizedConnectAppResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberCountry(
    req: operations.ListAvailablePhoneNumberCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberCountryRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERCOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberLocal(
    req: operations.ListAvailablePhoneNumberLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberLocalRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERLOCAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberLocalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberMachineToMachine(
    req: operations.ListAvailablePhoneNumberMachineToMachineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberMachineToMachineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberMachineToMachineRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERMACHINETOMACHINE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberMachineToMachineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberMachineToMachineResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberMobile(
    req: operations.ListAvailablePhoneNumberMobileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberMobileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberMobileRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERMOBILE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberMobileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberMobileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberNational(
    req: operations.ListAvailablePhoneNumberNationalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberNationalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberNationalRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERNATIONAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberNationalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberNationalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberSharedCost(
    req: operations.ListAvailablePhoneNumberSharedCostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberSharedCostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberSharedCostRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERSHAREDCOST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberSharedCostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberSharedCostResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberTollFree(
    req: operations.ListAvailablePhoneNumberTollFreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberTollFreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberTollFreeRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERTOLLFREE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberTollFreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberTollFreeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListAvailablePhoneNumberVoip(
    req: operations.ListAvailablePhoneNumberVoipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailablePhoneNumberVoipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailablePhoneNumberVoipRequest(req);
    }
    
    let baseURL: string = operations.LISTAVAILABLEPHONENUMBERVOIP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json", req.pathParams);
    
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
        let res: operations.ListAvailablePhoneNumberVoipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAvailablePhoneNumberVoipResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCall - Retrieves a collection of calls made to and from your account
  ListCall(
    req: operations.ListCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallRequest(req);
    }
    
    let baseURL: string = operations.LISTCALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls.json", req.pathParams);
    
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
        let res: operations.ListCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCallResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCallEvent - Retrieve a list of all events for a call.
  ListCallEvent(
    req: operations.ListCallEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallEventRequest(req);
    }
    
    let baseURL: string = operations.LISTCALLEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json", req.pathParams);
    
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
        let res: operations.ListCallEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCallEventResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListCallNotification(
    req: operations.ListCallNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallNotificationRequest(req);
    }
    
    let baseURL: string = operations.LISTCALLNOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json", req.pathParams);
    
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
        let res: operations.ListCallNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCallNotificationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCallRecording - Retrieve a list of recordings belonging to the call used to make the request
  ListCallRecording(
    req: operations.ListCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.LISTCALLRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", req.pathParams);
    
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
        let res: operations.ListCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCallRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConference - Retrieve a list of conferences belonging to the account used to make the request
  ListConference(
    req: operations.ListConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConferenceRequest(req);
    }
    
    let baseURL: string = operations.LISTCONFERENCE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences.json", req.pathParams);
    
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
        let res: operations.ListConferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConferenceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConferenceRecording - Retrieve a list of recordings belonging to the call used to make the request
  ListConferenceRecording(
    req: operations.ListConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.LISTCONFERENCERECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json", req.pathParams);
    
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
        let res: operations.ListConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConferenceRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConnectApp - Retrieve a list of connect-apps belonging to the account used to make the request
  ListConnectApp(
    req: operations.ListConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConnectAppRequest(req);
    }
    
    let baseURL: string = operations.LISTCONNECTAPP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps.json", req.pathParams);
    
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
        let res: operations.ListConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConnectAppResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListDependentPhoneNumber(
    req: operations.ListDependentPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDependentPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDependentPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.LISTDEPENDENTPHONENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json", req.pathParams);
    
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
        let res: operations.ListDependentPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDependentPhoneNumberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListIncomingPhoneNumber - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
  ListIncomingPhoneNumber(
    req: operations.ListIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.LISTINCOMINGPHONENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", req.pathParams);
    
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
        let res: operations.ListIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListIncomingPhoneNumberAssignedAddOn - Retrieve a list of Add-on installations currently assigned to this Number.
  ListIncomingPhoneNumberAssignedAddOn(
    req: operations.ListIncomingPhoneNumberAssignedAddOnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberAssignedAddOnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberAssignedAddOnRequest(req);
    }
    
    let baseURL: string = operations.LISTINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", req.pathParams);
    
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
        let res: operations.ListIncomingPhoneNumberAssignedAddOnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberAssignedAddOnResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListIncomingPhoneNumberAssignedAddOnExtension - Retrieve a list of Extensions for the Assigned Add-on.
  ListIncomingPhoneNumberAssignedAddOnExtension(
    req: operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest(req);
    }
    
    let baseURL: string = operations.LISTINCOMINGPHONENUMBERASSIGNEDADDONEXTENSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json", req.pathParams);
    
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
        let res: operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberAssignedAddOnExtensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListIncomingPhoneNumberLocal(
    req: operations.ListIncomingPhoneNumberLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberLocalRequest(req);
    }
    
    let baseURL: string = operations.LISTINCOMINGPHONENUMBERLOCAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", req.pathParams);
    
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
        let res: operations.ListIncomingPhoneNumberLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberLocalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListIncomingPhoneNumberMobile(
    req: operations.ListIncomingPhoneNumberMobileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberMobileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberMobileRequest(req);
    }
    
    let baseURL: string = operations.LISTINCOMINGPHONENUMBERMOBILE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", req.pathParams);
    
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
        let res: operations.ListIncomingPhoneNumberMobileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberMobileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListIncomingPhoneNumberTollFree(
    req: operations.ListIncomingPhoneNumberTollFreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingPhoneNumberTollFreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingPhoneNumberTollFreeRequest(req);
    }
    
    let baseURL: string = operations.LISTINCOMINGPHONENUMBERTOLLFREE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", req.pathParams);
    
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
        let res: operations.ListIncomingPhoneNumberTollFreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingPhoneNumberTollFreeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListKey(
    req: operations.ListKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListKeyRequest(req);
    }
    
    let baseURL: string = operations.LISTKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys.json", req.pathParams);
    
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
        let res: operations.ListKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMedia - Retrieve a list of Media resources belonging to the account used to make the request
  ListMedia(
    req: operations.ListMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMediaRequest(req);
    }
    
    let baseURL: string = operations.LISTMEDIA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json", req.pathParams);
    
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
        let res: operations.ListMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMediaResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMember - Retrieve the members of the queue
  ListMember(
    req: operations.ListMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMemberRequest(req);
    }
    
    let baseURL: string = operations.LISTMEMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json", req.pathParams);
    
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
        let res: operations.ListMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMemberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMessage - Retrieve a list of messages belonging to the account used to make the request
  ListMessage(
    req: operations.ListMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMessageRequest(req);
    }
    
    let baseURL: string = operations.LISTMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages.json", req.pathParams);
    
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
        let res: operations.ListMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMessageResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListNotification - Retrieve a list of notifications belonging to the account used to make the request
  ListNotification(
    req: operations.ListNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNotificationRequest(req);
    }
    
    let baseURL: string = operations.LISTNOTIFICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Notifications.json", req.pathParams);
    
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
        let res: operations.ListNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listNotificationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListOutgoingCallerId - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
  ListOutgoingCallerId(
    req: operations.ListOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.LISTOUTGOINGCALLERID_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", req.pathParams);
    
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
        let res: operations.ListOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listOutgoingCallerIdResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListParticipant - Retrieve a list of participants belonging to the account used to make the request
  ListParticipant(
    req: operations.ListParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListParticipantRequest(req);
    }
    
    let baseURL: string = operations.LISTPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", req.pathParams);
    
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
        let res: operations.ListParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListQueue - Retrieve a list of queues belonging to the account used to make the request
  ListQueue(
    req: operations.ListQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListQueueRequest(req);
    }
    
    let baseURL: string = operations.LISTQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues.json", req.pathParams);
    
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
        let res: operations.ListQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listQueueResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRecording - Retrieve a list of recordings belonging to the account used to make the request
  ListRecording(
    req: operations.ListRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingRequest(req);
    }
    
    let baseURL: string = operations.LISTRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings.json", req.pathParams);
    
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
        let res: operations.ListRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRecordingAddOnResult - Retrieve a list of results belonging to the recording
  ListRecordingAddOnResult(
    req: operations.ListRecordingAddOnResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingAddOnResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingAddOnResultRequest(req);
    }
    
    let baseURL: string = operations.LISTRECORDINGADDONRESULT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json", req.pathParams);
    
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
        let res: operations.ListRecordingAddOnResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRecordingAddOnResultResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRecordingAddOnResultPayload - Retrieve a list of payloads belonging to the AddOnResult
  ListRecordingAddOnResultPayload(
    req: operations.ListRecordingAddOnResultPayloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingAddOnResultPayloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingAddOnResultPayloadRequest(req);
    }
    
    let baseURL: string = operations.LISTRECORDINGADDONRESULTPAYLOAD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json", req.pathParams);
    
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
        let res: operations.ListRecordingAddOnResultPayloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRecordingAddOnResultPayloadResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListRecordingTranscription(
    req: operations.ListRecordingTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.LISTRECORDINGTRANSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json", req.pathParams);
    
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
        let res: operations.ListRecordingTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRecordingTranscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListShortCode - Retrieve a list of short-codes belonging to the account used to make the request
  ListShortCode(
    req: operations.ListShortCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListShortCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListShortCodeRequest(req);
    }
    
    let baseURL: string = operations.LISTSHORTCODE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json", req.pathParams);
    
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
        let res: operations.ListShortCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listShortCodeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListSigningKey(
    req: operations.ListSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.LISTSIGNINGKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", req.pathParams);
    
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
        let res: operations.ListSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSigningKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipAuthCallsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
  ListSipAuthCallsCredentialListMapping(
    req: operations.ListSipAuthCallsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipAuthCallsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipAuthCallsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", req.pathParams);
    
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
        let res: operations.ListSipAuthCallsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipAuthCallsCredentialListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipAuthCallsIpAccessControlListMapping - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
  ListSipAuthCallsIpAccessControlListMapping(
    req: operations.ListSipAuthCallsIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipAuthCallsIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipAuthCallsIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", req.pathParams);
    
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
        let res: operations.ListSipAuthCallsIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipAuthCallsIpAccessControlListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipAuthRegistrationsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
  ListSipAuthRegistrationsCredentialListMapping(
    req: operations.ListSipAuthRegistrationsCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipAuthRegistrationsCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipAuthRegistrationsCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", req.pathParams);
    
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
        let res: operations.ListSipAuthRegistrationsCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipAuthRegistrationsCredentialListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipCredential - Retrieve a list of credentials.
  ListSipCredential(
    req: operations.ListSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPCREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", req.pathParams);
    
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
        let res: operations.ListSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipCredentialResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipCredentialList - Get All Credential Lists
  ListSipCredentialList(
    req: operations.ListSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPCREDENTIALLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", req.pathParams);
    
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
        let res: operations.ListSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipCredentialListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipCredentialListMapping - Read multiple CredentialListMapping resources from an account.
  ListSipCredentialListMapping(
    req: operations.ListSipCredentialListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipCredentialListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipCredentialListMappingRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPCREDENTIALLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", req.pathParams);
    
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
        let res: operations.ListSipCredentialListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipCredentialListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipDomain - Retrieve a list of domains belonging to the account used to make the request
  ListSipDomain(
    req: operations.ListSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipDomainRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPDOMAIN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", req.pathParams);
    
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
        let res: operations.ListSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipDomainResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipIpAccessControlList - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
  ListSipIpAccessControlList(
    req: operations.ListSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPIPACCESSCONTROLLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", req.pathParams);
    
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
        let res: operations.ListSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipIpAccessControlListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipIpAccessControlListMapping - Retrieve a list of IpAccessControlListMapping resources.
  ListSipIpAccessControlListMapping(
    req: operations.ListSipIpAccessControlListMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipIpAccessControlListMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipIpAccessControlListMappingRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPIPACCESSCONTROLLISTMAPPING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", req.pathParams);
    
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
        let res: operations.ListSipIpAccessControlListMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipIpAccessControlListMappingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSipIpAddress - Read multiple IpAddress resources.
  ListSipIpAddress(
    req: operations.ListSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.LISTSIPIPADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", req.pathParams);
    
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
        let res: operations.ListSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSipIpAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTranscription - Retrieve a list of transcriptions belonging to the account used to make the request
  ListTranscription(
    req: operations.ListTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTranscriptionRequest(req);
    }
    
    let baseURL: string = operations.LISTTRANSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Transcriptions.json", req.pathParams);
    
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
        let res: operations.ListTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTranscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUsageRecord - Retrieve a list of usage-records belonging to the account used to make the request
  ListUsageRecord(
    req: operations.ListUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORD_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordAllTime(
    req: operations.ListUsageRecordAllTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordAllTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordAllTimeRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDALLTIME_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordAllTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordAllTimeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordDaily(
    req: operations.ListUsageRecordDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordDailyRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDDAILY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Daily.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordDailyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordDailyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordLastMonth(
    req: operations.ListUsageRecordLastMonthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordLastMonthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordLastMonthRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDLASTMONTH_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/LastMonth.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordLastMonthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordLastMonthResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordMonthly(
    req: operations.ListUsageRecordMonthlyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordMonthlyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordMonthlyRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDMONTHLY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordMonthlyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordMonthlyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordThisMonth(
    req: operations.ListUsageRecordThisMonthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordThisMonthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordThisMonthRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDTHISMONTH_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/ThisMonth.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordThisMonthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordThisMonthResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordToday(
    req: operations.ListUsageRecordTodayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordTodayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordTodayRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDTODAY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordTodayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordTodayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordYearly(
    req: operations.ListUsageRecordYearlyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordYearlyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordYearlyRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDYEARLY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordYearlyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordYearlyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListUsageRecordYesterday(
    req: operations.ListUsageRecordYesterdayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordYesterdayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordYesterdayRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGERECORDYESTERDAY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json", req.pathParams);
    
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
        let res: operations.ListUsageRecordYesterdayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageRecordYesterdayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUsageTrigger - Retrieve a list of usage-triggers belonging to the account used to make the request
  ListUsageTrigger(
    req: operations.ListUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.LISTUSAGETRIGGER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", req.pathParams);
    
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
        let res: operations.ListUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsageTriggerResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateAccount - Modify the properties of a given Account
  UpdateAccount(
    req: operations.UpdateAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAccountRequest(req);
    }
    
    let baseURL: string = operations.UPDATEACCOUNT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010Account = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateAddress(
    req: operations.UpdateAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAddressRequest(req);
    }
    
    let baseURL: string = operations.UPDATEADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateApplication - Updates the application's properties
  UpdateApplication(
    req: operations.UpdateApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateApplicationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEAPPLICATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCall - Initiates a call redirect or terminates a call
  UpdateCall(
    req: operations.UpdateCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCallRequest(req);
    }
    
    let baseURL: string = operations.UPDATECALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateCallResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCall = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCallFeedback - Update a Feedback resource for a call
  UpdateCallFeedback(
    req: operations.UpdateCallFeedbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCallFeedbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCallFeedbackRequest(req);
    }
    
    let baseURL: string = operations.UPDATECALLFEEDBACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", req.pathParams);
    
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
        let res: operations.UpdateCallFeedbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallFeedback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCallRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
  UpdateCallRecording(
    req: operations.UpdateCallRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCallRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCallRecordingRequest(req);
    }
    
    let baseURL: string = operations.UPDATECALLRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateCallRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallCallRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateConference(
    req: operations.UpdateConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConferenceRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONFERENCE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateConferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConferenceRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
  UpdateConferenceRecording(
    req: operations.UpdateConferenceRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConferenceRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConferenceRecordingRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONFERENCERECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateConferenceRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceConferenceRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConnectApp - Update a connect-app with the specified parameters
  UpdateConnectApp(
    req: operations.UpdateConnectAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConnectAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConnectAppRequest(req);
    }
    
    let baseURL: string = operations.UPDATECONNECTAPP_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateConnectAppResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConnectApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateIncomingPhoneNumber - Update an incoming-phone-number instance.
  UpdateIncomingPhoneNumber(
    req: operations.UpdateIncomingPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateIncomingPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateIncomingPhoneNumberRequest(req);
    }
    
    let baseURL: string = operations.UPDATEINCOMINGPHONENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateIncomingPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountIncomingPhoneNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateKey(
    req: operations.UpdateKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateKeyRequest(req);
    }
    
    let baseURL: string = operations.UPDATEKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMember - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
  UpdateMember(
    req: operations.UpdateMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMemberRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMEMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", req.pathParams);
    
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
        let res: operations.UpdateMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueueMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMessage - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
  UpdateMessage(
    req: operations.UpdateMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMessageRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMESSAGE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateOutgoingCallerId - Updates the caller-id
  UpdateOutgoingCallerId(
    req: operations.UpdateOutgoingCallerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOutgoingCallerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOutgoingCallerIdRequest(req);
    }
    
    let baseURL: string = operations.UPDATEOUTGOINGCALLERID_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateOutgoingCallerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountOutgoingCallerId = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateParticipant - Update the properties of the participant
  UpdateParticipant(
    req: operations.UpdateParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateParticipantRequest(req);
    }
    
    let baseURL: string = operations.UPDATEPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", req.pathParams);
    
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
        let res: operations.UpdateParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePayments - update an instance of payments with different phases of payment flows.
  UpdatePayments(
    req: operations.UpdatePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEPAYMENTS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdatePaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallPayments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateQueue - Update the queue with the new parameters
  UpdateQueue(
    req: operations.UpdateQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateQueueRequest(req);
    }
    
    let baseURL: string = operations.UPDATEQUEUE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountQueue = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateShortCode - Update a short code with the following parameters
  UpdateShortCode(
    req: operations.UpdateShortCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateShortCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateShortCodeRequest(req);
    }
    
    let baseURL: string = operations.UPDATESHORTCODE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateShortCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountShortCode = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateSigningKey(
    req: operations.UpdateSigningKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSigningKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSigningKeyRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIGNINGKEY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSigningKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSigningKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSipCredential - Update a credential resource.
  UpdateSipCredential(
    req: operations.UpdateSipCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipCredentialRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIPCREDENTIAL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSipCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialListSipCredential = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSipCredentialList - Update a Credential List
  UpdateSipCredentialList(
    req: operations.UpdateSipCredentialListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipCredentialListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipCredentialListRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIPCREDENTIALLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSipCredentialListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipCredentialList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSipDomain - Update the attributes of a domain
  UpdateSipDomain(
    req: operations.UpdateSipDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipDomainRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIPDOMAIN_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSipDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipDomain = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSipIpAccessControlList - Rename an IpAccessControlList
  UpdateSipIpAccessControlList(
    req: operations.UpdateSipIpAccessControlListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipIpAccessControlListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipIpAccessControlListRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIPIPACCESSCONTROLLIST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSipIpAccessControlListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSipIpAddress - Update an IpAddress resource.
  UpdateSipIpAddress(
    req: operations.UpdateSipIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSipIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSipIpAddressRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIPIPADDRESS_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSipIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSiprec - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
  UpdateSiprec(
    req: operations.UpdateSiprecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSiprecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSiprecRequest(req);
    }
    
    let baseURL: string = operations.UPDATESIPREC_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateSiprecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallSiprec = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateStream - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
  UpdateStream(
    req: operations.UpdateStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateStreamRequest(req);
    }
    
    let baseURL: string = operations.UPDATESTREAM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountCallStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUsageTrigger - Update an instance of a usage trigger
  UpdateUsageTrigger(
    req: operations.UpdateUsageTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUsageTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUsageTriggerRequest(req);
    }
    
    let baseURL: string = operations.UPDATEUSAGETRIGGER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", req.pathParams);
    
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
        let res: operations.UpdateUsageTriggerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiV2010AccountUsageUsageTrigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
