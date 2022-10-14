package operations

import (
	"openapi/pkg/models/shared"
)

type BookingBookHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingBookRequestBodyBooker struct {
	CellPhone            *string `json:"cellPhone,omitempty"`
	CellPhoneCountryCode *string `json:"cellPhoneCountryCode,omitempty"`
	Email                *string `json:"email,omitempty"`
	Firstname            string  `json:"firstname"`
	HomePhone            *string `json:"homePhone,omitempty"`
	Surname              string  `json:"surname"`
	Title                *string `json:"title,omitempty"`
}

type BookingBookRequestBodyItemsBookingQuestionAnswers struct {
	Answer     *string `json:"answer,omitempty"`
	QuestionID *int64  `json:"questionId,omitempty"`
}

type BookingBookRequestBodyItemsPartnerItemDetail struct {
	DistributorItemRef *string `json:"distributorItemRef,omitempty"`
}

type BookingBookRequestBodyItemsTravellers struct {
	BandID        *int64  `json:"bandId,omitempty"`
	Firstname     *string `json:"firstname,omitempty"`
	LeadTraveller *bool   `json:"leadTraveller,omitempty"`
	Surname       *string `json:"surname,omitempty"`
	Title         *string `json:"title,omitempty"`
}

type BookingBookRequestBodyItems struct {
	BookingQuestionAnswers []BookingBookRequestBodyItemsBookingQuestionAnswers `json:"bookingQuestionAnswers,omitempty"`
	HotelID                *string                                             `json:"hotelId,omitempty"`
	LanguageOptionCode     *string                                             `json:"languageOptionCode,omitempty"`
	PartnerItemDetail      *BookingBookRequestBodyItemsPartnerItemDetail       `json:"partnerItemDetail,omitempty"`
	PickupPoint            *string                                             `json:"pickupPoint,omitempty"`
	ProductCode            *string                                             `json:"productCode,omitempty"`
	SpecialRequirements    *string                                             `json:"specialRequirements,omitempty"`
	TourGradeCode          *string                                             `json:"tourGradeCode,omitempty"`
	TravelDate             *string                                             `json:"travelDate,omitempty"`
	Travellers             []BookingBookRequestBodyItemsTravellers             `json:"travellers,omitempty"`
}

type BookingBookRequestBodyPartnerDetail struct {
	DistributorRef *string `json:"distributorRef,omitempty"`
}

type BookingBookRequestBody struct {
	Booker        *BookingBookRequestBodyBooker        `json:"booker,omitempty"`
	CurrencyCode  *string                              `json:"currencyCode,omitempty"`
	Demo          *bool                                `json:"demo,omitempty"`
	Items         []BookingBookRequestBodyItems        `json:"items,omitempty"`
	PartnerDetail *BookingBookRequestBodyPartnerDetail `json:"partnerDetail,omitempty"`
}

type BookingBookRequest struct {
	Headers BookingBookHeaders
	Request *BookingBookRequestBody `request:"mediaType=application/json"`
}

type BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate struct {
	DayRangeMax          *int64 `json:"dayRangeMax,omitempty"`
	DayRangeMin          *int64 `json:"dayRangeMin,omitempty"`
	PercentageRefundable *int64 `json:"percentageRefundable,omitempty"`
	PolicyEndTimestamp   *int64 `json:"policyEndTimestamp,omitempty"`
	PolicyStartTimestamp *int64 `json:"policyStartTimestamp,omitempty"`
}

type BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions struct {
	AmountRefundable         *string                                                                                            `json:"amountRefundable,omitempty"`
	CancellationFromTourDate []BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate `json:"cancellationFromTourDate,omitempty"`
	TermsAndConditions       *string                                                                                            `json:"termsAndConditions,omitempty"`
}

type BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands struct {
	AgeBandID         *int64  `json:"ageBandId,omitempty"`
	Count             *int64  `json:"count,omitempty"`
	Description       *string `json:"description,omitempty"`
	PluralDescription *string `json:"pluralDescription,omitempty"`
	SortOrder         *int64  `json:"sortOrder,omitempty"`
}

