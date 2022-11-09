import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEWORKERRESERVATION_SERVERS: string[];
export declare class UpdateWorkerReservationPathParams extends SpeakeasyBase {
    sid: string;
    workerSid: string;
    workspaceSid: string;
}
export declare class UpdateWorkerReservationHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare enum UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateWorkerReservationUpdateWorkerReservationRequest extends SpeakeasyBase {
    beep?: string;
    beepOnCustomerEntrance?: boolean;
    callAccept?: boolean;
    callFrom?: string;
    callRecord?: string;
    callStatusCallbackUrl?: string;
    callTimeout?: number;
    callTo?: string;
    callUrl?: string;
    conferenceRecord?: string;
    conferenceRecordingStatusCallback?: string;
    conferenceRecordingStatusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum;
    conferenceStatusCallback?: string;
    conferenceStatusCallbackEvent?: shared.WorkerReservationEnumConferenceEventEnum[];
    conferenceStatusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum;
    conferenceTrim?: string;
    dequeueFrom?: string;
    dequeuePostWorkActivitySid?: string;
    dequeueRecord?: string;
    dequeueStatusCallbackEvent?: string[];
    dequeueStatusCallbackUrl?: string;
    dequeueTimeout?: number;
    dequeueTo?: string;
    earlyMedia?: boolean;
    endConferenceOnCustomerExit?: boolean;
    endConferenceOnExit?: boolean;
    from?: string;
    instruction?: string;
    maxParticipants?: number;
    muted?: boolean;
    postWorkActivitySid?: string;
    record?: boolean;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum;
    redirectAccept?: boolean;
    redirectCallSid?: string;
    redirectUrl?: string;
    region?: string;
    reservationStatus?: shared.WorkerReservationEnumStatusEnum;
    sipAuthPassword?: string;
    sipAuthUsername?: string;
    startConferenceOnEnter?: boolean;
    statusCallback?: string;
    statusCallbackEvent?: shared.WorkerReservationEnumCallStatusEnum[];
    statusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum;
    timeout?: number;
    to?: string;
    waitMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum;
    waitUrl?: string;
    workerActivitySid?: string;
}
export declare class UpdateWorkerReservationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWorkerReservationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWorkerReservationPathParams;
    headers: UpdateWorkerReservationHeaders;
    request?: UpdateWorkerReservationUpdateWorkerReservationRequest;
    security: UpdateWorkerReservationSecurity;
}
export declare class UpdateWorkerReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkerReservation?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation;
}
