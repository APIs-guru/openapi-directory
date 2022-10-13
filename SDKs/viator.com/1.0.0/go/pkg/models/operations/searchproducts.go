package operations

import (
	"openapi/pkg/models/shared"
)

type SearchProductsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type SearchProductsRequestBodySortOrderEnum string

const (
	SearchProductsRequestBodySortOrderEnumTopSellers       SearchProductsRequestBodySortOrderEnum = "TOP_SELLERS"
	SearchProductsRequestBodySortOrderEnumReviewAvgRatingA SearchProductsRequestBodySortOrderEnum = "REVIEW_AVG_RATING_A"
	SearchProductsRequestBodySortOrderEnumReviewAvgRatingD SearchProductsRequestBodySortOrderEnum = "REVIEW_AVG_RATING_D"
	SearchProductsRequestBodySortOrderEnumPriceFromA       SearchProductsRequestBodySortOrderEnum = "PRICE_FROM_A"
	SearchProductsRequestBodySortOrderEnumPriceFromD       SearchProductsRequestBodySortOrderEnum = "PRICE_FROM_D"
)

type SearchProductsRequestBody struct {
	CatID        *int64                                  `json:"catId"`
	CurrencyCode *string                                 `json:"currencyCode"`
	DestID       *int64                                  `json:"destId"`
	EndDate      *string                                 `json:"endDate"`
	SeoID        *string                                 `json:"seoId"`
	SortOrder    *SearchProductsRequestBodySortOrderEnum `json:"sortOrder"`
	StartDate    *string                                 `json:"startDate"`
	SubCatID     *int64                                  `json:"subCatId"`
	TopX         *string                                 `json:"topX"`
}

type SearchProductsRequest struct {
	Headers SearchProductsHeaders
	Request *SearchProductsRequestBody `request:"mediaType=application/json"`
}

type SearchProducts200ApplicationJSONData struct {
	Admission                     *string                     `json:"admission"`
	Available                     *bool                       `json:"available"`
	BookingEngineID               *shared.BookingEngineIDEnum `json:"bookingEngineId"`
	CatIds                        []int64                     `json:"catIds"`
	Code                          *string                     `json:"code"`
	CurrencyCode                  *string                     `json:"currencyCode"`
	Duration                      *string                     `json:"duration"`
	Essential                     *string                     `json:"essential"`
	MerchantCancellable           *bool                       `json:"merchantCancellable"`
	MerchantNetPriceFrom          *float64                    `json:"merchantNetPriceFrom"`
	MerchantNetPriceFromFormatted *string                     `json:"merchantNetPriceFromFormatted"`
	OnRequestPeriod               *int64                      `json:"onRequestPeriod"`
	OnSale                        *bool                       `json:"onSale"`
	PanoramaCount                 *int64                      `json:"panoramaCount"`
	Pas                           map[string]interface{}      `json:"pas"`
	PhotoCount                    *int64                      `json:"photoCount"`
	Price                         *float64                    `json:"price"`
	PriceFormatted                *string                     `json:"priceFormatted"`
	PrimaryDestinationID          *int64                      `json:"primaryDestinationId"`
	PrimaryDestinationName        *string                     `json:"primaryDestinationName"`
	PrimaryDestinationURLName     *string                     `json:"primaryDestinationUrlName"`
	PrimaryGroupID                *int64                      `json:"primaryGroupId"`
	ProductURLName                *string                     `json:"productUrlName"`
	Rating                        *float64                    `json:"rating"`
	ReviewCount                   *int64                      `json:"reviewCount"`
	Rrp                           *int64                      `json:"rrp"`
	Rrpformatted                  *string                     `json:"rrpformatted"`
	SavingAmount                  *string                     `json:"savingAmount"`
	SavingAmountFormated          *string                     `json:"savingAmountFormated"`
	ShortDescription              *string                     `json:"shortDescription"`
	ShortTitle                    *string                     `json:"shortTitle"`
	SortOrder                     *int64                      `json:"sortOrder"`
	SpecialOfferAvailable         *bool                       `json:"specialOfferAvailable"`
	SpecialReservation            *bool                       `json:"specialReservation"`
	SpecialReservationDetails     *string                     `json:"specialReservationDetails"`
	SslSupported                  *interface{}                `json:"sslSupported"`
	SubCatIds                     []int64                     `json:"subCatIds"`
	SupplierCode                  *string                     `json:"supplierCode"`
	SupplierName                  *string                     `json:"supplierName"`
	ThumbnailHiResURL             *string                     `json:"thumbnailHiResURL"`
	ThumbnailURL                  *string                     `json:"thumbnailURL"`
	Title                         *string                     `json:"title"`
	TranslationLevel              *int64                      `json:"translationLevel"`
	UniqueShortDescription        *string                     `json:"uniqueShortDescription"`
	VideoCount                    *int64                      `json:"videoCount"`
	WebURL                        *string                     `json:"webURL"`
}

type SearchProducts200ApplicationJSON struct {
	Data             []SearchProducts200ApplicationJSONData `json:"data"`
	DateStamp        *string                                `json:"dateStamp"`
	ErrorCodes       []string                               `json:"errorCodes"`
	ErrorMessage     []interface{}                          `json:"errorMessage"`
	ErrorMessageText *string                                `json:"errorMessageText"`
	ErrorName        *string                                `json:"errorName"`
	ErrorReference   *string                                `json:"errorReference"`
	ErrorType        *string                                `json:"errorType"`
	ExtraInfo        map[string]interface{}                 `json:"extraInfo"`
	ExtraObject      map[string]interface{}                 `json:"extraObject"`
	Success          *bool                                  `json:"success"`
	TotalCount       *int64                                 `json:"totalCount"`
	Vmid             *string                                `json:"vmid"`
}

type SearchProductsResponse struct {
	ContentType                            string
	StatusCode                             int64
	SearchProducts200ApplicationJSONObject *SearchProducts200ApplicationJSON
}
