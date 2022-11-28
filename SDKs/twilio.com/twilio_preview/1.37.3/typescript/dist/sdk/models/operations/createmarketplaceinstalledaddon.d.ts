import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateMarketplaceInstalledAddOnServerList: readonly ["https://preview.twilio.com"];
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
