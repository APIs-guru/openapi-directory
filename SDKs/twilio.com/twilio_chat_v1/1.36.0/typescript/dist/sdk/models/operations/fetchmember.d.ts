import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMEMBER_SERVERS: string[];
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
    chatV1ServiceChannelMember?: shared.ChatV1ServiceChannelMember;
}
