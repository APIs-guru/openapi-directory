import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTASSETVERSION_SERVERS: string[];
export declare class ListAssetVersionPathParams extends SpeakeasyBase {
    assetSid: string;
    serviceSid: string;
}
export declare class ListAssetVersionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAssetVersionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAssetVersionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAssetVersionPathParams;
    queryParams: ListAssetVersionQueryParams;
    security: ListAssetVersionSecurity;
}
export declare class ListAssetVersionListAssetVersionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAssetVersionListAssetVersionResponse extends SpeakeasyBase {
    assetVersions?: shared.ServerlessV1ServiceAssetAssetVersion[];
    meta?: ListAssetVersionListAssetVersionResponseMeta;
}
export declare class ListAssetVersionResponse extends SpeakeasyBase {
    contentType: string;
    listAssetVersionResponse?: ListAssetVersionListAssetVersionResponse;
    statusCode: number;
}
