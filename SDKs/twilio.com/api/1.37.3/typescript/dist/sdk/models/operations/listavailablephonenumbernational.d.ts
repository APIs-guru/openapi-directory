import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAvailablePhoneNumberNationalServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberNationalPathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberNationalQueryParams extends SpeakeasyBase {
    areaCode?: number;
    beta?: boolean;
    contains?: string;
    distance?: number;
    excludeAllAddressRequired?: boolean;
    excludeForeignAddressRequired?: boolean;
    excludeLocalAddressRequired?: boolean;
    faxEnabled?: boolean;
    inLata?: string;
    inLocality?: string;
    inPostalCode?: string;
    inRateCenter?: string;
    inRegion?: string;
    mmsEnabled?: boolean;
    nearLatLong?: string;
    nearNumber?: string;
    pageSize?: number;
    smsEnabled?: boolean;
    voiceEnabled?: boolean;
}
export declare class ListAvailablePhoneNumberNationalSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberNationalRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberNationalPathParams;
    queryParams: ListAvailablePhoneNumberNationalQueryParams;
    security: ListAvailablePhoneNumberNationalSecurity;
}
export declare class ListAvailablePhoneNumberNationalResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberNationalResponse?: ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse;
    statusCode: number;
}
