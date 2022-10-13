package operations

import (
	"openapi/pkg/models/shared"
)

type BookingBookHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingBookRequestBodyBooker struct {
	CellPhone            *string `json:"cellPhone"`
	CellPhoneCountryCode *string `json:"cellPhoneCountryCode"`
	Email                *string `json:"email"`
	Firstname            string  `json:"firstname"`
	HomePhone            *string `json:"homePhone"`
	Surname              string  `json:"surname"`
	Title                *string `json:"title"`
}

type BookingBookRequestBodyItemsBookingQuestionAnswers struct {
	Answer     *string `json:"answer"`
	QuestionID *int64  `json:"questionId"`
}

type BookingBookRequestBodyItemsPartnerItemDetail struct {
	DistributorItemRef *string `json:"distributorItemRef"`
}

type BookingBookRequestBodyItemsTravellers struct {
	BandID        *int64  `json:"bandId"`
	Firstname     *string `json:"firstname"`
	LeadTraveller *bool   `json:"leadTraveller"`
	Surname       *string `json:"surname"`
	Title         *string `json:"title"`
}

type BookingBookRequestBodyItems struct {
	BookingQuestionAnswers []BookingBookRequestBodyItemsBookingQuestionAnswers `json:"bookingQuestionAnswers"`
	HotelID                *string                                             `json:"hotelId"`
	LanguageOptionCode     *string                                             `json:"languageOptionCode"`
	PartnerItemDetail      *BookingBookRequestBodyItemsPartnerItemDetail       `json:"partnerItemDetail"`
	PickupPoint            *string                                             `json:"pickupPoint"`
	ProductCode            *string                                             `json:"productCode"`
	SpecialRequirements    *string                                             `json:"specialRequirements"`
	TourGradeCode          *string                                             `json:"tourGradeCode"`
	TravelDate             *string                                             `json:"travelDate"`
	Travellers             []BookingBookRequestBodyItemsTravellers             `json:"travellers"`
}

type BookingBookRequestBodyPartnerDetail struct {
	DistributorRef *string `json:"distributorRef"`
}

type BookingBookRequestBody struct {
	Booker        *BookingBookRequestBodyBooker        `json:"booker"`
	CurrencyCode  *string                              `json:"currencyCode"`
	Demo          *bool                                `json:"demo"`
	Items         []BookingBookRequestBodyItems        `json:"items"`
	PartnerDetail *BookingBookRequestBodyPartnerDetail `json:"partnerDetail"`
}

type BookingBookRequest struct {
	Headers BookingBookHeaders
	Request *BookingBookRequestBody `request:"mediaType=application/json"`
}

type BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate struct {
	DayRangeMax          *int64 `json:"dayRangeMax"`
	DayRangeMin          *int64 `json:"dayRangeMin"`
	PercentageRefundable *int64 `json:"percentageRefundable"`
	PolicyEndTimestamp   *int64 `json:"policyEndTimestamp"`
	PolicyStartTimestamp *int64 `json:"policyStartTimestamp"`
}

type BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions struct {
	AmountRefundable         *string                                                                                            `json:"amountRefundable"`
	CancellationFromTourDate []BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate `json:"cancellationFromTourDate"`
	TermsAndConditions       *string                                                                                            `json:"termsAndConditions"`
}

type BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands struct {
	AgeBandID         *int64  `json:"ageBandId"`
	Count             *int64  `json:"count"`
	Description       *string `json:"description"`
	PluralDescription *string `json:"pluralDescription"`
	SortOrder         *int64  `json:"sortOrder"`
}

