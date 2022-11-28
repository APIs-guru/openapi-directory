import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookingStatusItemsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
/**
 * **note**: all items are optional, but at least one needs to be included
**/
export declare class BookingStatusItemsRequestBody extends SpeakeasyBase {
    bookingDateFrom?: string;
    bookingDateTo?: string;
    distributorItemRefs?: string[];
    distributorRefs?: string[];
    itemIds?: number[];
    leadFirstName?: string;
    leadSurname?: string;
    test?: boolean;
}
export declare class BookingStatusItems200ApplicationJsonData extends SpeakeasyBase {
    bookingStatus?: shared.BookingStatusItem;
    distributorItemRef?: string;
    itemId?: number;
}
export declare class BookingStatusItems200ApplicationJson extends SpeakeasyBase {
    data?: BookingStatusItems200ApplicationJsonData[];
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
export declare class BookingStatusItemsRequest extends SpeakeasyBase {
    headers: BookingStatusItemsHeaders;
    request?: BookingStatusItemsRequestBody;
}
export declare class BookingStatusItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingStatusItems200ApplicationJsonObject?: BookingStatusItems200ApplicationJson;
}
