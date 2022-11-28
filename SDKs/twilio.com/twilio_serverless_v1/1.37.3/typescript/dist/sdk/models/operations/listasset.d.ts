import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class ListAssetPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListAssetQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAssetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAssetListAssetResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAssetListAssetResponse extends SpeakeasyBase {
    assets?: shared.ServerlessV1ServiceAsset[];
    meta?: ListAssetListAssetResponseMeta;
}
export declare class ListAssetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAssetPathParams;
    queryParams: ListAssetQueryParams;
    security: ListAssetSecurity;
}
export declare class ListAssetResponse extends SpeakeasyBase {
    contentType: string;
    listAssetResponse?: ListAssetListAssetResponse;
    statusCode: number;
}