type BookingBook200ApplicationJSONDataItemSummaries struct {
	ApplePassSupported         *bool                                                                     `json:"applePassSupported"`
	BarcodeOption              *string                                                                   `json:"barcodeOption"`
	BarcodeType                *string                                                                   `json:"barcodeType"`
	BookingEngineID            *shared.BookingEngineIDResponseEnum                                       `json:"bookingEngineId"`
	BookingStatus              *shared.BookingStatusItem                                                 `json:"bookingStatus"`
	CurrencyCode               *string                                                                   `json:"currencyCode"`
	DepartsFrom                *string                                                                   `json:"departsFrom"`
	DeparturePoint             *string                                                                   `json:"departurePoint"`
	DeparturePointAddress      *string                                                                   `json:"departurePointAddress"`
	DeparturePointDirections   *string                                                                   `json:"departurePointDirections"`
	DestID                     *int64                                                                    `json:"destId"`
	DistributorItemRef         *string                                                                   `json:"distributorItemRef"`
	HoursConfirmed             *string                                                                   `json:"hoursConfirmed"`
	ItemID                     *int64                                                                    `json:"itemId"`
	ItineraryID                *int64                                                                    `json:"itineraryId"`
	LanguageServicesCode       *string                                                                   `json:"languageServicesCode"`
	LastRetailPrice            *float64                                                                  `json:"lastRetailPrice"`
	LastRetailPriceFormatted   *string                                                                   `json:"lastRetailPriceFormatted"`
	LeadTravellerFirstname     *string                                                                   `json:"leadTravellerFirstname"`
	LeadTravellerSurname       *string                                                                   `json:"leadTravellerSurname"`
	LeadTravellerTitle         *string                                                                   `json:"leadTravellerTitle"`
	MerchantCancellable        *bool                                                                     `json:"merchantCancellable"`
	MerchantNetPrice           *float64                                                                  `json:"merchantNetPrice"`
	MerchantNetPriceFormatted  *string                                                                   `json:"merchantNetPriceFormatted"`
	MerchantTermsAndConditions *BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions `json:"merchantTermsAndConditions"`
	ObfsID                     *int64                                                                    `json:"obfsId"`
	Passbooks                  *string                                                                   `json:"passbooks"`
	PickupHotelID              *string                                                                   `json:"pickupHotelId"`
	PickupHotelName            *string                                                                   `json:"pickupHotelName"`
	Price                      *float64                                                                  `json:"price"`
	PriceFormatted             *string                                                                   `json:"priceFormatted"`
	PriceUsd                   *float64                                                                  `json:"priceUSD"`
	ProductCode                *string                                                                   `json:"productCode"`
	ProductPulledDown          *bool                                                                     `json:"productPulledDown"`
	ProductTitle               *string                                                                   `json:"productTitle"`
	ProductWidgetList          *string                                                                   `json:"productWidgetList"`
	RulesApplied               *string                                                                   `json:"rulesApplied"`
	SavingAmount               *string                                                                   `json:"savingAmount"`
	SavingAmountFormated       *string                                                                   `json:"savingAmountFormated"`
	SortOrder                  *int64                                                                    `json:"sortOrder"`
	StartingTime               *string                                                                   `json:"startingTime"`
	SupplierName               *string                                                                   `json:"supplierName"`
	SupplierPhoneNumber        *string                                                                   `json:"supplierPhoneNumber"`
	TermsAndConditions         map[string]interface{}                                                    `json:"termsAndConditions"`
	TourGradeCode              *string                                                                   `json:"tourGradeCode"`
	TourGradeDescription       *string                                                                   `json:"tourGradeDescription"`
	TravelDate                 *string                                                                   `json:"travelDate"`
	TravellerAgeBands          []BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands         `json:"travellerAgeBands"`
	VoucherKey                 *string                                                                   `json:"voucherKey"`
	VoucherOption              *string                                                                   `json:"voucherOption"`
	VoucherRequirements        *string                                                                   `json:"voucherRequirements"`
	VoucherURL                 *string                                                                   `json:"voucherURL"`
	Vouchers                   *string                                                                   `json:"vouchers"`
}

type BookingBook200ApplicationJSONData struct {
	BookerEmail         *string                                          `json:"bookerEmail"`
	BookingDate         *string                                          `json:"bookingDate"`
	BookingStatus       *shared.BookingStatusItinerary                   `json:"bookingStatus"`
	CurrencyCode        *string                                          `json:"currencyCode"`
	DistributorRef      *string                                          `json:"distributorRef"`
	ExchangeRate        *int64                                           `json:"exchangeRate"`
	HasVoucher          *bool                                            `json:"hasVoucher"`
	ItemSummaries       []BookingBook200ApplicationJSONDataItemSummaries `json:"itemSummaries"`
	ItineraryID         *int64                                           `json:"itineraryId"`
	OmniPreRuleList     *string                                          `json:"omniPreRuleList"`
	PaypalRedirectURL   *string                                          `json:"paypalRedirectURL"`
	RulesApplied        *string                                          `json:"rulesApplied"`
	SecurityToken       *string                                          `json:"securityToken"`
	SortOrder           *int64                                           `json:"sortOrder"`
	TotalPrice          *float64                                         `json:"totalPrice"`
	TotalPriceFormatted *string                                          `json:"totalPriceFormatted"`
	TotalPriceUsd       *float64                                         `json:"totalPriceUSD"`
	UserID              *string                                          `json:"userId"`
	VoucherKey          *string                                          `json:"voucherKey"`
	VoucherURL          *string                                          `json:"voucherURL"`
}

type BookingBook200ApplicationJSON struct {
	Data             *BookingBook200ApplicationJSONData `json:"data"`
	DateStamp        *string                            `json:"dateStamp"`
	ErrorCodes       []string                           `json:"errorCodes"`
	ErrorMessage     []interface{}                      `json:"errorMessage"`
	ErrorMessageText *string                            `json:"errorMessageText"`
	ErrorName        *string                            `json:"errorName"`
	ErrorReference   *string                            `json:"errorReference"`
	ErrorType        *string                            `json:"errorType"`
	ExtraInfo        map[string]interface{}             `json:"extraInfo"`
	ExtraObject      map[string]interface{}             `json:"extraObject"`
	Success          *bool                              `json:"success"`
	TotalCount       *int64                             `json:"totalCount"`
	Vmid             *string                            `json:"vmid"`
}

type BookingBookResponse struct {
	ContentType                         string
	StatusCode                          int64
	BookingBook200ApplicationJSONObject *BookingBook200ApplicationJSON
}
