import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://fax.twilio.com",
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
  
  // DeleteFax - Delete a specific fax and its associated media.
  DeleteFax(
    req: operations.DeleteFaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFaxRequest(req);
    }
    
    let baseURL: string = operations.DELETEFAX_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Faxes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFaxMedia - Delete a specific fax media instance.
  DeleteFaxMedia(
    req: operations.DeleteFaxMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFaxMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFaxMediaRequest(req);
    }
    
    let baseURL: string = operations.DELETEFAXMEDIA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Faxes/{FaxSid}/Media/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFaxMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchFax - Fetch a specific fax.
  FetchFax(
    req: operations.FetchFaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFaxRequest(req);
    }
    
    let baseURL: string = operations.FETCHFAX_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Faxes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.faxV1Fax = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchFaxMedia - Fetch a specific fax media instance.
  FetchFaxMedia(
    req: operations.FetchFaxMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFaxMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFaxMediaRequest(req);
    }
    
    let baseURL: string = operations.FETCHFAXMEDIA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Faxes/{FaxSid}/Media/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFaxMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.faxV1FaxFaxMedia = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFax - Retrieve a list of all faxes.
  ListFax(
    req: operations.ListFaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFaxRequest(req);
    }
    
    let baseURL: string = operations.LISTFAX_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Faxes";
    
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
        let res: operations.ListFaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFaxResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFaxMedia - Retrieve a list of all fax media instances for the specified fax.
  ListFaxMedia(
    req: operations.ListFaxMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFaxMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFaxMediaRequest(req);
    }
    
    let baseURL: string = operations.LISTFAXMEDIA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Faxes/{FaxSid}/Media", req.pathParams);
    
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
        let res: operations.ListFaxMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFaxMediaResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
