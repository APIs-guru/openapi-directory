import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrunkingCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchTrunkingCountryPathParams extends SpeakeasyBase {
    isoCountry: string;
}
export declare class FetchTrunkingCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrunkingCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrunkingCountryPathParams;
    security: FetchTrunkingCountrySecurity;
}
export declare class FetchTrunkingCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV2TrunkingCountryInstance?: shared.PricingV2TrunkingCountryInstance;
}
