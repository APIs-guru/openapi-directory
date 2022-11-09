import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMARKETPLACEINSTALLEDADDON_SERVERS: string[];
export declare class UpdateMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    configuration?: any;
    uniqueName?: string;
}
export declare class UpdateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMarketplaceInstalledAddOnPathParams;
    request?: UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;
    security: UpdateMarketplaceInstalledAddOnSecurity;
}
export declare class UpdateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
