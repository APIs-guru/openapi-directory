import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMarketplaceInstalledAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class ListMarketplaceInstalledAddOnQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    installedAddOns?: shared.PreviewMarketplaceInstalledAddOn[];
    meta?: ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta;
}
export declare class ListMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListMarketplaceInstalledAddOnQueryParams;
    security: ListMarketplaceInstalledAddOnSecurity;
}
export declare class ListMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    listMarketplaceInstalledAddOnResponse?: ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse;
    statusCode: number;
}
