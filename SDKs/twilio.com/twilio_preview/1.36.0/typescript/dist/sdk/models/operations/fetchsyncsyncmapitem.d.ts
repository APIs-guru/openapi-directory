import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCSYNCMAPITEM_SERVERS: string[];
export declare class FetchSyncSyncMapItemPathParams extends SpeakeasyBase {
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class FetchSyncSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncSyncMapItemPathParams;
    security: FetchSyncSyncMapItemSecurity;
}
export declare class FetchSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
