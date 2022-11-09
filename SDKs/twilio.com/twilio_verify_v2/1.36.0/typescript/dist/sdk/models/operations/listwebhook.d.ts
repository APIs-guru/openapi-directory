import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTWEBHOOK_SERVERS: string[];
export declare class ListWebhookPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListWebhookQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListWebhookPathParams;
    queryParams: ListWebhookQueryParams;
    security: ListWebhookSecurity;
}
export declare class ListWebhookListWebhookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWebhookListWebhookResponse extends SpeakeasyBase {
    meta?: ListWebhookListWebhookResponseMeta;
    webhooks?: shared.VerifyV2ServiceWebhook[];
}
export declare class ListWebhookResponse extends SpeakeasyBase {
    contentType: string;
    listWebhookResponse?: ListWebhookListWebhookResponse;
    statusCode: number;
}
