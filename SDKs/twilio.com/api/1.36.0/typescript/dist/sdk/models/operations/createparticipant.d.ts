import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEPARTICIPANT_SERVERS: string[];
export declare class CreateParticipantPathParams extends SpeakeasyBase {
    accountSid: string;
    conferenceSid: string;
}
export declare enum CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateParticipantCreateParticipantRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
    amdStatusCallback?: string;
    amdStatusCallbackMethod?: CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum;
    beep?: string;
    byoc?: string;
    callReason?: string;
    callSidToCoach?: string;
    callerId?: string;
    coaching?: boolean;
    conferenceRecord?: string;
    conferenceRecordingStatusCallback?: string;
    conferenceRecordingStatusCallbackEvent?: string[];
    conferenceRecordingStatusCallbackMethod?: CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum;
    conferenceStatusCallback?: string;
    conferenceStatusCallbackEvent?: string[];
    conferenceStatusCallbackMethod?: CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum;
    conferenceTrim?: string;
    earlyMedia?: boolean;
    endConferenceOnExit?: boolean;
    from: string;
    jitterBufferSize?: string;
    label?: string;
    machineDetection?: string;
    machineDetectionSilenceTimeout?: number;
    machineDetectionSpeechEndThreshold?: number;
    machineDetectionSpeechThreshold?: number;
    machineDetectionTimeout?: number;
    maxParticipants?: number;
    muted?: boolean;
    record?: boolean;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackEvent?: string[];
    recordingStatusCallbackMethod?: CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum;
    recordingTrack?: string;
    region?: string;
    sipAuthPassword?: string;
    sipAuthUsername?: string;
    startConferenceOnEnter?: boolean;
    statusCallback?: string;
    statusCallbackEvent?: string[];
    statusCallbackMethod?: CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum;
    timeLimit?: number;
    timeout?: number;
    to: string;
    waitMethod?: CreateParticipantCreateParticipantRequestWaitMethodEnum;
    waitUrl?: string;
}
export declare class CreateParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateParticipantPathParams;
    request?: CreateParticipantCreateParticipantRequest;
    security: CreateParticipantSecurity;
}
export declare class CreateParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
