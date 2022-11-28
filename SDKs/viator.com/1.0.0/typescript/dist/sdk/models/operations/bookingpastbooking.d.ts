import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookingPastbookingQueryParams extends SpeakeasyBase {
    email?: string;
    itemId?: string;
    voucherKey?: string;
}
export declare class BookingPastbookingHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
    dayRangeMax?: number;
    dayRangeMin?: number;
    percentageRefundable?: number;
    policyEndTimestamp?: number;
    policyStartTimestamp?: number;
}
export declare class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
    amountRefundable?: string;
    cancellationFromTourDate?: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];
    termsAndConditions?: string;
}
export declare class BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
    ageBandId?: number;
    count?: number;
    description?: string;
    pluralDescription?: string;
    sortOrder?: number;
}
export declare class BookingPastbooking200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
    barcodeOption?: string;
    barcodeType?: string;
    bookingEngineId?: shared.BookingEngineIdResponseEnum;
    bookingStatus?: shared.BookingStatusItem;
    currencyCode?: string;
    departsFrom?: string;
    departurePoint?: string;
    departurePointAddress?: string;
    departurePointDirections?: string;
    destId?: number;
    distributorItemRef?: string;
    hoursConfirmed?: number;
    itemId?: string;
    itineraryId?: number;
    languageServicesLanguageCode?: string;
    lastRetailPrice?: number;
    lastRetailPriceFormatted?: string;
    leadTravellerFirstname?: string;
    leadTravellerSurname?: string;
    leadTravellerTitle?: string;
    merchantCancellable?: boolean;
    merchantNetPrice?: number;
    merchantNetPriceFormatted?: string;
    merchantTermsAndConditions?: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;
    obfsId?: string;
    passbooks?: string;
    price?: number;
    priceFormatted?: string;
    priceUsd?: number;
    productCode?: string;
    productPulledDown?: boolean;
    productTitle?: string;
    productWidgetList?: string;
    rulesApplied?: string;
    savingAmount?: string;
    savingAmountFormated?: string;
    sortOrder?: number;
    termsAndConditions?: string;
    tourGradeCode?: string;
    tourGradeDescription?: string;
    travelDate?: string;
    travellerAgeBands?: BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands[];
    voucherKey?: string;
    voucherOption?: string;
    voucherRequirements?: string;
    voucherUrl?: string;
    vouchers?: string;
}
/**
 * **object** containing pricing matrix information
**/
export declare class BookingPastbooking200ApplicationJsonData extends SpeakeasyBase {
    bookerEmail?: string;
    bookingDate?: string;
    bookingStatus?: shared.BookingStatusItinerary;
    currencyCode?: string;
    distributorRef?: string;
    exchangeRate?: number;
    hasVoucher?: boolean;
    itemSummaries?: BookingPastbooking200ApplicationJsonDataItemSummaries[];
    itineraryId?: number;
    rulesApplied?: string;
    sortOrder?: number;
    totalPrice?: number;
    totalPriceFormatted?: string;
    totalPriceUsd?: number;
    userId?: string;
    voucherKey?: string;
    voucherUrl?: string;
}
export declare class BookingPastbooking200ApplicationJson extends SpeakeasyBase {
    data?: BookingPastbooking200ApplicationJsonData;
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
export declare class BookingPastbookingRequest extends SpeakeasyBase {
    queryParams: BookingPastbookingQueryParams;
    headers: BookingPastbookingHeaders;
}
export declare class BookingPastbookingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingPastbooking200ApplicationJsonObject?: BookingPastbooking200ApplicationJson;
}
