import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class ListInteractionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
}
export declare class ListInteractionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListInteractionListInteractionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListInteractionListInteractionResponse extends SpeakeasyBase {
    interactions?: shared.ProxyV1ServiceSessionInteraction[];
    meta?: ListInteractionListInteractionResponseMeta;
}
export declare class ListInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListInteractionPathParams;
    queryParams: ListInteractionQueryParams;
    security: ListInteractionSecurity;
}
export declare class ListInteractionResponse extends SpeakeasyBase {
    contentType: string;
    listInteractionResponse?: ListInteractionListInteractionResponse;
    statusCode: number;
}
