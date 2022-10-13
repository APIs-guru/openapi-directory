package operations

import (
	"openapi/pkg/models/shared"
)

type AvailableProductsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type AvailableProductsRequestBody struct {
	CurrencyCode *string  `json:"currencyCode"`
	EndDate      *string  `json:"endDate"`
	NumAdults    *int64   `json:"numAdults"`
	ProductCodes []string `json:"productCodes"`
	StartDate    *string  `json:"startDate"`
}

type AvailableProductsRequest struct {
	Headers AvailableProductsHeaders
	Request *AvailableProductsRequestBody `request:"mediaType=application/json"`
}

type AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote struct {
	GeneralRetailPrice *string `json:"generalRetailPrice"`
	MerchantNetPrice   *string `json:"merchantNetPrice"`
	RetailPrice        *string `json:"retailPrice"`
}

type AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates struct {
	DateList   *string                                                                   `json:"dateList"`
	PriceFrom  *string                                                                   `json:"priceFrom"`
	PriceQuote *AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote `json:"priceQuote"`
}

type AvailableProducts200ApplicationJSONDataPasTourGrades struct {
	AvailDates       []AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates `json:"availDates"`
	BookingEngine    *string                                                          `json:"bookingEngine"`
	Description      *string                                                          `json:"description"`
	LanguageServices map[string][]interface{}                                         `json:"languageServices"`
	Sapi             *bool                                                            `json:"sapi"`
	Title            *string                                                          `json:"title"`
	TourGradeCode    *string                                                          `json:"tourGradeCode"`
}

type AvailableProducts200ApplicationJSONDataPas struct {
	IncompleteQuote  *bool                                                           `json:"incompleteQuote"`
	ProductCode      *string                                                         `json:"productCode"`
	RemovedChildAges []string                                                        `json:"removedChildAges"`
	TourGrades       map[string]AvailableProducts200ApplicationJSONDataPasTourGrades `json:"tourGrades"`
	TravellerMix     *string                                                         `json:"travellerMix"`
}

type AvailableProducts200ApplicationJSONData struct {
	Admission                     *string                                     `json:"admission"`
	Available                     *bool                                       `json:"available"`
	BookingEngineID               *shared.BookingEngineIDEnum                 `json:"bookingEngineId"`
	CatIds                        []int64                                     `json:"catIds"`
	Code                          *string                                     `json:"code"`
	CurrencyCode                  *string                                     `json:"currencyCode"`
	Duration                      *string                                     `json:"duration"`
	Essential                     *string                                     `json:"essential"`
	MerchantCancellable           *bool                                       `json:"merchantCancellable"`
	MerchantNetPriceFrom          *float64                                    `json:"merchantNetPriceFrom"`
	MerchantNetPriceFromFormatted *string                                     `json:"merchantNetPriceFromFormatted"`
	OnRequestPeriod               *int64                                      `json:"onRequestPeriod"`
	OnSale                        *bool                                       `json:"onSale"`
	PanoramaCount                 *int64                                      `json:"panoramaCount"`
	Pas                           *AvailableProducts200ApplicationJSONDataPas `json:"pas"`
	PhotoCount                    *int64                                      `json:"photoCount"`
	Price                         *float64                                    `json:"price"`
	PriceFormatted                *string                                     `json:"priceFormatted"`
	PrimaryDestinationID          *int64                                      `json:"primaryDestinationId"`
	PrimaryDestinationName        *string                                     `json:"primaryDestinationName"`
	PrimaryDestinationURLName     *string                                     `json:"primaryDestinationUrlName"`
	PrimaryGroupID                *string                                     `json:"primaryGroupId"`
	ProductURLName                *string                                     `json:"productUrlName"`
	Rating                        *float64                                    `json:"rating"`
	ReviewCount                   *int64                                      `json:"reviewCount"`
	Rrp                           *int64                                      `json:"rrp"`
	RrpFormatted                  *string                                     `json:"rrpFormatted"`
	SavingAmount                  *string                                     `json:"savingAmount"`
	SavingAmountFormated          *string                                     `json:"savingAmountFormated"`
	ShortDescription              *string                                     `json:"shortDescription"`
	ShortTitle                    *string                                     `json:"shortTitle"`
	SortOrder                     *int64                                      `json:"sortOrder"`
	SpecialOfferAvailable         *bool                                       `json:"specialOfferAvailable"`
	SpecialReservation            *bool                                       `json:"specialReservation"`
	SpecialReservationDetails     *string                                     `json:"specialReservationDetails"`
	SslSupported                  *bool                                       `json:"sslSupported"`
	SubCatIds                     []int64                                     `json:"subCatIds"`
	SupplierCode                  *string                                     `json:"supplierCode"`
	SupplierName                  *string                                     `json:"supplierName"`
	ThumbnailHiResURL             *string                                     `json:"thumbnailHiResURL"`
	ThumbnailURL                  *string                                     `json:"thumbnailURL"`
	Title                         *string                                     `json:"title"`
	TranslationLevel              *int64                                      `json:"translationLevel"`
	UniqueShortDescription        *string                                     `json:"uniqueShortDescription"`
	VideoCount                    *int64                                      `json:"videoCount"`
	WebURL                        *string                                     `json:"webURL"`
}

type AvailableProducts200ApplicationJSON struct {
	Data             []AvailableProducts200ApplicationJSONData `json:"data"`
	DateStamp        *string                                   `json:"dateStamp"`
	ErrorCodes       []string                                  `json:"errorCodes"`
	ErrorMessage     []interface{}                             `json:"errorMessage"`
	ErrorMessageText *string                                   `json:"errorMessageText"`
	ErrorName        *string                                   `json:"errorName"`
	ErrorReference   *string                                   `json:"errorReference"`
	ErrorType        *string                                   `json:"errorType"`
	ExtraInfo        map[string]interface{}                    `json:"extraInfo"`
	ExtraObject      map[string]interface{}                    `json:"extraObject"`
	Success          *bool                                     `json:"success"`
	TotalCount       *int64                                    `json:"totalCount"`
	Vmid             *string                                   `json:"vmid"`
}

type AvailableProductsResponse struct {
	ContentType                               string
	StatusCode                                int64
	AvailableProducts200ApplicationJSONObject *AvailableProducts200ApplicationJSON
}
