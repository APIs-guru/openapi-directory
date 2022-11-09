import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCLIST_SERVERS: string[];
export declare class FetchSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncListPathParams;
    security: FetchSyncListSecurity;
}
export declare class FetchSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
