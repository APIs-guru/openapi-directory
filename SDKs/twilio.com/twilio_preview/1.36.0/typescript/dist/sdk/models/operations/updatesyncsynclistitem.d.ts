import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESYNCSYNCLISTITEM_SERVERS: string[];
export declare class UpdateSyncSyncListItemPathParams extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class UpdateSyncSyncListItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateSyncSyncListItemUpdateSyncSyncListItemRequest extends SpeakeasyBase {
    data: any;
}
export declare class UpdateSyncSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncSyncListItemPathParams;
    headers: UpdateSyncSyncListItemHeaders;
    request?: UpdateSyncSyncListItemUpdateSyncSyncListItemRequest;
    security: UpdateSyncSyncListItemSecurity;
}
export declare class UpdateSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
