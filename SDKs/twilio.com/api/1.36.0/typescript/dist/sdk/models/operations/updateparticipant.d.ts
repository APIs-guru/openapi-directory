import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEPARTICIPANT_SERVERS: string[];
export declare class UpdateParticipantPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    conferenceSid: string;
}
export declare enum UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateParticipantUpdateParticipantRequestHoldMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateParticipantUpdateParticipantRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateParticipantUpdateParticipantRequest extends SpeakeasyBase {
    announceMethod?: UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;
    announceUrl?: string;
    beepOnExit?: boolean;
    callSidToCoach?: string;
    coaching?: boolean;
    endConferenceOnExit?: boolean;
    hold?: boolean;
    holdMethod?: UpdateParticipantUpdateParticipantRequestHoldMethodEnum;
    holdUrl?: string;
    muted?: boolean;
    waitMethod?: UpdateParticipantUpdateParticipantRequestWaitMethodEnum;
    waitUrl?: string;
}
export declare class UpdateParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateParticipantPathParams;
    request?: UpdateParticipantUpdateParticipantRequest;
    security: UpdateParticipantSecurity;
}
export declare class UpdateParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
