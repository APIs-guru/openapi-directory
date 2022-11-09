import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESYNCSYNCMAPITEM_SERVERS: string[];
export declare class UpdateSyncSyncMapItemPathParams extends SpeakeasyBase {
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class UpdateSyncSyncMapItemHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest extends SpeakeasyBase {
    data: any;
}
export declare class UpdateSyncSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncSyncMapItemPathParams;
    headers: UpdateSyncSyncMapItemHeaders;
    request?: UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;
    security: UpdateSyncSyncMapItemSecurity;
}
export declare class UpdateSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
