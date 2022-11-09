import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMESSAGINGCOUNTRY_SERVERS: string[];
export declare class ListMessagingCountryQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMessagingCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMessagingCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListMessagingCountryQueryParams;
    security: ListMessagingCountrySecurity;
}
export declare class ListMessagingCountryListMessagingCountryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMessagingCountryListMessagingCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV1MessagingMessagingCountry[];
    meta?: ListMessagingCountryListMessagingCountryResponseMeta;
}
export declare class ListMessagingCountryResponse extends SpeakeasyBase {
    contentType: string;
    listMessagingCountryResponse?: ListMessagingCountryListMessagingCountryResponse;
    statusCode: number;
}
