import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchProductsCodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class SearchProductsCodesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productCodes" })
  productCodes?: string[];
}


export class SearchProductsCodes200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admission" })
  admission?: string;

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
  pas?: Map<string, any>;

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

  @SpeakeasyMetadata({ data: "json, name=primaryGroupId" })
  primaryGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=reviewCount" })
  reviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rrp" })
  rrp?: number;

  @SpeakeasyMetadata({ data: "json, name=rrpformatted" })
  rrpformatted?: string;

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


export class SearchProductsCodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SearchProductsCodes200ApplicationJsonData })
  data?: SearchProductsCodes200ApplicationJsonData[];

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


export class SearchProductsCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchProductsCodesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchProductsCodesRequestBody;
}


export class SearchProductsCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchProductsCodes200ApplicationJsonObject?: SearchProductsCodes200ApplicationJson;
}
