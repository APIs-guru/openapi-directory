import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncMapItemPathParams extends SpeakeasyBase {
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class DeleteSyncSyncMapItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteSyncSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncSyncMapItemPathParams;
    headers: DeleteSyncSyncMapItemHeaders;
    security: DeleteSyncSyncMapItemSecurity;
}
export declare class DeleteSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
