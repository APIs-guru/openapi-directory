import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS: string[];
export declare class UpdateMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
    installedAddOnSid: string;
    sid: string;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    enabled: boolean;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMarketplaceInstalledAddOnExtensionPathParams;
    request?: UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest;
    security: UpdateMarketplaceInstalledAddOnExtensionSecurity;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
