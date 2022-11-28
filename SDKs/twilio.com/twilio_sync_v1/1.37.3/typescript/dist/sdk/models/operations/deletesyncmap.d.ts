import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncMapServerList: readonly ["https://sync.twilio.com"];
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
