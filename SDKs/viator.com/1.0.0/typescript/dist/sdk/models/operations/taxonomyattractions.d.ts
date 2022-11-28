import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxonomyAttractionsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare enum TaxonomyAttractionsRequestBodySortOrderEnum {
    SeoPublishedDateD = "SEO_PUBLISHED_DATE_D",
    SeoPublishedDateA = "SEO_PUBLISHED_DATE_A",
    SeoReviewAvgRatingD = "SEO_REVIEW_AVG_RATING_D",
    SeoReviewAvgRatingA = "SEO_REVIEW_AVG_RATING_A",
    SeoAlphabetical = "SEO_ALPHABETICAL"
}
export declare class TaxonomyAttractionsRequestBody extends SpeakeasyBase {
    destId?: number;
    sortOrder?: TaxonomyAttractionsRequestBodySortOrderEnum;
    topX?: string;
}
export declare class TaxonomyAttractions200ApplicationJsonData extends SpeakeasyBase {
    attractionCity?: string;
    attractionLatitude?: number;
    attractionLongitude?: number;
    attractionState?: string;
    attractionStreetAddress?: string;
    destinationId?: number;
    pageUrlName?: string;
    photoCount?: number;
    primaryDestinationId?: number;
    primaryDestinationName?: string;
    primaryDestinationUrlName?: string;
    productCount?: number;
    publishedDate?: string;
    rating?: number;
    seoId?: number;
    sortOrder?: number;
    thumbnailHiResUrl?: string;
    thumbnailUrl?: string;
    title?: string;
    webUrl?: string;
}
export declare class TaxonomyAttractions200ApplicationJson extends SpeakeasyBase {
    data?: TaxonomyAttractions200ApplicationJsonData[];
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Map<string, any>;
    extraObject?: Map<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class TaxonomyAttractionsRequest extends SpeakeasyBase {
    headers: TaxonomyAttractionsHeaders;
    request?: TaxonomyAttractionsRequestBody;
}
export declare class TaxonomyAttractionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxonomyAttractions200ApplicationJsonObject?: TaxonomyAttractions200ApplicationJson;
}
