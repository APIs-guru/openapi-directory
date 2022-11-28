import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAvailablePhoneNumberCountryServerList: readonly ["https://api.twilio.com"];
export declare class FetchAvailablePhoneNumberCountryPathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class FetchAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAvailablePhoneNumberCountryPathParams;
    security: FetchAvailablePhoneNumberCountrySecurity;
}
export declare class FetchAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountAvailablePhoneNumberCountry?: shared.ApiV2010AccountAvailablePhoneNumberCountry;
}
