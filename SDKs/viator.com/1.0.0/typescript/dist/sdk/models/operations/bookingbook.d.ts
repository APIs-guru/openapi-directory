import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookingBookHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
/**
 * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
**/
export declare class BookingBookRequestBodyBooker extends SpeakeasyBase {
    cellPhone?: string;
    cellPhoneCountryCode?: string;
    email?: string;
    firstname: string;
    homePhone?: string;
    surname: string;
    title?: string;
}
export declare class BookingBookRequestBodyItemsBookingQuestionAnswers extends SpeakeasyBase {
    answer?: string;
    questionId?: number;
}
/**
 * **object** containing partner details at a per-item level
**/
export declare class BookingBookRequestBodyItemsPartnerItemDetail extends SpeakeasyBase {
    distributorItemRef?: string;
}
export declare class BookingBookRequestBodyItemsTravellers extends SpeakeasyBase {
    bandId?: number;
    firstname?: string;
    leadTraveller?: boolean;
    surname?: string;
    title?: string;
}
export declare class BookingBookRequestBodyItems extends SpeakeasyBase {
    bookingQuestionAnswers?: BookingBookRequestBodyItemsBookingQuestionAnswers[];
    hotelId?: string;
    languageOptionCode?: string;
    partnerItemDetail?: BookingBookRequestBodyItemsPartnerItemDetail;
    pickupPoint?: string;
    productCode?: string;
    specialRequirements?: string;
    tourGradeCode?: string;
    travelDate?: string;
    travellers?: BookingBookRequestBodyItemsTravellers[];
}
/**
 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 *
**/
export declare class BookingBookRequestBodyPartnerDetail extends SpeakeasyBase {
    distributorRef?: string;
}
export declare class BookingBookRequestBody extends SpeakeasyBase {
    booker?: BookingBookRequestBodyBooker;
    currencyCode?: string;
    demo?: boolean;
    items?: BookingBookRequestBodyItems[];
    partnerDetail?: BookingBookRequestBodyPartnerDetail;
}
export declare class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
    dayRangeMax?: number;
    dayRangeMin?: number;
    percentageRefundable?: number;
    policyEndTimestamp?: number;
    policyStartTimestamp?: number;
}
export declare class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
    amountRefundable?: string;
    cancellationFromTourDate?: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];
    termsAndConditions?: string;
}
export declare class BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
    ageBandId?: number;
    count?: number;
    description?: string;
    pluralDescription?: string;
    sortOrder?: number;
}
export declare class BookingBook200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
    applePassSupported?: boolean;
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
    hoursConfirmed?: string;
    itemId?: number;
    itineraryId?: number;
    languageServicesCode?: string;
    lastRetailPrice?: number;
    lastRetailPriceFormatted?: string;
    leadTravellerFirstname?: string;
    leadTravellerSurname?: string;
    leadTravellerTitle?: string;
    merchantCancellable?: boolean;
    merchantNetPrice?: number;
    merchantNetPriceFormatted?: string;
    merchantTermsAndConditions?: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;
    obfsId?: number;
    passbooks?: string;
    pickupHotelId?: string;
    pickupHotelName?: string;
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
    startingTime?: string;
    supplierName?: string;
    supplierPhoneNumber?: string;
    termsAndConditions?: Map<string, any>;
    tourGradeCode?: string;
    tourGradeDescription?: string;
    travelDate?: string;
    travellerAgeBands?: BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands[];
    voucherKey?: string;
    voucherOption?: string;
    voucherRequirements?: string;
    voucherUrl?: string;
    vouchers?: string;
}
export declare class BookingBook200ApplicationJsonData extends SpeakeasyBase {
    bookerEmail?: string;
    bookingDate?: string;
    bookingStatus?: shared.BookingStatusItinerary;
    currencyCode?: string;
    distributorRef?: string;
    exchangeRate?: number;
    hasVoucher?: boolean;
    itemSummaries?: BookingBook200ApplicationJsonDataItemSummaries[];
    itineraryId?: number;
    omniPreRuleList?: string;
    paypalRedirectUrl?: string;
    rulesApplied?: string;
    securityToken?: string;
    sortOrder?: number;
    totalPrice?: number;
    totalPriceFormatted?: string;
    totalPriceUsd?: number;
    userId?: string;
    voucherKey?: string;
    voucherUrl?: string;
}
export declare class BookingBook200ApplicationJson extends SpeakeasyBase {
    data?: BookingBook200ApplicationJsonData;
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
export declare class BookingBookRequest extends SpeakeasyBase {
    headers: BookingBookHeaders;
    request?: BookingBookRequestBody;
}
export declare class BookingBookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingBook200ApplicationJsonObject?: BookingBook200ApplicationJson;
}
