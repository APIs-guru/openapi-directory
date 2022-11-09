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
  "https://video.twilio.com",
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
  
  CreateComposition(
    req: operations.CreateCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompositionRequest(req);
    }
    
    let baseURL: string = operations.CREATECOMPOSITION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Compositions";
    
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
        let res: operations.CreateCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1Composition = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateCompositionHook(
    req: operations.CreateCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.CREATECOMPOSITIONHOOK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionHooks";
    
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
        let res: operations.CreateCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1CompositionHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateCompositionSettings(
    req: operations.CreateCompositionSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompositionSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompositionSettingsRequest(req);
    }
    
    let baseURL: string = operations.CREATECOMPOSITIONSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionSettings/Default";
    
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
        let res: operations.CreateCompositionSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1CompositionSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateRecordingSettings(
    req: operations.CreateRecordingSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRecordingSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRecordingSettingsRequest(req);
    }
    
    let baseURL: string = operations.CREATERECORDINGSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RecordingSettings/Default";
    
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
        let res: operations.CreateRecordingSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RecordingSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  CreateRoom(
    req: operations.CreateRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRoomRequest(req);
    }
    
    let baseURL: string = operations.CREATEROOM_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Rooms";
    
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
        let res: operations.CreateRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteComposition - Delete a Recording Composition resource identified by a Composition SID.
  DeleteComposition(
    req: operations.DeleteCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompositionRequest(req);
    }
    
    let baseURL: string = operations.DELETECOMPOSITION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Compositions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCompositionHook - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
  DeleteCompositionHook(
    req: operations.DeleteCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.DELETECOMPOSITIONHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CompositionHooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRecording - Delete a Recording resource identified by a Recording SID.
  DeleteRecording(
    req: operations.DeleteRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingRequest(req);
    }
    
    let baseURL: string = operations.DELETERECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Recordings/{Sid}", req.pathParams);
    
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

  
  DeleteRoomRecording(
    req: operations.DeleteRoomRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRoomRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRoomRecordingRequest(req);
    }
    
    let baseURL: string = operations.DELETEROOMRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRoomRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchComposition - Returns a single Composition resource identified by a Composition SID.
  FetchComposition(
    req: operations.FetchCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCompositionRequest(req);
    }
    
    let baseURL: string = operations.FETCHCOMPOSITION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Compositions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1Composition = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchCompositionHook - Returns a single CompositionHook resource identified by a CompositionHook SID.
  FetchCompositionHook(
    req: operations.FetchCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.FETCHCOMPOSITIONHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CompositionHooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1CompositionHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchCompositionSettings(
    req: operations.FetchCompositionSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCompositionSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCompositionSettingsRequest(req);
    }
    
    let baseURL: string = operations.FETCHCOMPOSITIONSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionSettings/Default";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchCompositionSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1CompositionSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRecording - Returns a single Recording resource identified by a Recording SID.
  FetchRecording(
    req: operations.FetchRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingRequest(req);
    }
    
    let baseURL: string = operations.FETCHRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1Recording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchRecordingSettings(
    req: operations.FetchRecordingSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingSettingsRequest(req);
    }
    
    let baseURL: string = operations.FETCHRECORDINGSETTINGS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RecordingSettings/Default";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRecordingSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RecordingSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchRoom(
    req: operations.FetchRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchRoomParticipant(
    req: operations.FetchRoomParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOMPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRoomParticipantPublishedTrack - Returns a single Track resource represented by TrackName or SID.
  FetchRoomParticipantPublishedTrack(
    req: operations.FetchRoomParticipantPublishedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantPublishedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantPublishedTrackRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOMPARTICIPANTPUBLISHEDTRACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomParticipantPublishedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantPublishedTrack = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRoomParticipantSubscribeRule - Returns a list of Subscribe Rules for the Participant.
  FetchRoomParticipantSubscribeRule(
    req: operations.FetchRoomParticipantSubscribeRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantSubscribeRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantSubscribeRuleRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOMPARTICIPANTSUBSCRIBERULE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomParticipantSubscribeRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRoomParticipantSubscribedTrack - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
  FetchRoomParticipantSubscribedTrack(
    req: operations.FetchRoomParticipantSubscribedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantSubscribedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantSubscribedTrackRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOMPARTICIPANTSUBSCRIBEDTRACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomParticipantSubscribedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantSubscribedTrack = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  FetchRoomRecording(
    req: operations.FetchRoomRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomRecordingRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOMRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchRoomRecordingRule - Returns a list of Recording Rules for the Room.
  FetchRoomRecordingRule(
    req: operations.FetchRoomRecordingRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomRecordingRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomRecordingRuleRequest(req);
    }
    
    let baseURL: string = operations.FETCHROOMRECORDINGRULE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/RecordingRules", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchRoomRecordingRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomRecordingRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListComposition - List of all Recording compositions.
  ListComposition(
    req: operations.ListCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompositionRequest(req);
    }
    
    let baseURL: string = operations.LISTCOMPOSITION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Compositions";
    
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
        let res: operations.ListCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCompositionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCompositionHook - List of all Recording CompositionHook resources.
  ListCompositionHook(
    req: operations.ListCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.LISTCOMPOSITIONHOOK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionHooks";
    
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
        let res: operations.ListCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCompositionHookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRecording - List of all Track recordings.
  ListRecording(
    req: operations.ListRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingRequest(req);
    }
    
    let baseURL: string = operations.LISTRECORDING_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Recordings";
    
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

  
  ListRoom(
    req: operations.ListRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomRequest(req);
    }
    
    let baseURL: string = operations.LISTROOM_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Rooms";
    
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
        let res: operations.ListRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRoomResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListRoomParticipant(
    req: operations.ListRoomParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomParticipantRequest(req);
    }
    
    let baseURL: string = operations.LISTROOMPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants", req.pathParams);
    
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
        let res: operations.ListRoomParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRoomParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRoomParticipantPublishedTrack - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
  ListRoomParticipantPublishedTrack(
    req: operations.ListRoomParticipantPublishedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomParticipantPublishedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomParticipantPublishedTrackRequest(req);
    }
    
    let baseURL: string = operations.LISTROOMPARTICIPANTPUBLISHEDTRACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks", req.pathParams);
    
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
        let res: operations.ListRoomParticipantPublishedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRoomParticipantPublishedTrackResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRoomParticipantSubscribedTrack - Returns a list of tracks that are subscribed for the participant.
  ListRoomParticipantSubscribedTrack(
    req: operations.ListRoomParticipantSubscribedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomParticipantSubscribedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomParticipantSubscribedTrackRequest(req);
    }
    
    let baseURL: string = operations.LISTROOMPARTICIPANTSUBSCRIBEDTRACK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks", req.pathParams);
    
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
        let res: operations.ListRoomParticipantSubscribedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRoomParticipantSubscribedTrackResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  ListRoomRecording(
    req: operations.ListRoomRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomRecordingRequest(req);
    }
    
    let baseURL: string = operations.LISTROOMRECORDING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Recordings", req.pathParams);
    
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
        let res: operations.ListRoomRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRoomRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateCompositionHook(
    req: operations.UpdateCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.UPDATECOMPOSITIONHOOK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/CompositionHooks/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1CompositionHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateRoom(
    req: operations.UpdateRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomRequest(req);
    }
    
    let baseURL: string = operations.UPDATEROOM_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateRoomParticipant(
    req: operations.UpdateRoomParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomParticipantRequest(req);
    }
    
    let baseURL: string = operations.UPDATEROOMPARTICIPANT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{Sid}", req.pathParams);
    
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
        let res: operations.UpdateRoomParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  UpdateRoomParticipantAnonymize(
    req: operations.UpdateRoomParticipantAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomParticipantAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomParticipantAnonymizeRequest(req);
    }
    
    let baseURL: string = operations.UPDATEROOMPARTICIPANTANONYMIZE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRoomParticipantAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantAnonymize = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRoomParticipantSubscribeRule - Update the Subscribe Rules for the Participant
  UpdateRoomParticipantSubscribeRule(
    req: operations.UpdateRoomParticipantSubscribeRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomParticipantSubscribeRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomParticipantSubscribeRuleRequest(req);
    }
    
    let baseURL: string = operations.UPDATEROOMPARTICIPANTSUBSCRIBERULE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", req.pathParams);
    
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
        let res: operations.UpdateRoomParticipantSubscribeRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRoomRecordingRule - Update the Recording Rules for the Room
  UpdateRoomRecordingRule(
    req: operations.UpdateRoomRecordingRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomRecordingRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomRecordingRuleRequest(req);
    }
    
    let baseURL: string = operations.UPDATEROOMRECORDINGRULE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Rooms/{RoomSid}/RecordingRules", req.pathParams);
    
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
        let res: operations.UpdateRoomRecordingRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomRecordingRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
