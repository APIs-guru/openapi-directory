import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCMAP_SERVERS: string[];
export declare class DeleteSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncMapPathParams;
    security: DeleteSyncMapSecurity;
}
export declare class DeleteSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
