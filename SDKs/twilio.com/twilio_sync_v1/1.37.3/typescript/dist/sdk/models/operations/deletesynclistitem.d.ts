import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncListItemPathParams extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class DeleteSyncListItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncListItemPathParams;
    headers: DeleteSyncListItemHeaders;
    security: DeleteSyncListItemSecurity;
}
export declare class DeleteSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
