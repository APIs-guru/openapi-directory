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
	AcceptLanguage string `header:"name=Accept-Language"`
}

type ProductRequest struct {
	QueryParams ProductQueryParams
	Headers     ProductHeaders
}

type Product200ApplicationJSONDataAgeBands struct {
	Adult             *bool   `json:"adult"`
	AgeFrom           *int64  `json:"ageFrom"`
	AgeTo             *int64  `json:"ageTo"`
	BandID            *int64  `json:"bandId"`
	Count             *int64  `json:"count"`
	Description       *string `json:"description"`
	PluralDescription *string `json:"pluralDescription"`
	SortOrder         *int64  `json:"sortOrder"`
	TreatAsAdult      *bool   `json:"treatAsAdult"`
}

type Product200ApplicationJSONDataBookingQuestions struct {
	Message          *string `json:"message"`
	QuestionID       *int64  `json:"questionId"`
	Required         *bool   `json:"required"`
	SortOrder        *int64  `json:"sortOrder"`
	StringQuestionID *string `json:"stringQuestionId"`
	SubTitle         *string `json:"subTitle"`
	Title            *string `json:"title"`
}

type Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate struct {
	DayRangeMax          *int64 `json:"dayRangeMax"`
	DayRangeMin          *int64 `json:"dayRangeMin"`
	PercentageRefundable *int64 `json:"percentageRefundable"`
	PolicyEndTimestamp   *int64 `json:"policyEndTimestamp"`
	PolicyStartTimestamp *int64 `json:"policyStartTimestamp"`
}

type Product200ApplicationJSONDataMerchantTermsAndConditions struct {
	AmountRefundable               *int64                                                                            `json:"amountRefundable"`
	CancellationFromTourDate       []Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate `json:"cancellationFromTourDate"`
	MerchantTermsAndConditionsType *int64                                                                            `json:"merchantTermsAndConditionsType"`
	TermsAndConditions             *string                                                                           `json:"termsAndConditions"`
}

type Product200ApplicationJSONDataPassengerAttributes struct {
	CustomAttributeKgs     *string `json:"customAttribute_kgs"`
	CustomAttributeLbs     *string `json:"customAttribute_lbs"`
	ErrorMissingMessage    *string `json:"errorMissingMessage"`
	ErrorValidationMessage *string `json:"errorValidationMessage"`
	QuestionID             *string `json:"questionId"`
	Required               *bool   `json:"required"`
	Title                  *string `json:"title"`
	ValidateType           *string `json:"validateType"`
}

type Product200ApplicationJSONDataProductPhotos struct {
	Caption  *string `json:"caption"`
	PhotoURL *string `json:"photoURL"`
	Supplier *string `json:"supplier"`
}

type Product200ApplicationJSONDataTourGrades struct {
	CurrencyCode                  *string           `json:"currencyCode"`
	DefaultLanguageCode           *string           `json:"defaultLanguageCode"`
	GradeCode                     *string           `json:"gradeCode"`
	GradeDepartureTime            *string           `json:"gradeDepartureTime"`
	GradeDescription              *string           `json:"gradeDescription"`
	GradeTitle                    *string           `json:"gradeTitle"`
	LangServices                  map[string]string `json:"langServices"`
	MerchantNetPriceFrom          *float64          `json:"merchantNetPriceFrom"`
	MerchantNetPriceFromFormatted *string           `json:"merchantNetPriceFromFormatted"`
	PriceFrom                     *float64          `json:"priceFrom"`
	PriceFromFormatted            *string           `json:"priceFromFormatted"`
	SortOrder                     *int64            `json:"sortOrder"`
}

