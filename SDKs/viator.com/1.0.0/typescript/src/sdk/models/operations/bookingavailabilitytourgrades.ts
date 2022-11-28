import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingAvailabilityTourgradesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityTourgradesRequestBodyAgeBands extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;
}


export class BookingAvailabilityTourgradesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageBands", elemType: BookingAvailabilityTourgradesRequestBodyAgeBands })
  ageBands?: BookingAvailabilityTourgradesRequestBodyAgeBands[];

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;
}


export class BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumCountRequired" })
  maximumCountRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumCountRequired" })
  minimumCountRequired?: number;
}


export class BookingAvailabilityTourgrades200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageBands" })
  ageBands?: any[];

  @SpeakeasyMetadata({ data: "json, name=ageBandsRequired", elemType: BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired, elemDepth: 2 })
  ageBandsRequired?: BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired[][];

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeDepartureTime" })
  gradeDepartureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeDescription" })
  gradeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeTitle" })
  gradeTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=langServices" })
  langServices?: Map<string, any>;

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


export class BookingAvailabilityTourgrades200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: BookingAvailabilityTourgrades200ApplicationJsonData })
  data?: BookingAvailabilityTourgrades200ApplicationJsonData[];

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


export class BookingAvailabilityTourgradesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingAvailabilityTourgradesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingAvailabilityTourgradesRequestBody;
}


export class BookingAvailabilityTourgradesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingAvailabilityTourgrades200ApplicationJsonObject?: BookingAvailabilityTourgrades200ApplicationJson;
}
