import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESYNCSYNCMAPITEM_SERVERS: string[];
export declare class CreateSyncSyncMapItemPathParams extends SpeakeasyBase {
    mapSid: string;
    serviceSid: string;
}
export declare class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest extends SpeakeasyBase {
    data: any;
    key: string;
}
export declare class CreateSyncSyncMapItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncSyncMapItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncSyncMapItemPathParams;
    request?: CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;
    security: CreateSyncSyncMapItemSecurity;
}
export declare class CreateSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