type BookingBook200ApplicationJSONDataItemSummaries struct {
	ApplePassSupported         *bool                                                                     `json:"applePassSupported,omitempty"`
	BarcodeOption              *string                                                                   `json:"barcodeOption,omitempty"`
	BarcodeType                *string                                                                   `json:"barcodeType,omitempty"`
	BookingEngineID            *shared.BookingEngineIDResponseEnum                                       `json:"bookingEngineId,omitempty"`
	BookingStatus              *shared.BookingStatusItem                                                 `json:"bookingStatus,omitempty"`
	CurrencyCode               *string                                                                   `json:"currencyCode,omitempty"`
	DepartsFrom                *string                                                                   `json:"departsFrom,omitempty"`
	DeparturePoint             *string                                                                   `json:"departurePoint,omitempty"`
	DeparturePointAddress      *string                                                                   `json:"departurePointAddress,omitempty"`
	DeparturePointDirections   *string                                                                   `json:"departurePointDirections,omitempty"`
	DestID                     *int64                                                                    `json:"destId,omitempty"`
	DistributorItemRef         *string                                                                   `json:"distributorItemRef,omitempty"`
	HoursConfirmed             *string                                                                   `json:"hoursConfirmed,omitempty"`
	ItemID                     *int64                                                                    `json:"itemId,omitempty"`
	ItineraryID                *int64                                                                    `json:"itineraryId,omitempty"`
	LanguageServicesCode       *string                                                                   `json:"languageServicesCode,omitempty"`
	LastRetailPrice            *float64                                                                  `json:"lastRetailPrice,omitempty"`
	LastRetailPriceFormatted   *string                                                                   `json:"lastRetailPriceFormatted,omitempty"`
	LeadTravellerFirstname     *string                                                                   `json:"leadTravellerFirstname,omitempty"`
	LeadTravellerSurname       *string                                                                   `json:"leadTravellerSurname,omitempty"`
	LeadTravellerTitle         *string                                                                   `json:"leadTravellerTitle,omitempty"`
	MerchantCancellable        *bool                                                                     `json:"merchantCancellable,omitempty"`
	MerchantNetPrice           *float64                                                                  `json:"merchantNetPrice,omitempty"`
	MerchantNetPriceFormatted  *string                                                                   `json:"merchantNetPriceFormatted,omitempty"`
	MerchantTermsAndConditions *BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions `json:"merchantTermsAndConditions,omitempty"`
	ObfsID                     *int64                                                                    `json:"obfsId,omitempty"`
	Passbooks                  *string                                                                   `json:"passbooks,omitempty"`
	PickupHotelID              *string                                                                   `json:"pickupHotelId,omitempty"`
	PickupHotelName            *string                                                                   `json:"pickupHotelName,omitempty"`
	Price                      *float64                                                                  `json:"price,omitempty"`
	PriceFormatted             *string                                                                   `json:"priceFormatted,omitempty"`
	PriceUsd                   *float64                                                                  `json:"priceUSD,omitempty"`
	ProductCode                *string                                                                   `json:"productCode,omitempty"`
	ProductPulledDown          *bool                                                                     `json:"productPulledDown,omitempty"`
	ProductTitle               *string                                                                   `json:"productTitle,omitempty"`
	ProductWidgetList          *string                                                                   `json:"productWidgetList,omitempty"`
	RulesApplied               *string                                                                   `json:"rulesApplied,omitempty"`
	SavingAmount               *string                                                                   `json:"savingAmount,omitempty"`
	SavingAmountFormated       *string                                                                   `json:"savingAmountFormated,omitempty"`
	SortOrder                  *int64                                                                    `json:"sortOrder,omitempty"`
	StartingTime               *string                                                                   `json:"startingTime,omitempty"`
	SupplierName               *string                                                                   `json:"supplierName,omitempty"`
	SupplierPhoneNumber        *string                                                                   `json:"supplierPhoneNumber,omitempty"`
	TermsAndConditions         map[string]interface{}                                                    `json:"termsAndConditions,omitempty"`
	TourGradeCode              *string                                                                   `json:"tourGradeCode,omitempty"`
	TourGradeDescription       *string                                                                   `json:"tourGradeDescription,omitempty"`
	TravelDate                 *string                                                                   `json:"travelDate,omitempty"`
	TravellerAgeBands          []BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands         `json:"travellerAgeBands,omitempty"`
	VoucherKey                 *string                                                                   `json:"voucherKey,omitempty"`
	VoucherOption              *string                                                                   `json:"voucherOption,omitempty"`
	VoucherRequirements        *string                                                                   `json:"voucherRequirements,omitempty"`
	VoucherURL                 *string                                                                   `json:"voucherURL,omitempty"`
	Vouchers                   *string                                                                   `json:"vouchers,omitempty"`
}

type BookingBook200ApplicationJSONData struct {
	BookerEmail         *string                                          `json:"bookerEmail,omitempty"`
	BookingDate         *string                                          `json:"bookingDate,omitempty"`
	BookingStatus       *shared.BookingStatusItinerary                   `json:"bookingStatus,omitempty"`
	CurrencyCode        *string                                          `json:"currencyCode,omitempty"`
	DistributorRef      *string                                          `json:"distributorRef,omitempty"`
	ExchangeRate        *int64                                           `json:"exchangeRate,omitempty"`
	HasVoucher          *bool                                            `json:"hasVoucher,omitempty"`
	ItemSummaries       []BookingBook200ApplicationJSONDataItemSummaries `json:"itemSummaries,omitempty"`
	ItineraryID         *int64                                           `json:"itineraryId,omitempty"`
	OmniPreRuleList     *string                                          `json:"omniPreRuleList,omitempty"`
	PaypalRedirectURL   *string                                          `json:"paypalRedirectURL,omitempty"`
	RulesApplied        *string                                          `json:"rulesApplied,omitempty"`
	SecurityToken       *string                                          `json:"securityToken,omitempty"`
	SortOrder           *int64                                           `json:"sortOrder,omitempty"`
	TotalPrice          *float64                                         `json:"totalPrice,omitempty"`
	TotalPriceFormatted *string                                          `json:"totalPriceFormatted,omitempty"`
	TotalPriceUsd       *float64                                         `json:"totalPriceUSD,omitempty"`
	UserID              *string                                          `json:"userId,omitempty"`
	VoucherKey          *string                                          `json:"voucherKey,omitempty"`
	VoucherURL          *string                                          `json:"voucherURL,omitempty"`
}

type BookingBook200ApplicationJSON struct {
	Data             *BookingBook200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                            `json:"dateStamp,omitempty"`
	ErrorCodes       []string                           `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                      `json:"errorMessage,omitempty"`
	ErrorMessageText *string                            `json:"errorMessageText,omitempty"`
	ErrorName        *string                            `json:"errorName,omitempty"`
	ErrorReference   *string                            `json:"errorReference,omitempty"`
	ErrorType        *string                            `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}             `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}             `json:"extraObject,omitempty"`
	Success          *bool                              `json:"success,omitempty"`
	TotalCount       *int64                             `json:"totalCount,omitempty"`
	Vmid             *string                            `json:"vmid,omitempty"`
}

type BookingBookResponse struct {
	ContentType                         string
	StatusCode                          int64
	BookingBook200ApplicationJSONObject *BookingBook200ApplicationJSON
}
