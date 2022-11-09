import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://worldtimeapi.org/api/",
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
  
  // GetIp - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  GetIp(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ip";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIpIpv4 - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  GetIpIpv4(
    req: operations.GetIpIpv4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpIpv4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIpIpv4Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ip/{ipv4}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIpIpv4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIpIpv4Txt - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  GetIpIpv4Txt(
    req: operations.GetIpIpv4TxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpIpv4TxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIpIpv4TxtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ip/{ipv4}.txt", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIpIpv4TxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIpTxt - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  GetIpTxt(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpTxtResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ip.txt";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIpTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezone - a listing of all timezones.
  GetTimezone(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/timezone";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.listJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneArea - a listing of all timezones available for that area.
  GetTimezoneArea(
    req: operations.GetTimezoneAreaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneAreaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneAreaLocation - request the current time for a timezone.
  GetTimezoneAreaLocation(
    req: operations.GetTimezoneAreaLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneAreaLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneAreaLocationRegion - request the current time for a timezone.
  GetTimezoneAreaLocationRegion(
    req: operations.GetTimezoneAreaLocationRegionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationRegionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationRegionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}/{region}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneAreaLocationRegionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneAreaLocationRegionTxt - request the current time for a timezone.
  GetTimezoneAreaLocationRegionTxt(
    req: operations.GetTimezoneAreaLocationRegionTxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationRegionTxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationRegionTxtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}/{region}.txt", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneAreaLocationRegionTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneAreaLocationTxt - request the current time for a timezone.
  GetTimezoneAreaLocationTxt(
    req: operations.GetTimezoneAreaLocationTxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationTxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationTxtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}.txt", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneAreaLocationTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneAreaTxt - a listing of all timezones available for that area.
  GetTimezoneAreaTxt(
    req: operations.GetTimezoneAreaTxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaTxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaTxtRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}.txt", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneAreaTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                res.listTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimezoneTxt - a listing of all timezones.
  GetTimezoneTxt(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneTxtResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/timezone.txt";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimezoneTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.listTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
