import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDIALINGPERMISSIONSCOUNTRY_SERVERS: string[];
export declare class ListDialingPermissionsCountryQueryParams extends SpeakeasyBase {
    continent?: string;
    countryCode?: string;
    highRiskSpecialNumbersEnabled?: boolean;
    highRiskTollfraudNumbersEnabled?: boolean;
    isoCode?: string;
    lowRiskNumbersEnabled?: boolean;
    pageSize?: number;
}
export declare class ListDialingPermissionsCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDialingPermissionsCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListDialingPermissionsCountryQueryParams;
    security: ListDialingPermissionsCountrySecurity;
}
export declare class ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDialingPermissionsCountryListDialingPermissionsCountryResponse extends SpeakeasyBase {
    content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountry[];
    meta?: ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
}
export declare class ListDialingPermissionsCountryResponse extends SpeakeasyBase {
    contentType: string;
    listDialingPermissionsCountryResponse?: ListDialingPermissionsCountryListDialingPermissionsCountryResponse;
    statusCode: number;
}
