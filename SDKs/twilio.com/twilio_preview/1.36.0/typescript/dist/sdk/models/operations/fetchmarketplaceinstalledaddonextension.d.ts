import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS: string[];
export declare class FetchMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
    installedAddOnSid: string;
    sid: string;
}
export declare class FetchMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMarketplaceInstalledAddOnExtensionPathParams;
    security: FetchMarketplaceInstalledAddOnExtensionSecurity;
}
export declare class FetchMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
