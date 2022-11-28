import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConferenceParticipantServerList: readonly ["https://insights.twilio.com"];
export declare class ListConferenceParticipantPathParams extends SpeakeasyBase {
    conferenceSid: string;
}
export declare class ListConferenceParticipantQueryParams extends SpeakeasyBase {
    events?: string;
    label?: string;
    pageSize?: number;
    participantSid?: string;
}
export declare class ListConferenceParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConferenceParticipantListConferenceParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConferenceParticipantListConferenceParticipantResponse extends SpeakeasyBase {
    meta?: ListConferenceParticipantListConferenceParticipantResponseMeta;
    participants?: shared.InsightsV1ConferenceConferenceParticipant[];
}
export declare class ListConferenceParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConferenceParticipantPathParams;
    queryParams: ListConferenceParticipantQueryParams;
    security: ListConferenceParticipantSecurity;
}
export declare class ListConferenceParticipantResponse extends SpeakeasyBase {
    contentType: string;
    listConferenceParticipantResponse?: ListConferenceParticipantListConferenceParticipantResponse;
    statusCode: number;
}
