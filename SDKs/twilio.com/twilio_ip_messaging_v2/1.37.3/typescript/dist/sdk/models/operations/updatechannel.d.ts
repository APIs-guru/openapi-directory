import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateChannelHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}
export declare class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateChannelPathParams;
    headers: UpdateChannelHeaders;
    request?: UpdateChannelUpdateChannelRequest;
    security: UpdateChannelSecurity;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannel?: shared.IpMessagingV2ServiceChannel;
}
