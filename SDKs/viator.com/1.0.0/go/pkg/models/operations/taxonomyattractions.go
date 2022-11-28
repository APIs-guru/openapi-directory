package operations

type TaxonomyAttractionsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type TaxonomyAttractionsRequestBodySortOrderEnum string

const (
	TaxonomyAttractionsRequestBodySortOrderEnumSeoPublishedDateD   TaxonomyAttractionsRequestBodySortOrderEnum = "SEO_PUBLISHED_DATE_D"
	TaxonomyAttractionsRequestBodySortOrderEnumSeoPublishedDateA   TaxonomyAttractionsRequestBodySortOrderEnum = "SEO_PUBLISHED_DATE_A"
	TaxonomyAttractionsRequestBodySortOrderEnumSeoReviewAvgRatingD TaxonomyAttractionsRequestBodySortOrderEnum = "SEO_REVIEW_AVG_RATING_D"
	TaxonomyAttractionsRequestBodySortOrderEnumSeoReviewAvgRatingA TaxonomyAttractionsRequestBodySortOrderEnum = "SEO_REVIEW_AVG_RATING_A"
	TaxonomyAttractionsRequestBodySortOrderEnumSeoAlphabetical     TaxonomyAttractionsRequestBodySortOrderEnum = "SEO_ALPHABETICAL"
)

type TaxonomyAttractionsRequestBody struct {
	DestID    *int64                                       `json:"destId,omitempty"`
	SortOrder *TaxonomyAttractionsRequestBodySortOrderEnum `json:"sortOrder,omitempty"`
	TopX      *string                                      `json:"topX,omitempty"`
}

type TaxonomyAttractions200ApplicationJSONData struct {
	AttractionCity            *string  `json:"attractionCity,omitempty"`
	AttractionLatitude        *float64 `json:"attractionLatitude,omitempty"`
	AttractionLongitude       *float64 `json:"attractionLongitude,omitempty"`
	AttractionState           *string  `json:"attractionState,omitempty"`
	AttractionStreetAddress   *string  `json:"attractionStreetAddress,omitempty"`
	DestinationID             *int64   `json:"destinationId,omitempty"`
	PageURLName               *string  `json:"pageUrlName,omitempty"`
	PhotoCount                *int64   `json:"photoCount,omitempty"`
	PrimaryDestinationID      *int64   `json:"primaryDestinationId,omitempty"`
	PrimaryDestinationName    *string  `json:"primaryDestinationName,omitempty"`
	PrimaryDestinationURLName *string  `json:"primaryDestinationUrlName,omitempty"`
	ProductCount              *int64   `json:"productCount,omitempty"`
	PublishedDate             *string  `json:"publishedDate,omitempty"`
	Rating                    *float64 `json:"rating,omitempty"`
	SeoID                     *int64   `json:"seoId,omitempty"`
	SortOrder                 *int64   `json:"sortOrder,omitempty"`
	ThumbnailHiResURL         *string  `json:"thumbnailHiResURL,omitempty"`
	ThumbnailURL              *string  `json:"thumbnailURL,omitempty"`
	Title                     *string  `json:"title,omitempty"`
	WebURL                    *string  `json:"webURL,omitempty"`
}

type TaxonomyAttractions200ApplicationJSON struct {
	Data             []TaxonomyAttractions200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                     `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                    `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                               `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                     `json:"errorMessageText,omitempty"`
	ErrorName        *string                                     `json:"errorName,omitempty"`
	ErrorReference   *string                                     `json:"errorReference,omitempty"`
	ErrorType        *string                                     `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                      `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                      `json:"extraObject,omitempty"`
	Success          *bool                                       `json:"success,omitempty"`
	TotalCount       *int64                                      `json:"totalCount,omitempty"`
	Vmid             *string                                     `json:"vmid,omitempty"`
}

type TaxonomyAttractionsRequest struct {
	Headers TaxonomyAttractionsHeaders
	Request *TaxonomyAttractionsRequestBody `request:"mediaType=application/json"`
}

type TaxonomyAttractionsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	TaxonomyAttractions200ApplicationJSONObject *TaxonomyAttractions200ApplicationJSON
}
