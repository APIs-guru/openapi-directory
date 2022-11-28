import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingPricingmatrixHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingPricingmatrixRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;
}


export class BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices extends SpeakeasyBase {
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
  sortOrder?: string;
}


export class BookingPricingmatrix200ApplicationJsonDataAgeBandPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumCountRequired" })
  maximumCountRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumCountRequired" })
  minimumCountRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices })
  prices?: BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices[];

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingPricingmatrix200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageBandPrices", elemType: BookingPricingmatrix200ApplicationJsonDataAgeBandPrices })
  ageBandPrices?: BookingPricingmatrix200ApplicationJsonDataAgeBandPrices[];

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingUnit" })
  pricingUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingPricingmatrix200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: BookingPricingmatrix200ApplicationJsonData })
  data?: BookingPricingmatrix200ApplicationJsonData[];

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


export class BookingPricingmatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingPricingmatrixHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingPricingmatrixRequestBody;
}


export class BookingPricingmatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingPricingmatrix200ApplicationJsonObject?: BookingPricingmatrix200ApplicationJson;
}
