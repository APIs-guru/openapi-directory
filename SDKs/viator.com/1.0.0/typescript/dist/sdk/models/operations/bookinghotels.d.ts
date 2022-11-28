import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingHotelsQueryParams extends SpeakeasyBase {
    destId?: number;
    productCode?: string;
}
export declare class BookingHotelsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingHotels200ApplicationJsonData extends SpeakeasyBase {
    address?: string;
    brand?: string;
    city?: string;
    destinationId?: number;
    hotelString?: string;
    id?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
    notes?: string;
    phone?: string;
    postcode?: string;
    productCodes?: string[];
    sortOrder?: number;
}
export declare class BookingHotels200ApplicationJson extends SpeakeasyBase {
    data?: BookingHotels200ApplicationJsonData[];
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
export declare class BookingHotelsRequest extends SpeakeasyBase {
    queryParams: BookingHotelsQueryParams;
    headers: BookingHotelsHeaders;
}
export declare class BookingHotelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingHotels200ApplicationJsonObject?: BookingHotels200ApplicationJson;
}
