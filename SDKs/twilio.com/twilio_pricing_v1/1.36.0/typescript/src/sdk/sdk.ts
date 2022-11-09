import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://pricing.twilio.com",
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
  
  FetchMessagingCountry(
    req: operations.FetchMessagingCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMessagingCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMessagingCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHMESSAGINGCOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Messaging/Countries/{IsoCountry}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMessagingCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV1MessagingMessagingCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchPhoneNumberCountry(
    req: operations.FetchPhoneNumberCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPhoneNumberCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPhoneNumberCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHPHONENUMBERCOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/PhoneNumbers/Countries/{IsoCountry}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchPhoneNumberCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV1PhoneNumberPhoneNumberCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchVoiceCountry(
    req: operations.FetchVoiceCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVoiceCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVoiceCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHVOICECOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/Countries/{IsoCountry}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchVoiceCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV1VoiceVoiceCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchVoiceNumber(
    req: operations.FetchVoiceNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVoiceNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVoiceNumberRequest(req);
    }
    
    let baseURL: string = operations.FETCHVOICENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/Numbers/{Number}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchVoiceNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV1VoiceVoiceNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListMessagingCountry(
    req: operations.ListMessagingCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMessagingCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMessagingCountryRequest(req);
    }
    
    let baseURL: string = operations.LISTMESSAGINGCOUNTRY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Messaging/Countries";
    
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
        let res: operations.ListMessagingCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMessagingCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListPhoneNumberCountry(
    req: operations.ListPhoneNumberCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPhoneNumberCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPhoneNumberCountryRequest(req);
    }
    
    let baseURL: string = operations.LISTPHONENUMBERCOUNTRY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/PhoneNumbers/Countries";
    
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
        let res: operations.ListPhoneNumberCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listPhoneNumberCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListVoiceCountry(
    req: operations.ListVoiceCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVoiceCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVoiceCountryRequest(req);
    }
    
    let baseURL: string = operations.LISTVOICECOUNTRY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Voice/Countries";
    
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
        let res: operations.ListVoiceCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVoiceCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
