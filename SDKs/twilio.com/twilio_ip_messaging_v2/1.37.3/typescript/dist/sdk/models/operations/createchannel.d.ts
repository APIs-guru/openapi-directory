import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateChannelHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    type?: shared.ChannelEnumChannelTypeEnum;
    uniqueName?: string;
}
export declare class CreateChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateChannelPathParams;
    headers: CreateChannelHeaders;
    request?: CreateChannelCreateChannelRequest;
    security: CreateChannelSecurity;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannel?: shared.IpMessagingV2ServiceChannel;
}
