import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCSYNCLIST_SERVERS: string[];
export declare class FetchSyncSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncSyncListPathParams;
    security: FetchSyncSyncListSecurity;
}
export declare class FetchSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncList?: shared.PreviewSyncServiceSyncList;
}
