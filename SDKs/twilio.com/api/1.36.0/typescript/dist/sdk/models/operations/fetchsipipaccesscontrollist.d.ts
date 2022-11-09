import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPIPACCESSCONTROLLIST_SERVERS: string[];
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
