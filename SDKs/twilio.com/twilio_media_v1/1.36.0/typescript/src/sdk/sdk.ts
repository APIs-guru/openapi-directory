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
  "https://media.twilio.com",
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
  
  CreateMediaProcessor(
    req: operations.CreateMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.CREATEMEDIAPROCESSOR_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/MediaProcessors";
    
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
        let res: operations.CreateMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1MediaProcessor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreatePlayerStreamer(
    req: operations.CreatePlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.CREATEPLAYERSTREAMER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/PlayerStreamers";
    
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
        let res: operations.CreatePlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreatePlayerStreamerPlaybackGrant(
    req: operations.CreatePlayerStreamerPlaybackGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePlayerStreamerPlaybackGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePlayerStreamerPlaybackGrantRequest(req);
    }
    
    let baseURL: string = operations.CREATEPLAYERSTREAMERPLAYBACKGRANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", req.pathParams);
    
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
        let res: operations.CreatePlayerStreamerPlaybackGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMediaRecording - Deletes a MediaRecording resource identified by a SID.
  DeleteMediaRecording(
    req: operations.DeleteMediaRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMediaRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMediaRecordingRequest(req);
    }
    
    let baseURL: string = operations.DELETEMEDIARECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/MediaRecordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMediaRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMediaProcessor - Returns a single MediaProcessor resource identified by a SID.
  FetchMediaProcessor(
    req: operations.FetchMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.FETCHMEDIAPROCESSOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/MediaProcessors/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1MediaProcessor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchMediaRecording - Returns a single MediaRecording resource identified by a SID.
  FetchMediaRecording(
    req: operations.FetchMediaRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMediaRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMediaRecordingRequest(req);
    }
    
    let baseURL: string = operations.FETCHMEDIARECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/MediaRecordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchMediaRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1MediaRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchPlayerStreamer - Returns a single PlayerStreamer resource identified by a SID.
  FetchPlayerStreamer(
    req: operations.FetchPlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.FETCHPLAYERSTREAMER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/PlayerStreamers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchPlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchPlayerStreamerPlaybackGrant - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
  FetchPlayerStreamerPlaybackGrant(
    req: operations.FetchPlayerStreamerPlaybackGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPlayerStreamerPlaybackGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPlayerStreamerPlaybackGrantRequest(req);
    }
    
    let baseURL: string = operations.FETCHPLAYERSTREAMERPLAYBACKGRANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchPlayerStreamerPlaybackGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMediaProcessor - Returns a list of MediaProcessors.
  ListMediaProcessor(
    req: operations.ListMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.LISTMEDIAPROCESSOR_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/MediaProcessors";
    
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
        let res: operations.ListMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMediaProcessorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListMediaRecording - Returns a list of MediaRecordings.
  ListMediaRecording(
    req: operations.ListMediaRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMediaRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMediaRecordingRequest(req);
    }
    
    let baseURL: string = operations.LISTMEDIARECORDING_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/MediaRecordings";
    
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
        let res: operations.ListMediaRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMediaRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListPlayerStreamer - Returns a list of PlayerStreamers.
  ListPlayerStreamer(
    req: operations.ListPlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.LISTPLAYERSTREAMER_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/PlayerStreamers";
    
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
        let res: operations.ListPlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listPlayerStreamerResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMediaProcessor - Updates a MediaProcessor resource identified by a SID.
  UpdateMediaProcessor(
    req: operations.UpdateMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.UPDATEMEDIAPROCESSOR_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/MediaProcessors/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1MediaProcessor = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePlayerStreamer - Updates a PlayerStreamer resource identified by a SID.
  UpdatePlayerStreamer(
    req: operations.UpdatePlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.UPDATEPLAYERSTREAMER_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/PlayerStreamers/{Sid}", req.pathParams);
    
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
        let res: operations.UpdatePlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
