import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchProductsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum SearchProductsRequestBodySortOrderEnum {
    TopSellers = "TOP_SELLERS"
,    ReviewAvgRatingA = "REVIEW_AVG_RATING_A"
,    ReviewAvgRatingD = "REVIEW_AVG_RATING_D"
,    PriceFromA = "PRICE_FROM_A"
,    PriceFromD = "PRICE_FROM_D"
}


export class SearchProductsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=catId" })
  catId?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=destId" })
  destId?: number;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=seoId" })
  seoId?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SearchProductsRequestBodySortOrderEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=subCatId" })
  subCatId?: number;

  @Metadata({ data: "json, name=topX" })
  topX?: string;
}


export class SearchProductsRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchProductsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SearchProductsRequestBody;
}


export class SearchProducts200ApplicationJsonData extends SpeakeasyBase {
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
  pas?: Map<string, any>;

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
  primaryGroupId?: number;

  @Metadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=reviewCount" })
  reviewCount?: number;

  @Metadata({ data: "json, name=rrp" })
  rrp?: number;

  @Metadata({ data: "json, name=rrpformatted" })
  rrpformatted?: string;

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
  sslSupported?: any;

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


export class SearchProducts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.SearchProducts200ApplicationJsonData })
  data?: SearchProducts200ApplicationJsonData[];

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


export class SearchProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchProducts200ApplicationJsonObject?: SearchProducts200ApplicationJson;
}
