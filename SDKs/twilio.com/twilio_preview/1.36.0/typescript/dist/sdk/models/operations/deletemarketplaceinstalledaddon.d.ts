import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEMARKETPLACEINSTALLEDADDON_SERVERS: string[];
export declare class DeleteMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMarketplaceInstalledAddOnPathParams;
    security: DeleteMarketplaceInstalledAddOnSecurity;
}
export declare class DeleteMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
