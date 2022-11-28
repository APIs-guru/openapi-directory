import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookingStatusHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
/**
 * **note**: all items are optional, but at least one needs to be included
**/
export declare class BookingStatusRequestBody extends SpeakeasyBase {
    bookingDateFrom?: string;
    bookingDateTo?: string;
    distributorItemRefs?: string[];
    distributorRefs?: string[];
    itemIds?: number[];
    leadFirstName?: string;
    leadSurname?: string;
    test?: boolean;
}
export declare class BookingStatus200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
    bookingStatus?: shared.BookingStatusItem;
    distributorItemRef?: string;
    itemId?: number;
    itineraryId?: number;
    sortOrder?: number;
    travelDate?: string;
}
/**
 * **object** containing booking status and details
**/
export declare class BookingStatus200ApplicationJsonData extends SpeakeasyBase {
    bookingDate?: string;
    bookingStatus?: shared.BookingStatusItinerary;
    distributorRef?: string;
    itemSummaries?: BookingStatus200ApplicationJsonDataItemSummaries[];
    itineraryId?: number;
    sortOrder?: number;
}
export declare class BookingStatus200ApplicationJson extends SpeakeasyBase {
    data?: BookingStatus200ApplicationJsonData;
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
export declare class BookingStatusRequest extends SpeakeasyBase {
    headers: BookingStatusHeaders;
    request?: BookingStatusRequestBody;
}
export declare class BookingStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingStatus200ApplicationJsonObject?: BookingStatus200ApplicationJson;
}
