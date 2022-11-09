import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCSYNCLIST_SERVERS: string[];
export declare class DeleteSyncSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncSyncListPathParams;
    security: DeleteSyncSyncListSecurity;
}
export declare class DeleteSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
