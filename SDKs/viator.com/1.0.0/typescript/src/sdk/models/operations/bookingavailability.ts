import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingAvailabilityHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityRequestBodyAgeBands extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;
}


export class BookingAvailabilityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageBands", elemType: operations.BookingAvailabilityRequestBodyAgeBands })
  ageBands?: BookingAvailabilityRequestBodyAgeBands[];

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=month" })
  month?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=year" })
  year?: string;
}


export class BookingAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingAvailabilityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingAvailabilityRequestBody;
}


export class BookingAvailability200ApplicationJsonDataAvailability extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @Metadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: number;

  @Metadata({ data: "json, name=merchantNetPriceFormatted" })
  merchantNetPriceFormatted?: string;

  @Metadata({ data: "json, name=retailPrice" })
  retailPrice?: number;

  @Metadata({ data: "json, name=retailPriceFormatted" })
  retailPriceFormatted?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=unavailableReason" })
  unavailableReason?: string;
}


// BookingAvailability200ApplicationJsonData
/** 
 * **object** detailing available tourgrades for the specified age bands and date range for this product
**/
export class BookingAvailability200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability", elemType: operations.BookingAvailability200ApplicationJsonDataAvailability })
  availability?: BookingAvailability200ApplicationJsonDataAvailability[];

  @Metadata({ data: "json, name=firstAvailableDate" })
  firstAvailableDate?: string;

  @Metadata({ data: "json, name=lastAvailableDate" })
  lastAvailableDate?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;
}


export class BookingAvailability200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: BookingAvailability200ApplicationJsonData;

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


export class BookingAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingAvailability200ApplicationJsonObject?: BookingAvailability200ApplicationJson;
}
