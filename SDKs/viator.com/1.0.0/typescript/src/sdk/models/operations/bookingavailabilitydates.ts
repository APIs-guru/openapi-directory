import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingAvailabilityDatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productCode" })
  productCode?: string;
}


export class BookingAvailabilityDatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityDates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, string[]>;

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


export class BookingAvailabilityDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BookingAvailabilityDatesQueryParams;

  @SpeakeasyMetadata()
  headers: BookingAvailabilityDatesHeaders;
}


export class BookingAvailabilityDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingAvailabilityDates200ApplicationJsonObject?: BookingAvailabilityDates200ApplicationJson;
}
