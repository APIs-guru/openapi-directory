import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class ListParticipantPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
}
export declare class ListParticipantQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListParticipantListParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListParticipantListParticipantResponse extends SpeakeasyBase {
    meta?: ListParticipantListParticipantResponseMeta;
    participants?: shared.ProxyV1ServiceSessionParticipant[];
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
