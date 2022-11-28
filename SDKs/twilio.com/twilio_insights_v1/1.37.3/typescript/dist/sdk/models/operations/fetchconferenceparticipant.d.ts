import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConferenceParticipantServerList: readonly ["https://insights.twilio.com"];
export declare class FetchConferenceParticipantPathParams extends SpeakeasyBase {
    conferenceSid: string;
    participantSid: string;
}
export declare class FetchConferenceParticipantQueryParams extends SpeakeasyBase {
    events?: string;
    metrics?: string;
}
export declare class FetchConferenceParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConferenceParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConferenceParticipantPathParams;
    queryParams: FetchConferenceParticipantQueryParams;
    security: FetchConferenceParticipantSecurity;
}
export declare class FetchConferenceParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1ConferenceConferenceParticipant?: shared.InsightsV1ConferenceConferenceParticipant;
}
