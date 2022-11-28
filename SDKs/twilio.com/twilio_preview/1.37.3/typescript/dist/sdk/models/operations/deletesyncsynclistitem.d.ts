import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncSyncListItemServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncListItemPathParams extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class DeleteSyncSyncListItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteSyncSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncSyncListItemPathParams;
    headers: DeleteSyncSyncListItemHeaders;
    security: DeleteSyncSyncListItemSecurity;
}
export declare class DeleteSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
