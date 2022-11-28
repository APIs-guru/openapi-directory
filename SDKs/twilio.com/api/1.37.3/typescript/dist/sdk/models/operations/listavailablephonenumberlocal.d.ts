import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAvailablePhoneNumberLocalServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberLocalPathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberLocalQueryParams extends SpeakeasyBase {
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
export declare class ListAvailablePhoneNumberLocalSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberLocalRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberLocalPathParams;
    queryParams: ListAvailablePhoneNumberLocalQueryParams;
    security: ListAvailablePhoneNumberLocalSecurity;
}
export declare class ListAvailablePhoneNumberLocalResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberLocalResponse?: ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse;
    statusCode: number;
}
