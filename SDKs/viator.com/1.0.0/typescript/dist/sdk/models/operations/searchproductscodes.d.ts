import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchProductsCodesHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class SearchProductsCodesRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    productCodes?: string[];
}
export declare class SearchProductsCodes200ApplicationJsonData extends SpeakeasyBase {
    admission?: string;
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
    primaryGroupId?: string;
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
export declare class SearchProductsCodes200ApplicationJson extends SpeakeasyBase {
    data?: SearchProductsCodes200ApplicationJsonData[];
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
export declare class SearchProductsCodesRequest extends SpeakeasyBase {
    headers: SearchProductsCodesHeaders;
    request?: SearchProductsCodesRequestBody;
}
export declare class SearchProductsCodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchProductsCodes200ApplicationJsonObject?: SearchProductsCodes200ApplicationJson;
}
