import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum SearchProductsRequestBodySortOrderEnum {
    TopSellers = "TOP_SELLERS",
    ReviewAvgRatingA = "REVIEW_AVG_RATING_A",
    ReviewAvgRatingD = "REVIEW_AVG_RATING_D",
    PriceFromA = "PRICE_FROM_A",
    PriceFromD = "PRICE_FROM_D"
}


export class SearchProductsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catId" })
  catId?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=destId" })
  destId?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=seoId" })
  seoId?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SearchProductsRequestBodySortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=subCatId" })
  subCatId?: number;

  @SpeakeasyMetadata({ data: "json, name=topX" })
  topX?: string;
}


export class SearchProducts200ApplicationJsonData extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryGroupId" })
  primaryGroupId?: number;

  @SpeakeasyMetadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

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

  @SpeakeasyMetadata({ data: "json, name=sslSupported" })
  sslSupported?: any;

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


export class SearchProducts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SearchProducts200ApplicationJsonData })
  data?: SearchProducts200ApplicationJsonData[];

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


export class SearchProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchProductsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchProductsRequestBody;
}


export class SearchProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchProducts200ApplicationJsonObject?: SearchProducts200ApplicationJson;
}
