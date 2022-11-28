import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateChannelWebhookServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateChannelWebhookPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class CreateChannelWebhookCreateChannelWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ChannelWebhookEnumMethodEnum;
    configurationRetryCount?: number;
    configurationTriggers?: string[];
    configurationUrl?: string;
    type: shared.ChannelWebhookEnumTypeEnum;
}
export declare class CreateChannelWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateChannelWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateChannelWebhookPathParams;
    request?: CreateChannelWebhookCreateChannelWebhookRequest;
    security: CreateChannelWebhookSecurity;
}
export declare class CreateChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
