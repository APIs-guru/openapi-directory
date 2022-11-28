import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipIpAccessControlListPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchSipIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipIpAccessControlListPathParams;
    security: FetchSipIpAccessControlListSecurity;
}
export declare class FetchSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
