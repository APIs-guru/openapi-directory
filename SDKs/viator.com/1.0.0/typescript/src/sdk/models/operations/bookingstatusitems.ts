import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookingStatusItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


// BookingStatusItemsRequestBody
/** 
 * **note**: all items are optional, but at least one needs to be included
**/
export class BookingStatusItemsRequestBody extends SpeakeasyBase {
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


export class BookingStatusItems200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItem;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;
}


export class BookingStatusItems200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: BookingStatusItems200ApplicationJsonData })
  data?: BookingStatusItems200ApplicationJsonData[];

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


export class BookingStatusItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingStatusItemsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingStatusItemsRequestBody;
}


export class BookingStatusItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingStatusItems200ApplicationJsonObject?: BookingStatusItems200ApplicationJson;
}
