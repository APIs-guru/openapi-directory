import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMARKETPLACEAVAILABLEADDONEXTENSION_SERVERS: string[];
export declare class FetchMarketplaceAvailableAddOnExtensionPathParams extends SpeakeasyBase {
    availableAddOnSid: string;
    sid: string;
}
export declare class FetchMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMarketplaceAvailableAddOnExtensionPathParams;
    security: FetchMarketplaceAvailableAddOnExtensionSecurity;
}
export declare class FetchMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceAvailableAddOnAvailableAddOnExtension?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension;
}
