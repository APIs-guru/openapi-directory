import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCHANNELWEBHOOK_SERVERS: string[];
export declare class FetchChannelWebhookPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchChannelWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchChannelWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchChannelWebhookPathParams;
    security: FetchChannelWebhookSecurity;
}
export declare class FetchChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceChannelChannelWebhook?: shared.ChatV2ServiceChannelChannelWebhook;
}
