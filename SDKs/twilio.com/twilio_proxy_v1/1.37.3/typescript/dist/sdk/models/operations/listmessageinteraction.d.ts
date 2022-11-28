import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMessageInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class ListMessageInteractionPathParams extends SpeakeasyBase {
    participantSid: string;
    serviceSid: string;
    sessionSid: string;
}
export declare class ListMessageInteractionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMessageInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMessageInteractionListMessageInteractionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMessageInteractionListMessageInteractionResponse extends SpeakeasyBase {
    interactions?: shared.ProxyV1ServiceSessionParticipantMessageInteraction[];
    meta?: ListMessageInteractionListMessageInteractionResponseMeta;
}
export declare class ListMessageInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMessageInteractionPathParams;
    queryParams: ListMessageInteractionQueryParams;
    security: ListMessageInteractionSecurity;
}
export declare class ListMessageInteractionResponse extends SpeakeasyBase {
    contentType: string;
    listMessageInteractionResponse?: ListMessageInteractionListMessageInteractionResponse;
    statusCode: number;
}
