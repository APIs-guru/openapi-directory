import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchFreetextHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare enum SearchFreetextRequestBodySearchTypesEnum {
    Product = "PRODUCT",
    Destination = "DESTINATION",
    Attraction = "ATTRACTION",
    Recommendation = "RECOMMENDATION"
}
export declare class SearchFreetextRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    destId?: number;
    searchTypes?: SearchFreetextRequestBodySearchTypesEnum[];
    sortOrder?: shared.SortOrderEnum;
    text?: string;
    topX?: string;
}
export declare class SearchFreetext200ApplicationJson extends SpeakeasyBase {
    data?: shared.SearchFreetextResponse[];
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Map<string, any>;
    extraObject?: Map<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class SearchFreetextRequest extends SpeakeasyBase {
    headers: SearchFreetextHeaders;
    request?: SearchFreetextRequestBody;
}
export declare class SearchFreetextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchFreetext200ApplicationJsonObject?: SearchFreetext200ApplicationJson;
}
