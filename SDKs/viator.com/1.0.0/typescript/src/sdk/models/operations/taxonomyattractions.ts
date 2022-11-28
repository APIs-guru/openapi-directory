import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxonomyAttractionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum TaxonomyAttractionsRequestBodySortOrderEnum {
    SeoPublishedDateD = "SEO_PUBLISHED_DATE_D",
    SeoPublishedDateA = "SEO_PUBLISHED_DATE_A",
    SeoReviewAvgRatingD = "SEO_REVIEW_AVG_RATING_D",
    SeoReviewAvgRatingA = "SEO_REVIEW_AVG_RATING_A",
    SeoAlphabetical = "SEO_ALPHABETICAL"
}


export class TaxonomyAttractionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destId" })
  destId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: TaxonomyAttractionsRequestBodySortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=topX" })
  topX?: string;
}


export class TaxonomyAttractions200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attractionCity" })
  attractionCity?: string;

  @SpeakeasyMetadata({ data: "json, name=attractionLatitude" })
  attractionLatitude?: number;

  @SpeakeasyMetadata({ data: "json, name=attractionLongitude" })
  attractionLongitude?: number;

  @SpeakeasyMetadata({ data: "json, name=attractionState" })
  attractionState?: string;

  @SpeakeasyMetadata({ data: "json, name=attractionStreetAddress" })
  attractionStreetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId?: number;

  @SpeakeasyMetadata({ data: "json, name=pageUrlName" })
  pageUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=photoCount" })
  photoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationId" })
  primaryDestinationId?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationName" })
  primaryDestinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=productCount" })
  productCount?: number;

  @SpeakeasyMetadata({ data: "json, name=publishedDate" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=seoId" })
  seoId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" })
  thumbnailHiResUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=webURL" })
  webUrl?: string;
}


export class TaxonomyAttractions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TaxonomyAttractions200ApplicationJsonData })
  data?: TaxonomyAttractions200ApplicationJsonData[];

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


export class TaxonomyAttractionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TaxonomyAttractionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TaxonomyAttractionsRequestBody;
}


export class TaxonomyAttractionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxonomyAttractions200ApplicationJsonObject?: TaxonomyAttractions200ApplicationJson;
}
