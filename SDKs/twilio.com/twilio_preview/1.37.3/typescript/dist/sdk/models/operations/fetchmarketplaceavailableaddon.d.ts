import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMarketplaceAvailableAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class FetchMarketplaceAvailableAddOnPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMarketplaceAvailableAddOnPathParams;
    security: FetchMarketplaceAvailableAddOnSecurity;
}
export declare class FetchMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewMarketplaceAvailableAddOn?: shared.PreviewMarketplaceAvailableAddOn;
}
