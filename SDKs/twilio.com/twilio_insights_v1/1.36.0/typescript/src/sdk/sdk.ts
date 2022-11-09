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
  "https://insights.twilio.com",
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
  
  FetchAccountSettings(
    req: operations.FetchAccountSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAccountSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAccountSettingsRequest(req);
    }
    
    let baseURL: string = operations.FETCHACCOUNTSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Voice/Settings";
    
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
        let res: operations.FetchAccountSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1AccountSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchAnnotation - Fetch a specific Annotation.
  FetchAnnotation(
    req: operations.FetchAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAnnotationRequest(req);
    }
    
    let baseURL: string = operations.FETCHANNOTATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/{CallSid}/Annotation", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1CallAnnotation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchCall(
    req: operations.FetchCallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCallRequest(req);
    }
    
    let baseURL: string = operations.FETCHCALL_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/{Sid}", req.pathParams);
    
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
                res.insightsV1Call = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConference - Fetch a specific Conference.
  FetchConference(
    req: operations.FetchConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConferenceRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFERENCE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conferences/{ConferenceSid}", req.pathParams);
    
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
                res.insightsV1Conference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchConferenceParticipant - Fetch a specific Conference Participant Summary.
  FetchConferenceParticipant(
    req: operations.FetchConferenceParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchConferenceParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchConferenceParticipantRequest(req);
    }
    
    let baseURL: string = operations.FETCHCONFERENCEPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}", req.pathParams);
    
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
        let res: operations.FetchConferenceParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1ConferenceConferenceParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchSummary(
    req: operations.FetchSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSummaryRequest(req);
    }
    
    let baseURL: string = operations.FETCHSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/{CallSid}/Summary", req.pathParams);
    
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
        let res: operations.FetchSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1CallSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVideoParticipantSummary - Get Video Log Analyzer data for a Room Participant.
  FetchVideoParticipantSummary(
    req: operations.FetchVideoParticipantSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVideoParticipantSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVideoParticipantSummaryRequest(req);
    }
    
    let baseURL: string = operations.FETCHVIDEOPARTICIPANTSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchVideoParticipantSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1VideoRoomSummaryVideoParticipantSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchVideoRoomSummary - Get Video Log Analyzer data for a Room.
  FetchVideoRoomSummary(
    req: operations.FetchVideoRoomSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVideoRoomSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVideoRoomSummaryRequest(req);
    }
    
    let baseURL: string = operations.FETCHVIDEOROOMSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Video/Rooms/{RoomSid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchVideoRoomSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1VideoRoomSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListCallSummaries(
    req: operations.ListCallSummariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCallSummariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCallSummariesRequest(req);
    }
    
    let baseURL: string = operations.LISTCALLSUMMARIES_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Voice/Summaries";
    
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
        let res: operations.ListCallSummariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCallSummariesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConference - Retrieve a list of Conferences.
  ListConference(
    req: operations.ListConferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConferenceRequest(req);
    }
    
    let baseURL: string = operations.LISTCONFERENCE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Conferences";
    
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

  
  // ListConferenceParticipant - List Conference Participants.
  ListConferenceParticipant(
    req: operations.ListConferenceParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConferenceParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConferenceParticipantRequest(req);
    }
    
    let baseURL: string = operations.LISTCONFERENCEPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Conferences/{ConferenceSid}/Participants", req.pathParams);
    
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
        let res: operations.ListConferenceParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConferenceParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListEvent(
    req: operations.ListEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventRequest(req);
    }
    
    let baseURL: string = operations.LISTEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/{CallSid}/Events", req.pathParams);
    
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
        let res: operations.ListEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEventResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListMetric(
    req: operations.ListMetricRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMetricResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMetricRequest(req);
    }
    
    let baseURL: string = operations.LISTMETRIC_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/{CallSid}/Metrics", req.pathParams);
    
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
        let res: operations.ListMetricResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listMetricResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVideoParticipantSummary - Get a list of room participants.
  ListVideoParticipantSummary(
    req: operations.ListVideoParticipantSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVideoParticipantSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVideoParticipantSummaryRequest(req);
    }
    
    let baseURL: string = operations.LISTVIDEOPARTICIPANTSUMMARY_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Video/Rooms/{RoomSid}/Participants", req.pathParams);
    
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
        let res: operations.ListVideoParticipantSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVideoParticipantSummaryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVideoRoomSummary - Get a list of Programmable Video Rooms.
  ListVideoRoomSummary(
    req: operations.ListVideoRoomSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVideoRoomSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVideoRoomSummaryRequest(req);
    }
    
    let baseURL: string = operations.LISTVIDEOROOMSUMMARY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Video/Rooms";
    
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
        let res: operations.ListVideoRoomSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVideoRoomSummaryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateAccountSettings(
    req: operations.UpdateAccountSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAccountSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAccountSettingsRequest(req);
    }
    
    let baseURL: string = operations.UPDATEACCOUNTSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Voice/Settings";
    
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
        let res: operations.UpdateAccountSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1AccountSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateAnnotation - Create/Update the annotation for the call
  UpdateAnnotation(
    req: operations.UpdateAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAnnotationRequest(req);
    }
    
    let baseURL: string = operations.UPDATEANNOTATION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Voice/{CallSid}/Annotation", req.pathParams);
    
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
        let res: operations.UpdateAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.insightsV1CallAnnotation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
