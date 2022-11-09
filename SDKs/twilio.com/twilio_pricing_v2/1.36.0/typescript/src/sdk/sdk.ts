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
  
  // FetchTrunkingCountry - Fetch a specific Country.
  FetchTrunkingCountry(
    req: operations.FetchTrunkingCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrunkingCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrunkingCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUNKINGCOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Trunking/Countries/{IsoCountry}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchTrunkingCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV2TrunkingCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchTrunkingNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
  FetchTrunkingNumber(
    req: operations.FetchTrunkingNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrunkingNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrunkingNumberRequest(req);
    }
    
    let baseURL: string = operations.FETCHTRUNKINGNUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Trunking/Numbers/{DestinationNumber}", req.pathParams);
    
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
        let res: operations.FetchTrunkingNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV2TrunkingNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVoiceCountry - Fetch a specific Country.
  FetchVoiceCountry(
    req: operations.FetchVoiceCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVoiceCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVoiceCountryRequest(req);
    }
    
    let baseURL: string = operations.FETCHVOICECOUNTRY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Voice/Countries/{IsoCountry}", req.pathParams);
    
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
                res.pricingV2VoiceVoiceCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVoiceNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
  FetchVoiceNumber(
    req: operations.FetchVoiceNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVoiceNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVoiceNumberRequest(req);
    }
    
    let baseURL: string = operations.FETCHVOICENUMBER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v2/Voice/Numbers/{DestinationNumber}", req.pathParams);
    
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
        let res: operations.FetchVoiceNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pricingV2VoiceVoiceNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListTrunkingCountry(
    req: operations.ListTrunkingCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrunkingCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrunkingCountryRequest(req);
    }
    
    let baseURL: string = operations.LISTTRUNKINGCOUNTRY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Trunking/Countries";
    
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
        let res: operations.ListTrunkingCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTrunkingCountryResponse = httpRes?.data;
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
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Voice/Countries";
    
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
