import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUserChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchUserChannelPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    userSid: string;
}
export declare class FetchUserChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUserChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUserChannelPathParams;
    security: FetchUserChannelSecurity;
}
export declare class FetchUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceUserUserChannel?: shared.IpMessagingV2ServiceUserUserChannel;
}
