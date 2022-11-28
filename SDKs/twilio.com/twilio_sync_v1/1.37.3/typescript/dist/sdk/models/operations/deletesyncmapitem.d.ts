import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncMapItemPathParams extends SpeakeasyBase {
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class DeleteSyncMapItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncMapItemPathParams;
    headers: DeleteSyncMapItemHeaders;
    security: DeleteSyncMapItemSecurity;
}
export declare class DeleteSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
