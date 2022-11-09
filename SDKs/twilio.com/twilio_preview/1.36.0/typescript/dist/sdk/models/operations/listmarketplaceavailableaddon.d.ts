import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMARKETPLACEAVAILABLEADDON_SERVERS: string[];
export declare class ListMarketplaceAvailableAddOnQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListMarketplaceAvailableAddOnQueryParams;
    security: ListMarketplaceAvailableAddOnSecurity;
}
export declare class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
    availableAddOns?: shared.PreviewMarketplaceAvailableAddOn[];
    meta?: ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta;
}
export declare class ListMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
    contentType: string;
    listMarketplaceAvailableAddOnResponse?: ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse;
    statusCode: number;
}
