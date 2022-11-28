import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchProductsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare enum SearchProductsRequestBodySortOrderEnum {
    TopSellers = "TOP_SELLERS",
    ReviewAvgRatingA = "REVIEW_AVG_RATING_A",
    ReviewAvgRatingD = "REVIEW_AVG_RATING_D",
    PriceFromA = "PRICE_FROM_A",
    PriceFromD = "PRICE_FROM_D"
}
export declare class SearchProductsRequestBody extends SpeakeasyBase {
    catId?: number;
    currencyCode?: string;
    destId?: number;
    endDate?: string;
    seoId?: string;
    sortOrder?: SearchProductsRequestBodySortOrderEnum;
    startDate?: string;
    subCatId?: number;
    topX?: string;
}
export declare class SearchProducts200ApplicationJsonData extends SpeakeasyBase {
    admission?: string;
    available?: boolean;
    bookingEngineId?: shared.BookingEngineIdEnum;
    catIds?: number[];
    code?: string;
    currencyCode?: string;
    duration?: string;
    essential?: string;
    merchantCancellable?: boolean;
    merchantNetPriceFrom?: number;
    merchantNetPriceFromFormatted?: string;
    onRequestPeriod?: number;
    onSale?: boolean;
    panoramaCount?: number;
    pas?: Map<string, any>;
    photoCount?: number;
    price?: number;
    priceFormatted?: string;
    primaryDestinationId?: number;
    primaryDestinationName?: string;
    primaryDestinationUrlName?: string;
    primaryGroupId?: number;
    productUrlName?: string;
    rating?: number;
    reviewCount?: number;
    rrp?: number;
    rrpformatted?: string;
    savingAmount?: string;
    savingAmountFormated?: string;
    shortDescription?: string;
    shortTitle?: string;
    sortOrder?: number;
    specialOfferAvailable?: boolean;
    specialReservation?: boolean;
    specialReservationDetails?: string;
    sslSupported?: any;
    subCatIds?: number[];
    supplierCode?: string;
    supplierName?: string;
    thumbnailHiResUrl?: string;
    thumbnailUrl?: string;
    title?: string;
    translationLevel?: number;
    uniqueShortDescription?: string;
    videoCount?: number;
    webUrl?: string;
}
export declare class SearchProducts200ApplicationJson extends SpeakeasyBase {
    data?: SearchProducts200ApplicationJsonData[];
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
export declare class SearchProductsRequest extends SpeakeasyBase {
    headers: SearchProductsHeaders;
    request?: SearchProductsRequestBody;
}
export declare class SearchProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchProducts200ApplicationJsonObject?: SearchProducts200ApplicationJson;
}
