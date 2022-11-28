import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingAvailabilityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityRequestBodyAgeBands extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;
}


export class BookingAvailabilityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageBands", elemType: BookingAvailabilityRequestBodyAgeBands })
  ageBands?: BookingAvailabilityRequestBodyAgeBands[];

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}


export class BookingAvailability200ApplicationJsonDataAvailability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" })
  merchantNetPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=retailPrice" })
  retailPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=retailPriceFormatted" })
  retailPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=unavailableReason" })
  unavailableReason?: string;
}


// BookingAvailability200ApplicationJsonData
/** 
 * **object** detailing available tourgrades for the specified age bands and date range for this product
**/
export class BookingAvailability200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability", elemType: BookingAvailability200ApplicationJsonDataAvailability })
  availability?: BookingAvailability200ApplicationJsonDataAvailability[];

  @SpeakeasyMetadata({ data: "json, name=firstAvailableDate" })
  firstAvailableDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastAvailableDate" })
  lastAvailableDate?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;
}


export class BookingAvailability200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: BookingAvailability200ApplicationJsonData;

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


export class BookingAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingAvailabilityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingAvailabilityRequestBody;
}


export class BookingAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingAvailability200ApplicationJsonObject?: BookingAvailability200ApplicationJson;
}
