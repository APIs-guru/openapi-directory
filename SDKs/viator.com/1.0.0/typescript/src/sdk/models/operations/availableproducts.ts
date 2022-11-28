import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AvailableProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class AvailableProductsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=numAdults" })
  numAdults?: number;

  @SpeakeasyMetadata({ data: "json, name=productCodes" })
  productCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}


// AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote
/** 
 * **pricing object** for *this* tour grade
**/
export class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generalRetailPrice" })
  generalRetailPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=retailPrice" })
  retailPrice?: string;
}


export class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateList" })
  dateList?: string;

  @SpeakeasyMetadata({ data: "json, name=priceFrom" })
  priceFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=priceQuote" })
  priceQuote?: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote;
}


export class AvailableProducts200ApplicationJsonDataPasTourGrades extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availDates", elemType: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates })
  availDates?: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates[];

  @SpeakeasyMetadata({ data: "json, name=bookingEngine" })
  bookingEngine?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=languageServices" })
  languageServices?: Map<string, any[]>;

  @SpeakeasyMetadata({ data: "json, name=sapi" })
  sapi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;
}


// AvailableProducts200ApplicationJsonDataPas
/** 
 * **object** detailing product availability
 * - `pas` stands for Product Availability Schema
 * 
**/
export class AvailableProducts200ApplicationJsonDataPas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incompleteQuote" })
  incompleteQuote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=removedChildAges" })
  removedChildAges?: string[];

  @SpeakeasyMetadata({ data: "json, name=tourGrades", elemType: AvailableProducts200ApplicationJsonDataPasTourGrades })
  tourGrades?: Map<string, AvailableProducts200ApplicationJsonDataPasTourGrades>;

  @SpeakeasyMetadata({ data: "json, name=travellerMix" })
  travellerMix?: string;
}


export class AvailableProducts200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admission" })
  admission?: string;

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookingEngineId" })
  bookingEngineId?: shared.BookingEngineIdEnum;

  @SpeakeasyMetadata({ data: "json, name=catIds" })
  catIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=essential" })
  essential?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCancellable" })
  merchantCancellable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" })
  merchantNetPriceFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" })
  merchantNetPriceFromFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=onRequestPeriod" })
  onRequestPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=onSale" })
  onSale?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panoramaCount" })
  panoramaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=pas" })
  pas?: AvailableProducts200ApplicationJsonDataPas;

  @SpeakeasyMetadata({ data: "json, name=photoCount" })
  photoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationId" })
  primaryDestinationId?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationName" })
  primaryDestinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryGroupId" })
  primaryGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=reviewCount" })
  reviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rrp" })
  rrp?: number;

  @SpeakeasyMetadata({ data: "json, name=rrpFormatted" })
  rrpFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=savingAmount" })
  savingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=savingAmountFormated" })
  savingAmountFormated?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=specialOfferAvailable" })
  specialOfferAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=specialReservation" })
  specialReservation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=specialReservationDetails" })
  specialReservationDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subCatIds" })
  subCatIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=supplierCode" })
  supplierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" })
  thumbnailHiResUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=translationLevel" })
  translationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueShortDescription" })
  uniqueShortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=videoCount" })
  videoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=webURL" })
  webUrl?: string;
}


export class AvailableProducts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: AvailableProducts200ApplicationJsonData })
  data?: AvailableProducts200ApplicationJsonData[];

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


export class AvailableProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AvailableProductsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AvailableProductsRequestBody;
}


export class AvailableProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  availableProducts200ApplicationJsonObject?: AvailableProducts200ApplicationJson;
}
