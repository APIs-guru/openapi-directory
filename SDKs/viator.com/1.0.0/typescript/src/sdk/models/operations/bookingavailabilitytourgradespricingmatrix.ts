import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingAvailabilityTourgradesPricingmatrixHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingAvailabilityTourgradesPricingmatrixRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=month" })
  month?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=year" })
  year?: string;
}


export class BookingAvailabilityTourgradesPricingmatrixRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingAvailabilityTourgradesPricingmatrixHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingAvailabilityTourgradesPricingmatrixRequestBody;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: number;

  @Metadata({ data: "json, name=merchantNetPriceFormatted" })
  merchantNetPriceFormatted?: string;

  @Metadata({ data: "json, name=minNoOfTravellersRequiredForPrice" })
  minNoOfTravellersRequiredForPrice?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=maximumCountRequired" })
  maximumCountRequired?: number;

  @Metadata({ data: "json, name=minimumCountRequired" })
  minimumCountRequired?: number;

  @Metadata({ data: "json, name=prices", elemType: operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices })
  prices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices[];

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageBandPrices", elemType: operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices })
  ageBandPrices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices[];

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=pricingUnit" })
  pricingUnit?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades extends SpeakeasyBase {
  @Metadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @Metadata({ data: "json, name=gradeTitle" })
  gradeTitle?: string;

  @Metadata({ data: "json, name=pricingMatrix", elemType: operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix })
  pricingMatrix?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix[];

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=callForLastMinAvailability" })
  callForLastMinAvailability?: boolean;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=tourGrades", elemType: operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades })
  tourGrades?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades[];
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingMonth" })
  bookingMonth?: string;

  @Metadata({ data: "json, name=dates", elemType: operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates })
  dates?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates[];

  @Metadata({ data: "json, name=pricingUnit" })
  pricingUnit?: string;
}


export class BookingAvailabilityTourgradesPricingmatrix200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData;

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


export class BookingAvailabilityTourgradesPricingmatrixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingAvailabilityTourgradesPricingmatrix200ApplicationJsonObject?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJson;
}
