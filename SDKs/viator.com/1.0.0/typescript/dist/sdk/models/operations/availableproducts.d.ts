import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AvailableProductsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class AvailableProductsRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    endDate?: string;
    numAdults?: number;
    productCodes?: string[];
    startDate?: string;
}
/**
 * **pricing object** for *this* tour grade
**/
export declare class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote extends SpeakeasyBase {
    generalRetailPrice?: string;
    merchantNetPrice?: string;
    retailPrice?: string;
}
export declare class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates extends SpeakeasyBase {
    dateList?: string;
    priceFrom?: string;
    priceQuote?: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote;
}
export declare class AvailableProducts200ApplicationJsonDataPasTourGrades extends SpeakeasyBase {
    availDates?: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates[];
    bookingEngine?: string;
    description?: string;
    languageServices?: Map<string, any[]>;
    sapi?: boolean;
    title?: string;
    tourGradeCode?: string;
}
/**
 * **object** detailing product availability
 * - `pas` stands for Product Availability Schema
 *
**/
export declare class AvailableProducts200ApplicationJsonDataPas extends SpeakeasyBase {
    incompleteQuote?: boolean;
    productCode?: string;
    removedChildAges?: string[];
    tourGrades?: Map<string, AvailableProducts200ApplicationJsonDataPasTourGrades>;
    travellerMix?: string;
}
export declare class AvailableProducts200ApplicationJsonData extends SpeakeasyBase {
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
    pas?: AvailableProducts200ApplicationJsonDataPas;
    photoCount?: number;
    price?: number;
    priceFormatted?: string;
    primaryDestinationId?: number;
    primaryDestinationName?: string;
    primaryDestinationUrlName?: string;
    primaryGroupId?: string;
    productUrlName?: string;
    rating?: number;
    reviewCount?: number;
    rrp?: number;
    rrpFormatted?: string;
    savingAmount?: string;
    savingAmountFormated?: string;
    shortDescription?: string;
    shortTitle?: string;
    sortOrder?: number;
    specialOfferAvailable?: boolean;
    specialReservation?: boolean;
    specialReservationDetails?: string;
    sslSupported?: boolean;
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
export declare class AvailableProducts200ApplicationJson extends SpeakeasyBase {
    data?: AvailableProducts200ApplicationJsonData[];
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
export declare class AvailableProductsRequest extends SpeakeasyBase {
    headers: AvailableProductsHeaders;
    request?: AvailableProductsRequestBody;
}
export declare class AvailableProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    availableProducts200ApplicationJsonObject?: AvailableProducts200ApplicationJson;
}
