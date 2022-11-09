import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTAVAILABLEPHONENUMBERTOLLFREE_SERVERS: string[];
export declare class ListAvailablePhoneNumberTollFreePathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberTollFreeQueryParams extends SpeakeasyBase {
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
export declare class ListAvailablePhoneNumberTollFreeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberTollFreeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberTollFreePathParams;
    queryParams: ListAvailablePhoneNumberTollFreeQueryParams;
    security: ListAvailablePhoneNumberTollFreeSecurity;
}
export declare class ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberTollFreeResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberTollFreeResponse?: ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse;
    statusCode: number;
}
