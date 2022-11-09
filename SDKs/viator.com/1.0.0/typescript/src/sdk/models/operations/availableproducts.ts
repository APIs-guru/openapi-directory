import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AvailableProductsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class AvailableProductsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=numAdults" })
  numAdults?: number;

  @Metadata({ data: "json, name=productCodes" })
  productCodes?: string[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}


export class AvailableProductsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AvailableProductsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AvailableProductsRequestBody;
}


// AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote
/** 
 * **pricing object** for *this* tour grade
**/
export class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote extends SpeakeasyBase {
  @Metadata({ data: "json, name=generalRetailPrice" })
  generalRetailPrice?: string;

  @Metadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: string;

  @Metadata({ data: "json, name=retailPrice" })
  retailPrice?: string;
}


export class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateList" })
  dateList?: string;

  @Metadata({ data: "json, name=priceFrom" })
  priceFrom?: string;

  @Metadata({ data: "json, name=priceQuote" })
  priceQuote?: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote;
}


export class AvailableProducts200ApplicationJsonDataPasTourGrades extends SpeakeasyBase {
  @Metadata({ data: "json, name=availDates", elemType: operations.AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates })
  availDates?: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates[];

  @Metadata({ data: "json, name=bookingEngine" })
  bookingEngine?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=languageServices" })
  languageServices?: Map<string, any[]>;

  @Metadata({ data: "json, name=sapi" })
  sapi?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;
}


// AvailableProducts200ApplicationJsonDataPas
/** 
 * **object** detailing product availability
 * - `pas` stands for Product Availability Schema
 * 
**/
export class AvailableProducts200ApplicationJsonDataPas extends SpeakeasyBase {
  @Metadata({ data: "json, name=incompleteQuote" })
  incompleteQuote?: boolean;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=removedChildAges" })
  removedChildAges?: string[];

  @Metadata({ data: "json, name=tourGrades", elemType: operations.AvailableProducts200ApplicationJsonDataPasTourGrades })
  tourGrades?: Map<string, AvailableProducts200ApplicationJsonDataPasTourGrades>;

  @Metadata({ data: "json, name=travellerMix" })
  travellerMix?: string;
}


export class AvailableProducts200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=admission" })
  admission?: string;

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=bookingEngineId" })
  bookingEngineId?: shared.BookingEngineIdEnum;

  @Metadata({ data: "json, name=catIds" })
  catIds?: number[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=essential" })
  essential?: string;

  @Metadata({ data: "json, name=merchantCancellable" })
  merchantCancellable?: boolean;

  @Metadata({ data: "json, name=merchantNetPriceFrom" })
  merchantNetPriceFrom?: number;

  @Metadata({ data: "json, name=merchantNetPriceFromFormatted" })
  merchantNetPriceFromFormatted?: string;

  @Metadata({ data: "json, name=onRequestPeriod" })
  onRequestPeriod?: number;

  @Metadata({ data: "json, name=onSale" })
  onSale?: boolean;

  @Metadata({ data: "json, name=panoramaCount" })
  panoramaCount?: number;

  @Metadata({ data: "json, name=pas" })
  pas?: AvailableProducts200ApplicationJsonDataPas;

  @Metadata({ data: "json, name=photoCount" })
  photoCount?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @Metadata({ data: "json, name=primaryDestinationId" })
  primaryDestinationId?: number;

  @Metadata({ data: "json, name=primaryDestinationName" })
  primaryDestinationName?: string;

  @Metadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @Metadata({ data: "json, name=primaryGroupId" })
  primaryGroupId?: string;

  @Metadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=reviewCount" })
  reviewCount?: number;

  @Metadata({ data: "json, name=rrp" })
  rrp?: number;

  @Metadata({ data: "json, name=rrpFormatted" })
  rrpFormatted?: string;

  @Metadata({ data: "json, name=savingAmount" })
  savingAmount?: string;

  @Metadata({ data: "json, name=savingAmountFormated" })
  savingAmountFormated?: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=specialOfferAvailable" })
  specialOfferAvailable?: boolean;

  @Metadata({ data: "json, name=specialReservation" })
  specialReservation?: boolean;

  @Metadata({ data: "json, name=specialReservationDetails" })
  specialReservationDetails?: string;

  @Metadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @Metadata({ data: "json, name=subCatIds" })
  subCatIds?: number[];

  @Metadata({ data: "json, name=supplierCode" })
  supplierCode?: string;

  @Metadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @Metadata({ data: "json, name=thumbnailHiResURL" })
  thumbnailHiResUrl?: string;

  @Metadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=translationLevel" })
  translationLevel?: number;

  @Metadata({ data: "json, name=uniqueShortDescription" })
  uniqueShortDescription?: string;

  @Metadata({ data: "json, name=videoCount" })
  videoCount?: number;

  @Metadata({ data: "json, name=webURL" })
  webUrl?: string;
}


export class AvailableProducts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.AvailableProducts200ApplicationJsonData })
  data?: AvailableProducts200ApplicationJsonData[];

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


export class AvailableProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  availableProducts200ApplicationJsonObject?: AvailableProducts200ApplicationJson;
}
