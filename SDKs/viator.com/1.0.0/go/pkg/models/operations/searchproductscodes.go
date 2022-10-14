package operations

import (
	"openapi/pkg/models/shared"
)

type SearchProductsCodesHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type SearchProductsCodesRequestBody struct {
	CurrencyCode *string  `json:"currencyCode,omitempty"`
	ProductCodes []string `json:"productCodes,omitempty"`
}

type SearchProductsCodesRequest struct {
	Headers SearchProductsCodesHeaders
	Request *SearchProductsCodesRequestBody `request:"mediaType=application/json"`
}

type SearchProductsCodes200ApplicationJSONData struct {
	Admission                     *string                     `json:"admission,omitempty"`
	BookingEngineID               *shared.BookingEngineIDEnum `json:"bookingEngineId,omitempty"`
	CatIds                        []int64                     `json:"catIds,omitempty"`
	Code                          *string                     `json:"code,omitempty"`
	CurrencyCode                  *string                     `json:"currencyCode,omitempty"`
	Duration                      *string                     `json:"duration,omitempty"`
	Essential                     *string                     `json:"essential,omitempty"`
	MerchantCancellable           *bool                       `json:"merchantCancellable,omitempty"`
	MerchantNetPriceFrom          *float64                    `json:"merchantNetPriceFrom,omitempty"`
	MerchantNetPriceFromFormatted *string                     `json:"merchantNetPriceFromFormatted,omitempty"`
	OnRequestPeriod               *int64                      `json:"onRequestPeriod,omitempty"`
	OnSale                        *bool                       `json:"onSale,omitempty"`
	PanoramaCount                 *int64                      `json:"panoramaCount,omitempty"`
	Pas                           map[string]interface{}      `json:"pas,omitempty"`
	PhotoCount                    *int64                      `json:"photoCount,omitempty"`
	Price                         *float64                    `json:"price,omitempty"`
	PriceFormatted                *string                     `json:"priceFormatted,omitempty"`
	PrimaryDestinationID          *int64                      `json:"primaryDestinationId,omitempty"`
	PrimaryDestinationName        *string                     `json:"primaryDestinationName,omitempty"`
	PrimaryGroupID                *string                     `json:"primaryGroupId,omitempty"`
	Rating                        *float64                    `json:"rating,omitempty"`
	ReviewCount                   *int64                      `json:"reviewCount,omitempty"`
	Rrp                           *int64                      `json:"rrp,omitempty"`
	Rrpformatted                  *string                     `json:"rrpformatted,omitempty"`
	SavingAmount                  *string                     `json:"savingAmount,omitempty"`
	SavingAmountFormated          *string                     `json:"savingAmountFormated,omitempty"`
	ShortDescription              *string                     `json:"shortDescription,omitempty"`
	ShortTitle                    *string                     `json:"shortTitle,omitempty"`
	SortOrder                     *int64                      `json:"sortOrder,omitempty"`
	SpecialOfferAvailable         *bool                       `json:"specialOfferAvailable,omitempty"`
	SpecialReservation            *bool                       `json:"specialReservation,omitempty"`
	SpecialReservationDetails     *string                     `json:"specialReservationDetails,omitempty"`
	SubCatIds                     []int64                     `json:"subCatIds,omitempty"`
	SupplierCode                  *string                     `json:"supplierCode,omitempty"`
	SupplierName                  *string                     `json:"supplierName,omitempty"`
	ThumbnailHiResURL             *string                     `json:"thumbnailHiResURL,omitempty"`
	ThumbnailURL                  *string                     `json:"thumbnailURL,omitempty"`
	Title                         *string                     `json:"title,omitempty"`
	TranslationLevel              *int64                      `json:"translationLevel,omitempty"`
	UniqueShortDescription        *string                     `json:"uniqueShortDescription,omitempty"`
	VideoCount                    *int64                      `json:"videoCount,omitempty"`
	WebURL                        *string                     `json:"webURL,omitempty"`
}

type SearchProductsCodes200ApplicationJSON struct {
	Data             []SearchProductsCodes200ApplicationJSONData `json:"data,omitempty"`
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

type SearchProductsCodesResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	SearchProductsCodes200ApplicationJSONObject *SearchProductsCodes200ApplicationJSON
}
