import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTRUNKINGCOUNTRY_SERVERS: string[];
export declare class ListTrunkingCountryQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTrunkingCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTrunkingCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListTrunkingCountryQueryParams;
    security: ListTrunkingCountrySecurity;
}
export declare class ListTrunkingCountryListTrunkingCountryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTrunkingCountryListTrunkingCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV2TrunkingCountry[];
    meta?: ListTrunkingCountryListTrunkingCountryResponseMeta;
}
export declare class ListTrunkingCountryResponse extends SpeakeasyBase {
    contentType: string;
    listTrunkingCountryResponse?: ListTrunkingCountryListTrunkingCountryResponse;
    statusCode: number;
}
