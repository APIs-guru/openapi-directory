import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMARKETPLACEINSTALLEDADDON_SERVERS: string[];
export declare class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    acceptTermsOfService: boolean;
    availableAddOnSid: string;
    configuration?: any;
    uniqueName?: string;
}
export declare class CreateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest;
    security: CreateMarketplaceInstalledAddOnSecurity;
}
export declare class CreateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
