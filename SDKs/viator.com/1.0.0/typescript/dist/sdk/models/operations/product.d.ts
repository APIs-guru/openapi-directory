import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ProductVoucherOptionEnum {
    VoucherPaperOnly = "VOUCHER_PAPER_ONLY",
    VoucherE = "VOUCHER_E"
}
export declare class ProductQueryParams extends SpeakeasyBase {
    code?: string;
    currencyCode?: string;
    excludeTourGradeAvailability?: boolean;
    showUnavailable?: boolean;
    sortOrder?: shared.SortOrderReviewEnum;
    voucherOption?: ProductVoucherOptionEnum;
}
export declare class ProductHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class Product200ApplicationJsonDataAgeBands extends SpeakeasyBase {
    adult?: boolean;
    ageFrom?: number;
    ageTo?: number;
    bandId?: number;
    count?: number;
    description?: string;
    pluralDescription?: string;
    sortOrder?: number;
    treatAsAdult?: boolean;
}
export declare class Product200ApplicationJsonDataBookingQuestions extends SpeakeasyBase {
    message?: string;
    questionId?: number;
    required?: boolean;
    sortOrder?: number;
    stringQuestionId?: string;
    subTitle?: string;
    title?: string;
}
export declare class Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
    dayRangeMax?: number;
    dayRangeMin?: number;
    percentageRefundable?: number;
    policyEndTimestamp?: number;
    policyStartTimestamp?: number;
}
export declare class Product200ApplicationJsonDataMerchantTermsAndConditions extends SpeakeasyBase {
    amountRefundable?: number;
    cancellationFromTourDate?: Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate[];
    merchantTermsAndConditionsType?: number;
    termsAndConditions?: string;
}
export declare class Product200ApplicationJsonDataPassengerAttributes extends SpeakeasyBase {
    customAttributeKgs?: string;
    customAttributeLbs?: string;
    errorMissingMessage?: string;
    errorValidationMessage?: string;
    questionId?: string;
    required?: boolean;
    title?: string;
    validateType?: string;
}
export declare class Product200ApplicationJsonDataProductPhotos extends SpeakeasyBase {
    caption?: string;
    photoUrl?: string;
    supplier?: string;
}
export declare class Product200ApplicationJsonDataTourGrades extends SpeakeasyBase {
    currencyCode?: string;
    defaultLanguageCode?: string;
    gradeCode?: string;
    gradeDepartureTime?: string;
    gradeDescription?: string;
    gradeTitle?: string;
    langServices?: Map<string, string>;
    merchantNetPriceFrom?: number;
    merchantNetPriceFromFormatted?: string;
    priceFrom?: number;
    priceFromFormatted?: string;
    sortOrder?: number;
}
/**
 * **object** containing product details
**/
export declare class Product200ApplicationJsonData extends SpeakeasyBase {
    additionalInfo?: string[];
    admission?: string;
    ageBands?: Product200ApplicationJsonDataAgeBands[];
    allTravellerNamesRequired?: boolean;
    applePassSupported?: boolean;
    available?: boolean;
    bookingEngineId?: shared.BookingEngineIdEnum;
    bookingQuestions?: Product200ApplicationJsonDataBookingQuestions[];
    catIds?: number[];
    city?: string;
    code?: string;
    country?: string;
    currencyCode?: string;
    departurePoint?: string;
    departureTime?: string;
    departureTimeComments?: string;
    description?: string;
    destinationId?: number;
    duration?: string;
    essential?: string;
    exclusions?: string[];
    highlights?: number;
    hotelPickup?: boolean;
    inclusions?: string[];
    itinerary?: string;
    location?: string;
    mapUrl?: string;
    maxTravellerCount?: number;
    merchantCancellable?: boolean;
    merchantNetPriceFrom?: number;
    merchantNetPriceFromFormatted?: string;
    merchantTermsAndConditions?: Product200ApplicationJsonDataMerchantTermsAndConditions;
    onRequestPeriod?: number;
    onSale?: boolean;
    operates?: string;
    panoramaCount?: number;
    pas?: Map<string, any>;
    passengerAttributes?: Product200ApplicationJsonDataPassengerAttributes[];
    photoCount?: number;
    price?: number;
    priceFormatted?: string;
    primaryDestinationId?: number;
    primaryDestinationName?: string;
    primaryDestinationUrlName?: string;
    primaryGroupId?: string;
    productPhotos?: Product200ApplicationJsonDataProductPhotos[];
    productUrlName?: string;
    rating?: number;
    ratingCounts?: shared.RatingCounts;
    region?: string;
    returnDetails?: string;
    reviewCount?: number;
    reviews?: shared.ReviewObject[];
    rrp?: number;
    rrpFormatted?: string;
    salesPoints?: string[];
    savingAmount?: string;
    savingAmountFormated?: string;
    shortDescription?: string;
    shortTitle?: string;
    specialOffer?: string;
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
    tourGrades?: Product200ApplicationJsonDataTourGrades[];
    tourGradesAvailable?: boolean;
    translationLevel?: number;
    userPhotos?: shared.PhotoObject[];
    videoCount?: number;
    videos?: string;
    voucherOption?: string;
    voucherRequirements?: any;
    webUrl?: string;
}
export declare class Product200ApplicationJson extends SpeakeasyBase {
    data?: Product200ApplicationJsonData;
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
export declare class ProductRequest extends SpeakeasyBase {
    queryParams: ProductQueryParams;
    headers: ProductHeaders;
}
export declare class ProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    product200ApplicationJsonObject?: Product200ApplicationJson;
}
