import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingAvailabilityTourgradesPricingmatrixHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityTourgradesPricingmatrixRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" })
  merchantNetPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=minNoOfTravellersRequiredForPrice" })
  minNoOfTravellersRequiredForPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumCountRequired" })
  maximumCountRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumCountRequired" })
  minimumCountRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices })
  prices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices[];

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageBandPrices", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices })
  ageBandPrices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices[];

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingUnit" })
  pricingUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeTitle" })
  gradeTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingMatrix", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix })
  pricingMatrix?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix[];

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=callForLastMinAvailability" })
  callForLastMinAvailability?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=tourGrades", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades })
  tourGrades?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades[];
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingMonth" })
  bookingMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=dates", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates })
  dates?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates[];

  @SpeakeasyMetadata({ data: "json, name=pricingUnit" })
  pricingUnit?: string;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData;

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


export class BookingAvailabilityTourgradesPricingmatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingAvailabilityTourgradesPricingmatrixHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingAvailabilityTourgradesPricingmatrixRequestBody;
}


export class BookingAvailabilityTourgradesPricingmatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingAvailabilityTourgradesPricingmatrix200ApplicationJsonObject?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJson;
}
