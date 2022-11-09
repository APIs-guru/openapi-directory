import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingPricingmatrixHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingPricingmatrixRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;
}


export class BookingPricingmatrixRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingPricingmatrixHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingPricingmatrixRequestBody;
}


export class BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices extends SpeakeasyBase {
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
  sortOrder?: string;
}


export class BookingPricingmatrix200ApplicationJsonDataAgeBandPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=maximumCountRequired" })
  maximumCountRequired?: number;

  @Metadata({ data: "json, name=minimumCountRequired" })
  minimumCountRequired?: number;

  @Metadata({ data: "json, name=prices", elemType: operations.BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices })
  prices?: BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices[];

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingPricingmatrix200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageBandPrices", elemType: operations.BookingPricingmatrix200ApplicationJsonDataAgeBandPrices })
  ageBandPrices?: BookingPricingmatrix200ApplicationJsonDataAgeBandPrices[];

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=pricingUnit" })
  pricingUnit?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingPricingmatrix200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.BookingPricingmatrix200ApplicationJsonData })
  data?: BookingPricingmatrix200ApplicationJsonData[];

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


export class BookingPricingmatrixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingPricingmatrix200ApplicationJsonObject?: BookingPricingmatrix200ApplicationJson;
}
