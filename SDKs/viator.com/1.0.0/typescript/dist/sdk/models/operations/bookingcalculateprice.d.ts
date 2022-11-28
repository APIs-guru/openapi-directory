import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookingCalculatepriceHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingCalculatepriceRequestBodyItemsTravellers extends SpeakeasyBase {
    bandId?: number;
}
export declare class BookingCalculatepriceRequestBodyItems extends SpeakeasyBase {
    productCode?: string;
    tourGradeCode?: string;
    travelDate?: string;
    travellers?: BookingCalculatepriceRequestBodyItemsTravellers[];
}
export declare class BookingCalculatepriceRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    items?: BookingCalculatepriceRequestBodyItems[];
}
export declare class BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands extends SpeakeasyBase {
    ageBandId?: number;
    count?: number;
    description?: string;
    pluralDescription?: string;
    sortOrder?: number;
}
export declare class BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries extends SpeakeasyBase {
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
    hoursConfirmed?: number;
    itemId?: number;
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
    obfsId?: number;
    passbooks?: string;
    pickupHotelId?: number;
    pickupHotelName?: string;
    price?: number;
    priceFormatted?: string;
    priceUsd?: number;
    productCode?: string;
    productPulledDown?: boolean;
    productTitle?: string;
    productWidgetList?: string;
    rulesApplied?: string[];
    savingAmount?: string;
    savingAmountFormated?: string;
    sortOrder?: number;
    startingTime?: string;
    supplierName?: string;
    supplierPhoneNumber?: string;
    termsAndConditions?: string;
    tourGradeCode?: string;
    tourGradeDescription?: string;
    travelDate?: string;
    travellerAgeBands?: BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands[];
    voucherKey?: string;
    voucherOption?: string;
    voucherRequirements?: string;
    voucherUrl?: string;
    vouchers?: string;
}
/**
 * **summary results** for all itinerary items
**/
export declare class BookingCalculateprice200ApplicationJsonDataItinerary extends SpeakeasyBase {
    bookerEmail?: string;
    bookingDate?: string;
    bookingStatus?: shared.BookingStatusItinerary;
    currencyCode?: string;
    distributorRef?: string;
    exchangeRate?: number;
    hasVoucher?: boolean;
    itemSummaries?: BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries[];
    itineraryId?: number;
    omniPreRuleList?: number;
    paypalRedirectUrl?: string;
    rulesApplied?: string[];
    securityToken?: string;
    sortOrder?: number;
    totalPrice?: number;
    totalPriceFormatted?: string;
    totalPriceUsd?: number;
    userId?: number;
    voucherKey?: string;
    voucherUrl?: string;
}
export declare class BookingCalculateprice200ApplicationJsonData extends SpeakeasyBase {
    currencyCode?: string;
    hasPromoCode?: boolean;
    itinerary?: BookingCalculateprice200ApplicationJsonDataItinerary;
    itineraryFromPrice?: number;
    itineraryFromPriceFormatted?: string;
    itineraryNewPrice?: number;
    itineraryNewPriceFormatted?: string;
    itinerarySaving?: number;
    itinerarySavingFormatted?: string;
    paymentGatewayInfo?: string;
    promoCode?: string;
    promoCodeExpired?: boolean;
    promoCodeValid?: boolean;
    rulesApplied?: string[];
}
export declare class BookingCalculateprice200ApplicationJson extends SpeakeasyBase {
    data?: BookingCalculateprice200ApplicationJsonData;
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
export declare class BookingCalculatepriceRequest extends SpeakeasyBase {
    headers: BookingCalculatepriceHeaders;
    request?: BookingCalculatepriceRequestBody;
}
export declare class BookingCalculatepriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingCalculateprice200ApplicationJsonObject?: BookingCalculateprice200ApplicationJson;
}
