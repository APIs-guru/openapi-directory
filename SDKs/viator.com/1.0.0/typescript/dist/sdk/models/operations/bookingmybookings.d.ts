import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookingMybookingsQueryParams extends SpeakeasyBase {
    email?: string;
    itineraryOrItemId?: string;
    voucherKey?: string;
}
export declare class BookingMybookingsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
    dayRangeMax?: number;
    dayRangeMin?: number;
    percentageRefundable?: number;
    policyEndTimestamp?: number;
    policyStartTimestamp?: number;
}
export declare class BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
    amountRefundable?: string;
    cancellationFromTourDate?: BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];
    termsAndConditions?: string;
}
export declare class BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
    ageBandId?: number;
    count?: number;
    description?: string;
    pluralDescription?: string;
    sortOrder?: number;
}
export declare class BookingMybookings200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
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
    merchantTermsAndConditions?: BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;
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
    travellerAgeBands?: BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands[];
    voucherKey?: string;
    voucherOption?: string;
    voucherRequirements?: string;
    voucherUrl?: string;
    vouchers?: string;
}
export declare class BookingMybookings200ApplicationJsonData extends SpeakeasyBase {
    bookerEmail?: string;
    bookingDate?: string;
    bookingStatus?: shared.BookingStatusItinerary;
    currencyCode?: string;
    distributorRef?: string;
    exchangeRate?: number;
    hasVoucher?: boolean;
    itemSummaries?: BookingMybookings200ApplicationJsonDataItemSummaries[];
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
export declare class BookingMybookings200ApplicationJson extends SpeakeasyBase {
    data?: BookingMybookings200ApplicationJsonData;
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
export declare class BookingMybookingsRequest extends SpeakeasyBase {
    queryParams: BookingMybookingsQueryParams;
    headers: BookingMybookingsHeaders;
}
export declare class BookingMybookingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingMybookings200ApplicationJsonObject?: BookingMybookings200ApplicationJson;
}
