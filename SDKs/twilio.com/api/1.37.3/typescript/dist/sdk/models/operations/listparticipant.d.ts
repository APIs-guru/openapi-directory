import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListParticipantServerList: readonly ["https://api.twilio.com"];
export declare class ListParticipantPathParams extends SpeakeasyBase {
    accountSid: string;
    conferenceSid: string;
}
export declare class ListParticipantQueryParams extends SpeakeasyBase {
    coaching?: boolean;
    hold?: boolean;
    muted?: boolean;
    pageSize?: number;
}
export declare class ListParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListParticipantListParticipantResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    participants?: shared.ApiV2010AccountConferenceParticipant[];
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListParticipantPathParams;
    queryParams: ListParticipantQueryParams;
    security: ListParticipantSecurity;
}
export declare class ListParticipantResponse extends SpeakeasyBase {
    contentType: string;
    listParticipantResponse?: ListParticipantListParticipantResponse;
    statusCode: number;
}
