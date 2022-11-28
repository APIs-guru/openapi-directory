import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAvailablePhoneNumberSharedCostServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberSharedCostPathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberSharedCostQueryParams extends SpeakeasyBase {
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
export declare class ListAvailablePhoneNumberSharedCostSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberSharedCostRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberSharedCostPathParams;
    queryParams: ListAvailablePhoneNumberSharedCostQueryParams;
    security: ListAvailablePhoneNumberSharedCostSecurity;
}
export declare class ListAvailablePhoneNumberSharedCostResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberSharedCostResponse?: ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse;
    statusCode: number;
}
