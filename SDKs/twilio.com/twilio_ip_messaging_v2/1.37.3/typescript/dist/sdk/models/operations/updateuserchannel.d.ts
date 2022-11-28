import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUserChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateUserChannelPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    userSid: string;
}
export declare class UpdateUserChannelUpdateUserChannelRequest extends SpeakeasyBase {
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    notificationLevel?: shared.UserChannelEnumNotificationLevelEnum;
}
export declare class UpdateUserChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUserChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUserChannelPathParams;
    request?: UpdateUserChannelUpdateUserChannelRequest;
    security: UpdateUserChannelSecurity;
}
export declare class UpdateUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceUserUserChannel?: shared.IpMessagingV2ServiceUserUserChannel;
}
