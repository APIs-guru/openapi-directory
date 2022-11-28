import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingAvailabilityTourgradesPricingmatrixHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingAvailabilityTourgradesPricingmatrixRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    month?: string;
    productCode?: string;
    year?: string;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices extends SpeakeasyBase {
    currencyCode?: string;
    merchantNetPrice?: number;
    merchantNetPriceFormatted?: string;
    minNoOfTravellersRequiredForPrice?: number;
    price?: number;
    priceFormatted?: string;
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices extends SpeakeasyBase {
    bandId?: number;
    maximumCountRequired?: number;
    minimumCountRequired?: number;
    prices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices[];
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix extends SpeakeasyBase {
    ageBandPrices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices[];
    bookingDate?: string;
    pricingUnit?: string;
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades extends SpeakeasyBase {
    gradeCode?: string;
    gradeTitle?: string;
    pricingMatrix?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix[];
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates extends SpeakeasyBase {
    bookingDate?: string;
    callForLastMinAvailability?: boolean;
    sortOrder?: number;
    tourGrades?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades[];
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData extends SpeakeasyBase {
    bookingMonth?: string;
    dates?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates[];
    pricingUnit?: string;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJson extends SpeakeasyBase {
    data?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData;
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
export declare class BookingAvailabilityTourgradesPricingmatrixRequest extends SpeakeasyBase {
    headers: BookingAvailabilityTourgradesPricingmatrixHeaders;
    request?: BookingAvailabilityTourgradesPricingmatrixRequestBody;
}
export declare class BookingAvailabilityTourgradesPricingmatrixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingAvailabilityTourgradesPricingmatrix200ApplicationJsonObject?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJson;
}
