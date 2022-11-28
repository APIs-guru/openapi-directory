import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://insights.twilio.com"];
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
    fetchAccountSettings(req: operations.FetchAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.FetchAccountSettingsResponse>;
    /**
     * fetchAnnotation - Fetch a specific Annotation.
    **/
    fetchAnnotation(req: operations.FetchAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.FetchAnnotationResponse>;
    fetchCall(req: operations.FetchCallRequest, config?: AxiosRequestConfig): Promise<operations.FetchCallResponse>;
    /**
     * fetchConference - Fetch a specific Conference.
    **/
    fetchConference(req: operations.FetchConferenceRequest, config?: AxiosRequestConfig): Promise<operations.FetchConferenceResponse>;
    /**
     * fetchConferenceParticipant - Fetch a specific Conference Participant Summary.
    **/
    fetchConferenceParticipant(req: operations.FetchConferenceParticipantRequest, config?: AxiosRequestConfig): Promise<operations.FetchConferenceParticipantResponse>;
    fetchSummary(req: operations.FetchSummaryRequest, config?: AxiosRequestConfig): Promise<operations.FetchSummaryResponse>;
    /**
     * fetchVideoParticipantSummary - Get Video Log Analyzer data for a Room Participant.
    **/
    fetchVideoParticipantSummary(req: operations.FetchVideoParticipantSummaryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVideoParticipantSummaryResponse>;
    /**
     * fetchVideoRoomSummary - Get Video Log Analyzer data for a Room.
    **/
    fetchVideoRoomSummary(req: operations.FetchVideoRoomSummaryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVideoRoomSummaryResponse>;
    listCallSummaries(req: operations.ListCallSummariesRequest, config?: AxiosRequestConfig): Promise<operations.ListCallSummariesResponse>;
    /**
     * listConference - Retrieve a list of Conferences.
    **/
    listConference(req: operations.ListConferenceRequest, config?: AxiosRequestConfig): Promise<operations.ListConferenceResponse>;
    /**
     * listConferenceParticipant - List Conference Participants.
    **/
    listConferenceParticipant(req: operations.ListConferenceParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListConferenceParticipantResponse>;
    listEvent(req: operations.ListEventRequest, config?: AxiosRequestConfig): Promise<operations.ListEventResponse>;
    listMetric(req: operations.ListMetricRequest, config?: AxiosRequestConfig): Promise<operations.ListMetricResponse>;
    /**
     * listVideoParticipantSummary - Get a list of room participants.
    **/
    listVideoParticipantSummary(req: operations.ListVideoParticipantSummaryRequest, config?: AxiosRequestConfig): Promise<operations.ListVideoParticipantSummaryResponse>;
    /**
     * listVideoRoomSummary - Get a list of Programmable Video Rooms.
    **/
    listVideoRoomSummary(req: operations.ListVideoRoomSummaryRequest, config?: AxiosRequestConfig): Promise<operations.ListVideoRoomSummaryResponse>;
    updateAccountSettings(req: operations.UpdateAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountSettingsResponse>;
    /**
     * updateAnnotation - Create/Update the annotation for the call
    **/
    updateAnnotation(req: operations.UpdateAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnnotationResponse>;
}
export {};
