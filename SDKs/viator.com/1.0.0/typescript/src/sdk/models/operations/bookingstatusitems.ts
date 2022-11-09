import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookingStatusItemsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


// BookingStatusItemsRequestBody
/** 
 * **note**: all items are optional, but at least one needs to be included
**/
export class BookingStatusItemsRequestBody extends SpeakeasyBase {
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


export class BookingStatusItemsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingStatusItemsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingStatusItemsRequestBody;
}


export class BookingStatusItems200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItem;

  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: number;
}


export class BookingStatusItems200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.BookingStatusItems200ApplicationJsonData })
  data?: BookingStatusItems200ApplicationJsonData[];

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


export class BookingStatusItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingStatusItems200ApplicationJsonObject?: BookingStatusItems200ApplicationJson;
}
