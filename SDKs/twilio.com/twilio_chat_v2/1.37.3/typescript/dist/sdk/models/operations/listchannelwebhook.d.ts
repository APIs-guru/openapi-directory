import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class ListChannelWebhookPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class ListChannelWebhookQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListChannelWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListChannelWebhookListChannelWebhookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListChannelWebhookListChannelWebhookResponse extends SpeakeasyBase {
    meta?: ListChannelWebhookListChannelWebhookResponseMeta;
    webhooks?: shared.ChatV2ServiceChannelChannelWebhook[];
}
export declare class ListChannelWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListChannelWebhookPathParams;
    queryParams: ListChannelWebhookQueryParams;
    security: ListChannelWebhookSecurity;
}
export declare class ListChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    listChannelWebhookResponse?: ListChannelWebhookListChannelWebhookResponse;
    statusCode: number;
}
