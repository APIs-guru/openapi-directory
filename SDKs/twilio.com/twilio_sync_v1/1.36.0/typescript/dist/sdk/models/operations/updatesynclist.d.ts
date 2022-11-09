import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESYNCLIST_SERVERS: string[];
export declare class UpdateSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateSyncListUpdateSyncListRequest extends SpeakeasyBase {
    collectionTtl?: number;
    ttl?: number;
}
export declare class UpdateSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncListPathParams;
    request?: UpdateSyncListUpdateSyncListRequest;
    security: UpdateSyncListSecurity;
}
export declare class UpdateSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
