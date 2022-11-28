import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingAvailabilityDatesQueryParams extends SpeakeasyBase {
    productCode?: string;
}
export declare class BookingAvailabilityDatesHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingAvailabilityDates200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, string[]>;
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
export declare class BookingAvailabilityDatesRequest extends SpeakeasyBase {
    queryParams: BookingAvailabilityDatesQueryParams;
    headers: BookingAvailabilityDatesHeaders;
}
export declare class BookingAvailabilityDatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingAvailabilityDates200ApplicationJsonObject?: BookingAvailabilityDates200ApplicationJson;
}
