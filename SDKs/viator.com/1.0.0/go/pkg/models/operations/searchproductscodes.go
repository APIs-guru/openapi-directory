package operations

import (
	"openapi/pkg/models/shared"
)

type SearchProductsCodesHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type SearchProductsCodesRequestBody struct {
	CurrencyCode *string  `json:"currencyCode"`
	ProductCodes []string `json:"productCodes"`
}

type SearchProductsCodesRequest struct {
	Headers SearchProductsCodesHeaders
	Request *SearchProductsCodesRequestBody `request:"mediaType=application/json"`
}

type SearchProductsCodes200ApplicationJSONData struct {
	Admission                     *string                     `json:"admission"`
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
	PrimaryGroupID                *string                     `json:"primaryGroupId"`
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

type SearchProductsCodes200ApplicationJSON struct {
	Data             []SearchProductsCodes200ApplicationJSONData `json:"data"`
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

type SearchProductsCodesResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	SearchProductsCodes200ApplicationJSONObject *SearchProductsCodes200ApplicationJSON
}
