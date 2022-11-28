package operations

import (
	"openapi/pkg/models/shared"
)

type ProductVoucherOptionEnum string

const (
	ProductVoucherOptionEnumVoucherPaperOnly ProductVoucherOptionEnum = "VOUCHER_PAPER_ONLY"
	ProductVoucherOptionEnumVoucherE         ProductVoucherOptionEnum = "VOUCHER_E"
)

type ProductQueryParams struct {
	Code                         *string                     `queryParam:"style=form,explode=true,name=code"`
	CurrencyCode                 *string                     `queryParam:"style=form,explode=true,name=currencyCode"`
	ExcludeTourGradeAvailability *bool                       `queryParam:"style=form,explode=true,name=excludeTourGradeAvailability"`
	ShowUnavailable              *bool                       `queryParam:"style=form,explode=true,name=showUnavailable"`
	SortOrder                    *shared.SortOrderReviewEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	VoucherOption                *ProductVoucherOptionEnum   `queryParam:"style=form,explode=true,name=voucherOption"`
}

type ProductHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type Product200ApplicationJSONDataAgeBands struct {
	Adult             *bool   `json:"adult,omitempty"`
	AgeFrom           *int64  `json:"ageFrom,omitempty"`
	AgeTo             *int64  `json:"ageTo,omitempty"`
	BandID            *int64  `json:"bandId,omitempty"`
	Count             *int64  `json:"count,omitempty"`
	Description       *string `json:"description,omitempty"`
	PluralDescription *string `json:"pluralDescription,omitempty"`
	SortOrder         *int64  `json:"sortOrder,omitempty"`
	TreatAsAdult      *bool   `json:"treatAsAdult,omitempty"`
}

type Product200ApplicationJSONDataBookingQuestions struct {
	Message          *string `json:"message,omitempty"`
	QuestionID       *int64  `json:"questionId,omitempty"`
	Required         *bool   `json:"required,omitempty"`
	SortOrder        *int64  `json:"sortOrder,omitempty"`
	StringQuestionID *string `json:"stringQuestionId,omitempty"`
	SubTitle         *string `json:"subTitle,omitempty"`
	Title            *string `json:"title,omitempty"`
}

type Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate struct {
	DayRangeMax          *int64 `json:"dayRangeMax,omitempty"`
	DayRangeMin          *int64 `json:"dayRangeMin,omitempty"`
	PercentageRefundable *int64 `json:"percentageRefundable,omitempty"`
	PolicyEndTimestamp   *int64 `json:"policyEndTimestamp,omitempty"`
	PolicyStartTimestamp *int64 `json:"policyStartTimestamp,omitempty"`
}

type Product200ApplicationJSONDataMerchantTermsAndConditions struct {
	AmountRefundable               *int64                                                                            `json:"amountRefundable,omitempty"`
	CancellationFromTourDate       []Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate `json:"cancellationFromTourDate,omitempty"`
	MerchantTermsAndConditionsType *int64                                                                            `json:"merchantTermsAndConditionsType,omitempty"`
	TermsAndConditions             *string                                                                           `json:"termsAndConditions,omitempty"`
}

type Product200ApplicationJSONDataPassengerAttributes struct {
	CustomAttributeKgs     *string `json:"customAttribute_kgs,omitempty"`
	CustomAttributeLbs     *string `json:"customAttribute_lbs,omitempty"`
	ErrorMissingMessage    *string `json:"errorMissingMessage,omitempty"`
	ErrorValidationMessage *string `json:"errorValidationMessage,omitempty"`
	QuestionID             *string `json:"questionId,omitempty"`
	Required               *bool   `json:"required,omitempty"`
	Title                  *string `json:"title,omitempty"`
	ValidateType           *string `json:"validateType,omitempty"`
}

type Product200ApplicationJSONDataProductPhotos struct {
	Caption  *string `json:"caption,omitempty"`
	PhotoURL *string `json:"photoURL,omitempty"`
	Supplier *string `json:"supplier,omitempty"`
}

