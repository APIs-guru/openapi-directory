import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingAvailabilityHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingAvailabilityRequestBodyAgeBands extends SpeakeasyBase {
    bandId?: number;
    count?: number;
}
export declare class BookingAvailabilityRequestBody extends SpeakeasyBase {
    ageBands?: BookingAvailabilityRequestBodyAgeBands[];
    currencyCode?: string;
    month?: string;
    productCode?: string;
    year?: string;
}
export declare class BookingAvailability200ApplicationJsonDataAvailability extends SpeakeasyBase {
    available?: boolean;
    bookingDate?: string;
    currencyCode?: string;
    gradeCode?: string;
    merchantNetPrice?: number;
    merchantNetPriceFormatted?: string;
    retailPrice?: number;
    retailPriceFormatted?: string;
    sortOrder?: number;
    unavailableReason?: string;
}
/**
 * **object** detailing available tourgrades for the specified age bands and date range for this product
**/
export declare class BookingAvailability200ApplicationJsonData extends SpeakeasyBase {
    availability?: BookingAvailability200ApplicationJsonDataAvailability[];
    firstAvailableDate?: string;
    lastAvailableDate?: string;
    productCode?: string;
}
export declare class BookingAvailability200ApplicationJson extends SpeakeasyBase {
    data?: BookingAvailability200ApplicationJsonData;
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
export declare class BookingAvailabilityRequest extends SpeakeasyBase {
    headers: BookingAvailabilityHeaders;
    request?: BookingAvailabilityRequestBody;
}
export declare class BookingAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingAvailability200ApplicationJsonObject?: BookingAvailability200ApplicationJson;
}
