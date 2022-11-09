import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMARKETPLACEINSTALLEDADDON_SERVERS: string[];
export declare class FetchMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMarketplaceInstalledAddOnPathParams;
    security: FetchMarketplaceInstalledAddOnSecurity;
}
export declare class FetchMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
