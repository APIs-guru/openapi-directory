import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxonomyAttractionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum TaxonomyAttractionsRequestBodySortOrderEnum {
    SeoPublishedDateD = "SEO_PUBLISHED_DATE_D"
,    SeoPublishedDateA = "SEO_PUBLISHED_DATE_A"
,    SeoReviewAvgRatingD = "SEO_REVIEW_AVG_RATING_D"
,    SeoReviewAvgRatingA = "SEO_REVIEW_AVG_RATING_A"
,    SeoAlphabetical = "SEO_ALPHABETICAL"
}


export class TaxonomyAttractionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destId" })
  destId?: number;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: TaxonomyAttractionsRequestBodySortOrderEnum;

  @Metadata({ data: "json, name=topX" })
  topX?: string;
}


export class TaxonomyAttractionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: TaxonomyAttractionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TaxonomyAttractionsRequestBody;
}


export class TaxonomyAttractions200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=attractionCity" })
  attractionCity?: string;

  @Metadata({ data: "json, name=attractionLatitude" })
  attractionLatitude?: number;

  @Metadata({ data: "json, name=attractionLongitude" })
  attractionLongitude?: number;

  @Metadata({ data: "json, name=attractionState" })
  attractionState?: string;

  @Metadata({ data: "json, name=attractionStreetAddress" })
  attractionStreetAddress?: string;

  @Metadata({ data: "json, name=destinationId" })
  destinationId?: number;

  @Metadata({ data: "json, name=pageUrlName" })
  pageUrlName?: string;

  @Metadata({ data: "json, name=photoCount" })
  photoCount?: number;

  @Metadata({ data: "json, name=primaryDestinationId" })
  primaryDestinationId?: number;

  @Metadata({ data: "json, name=primaryDestinationName" })
  primaryDestinationName?: string;

  @Metadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @Metadata({ data: "json, name=productCount" })
  productCount?: number;

  @Metadata({ data: "json, name=publishedDate" })
  publishedDate?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=seoId" })
  seoId?: number;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=thumbnailHiResURL" })
  thumbnailHiResUrl?: string;

  @Metadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=webURL" })
  webUrl?: string;
}


export class TaxonomyAttractions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.TaxonomyAttractions200ApplicationJsonData })
  data?: TaxonomyAttractions200ApplicationJsonData[];

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


export class TaxonomyAttractionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxonomyAttractions200ApplicationJsonObject?: TaxonomyAttractions200ApplicationJson;
}
