import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMarketplaceAvailableAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class ListMarketplaceAvailableAddOnExtensionPathParams extends SpeakeasyBase {
    availableAddOnSid: string;
}
export declare class ListMarketplaceAvailableAddOnExtensionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
    extensions?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension[];
    meta?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta;
}
export declare class ListMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMarketplaceAvailableAddOnExtensionPathParams;
    queryParams: ListMarketplaceAvailableAddOnExtensionQueryParams;
    security: ListMarketplaceAvailableAddOnExtensionSecurity;
}
export declare class ListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    listMarketplaceAvailableAddOnExtensionResponse?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse;
    statusCode: number;
}
