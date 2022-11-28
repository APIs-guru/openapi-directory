import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAvailablePhoneNumberMobileServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberMobilePathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberMobileQueryParams extends SpeakeasyBase {
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
export declare class ListAvailablePhoneNumberMobileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberMobileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberMobilePathParams;
    queryParams: ListAvailablePhoneNumberMobileQueryParams;
    security: ListAvailablePhoneNumberMobileSecurity;
}
export declare class ListAvailablePhoneNumberMobileResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberMobileResponse?: ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse;
    statusCode: number;
}
