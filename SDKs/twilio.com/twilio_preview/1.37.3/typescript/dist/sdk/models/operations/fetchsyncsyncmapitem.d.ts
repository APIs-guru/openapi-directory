import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
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
