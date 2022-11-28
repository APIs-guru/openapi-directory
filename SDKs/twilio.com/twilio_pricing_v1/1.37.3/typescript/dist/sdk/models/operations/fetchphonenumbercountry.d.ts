import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchPhoneNumberCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchPhoneNumberCountryPathParams extends SpeakeasyBase {
    isoCountry: string;
}
export declare class FetchPhoneNumberCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchPhoneNumberCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchPhoneNumberCountryPathParams;
    security: FetchPhoneNumberCountrySecurity;
}
export declare class FetchPhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV1PhoneNumberPhoneNumberCountryInstance?: shared.PricingV1PhoneNumberPhoneNumberCountryInstance;
}
