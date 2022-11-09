import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBUNDLE_SERVERS: string[];
export declare class ListBundleQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    hasValidUntilDate?: boolean;
    isoCountry?: string;
    numberType?: string;
    pageSize?: number;
    regulationSid?: string;
    sortBy?: shared.BundleEnumSortByEnum;
    sortDirection?: shared.BundleEnumSortDirectionEnum;
    status?: shared.BundleEnumStatusEnum;
    validUntilDate?: Date;
    validUntilDateLessThan?: Date;
    validUntilDateGreaterThan?: Date;
}
export declare class ListBundleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBundleRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListBundleQueryParams;
    security: ListBundleSecurity;
}
export declare class ListBundleListBundleResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBundleListBundleResponse extends SpeakeasyBase {
    meta?: ListBundleListBundleResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundle[];
}
export declare class ListBundleResponse extends SpeakeasyBase {
    contentType: string;
    listBundleResponse?: ListBundleListBundleResponse;
    statusCode: number;
}
