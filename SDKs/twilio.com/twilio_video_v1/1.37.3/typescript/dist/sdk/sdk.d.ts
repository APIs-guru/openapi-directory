import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://video.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    createComposition(req: operations.CreateCompositionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCompositionResponse>;
    createCompositionHook(req: operations.CreateCompositionHookRequest, config?: AxiosRequestConfig): Promise<operations.CreateCompositionHookResponse>;
    createCompositionSettings(req: operations.CreateCompositionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateCompositionSettingsResponse>;
    createRecordingSettings(req: operations.CreateRecordingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateRecordingSettingsResponse>;
    createRoom(req: operations.CreateRoomRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoomResponse>;
    /**
     * deleteComposition - Delete a Recording Composition resource identified by a Composition SID.
    **/
    deleteComposition(req: operations.DeleteCompositionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCompositionResponse>;
    /**
     * deleteCompositionHook - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
    **/
    deleteCompositionHook(req: operations.DeleteCompositionHookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCompositionHookResponse>;
    /**
     * deleteRecording - Delete a Recording resource identified by a Recording SID.
    **/
    deleteRecording(req: operations.DeleteRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingResponse>;
    deleteRoomRecording(req: operations.DeleteRoomRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoomRecordingResponse>;
    /**
     * fetchComposition - Returns a single Composition resource identified by a Composition SID.
    **/
    fetchComposition(req: operations.FetchCompositionRequest, config?: AxiosRequestConfig): Promise<operations.FetchCompositionResponse>;
    /**
     * fetchCompositionHook - Returns a single CompositionHook resource identified by a CompositionHook SID.
    **/
    fetchCompositionHook(req: operations.FetchCompositionHookRequest, config?: AxiosRequestConfig): Promise<operations.FetchCompositionHookResponse>;
    fetchCompositionSettings(req: operations.FetchCompositionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.FetchCompositionSettingsResponse>;
    /**
     * fetchRecording - Returns a single Recording resource identified by a Recording SID.
    **/
    fetchRecording(req: operations.FetchRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingResponse>;
    fetchRecordingSettings(req: operations.FetchRecordingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingSettingsResponse>;
    fetchRoom(req: operations.FetchRoomRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomResponse>;
    fetchRoomParticipant(req: operations.FetchRoomParticipantRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantResponse>;
    /**
     * fetchRoomParticipantPublishedTrack - Returns a single Track resource represented by TrackName or SID.
    **/
    fetchRoomParticipantPublishedTrack(req: operations.FetchRoomParticipantPublishedTrackRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantPublishedTrackResponse>;
    /**
     * fetchRoomParticipantSubscribeRule - Returns a list of Subscribe Rules for the Participant.
    **/
    fetchRoomParticipantSubscribeRule(req: operations.FetchRoomParticipantSubscribeRuleRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantSubscribeRuleResponse>;
    /**
     * fetchRoomParticipantSubscribedTrack - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
    **/
    fetchRoomParticipantSubscribedTrack(req: operations.FetchRoomParticipantSubscribedTrackRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantSubscribedTrackResponse>;
    fetchRoomRecording(req: operations.FetchRoomRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomRecordingResponse>;
    /**
     * fetchRoomRecordingRule - Returns a list of Recording Rules for the Room.
    **/
    fetchRoomRecordingRule(req: operations.FetchRoomRecordingRuleRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoomRecordingRuleResponse>;
    /**
     * listComposition - List of all Recording compositions.
    **/
    listComposition(req: operations.ListCompositionRequest, config?: AxiosRequestConfig): Promise<operations.ListCompositionResponse>;
    /**
     * listCompositionHook - List of all Recording CompositionHook resources.
    **/
    listCompositionHook(req: operations.ListCompositionHookRequest, config?: AxiosRequestConfig): Promise<operations.ListCompositionHookResponse>;
    /**
     * listRecording - List of all Track recordings.
    **/
    listRecording(req: operations.ListRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordingResponse>;
    listRoom(req: operations.ListRoomRequest, config?: AxiosRequestConfig): Promise<operations.ListRoomResponse>;
    listRoomParticipant(req: operations.ListRoomParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListRoomParticipantResponse>;
    /**
     * listRoomParticipantPublishedTrack - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
    **/
    listRoomParticipantPublishedTrack(req: operations.ListRoomParticipantPublishedTrackRequest, config?: AxiosRequestConfig): Promise<operations.ListRoomParticipantPublishedTrackResponse>;
    /**
     * listRoomParticipantSubscribedTrack - Returns a list of tracks that are subscribed for the participant.
    **/
    listRoomParticipantSubscribedTrack(req: operations.ListRoomParticipantSubscribedTrackRequest, config?: AxiosRequestConfig): Promise<operations.ListRoomParticipantSubscribedTrackResponse>;
    listRoomRecording(req: operations.ListRoomRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListRoomRecordingResponse>;
    updateCompositionHook(req: operations.UpdateCompositionHookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCompositionHookResponse>;
    updateRoom(req: operations.UpdateRoomRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomResponse>;
    updateRoomParticipant(req: operations.UpdateRoomParticipantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomParticipantResponse>;
    updateRoomParticipantAnonymize(req: operations.UpdateRoomParticipantAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomParticipantAnonymizeResponse>;
    /**
     * updateRoomParticipantSubscribeRule - Update the Subscribe Rules for the Participant
    **/
    updateRoomParticipantSubscribeRule(req: operations.UpdateRoomParticipantSubscribeRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomParticipantSubscribeRuleResponse>;
    /**
     * updateRoomRecordingRule - Update the Recording Rules for the Room
    **/
    updateRoomRecordingRule(req: operations.UpdateRoomRecordingRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomRecordingRuleResponse>;
}
export {};
