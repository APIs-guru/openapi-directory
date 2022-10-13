package operations

type TaxonomyAttractionsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
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
	DestID    *int64                                       `json:"destId"`
	SortOrder *TaxonomyAttractionsRequestBodySortOrderEnum `json:"sortOrder"`
	TopX      *string                                      `json:"topX"`
}

type TaxonomyAttractionsRequest struct {
	Headers TaxonomyAttractionsHeaders
	Request *TaxonomyAttractionsRequestBody `request:"mediaType=application/json"`
}

type TaxonomyAttractions200ApplicationJSONData struct {
	AttractionCity            *string  `json:"attractionCity"`
	AttractionLatitude        *float64 `json:"attractionLatitude"`
	AttractionLongitude       *float64 `json:"attractionLongitude"`
	AttractionState           *string  `json:"attractionState"`
	AttractionStreetAddress   *string  `json:"attractionStreetAddress"`
	DestinationID             *int64   `json:"destinationId"`
	PageURLName               *string  `json:"pageUrlName"`
	PhotoCount                *int64   `json:"photoCount"`
	PrimaryDestinationID      *int64   `json:"primaryDestinationId"`
	PrimaryDestinationName    *string  `json:"primaryDestinationName"`
	PrimaryDestinationURLName *string  `json:"primaryDestinationUrlName"`
	ProductCount              *int64   `json:"productCount"`
	PublishedDate             *string  `json:"publishedDate"`
	Rating                    *float64 `json:"rating"`
	SeoID                     *int64   `json:"seoId"`
	SortOrder                 *int64   `json:"sortOrder"`
	ThumbnailHiResURL         *string  `json:"thumbnailHiResURL"`
	ThumbnailURL              *string  `json:"thumbnailURL"`
	Title                     *string  `json:"title"`
	WebURL                    *string  `json:"webURL"`
}

type TaxonomyAttractions200ApplicationJSON struct {
	Data             []TaxonomyAttractions200ApplicationJSONData `json:"data"`
	DateStamp        *string                                     `json:"dateStamp"`
	ErrorCodes       []string                                    `json:"errorCodes"`
	ErrorMessage     []interface{}                               `json:"errorMessage"`
	ErrorMessageText *string                                     `json:"errorMessageText"`
	ErrorName        *string                                     `json:"errorName"`
	ErrorReference   *string                                     `json:"errorReference"`
	ErrorType        *string                                     `json:"errorType"`
	ExtraInfo        map[string]interface{}                      `json:"extraInfo"`
	ExtraObject      map[string]interface{}                      `json:"extraObject"`
	Success          *bool                                       `json:"success"`
	TotalCount       *int64                                      `json:"totalCount"`
	Vmid             *string                                     `json:"vmid"`
}

type TaxonomyAttractionsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	TaxonomyAttractions200ApplicationJSONObject *TaxonomyAttractions200ApplicationJSON
}
