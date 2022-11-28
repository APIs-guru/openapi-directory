import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingAvailabilityTourgradesHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingAvailabilityTourgradesRequestBodyAgeBands extends SpeakeasyBase {
    bandId?: number;
    count?: number;
}
export declare class BookingAvailabilityTourgradesRequestBody extends SpeakeasyBase {
    ageBands?: BookingAvailabilityTourgradesRequestBodyAgeBands[];
    bookingDate?: string;
    currencyCode?: string;
    productCode?: string;
}
export declare class BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired extends SpeakeasyBase {
    bandId?: number;
    maximumCountRequired?: number;
    minimumCountRequired?: number;
}
export declare class BookingAvailabilityTourgrades200ApplicationJsonData extends SpeakeasyBase {
    ageBands?: any[];
    ageBandsRequired?: BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired[][];
    available?: boolean;
    bookingDate?: string;
    currencyCode?: string;
    defaultLanguageCode?: string;
    gradeCode?: string;
    gradeDepartureTime?: string;
    gradeDescription?: string;
    gradeTitle?: string;
    langServices?: Map<string, any>;
    merchantNetPrice?: number;
    merchantNetPriceFormatted?: string;
    retailPrice?: number;
    retailPriceFormatted?: string;
    sortOrder?: number;
    unavailableReason?: string;
}
export declare class BookingAvailabilityTourgrades200ApplicationJson extends SpeakeasyBase {
    data?: BookingAvailabilityTourgrades200ApplicationJsonData[];
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
export declare class BookingAvailabilityTourgradesRequest extends SpeakeasyBase {
    headers: BookingAvailabilityTourgradesHeaders;
    request?: BookingAvailabilityTourgradesRequestBody;
}
export declare class BookingAvailabilityTourgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingAvailabilityTourgrades200ApplicationJsonObject?: BookingAvailabilityTourgrades200ApplicationJson;
}
