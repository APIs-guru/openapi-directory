import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTAVAILABLEPHONENUMBERCOUNTRY_SERVERS: string[];
export declare class ListAvailablePhoneNumberCountryPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListAvailablePhoneNumberCountryQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberCountryPathParams;
    queryParams: ListAvailablePhoneNumberCountryQueryParams;
    security: ListAvailablePhoneNumberCountrySecurity;
}
export declare class ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
    countries?: shared.ApiV2010AccountAvailablePhoneNumberCountry[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberCountryResponse?: ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse;
    statusCode: number;
}
