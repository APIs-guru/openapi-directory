import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAvailablePhoneNumberVoipServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberVoipPathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberVoipQueryParams extends SpeakeasyBase {
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
export declare class ListAvailablePhoneNumberVoipSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberVoipRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberVoipPathParams;
    queryParams: ListAvailablePhoneNumberVoipQueryParams;
    security: ListAvailablePhoneNumberVoipSecurity;
}
export declare class ListAvailablePhoneNumberVoipResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberVoipResponse?: ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse;
    statusCode: number;
}
