import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookingStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


// BookingStatusRequestBody
/** 
 * **note**: all items are optional, but at least one needs to be included
**/
export class BookingStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingDateFrom" })
  bookingDateFrom?: string;

  @Metadata({ data: "json, name=bookingDateTo" })
  bookingDateTo?: string;

  @Metadata({ data: "json, name=distributorItemRefs" })
  distributorItemRefs?: string[];

  @Metadata({ data: "json, name=distributorRefs" })
  distributorRefs?: string[];

  @Metadata({ data: "json, name=itemIds" })
  itemIds?: number[];

  @Metadata({ data: "json, name=leadFirstName" })
  leadFirstName?: string;

  @Metadata({ data: "json, name=leadSurname" })
  leadSurname?: string;

  @Metadata({ data: "json, name=test" })
  test?: boolean;
}


export class BookingStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingStatusRequestBody;
}


export class BookingStatus200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItem;

  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: number;

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=travelDate" })
  travelDate?: string;
}


// BookingStatus200ApplicationJsonData
/** 
 * **object** containing booking status and details
**/
export class BookingStatus200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItinerary;

  @Metadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @Metadata({ data: "json, name=itemSummaries", elemType: operations.BookingStatus200ApplicationJsonDataItemSummaries })
  itemSummaries?: BookingStatus200ApplicationJsonDataItemSummaries[];

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: BookingStatus200ApplicationJsonData;

  @Metadata({ data: "json, name=dateStamp" })
  dateStamp?: string;

  @Metadata({ data: "json, name=errorCodes" })
  errorCodes?: string[];

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: any[];

  @Metadata({ data: "json, name=errorMessageText" })
  errorMessageText?: string;

  @Metadata({ data: "json, name=errorName" })
  errorName?: string;

  @Metadata({ data: "json, name=errorReference" })
  errorReference?: string;

  @Metadata({ data: "json, name=errorType" })
  errorType?: string;

  @Metadata({ data: "json, name=extraInfo" })
  extraInfo?: Map<string, any>;

  @Metadata({ data: "json, name=extraObject" })
  extraObject?: Map<string, any>;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=vmid" })
  vmid?: string;
}


export class BookingStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingStatus200ApplicationJsonObject?: BookingStatus200ApplicationJson;
}