type Product200ApplicationJSONData struct {
	AdditionalInfo                []string                                                 `json:"additionalInfo"`
	Admission                     *string                                                  `json:"admission"`
	AgeBands                      []Product200ApplicationJSONDataAgeBands                  `json:"ageBands"`
	AllTravellerNamesRequired     *bool                                                    `json:"allTravellerNamesRequired"`
	ApplePassSupported            *bool                                                    `json:"applePassSupported"`
	Available                     *bool                                                    `json:"available"`
	BookingEngineID               *shared.BookingEngineIDEnum                              `json:"bookingEngineId"`
	BookingQuestions              []Product200ApplicationJSONDataBookingQuestions          `json:"bookingQuestions"`
	CatIds                        []int64                                                  `json:"catIds"`
	City                          *string                                                  `json:"city"`
	Code                          *string                                                  `json:"code"`
	Country                       *string                                                  `json:"country"`
	CurrencyCode                  *string                                                  `json:"currencyCode"`
	DeparturePoint                *string                                                  `json:"departurePoint"`
	DepartureTime                 *string                                                  `json:"departureTime"`
	DepartureTimeComments         *string                                                  `json:"departureTimeComments"`
	Description                   *string                                                  `json:"description"`
	DestinationID                 *int64                                                   `json:"destinationId"`
	Duration                      *string                                                  `json:"duration"`
	Essential                     *string                                                  `json:"essential"`
	Exclusions                    []string                                                 `json:"exclusions"`
	Highlights                    *int64                                                   `json:"highlights"`
	HotelPickup                   *bool                                                    `json:"hotelPickup"`
	Inclusions                    []string                                                 `json:"inclusions"`
	Itinerary                     *string                                                  `json:"itinerary"`
	Location                      *string                                                  `json:"location"`
	MapURL                        *string                                                  `json:"mapURL"`
	MaxTravellerCount             *int64                                                   `json:"maxTravellerCount"`
	MerchantCancellable           *bool                                                    `json:"merchantCancellable"`
	MerchantNetPriceFrom          *float64                                                 `json:"merchantNetPriceFrom"`
	MerchantNetPriceFromFormatted *string                                                  `json:"merchantNetPriceFromFormatted"`
	MerchantTermsAndConditions    *Product200ApplicationJSONDataMerchantTermsAndConditions `json:"merchantTermsAndConditions"`
	OnRequestPeriod               *int64                                                   `json:"onRequestPeriod"`
	OnSale                        *bool                                                    `json:"onSale"`
	Operates                      *string                                                  `json:"operates"`
	PanoramaCount                 *int64                                                   `json:"panoramaCount"`
	Pas                           map[string]interface{}                                   `json:"pas"`
	PassengerAttributes           []Product200ApplicationJSONDataPassengerAttributes       `json:"passengerAttributes"`
	PhotoCount                    *int64                                                   `json:"photoCount"`
	Price                         *float64                                                 `json:"price"`
	PriceFormatted                *string                                                  `json:"priceFormatted"`
	PrimaryDestinationID          *int64                                                   `json:"primaryDestinationId"`
	PrimaryDestinationName        *string                                                  `json:"primaryDestinationName"`
	PrimaryDestinationURLName     *string                                                  `json:"primaryDestinationUrlName"`
	PrimaryGroupID                *string                                                  `json:"primaryGroupId"`
	ProductPhotos                 []Product200ApplicationJSONDataProductPhotos             `json:"productPhotos"`
	ProductURLName                *string                                                  `json:"productUrlName"`
	Rating                        *float64                                                 `json:"rating"`
	RatingCounts                  *shared.RatingCounts                                     `json:"ratingCounts"`
	Region                        *string                                                  `json:"region"`
	ReturnDetails                 *string                                                  `json:"returnDetails"`
	ReviewCount                   *int64                                                   `json:"reviewCount"`
	Reviews                       []shared.ReviewObject                                    `json:"reviews"`
	Rrp                           *int64                                                   `json:"rrp"`
	RrpFormatted                  *string                                                  `json:"rrpFormatted"`
	SalesPoints                   []string                                                 `json:"salesPoints"`
	SavingAmount                  *string                                                  `json:"savingAmount"`
	SavingAmountFormated          *string                                                  `json:"savingAmountFormated"`
	ShortDescription              *string                                                  `json:"shortDescription"`
	ShortTitle                    *string                                                  `json:"shortTitle"`
	SpecialOffer                  *string                                                  `json:"specialOffer"`
	SpecialOfferAvailable         *bool                                                    `json:"specialOfferAvailable"`
	SpecialReservation            *bool                                                    `json:"specialReservation"`
	SpecialReservationDetails     *string                                                  `json:"specialReservationDetails"`
	SslSupported                  *bool                                                    `json:"sslSupported"`
	SubCatIds                     []int64                                                  `json:"subCatIds"`
	SupplierCode                  *string                                                  `json:"supplierCode"`
	SupplierName                  *string                                                  `json:"supplierName"`
	ThumbnailHiResURL             *string                                                  `json:"thumbnailHiResURL"`
	ThumbnailURL                  *string                                                  `json:"thumbnailURL"`
	Title                         *string                                                  `json:"title"`
	TourGrades                    []Product200ApplicationJSONDataTourGrades                `json:"tourGrades"`
	TourGradesAvailable           *bool                                                    `json:"tourGradesAvailable"`
	TranslationLevel              *int64                                                   `json:"translationLevel"`
	UserPhotos                    []shared.PhotoObject                                     `json:"userPhotos"`
	VideoCount                    *int64                                                   `json:"videoCount"`
	Videos                        *string                                                  `json:"videos"`
	VoucherOption                 *string                                                  `json:"voucherOption"`
	VoucherRequirements           *interface{}                                             `json:"voucherRequirements"`
	WebURL                        *string                                                  `json:"webURL"`
}

type Product200ApplicationJSON struct {
	Data             *Product200ApplicationJSONData `json:"data"`
	DateStamp        *string                        `json:"dateStamp"`
	ErrorCodes       []string                       `json:"errorCodes"`
	ErrorMessage     []interface{}                  `json:"errorMessage"`
	ErrorMessageText *string                        `json:"errorMessageText"`
	ErrorName        *string                        `json:"errorName"`
	ErrorReference   *string                        `json:"errorReference"`
	ErrorType        *string                        `json:"errorType"`
	ExtraInfo        map[string]interface{}         `json:"extraInfo"`
	ExtraObject      map[string]interface{}         `json:"extraObject"`
	Success          *bool                          `json:"success"`
	TotalCount       *int64                         `json:"totalCount"`
	Vmid             *string                        `json:"vmid"`
}

type ProductResponse struct {
	ContentType                     string
	StatusCode                      int64
	Product200ApplicationJSONObject *Product200ApplicationJSON
}
