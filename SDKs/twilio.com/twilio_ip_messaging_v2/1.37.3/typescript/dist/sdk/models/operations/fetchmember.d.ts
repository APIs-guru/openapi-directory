import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMemberPathParams;
    security: FetchMemberSecurity;
}
export declare class FetchMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelMember?: shared.IpMessagingV2ServiceChannelMember;
}
