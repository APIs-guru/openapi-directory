import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncSyncMapServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncSyncMapPathParams;
    security: DeleteSyncSyncMapSecurity;
}
export declare class DeleteSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
