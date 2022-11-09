import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBUNDLECOPY_SERVERS: string[];
export declare class ListBundleCopyPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class ListBundleCopyQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListBundleCopySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBundleCopyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBundleCopyPathParams;
    queryParams: ListBundleCopyQueryParams;
    security: ListBundleCopySecurity;
}
export declare class ListBundleCopyListBundleCopyResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBundleCopyListBundleCopyResponse extends SpeakeasyBase {
    meta?: ListBundleCopyListBundleCopyResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundleBundleCopy[];
}
export declare class ListBundleCopyResponse extends SpeakeasyBase {
    contentType: string;
    listBundleCopyResponse?: ListBundleCopyListBundleCopyResponse;
    statusCode: number;
}
