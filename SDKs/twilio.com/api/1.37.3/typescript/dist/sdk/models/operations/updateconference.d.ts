import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConferenceServerList: readonly ["https://api.twilio.com"];
export declare class UpdateConferencePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateConferenceUpdateConferenceRequest extends SpeakeasyBase {
    announceMethod?: UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum;
    announceUrl?: string;
    status?: shared.ConferenceEnumUpdateStatusEnum;
}
export declare class UpdateConferenceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConferenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConferencePathParams;
    request?: UpdateConferenceUpdateConferenceRequest;
    security: UpdateConferenceSecurity;
}
export declare class UpdateConferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConference?: shared.ApiV2010AccountConference;
}