type Product200ApplicationJSONDataTourGrades struct {
	CurrencyCode                  *string           `json:"currencyCode,omitempty"`
	DefaultLanguageCode           *string           `json:"defaultLanguageCode,omitempty"`
	GradeCode                     *string           `json:"gradeCode,omitempty"`
	GradeDepartureTime            *string           `json:"gradeDepartureTime,omitempty"`
	GradeDescription              *string           `json:"gradeDescription,omitempty"`
	GradeTitle                    *string           `json:"gradeTitle,omitempty"`
	LangServices                  map[string]string `json:"langServices,omitempty"`
	MerchantNetPriceFrom          *float64          `json:"merchantNetPriceFrom,omitempty"`
	MerchantNetPriceFromFormatted *string           `json:"merchantNetPriceFromFormatted,omitempty"`
	PriceFrom                     *float64          `json:"priceFrom,omitempty"`
	PriceFromFormatted            *string           `json:"priceFromFormatted,omitempty"`
	SortOrder                     *int64            `json:"sortOrder,omitempty"`
}

// Product200ApplicationJSONData
// **object** containing product details
type Product200ApplicationJSONData struct {
	AdditionalInfo                []string                                                 `json:"additionalInfo,omitempty"`
	Admission                     *string                                                  `json:"admission,omitempty"`
	AgeBands                      []Product200ApplicationJSONDataAgeBands                  `json:"ageBands,omitempty"`
	AllTravellerNamesRequired     *bool                                                    `json:"allTravellerNamesRequired,omitempty"`
	ApplePassSupported            *bool                                                    `json:"applePassSupported,omitempty"`
	Available                     *bool                                                    `json:"available,omitempty"`
	BookingEngineID               *shared.BookingEngineIDEnum                              `json:"bookingEngineId,omitempty"`
	BookingQuestions              []Product200ApplicationJSONDataBookingQuestions          `json:"bookingQuestions,omitempty"`
	CatIds                        []int64                                                  `json:"catIds,omitempty"`
	City                          *string                                                  `json:"city,omitempty"`
	Code                          *string                                                  `json:"code,omitempty"`
	Country                       *string                                                  `json:"country,omitempty"`
	CurrencyCode                  *string                                                  `json:"currencyCode,omitempty"`
	DeparturePoint                *string                                                  `json:"departurePoint,omitempty"`
	DepartureTime                 *string                                                  `json:"departureTime,omitempty"`
	DepartureTimeComments         *string                                                  `json:"departureTimeComments,omitempty"`
	Description                   *string                                                  `json:"description,omitempty"`
	DestinationID                 *int64                                                   `json:"destinationId,omitempty"`
	Duration                      *string                                                  `json:"duration,omitempty"`
	Essential                     *string                                                  `json:"essential,omitempty"`
	Exclusions                    []string                                                 `json:"exclusions,omitempty"`
	Highlights                    *int64                                                   `json:"highlights,omitempty"`
	HotelPickup                   *bool                                                    `json:"hotelPickup,omitempty"`
	Inclusions                    []string                                                 `json:"inclusions,omitempty"`
	Itinerary                     *string                                                  `json:"itinerary,omitempty"`
	Location                      *string                                                  `json:"location,omitempty"`
	MapURL                        *string                                                  `json:"mapURL,omitempty"`
	MaxTravellerCount             *int64                                                   `json:"maxTravellerCount,omitempty"`
	MerchantCancellable           *bool                                                    `json:"merchantCancellable,omitempty"`
	MerchantNetPriceFrom          *float64                                                 `json:"merchantNetPriceFrom,omitempty"`
	MerchantNetPriceFromFormatted *string                                                  `json:"merchantNetPriceFromFormatted,omitempty"`
	MerchantTermsAndConditions    *Product200ApplicationJSONDataMerchantTermsAndConditions `json:"merchantTermsAndConditions,omitempty"`
	OnRequestPeriod               *int64                                                   `json:"onRequestPeriod,omitempty"`
	OnSale                        *bool                                                    `json:"onSale,omitempty"`
	Operates                      *string                                                  `json:"operates,omitempty"`
	PanoramaCount                 *int64                                                   `json:"panoramaCount,omitempty"`
	Pas                           map[string]interface{}                                   `json:"pas,omitempty"`
	PassengerAttributes           []Product200ApplicationJSONDataPassengerAttributes       `json:"passengerAttributes,omitempty"`
	PhotoCount                    *int64                                                   `json:"photoCount,omitempty"`
	Price                         *float64                                                 `json:"price,omitempty"`
	PriceFormatted                *string                                                  `json:"priceFormatted,omitempty"`
	PrimaryDestinationID          *int64                                                   `json:"primaryDestinationId,omitempty"`
	PrimaryDestinationName        *string                                                  `json:"primaryDestinationName,omitempty"`
	PrimaryDestinationURLName     *string                                                  `json:"primaryDestinationUrlName,omitempty"`
	PrimaryGroupID                *string                                                  `json:"primaryGroupId,omitempty"`
	ProductPhotos                 []Product200ApplicationJSONDataProductPhotos             `json:"productPhotos,omitempty"`
	ProductURLName                *string                                                  `json:"productUrlName,omitempty"`
	Rating                        *float64                                                 `json:"rating,omitempty"`
	RatingCounts                  *shared.RatingCounts                                     `json:"ratingCounts,omitempty"`
	Region                        *string                                                  `json:"region,omitempty"`
	ReturnDetails                 *string                                                  `json:"returnDetails,omitempty"`
	ReviewCount                   *int64                                                   `json:"reviewCount,omitempty"`
	Reviews                       []shared.ReviewObject                                    `json:"reviews,omitempty"`
	Rrp                           *int64                                                   `json:"rrp,omitempty"`
	RrpFormatted                  *string                                                  `json:"rrpFormatted,omitempty"`
	SalesPoints                   []string                                                 `json:"salesPoints,omitempty"`
	SavingAmount                  *string                                                  `json:"savingAmount,omitempty"`
	SavingAmountFormated          *string                                                  `json:"savingAmountFormated,omitempty"`
	ShortDescription              *string                                                  `json:"shortDescription,omitempty"`
	ShortTitle                    *string                                                  `json:"shortTitle,omitempty"`
	SpecialOffer                  *string                                                  `json:"specialOffer,omitempty"`
	SpecialOfferAvailable         *bool                                                    `json:"specialOfferAvailable,omitempty"`
	SpecialReservation            *bool                                                    `json:"specialReservation,omitempty"`
	SpecialReservationDetails     *string                                                  `json:"specialReservationDetails,omitempty"`
	SslSupported                  *bool                                                    `json:"sslSupported,omitempty"`
	SubCatIds                     []int64                                                  `json:"subCatIds,omitempty"`
	SupplierCode                  *string                                                  `json:"supplierCode,omitempty"`
	SupplierName                  *string                                                  `json:"supplierName,omitempty"`
	ThumbnailHiResURL             *string                                                  `json:"thumbnailHiResURL,omitempty"`
	ThumbnailURL                  *string                                                  `json:"thumbnailURL,omitempty"`
	Title                         *string                                                  `json:"title,omitempty"`
	TourGrades                    []Product200ApplicationJSONDataTourGrades                `json:"tourGrades,omitempty"`
	TourGradesAvailable           *bool                                                    `json:"tourGradesAvailable,omitempty"`
	TranslationLevel              *int64                                                   `json:"translationLevel,omitempty"`
	UserPhotos                    []shared.PhotoObject                                     `json:"userPhotos,omitempty"`
	VideoCount                    *int64                                                   `json:"videoCount,omitempty"`
	Videos                        *string                                                  `json:"videos,omitempty"`
	VoucherOption                 *string                                                  `json:"voucherOption,omitempty"`
	VoucherRequirements           *interface{}                                             `json:"voucherRequirements,omitempty"`
	WebURL                        *string                                                  `json:"webURL,omitempty"`
}

type Product200ApplicationJSON struct {
	Data             *Product200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                        `json:"dateStamp,omitempty"`
	ErrorCodes       []string                       `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                  `json:"errorMessage,omitempty"`
	ErrorMessageText *string                        `json:"errorMessageText,omitempty"`
	ErrorName        *string                        `json:"errorName,omitempty"`
	ErrorReference   *string                        `json:"errorReference,omitempty"`
	ErrorType        *string                        `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}         `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}         `json:"extraObject,omitempty"`
	Success          *bool                          `json:"success,omitempty"`
	TotalCount       *int64                         `json:"totalCount,omitempty"`
	Vmid             *string                        `json:"vmid,omitempty"`
}

type ProductRequest struct {
	QueryParams ProductQueryParams
	Headers     ProductHeaders
}

type ProductResponse struct {
	ContentType                     string
	StatusCode                      int64
	Product200ApplicationJSONObject *Product200ApplicationJSON
}
