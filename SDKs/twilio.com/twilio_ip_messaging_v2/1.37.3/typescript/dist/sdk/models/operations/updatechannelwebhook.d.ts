import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateChannelWebhookServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateChannelWebhookPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateChannelWebhookUpdateChannelWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ChannelWebhookEnumMethodEnum;
    configurationRetryCount?: number;
    configurationTriggers?: string[];
    configurationUrl?: string;
}
export declare class UpdateChannelWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateChannelWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateChannelWebhookPathParams;
    request?: UpdateChannelWebhookUpdateChannelWebhookRequest;
    security: UpdateChannelWebhookSecurity;
}
export declare class UpdateChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
