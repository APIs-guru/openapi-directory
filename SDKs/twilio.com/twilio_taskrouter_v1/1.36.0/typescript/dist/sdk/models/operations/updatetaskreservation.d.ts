import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATETASKRESERVATION_SERVERS: string[];
export declare class UpdateTaskReservationPathParams extends SpeakeasyBase {
    sid: string;
    taskSid: string;
    workspaceSid: string;
}
export declare class UpdateTaskReservationHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare enum UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateTaskReservationUpdateTaskReservationRequest extends SpeakeasyBase {
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
    conferenceRecordingStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum;
    conferenceStatusCallback?: string;
    conferenceStatusCallbackEvent?: shared.TaskReservationEnumConferenceEventEnum[];
    conferenceStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum;
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
    recordingStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum;
    redirectAccept?: boolean;
    redirectCallSid?: string;
    redirectUrl?: string;
    region?: string;
    reservationStatus?: shared.TaskReservationEnumStatusEnum;
    sipAuthPassword?: string;
    sipAuthUsername?: string;
    startConferenceOnEnter?: boolean;
    statusCallback?: string;
    statusCallbackEvent?: shared.TaskReservationEnumCallStatusEnum[];
    statusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum;
    supervisor?: string;
    supervisorMode?: shared.TaskReservationEnumSupervisorModeEnum;
    timeout?: number;
    to?: string;
    waitMethod?: UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum;
    waitUrl?: string;
    workerActivitySid?: string;
}
export declare class UpdateTaskReservationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTaskReservationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTaskReservationPathParams;
    headers: UpdateTaskReservationHeaders;
    request?: UpdateTaskReservationUpdateTaskReservationRequest;
    security: UpdateTaskReservationSecurity;
}
export declare class UpdateTaskReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskTaskReservation?: shared.TaskrouterV1WorkspaceTaskTaskReservation;
}
