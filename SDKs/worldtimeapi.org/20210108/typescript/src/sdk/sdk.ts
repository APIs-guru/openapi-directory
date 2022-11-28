import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
   * getIp - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  **/
  getIp(
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ip";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIpIpv4 - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  **/
  getIpIpv4(
    req: operations.GetIpIpv4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpIpv4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIpIpv4Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ip/{ipv4}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIpIpv4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIpIpv4Txt - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  **/
  getIpIpv4Txt(
    req: operations.GetIpIpv4TxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpIpv4TxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIpIpv4TxtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ip/{ipv4}.txt", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIpIpv4TxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIpTxt - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
  **/
  getIpTxt(
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpTxtResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ip.txt";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIpTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezone - a listing of all timezones.
  **/
  getTimezone(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/timezone";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneArea - a listing of all timezones available for that area.
  **/
  getTimezoneArea(
    req: operations.GetTimezoneAreaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneAreaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneAreaLocation - request the current time for a timezone.
  **/
  getTimezoneAreaLocation(
    req: operations.GetTimezoneAreaLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneAreaLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneAreaLocationRegion - request the current time for a timezone.
  **/
  getTimezoneAreaLocationRegion(
    req: operations.GetTimezoneAreaLocationRegionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationRegionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationRegionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}/{region}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneAreaLocationRegionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dateTimeJsonResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorJsonResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneAreaLocationRegionTxt - request the current time for a timezone.
  **/
  getTimezoneAreaLocationRegionTxt(
    req: operations.GetTimezoneAreaLocationRegionTxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationRegionTxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationRegionTxtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}/{region}.txt", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneAreaLocationRegionTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneAreaLocationTxt - request the current time for a timezone.
  **/
  getTimezoneAreaLocationTxt(
    req: operations.GetTimezoneAreaLocationTxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaLocationTxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaLocationTxtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}/{location}.txt", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneAreaLocationTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.dateTimeTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneAreaTxt - a listing of all timezones available for that area.
  **/
  getTimezoneAreaTxt(
    req: operations.GetTimezoneAreaTxtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneAreaTxtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimezoneAreaTxtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/timezone/{area}.txt", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneAreaTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.listTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.errorTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimezoneTxt - a listing of all timezones.
  **/
  getTimezoneTxt(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimezoneTxtResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/timezone.txt";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimezoneTxtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.listTextResponse = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
