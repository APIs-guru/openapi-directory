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
  "https://flex-api.twilio.com",
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
  
  CreateChannel(
    req: operations.CreateChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateChannelRequest(req);
    }
    
    let baseURL: string = operations.CREATECHANNEL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Channels";
    
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
        let res: operations.CreateChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1Channel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateFlexFlow(
    req: operations.CreateFlexFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFlexFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFlexFlowRequest(req);
    }
    
    let baseURL: string = operations.CREATEFLEXFLOW_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/FlexFlows";
    
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
        let res: operations.CreateFlexFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1FlexFlow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInteraction - Create a new Interaction.
  CreateInteraction(
    req: operations.CreateInteractionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInteractionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInteractionRequest(req);
    }
    
    let baseURL: string = operations.CREATEINTERACTION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Interactions";
    
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
        let res: operations.CreateInteractionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1Interaction = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInteractionChannelInvite - Invite an Agent or a TaskQueue to a Channel.
  CreateInteractionChannelInvite(
    req: operations.CreateInteractionChannelInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInteractionChannelInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInteractionChannelInviteRequest(req);
    }
    
    let baseURL: string = operations.CREATEINTERACTIONCHANNELINVITE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites", req.pathParams);
    
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
        let res: operations.CreateInteractionChannelInviteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1InteractionInteractionChannelInteractionChannelInvite = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInteractionChannelParticipant - Add a Participant to a Channel.
  CreateInteractionChannelParticipant(
    req: operations.CreateInteractionChannelParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInteractionChannelParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInteractionChannelParticipantRequest(req);
    }
    
    let baseURL: string = operations.CREATEINTERACTIONCHANNELPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants", req.pathParams);
    
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
        let res: operations.CreateInteractionChannelParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1InteractionInteractionChannelInteractionChannelParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateWebChannel(
    req: operations.CreateWebChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWebChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWebChannelRequest(req);
    }
    
    let baseURL: string = operations.CREATEWEBCHANNEL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/WebChannels";
    
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
        let res: operations.CreateWebChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1WebChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteChannel(
    req: operations.DeleteChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteChannelRequest(req);
    }
    
    let baseURL: string = operations.DELETECHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Channels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteFlexFlow(
    req: operations.DeleteFlexFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFlexFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFlexFlowRequest(req);
    }
    
    let baseURL: string = operations.DELETEFLEXFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/FlexFlows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFlexFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteWebChannel(
    req: operations.DeleteWebChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebChannelRequest(req);
    }
    
    let baseURL: string = operations.DELETEWEBCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/WebChannels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWebChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchChannel(
    req: operations.FetchChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchChannelRequest(req);
    }
    
    let baseURL: string = operations.FETCHCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Channels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1Channel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchConfiguration(
    req: operations.FetchConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFIGURATION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Configuration";
    
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
        let res: operations.FetchConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1Configuration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchFlexFlow(
    req: operations.FetchFlexFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFlexFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFlexFlowRequest(req);
    }
    
    let baseURL: string = operations.FETCHFLEXFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/FlexFlows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchFlexFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1FlexFlow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchInteraction(
    req: operations.FetchInteractionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchInteractionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchInteractionRequest(req);
    }
    
    let baseURL: string = operations.FETCHINTERACTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchInteractionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1Interaction = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchInteractionChannel - Fetch a Channel for an Interaction.
  FetchInteractionChannel(
    req: operations.FetchInteractionChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchInteractionChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchInteractionChannelRequest(req);
    }
    
    let baseURL: string = operations.FETCHINTERACTIONCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchInteractionChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1InteractionInteractionChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchWebChannel(
    req: operations.FetchWebChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchWebChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchWebChannelRequest(req);
    }
    
    let baseURL: string = operations.FETCHWEBCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/WebChannels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchWebChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1WebChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListChannel(
    req: operations.ListChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListChannelRequest(req);
    }
    
    let baseURL: string = operations.LISTCHANNEL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Channels";
    
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
        let res: operations.ListChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListFlexFlow(
    req: operations.ListFlexFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFlexFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFlexFlowRequest(req);
    }
    
    let baseURL: string = operations.LISTFLEXFLOW_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/FlexFlows";
    
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
        let res: operations.ListFlexFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFlexFlowResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListInteractionChannel - List all Channels for an Interaction.
  ListInteractionChannel(
    req: operations.ListInteractionChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInteractionChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInteractionChannelRequest(req);
    }
    
    let baseURL: string = operations.LISTINTERACTIONCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels", req.pathParams);
    
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
        let res: operations.ListInteractionChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInteractionChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListInteractionChannelInvite - List all Invites for a Channel.
  ListInteractionChannelInvite(
    req: operations.ListInteractionChannelInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInteractionChannelInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInteractionChannelInviteRequest(req);
    }
    
    let baseURL: string = operations.LISTINTERACTIONCHANNELINVITE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites", req.pathParams);
    
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
        let res: operations.ListInteractionChannelInviteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInteractionChannelInviteResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListInteractionChannelParticipant - List all Participants for a Channel.
  ListInteractionChannelParticipant(
    req: operations.ListInteractionChannelParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInteractionChannelParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInteractionChannelParticipantRequest(req);
    }
    
    let baseURL: string = operations.LISTINTERACTIONCHANNELPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants", req.pathParams);
    
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
        let res: operations.ListInteractionChannelParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInteractionChannelParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListWebChannel(
    req: operations.ListWebChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWebChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWebChannelRequest(req);
    }
    
    let baseURL: string = operations.LISTWEBCHANNEL_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/WebChannels";
    
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
        let res: operations.ListWebChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listWebChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateFlexFlow(
    req: operations.UpdateFlexFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFlexFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFlexFlowRequest(req);
    }
    
    let baseURL: string = operations.UPDATEFLEXFLOW_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/FlexFlows/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateFlexFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1FlexFlow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateInteractionChannel - Update an existing Interaction Channel.
  UpdateInteractionChannel(
    req: operations.UpdateInteractionChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateInteractionChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateInteractionChannelRequest(req);
    }
    
    let baseURL: string = operations.UPDATEINTERACTIONCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateInteractionChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1InteractionInteractionChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateInteractionChannelParticipant - Update an existing Channel Participant.
  UpdateInteractionChannelParticipant(
    req: operations.UpdateInteractionChannelParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateInteractionChannelParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateInteractionChannelParticipantRequest(req);
    }
    
    let baseURL: string = operations.UPDATEINTERACTIONCHANNELPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateInteractionChannelParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1InteractionInteractionChannelInteractionChannelParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateWebChannel(
    req: operations.UpdateWebChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWebChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWebChannelRequest(req);
    }
    
    let baseURL: string = operations.UPDATEWEBCHANNEL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/WebChannels/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateWebChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.flexV1WebChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
