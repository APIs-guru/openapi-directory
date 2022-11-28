import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchIpAccessControlListPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class FetchIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchIpAccessControlListPathParams;
    security: FetchIpAccessControlListSecurity;
}
export declare class FetchIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
