import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMarketplaceInstalledAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class ListMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
    installedAddOnSid: string;
}
export declare class ListMarketplaceInstalledAddOnExtensionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    extensions?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension[];
    meta?: ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta;
}
export declare class ListMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMarketplaceInstalledAddOnExtensionPathParams;
    queryParams: ListMarketplaceInstalledAddOnExtensionQueryParams;
    security: ListMarketplaceInstalledAddOnExtensionSecurity;
}
export declare class ListMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    listMarketplaceInstalledAddOnExtensionResponse?: ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse;
    statusCode: number;
}
