import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchChannelWebhookServerList: readonly ["https://ip-messaging.twilio.com"];
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
    ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
