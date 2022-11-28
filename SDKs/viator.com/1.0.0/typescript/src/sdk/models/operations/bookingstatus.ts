import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookingStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


// BookingStatusRequestBody
/** 
 * **note**: all items are optional, but at least one needs to be included
**/
export class BookingStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingDateFrom" })
  bookingDateFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingDateTo" })
  bookingDateTo?: string;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRefs" })
  distributorItemRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=distributorRefs" })
  distributorRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemIds" })
  itemIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=leadFirstName" })
  leadFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=leadSurname" })
  leadSurname?: string;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;
}


export class BookingStatus200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItem;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=travelDate" })
  travelDate?: string;
}


// BookingStatus200ApplicationJsonData
/** 
 * **object** containing booking status and details
**/
export class BookingStatus200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItinerary;

  @SpeakeasyMetadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingStatus200ApplicationJsonDataItemSummaries })
  itemSummaries?: BookingStatus200ApplicationJsonDataItemSummaries[];

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: BookingStatus200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=dateStamp" })
  dateStamp?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCodes" })
  errorCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: any[];

  @SpeakeasyMetadata({ data: "json, name=errorMessageText" })
  errorMessageText?: string;

  @SpeakeasyMetadata({ data: "json, name=errorName" })
  errorName?: string;

  @SpeakeasyMetadata({ data: "json, name=errorReference" })
  errorReference?: string;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: string;

  @SpeakeasyMetadata({ data: "json, name=extraInfo" })
  extraInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=extraObject" })
  extraObject?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vmid" })
  vmid?: string;
}


export class BookingStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingStatusRequestBody;
}


export class BookingStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingStatus200ApplicationJsonObject?: BookingStatus200ApplicationJson;
}
