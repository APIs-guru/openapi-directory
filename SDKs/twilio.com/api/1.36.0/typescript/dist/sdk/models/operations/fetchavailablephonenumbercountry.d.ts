import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHAVAILABLEPHONENUMBERCOUNTRY_SERVERS: string[];
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
