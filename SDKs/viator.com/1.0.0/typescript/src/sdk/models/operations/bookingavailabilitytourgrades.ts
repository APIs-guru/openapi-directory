import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingAvailabilityTourgradesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityTourgradesRequestBodyAgeBands extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;
}


export class BookingAvailabilityTourgradesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageBands", elemType: operations.BookingAvailabilityTourgradesRequestBodyAgeBands })
  ageBands?: BookingAvailabilityTourgradesRequestBodyAgeBands[];

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;
}


export class BookingAvailabilityTourgradesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingAvailabilityTourgradesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingAvailabilityTourgradesRequestBody;
}


export class BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=maximumCountRequired" })
  maximumCountRequired?: number;

  @Metadata({ data: "json, name=minimumCountRequired" })
  minimumCountRequired?: number;
}


export class BookingAvailabilityTourgrades200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageBands" })
  ageBands?: any[];

  @Metadata({ data: "json, name=ageBandsRequired", elemType: operations.BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired, elemDepth: 2 })
  ageBandsRequired?: BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired[][];

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @Metadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @Metadata({ data: "json, name=gradeDepartureTime" })
  gradeDepartureTime?: string;

  @Metadata({ data: "json, name=gradeDescription" })
  gradeDescription?: string;

  @Metadata({ data: "json, name=gradeTitle" })
  gradeTitle?: string;

  @Metadata({ data: "json, name=langServices" })
  langServices?: Map<string, any>;

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


export class BookingAvailabilityTourgrades200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.BookingAvailabilityTourgrades200ApplicationJsonData })
  data?: BookingAvailabilityTourgrades200ApplicationJsonData[];

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


export class BookingAvailabilityTourgradesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingAvailabilityTourgrades200ApplicationJsonObject?: BookingAvailabilityTourgrades200ApplicationJson;
}
