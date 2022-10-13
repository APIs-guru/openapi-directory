package operations

import (
	"openapi/pkg/models/shared"
)

type BookingPastbookingQueryParams struct {
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	ItemID     *string `queryParam:"style=form,explode=true,name=itemId"`
	VoucherKey *string `queryParam:"style=form,explode=true,name=voucherKey"`
}

type BookingPastbookingHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingPastbookingRequest struct {
	QueryParams BookingPastbookingQueryParams
	Headers     BookingPastbookingHeaders
}

type BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate struct {
	DayRangeMax          *int64 `json:"dayRangeMax"`
	DayRangeMin          *int64 `json:"dayRangeMin"`
	PercentageRefundable *int64 `json:"percentageRefundable"`
	PolicyEndTimestamp   *int64 `json:"policyEndTimestamp"`
	PolicyStartTimestamp *int64 `json:"policyStartTimestamp"`
}

type BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditions struct {
	AmountRefundable         *string                                                                                                   `json:"amountRefundable"`
	CancellationFromTourDate []BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate `json:"cancellationFromTourDate"`
	TermsAndConditions       *string                                                                                                   `json:"termsAndConditions"`
}

type BookingPastbooking200ApplicationJSONDataItemSummariesTravellerAgeBands struct {
	AgeBandID         *int64  `json:"ageBandId"`
	Count             *int64  `json:"count"`
	Description       *string `json:"description"`
	PluralDescription *string `json:"pluralDescription"`
	SortOrder         *int64  `json:"sortOrder"`
}

type BookingPastbooking200ApplicationJSONDataItemSummaries struct {
	BarcodeOption                *string                                                                          `json:"barcodeOption"`
	BarcodeType                  *string                                                                          `json:"barcodeType"`
	BookingEngineID              *shared.BookingEngineIDResponseEnum                                              `json:"bookingEngineId"`
	BookingStatus                *shared.BookingStatusItem                                                        `json:"bookingStatus"`
	CurrencyCode                 *string                                                                          `json:"currencyCode"`
	DepartsFrom                  *string                                                                          `json:"departsFrom"`
	DeparturePoint               *string                                                                          `json:"departurePoint"`
	DeparturePointAddress        *string                                                                          `json:"departurePointAddress"`
	DeparturePointDirections     *string                                                                          `json:"departurePointDirections"`
	DestID                       *int64                                                                           `json:"destId"`
	DistributorItemRef           *string                                                                          `json:"distributorItemRef"`
	HoursConfirmed               *int64                                                                           `json:"hoursConfirmed"`
	ItemID                       *string                                                                          `json:"itemId"`
	ItineraryID                  *int64                                                                           `json:"itineraryId"`
	LanguageServicesLanguageCode *string                                                                          `json:"languageServicesLanguageCode"`
	LastRetailPrice              *float64                                                                         `json:"lastRetailPrice"`
	LastRetailPriceFormatted     *string                                                                          `json:"lastRetailPriceFormatted"`
	LeadTravellerFirstname       *string                                                                          `json:"leadTravellerFirstname"`
	LeadTravellerSurname         *string                                                                          `json:"leadTravellerSurname"`
	LeadTravellerTitle           *string                                                                          `json:"leadTravellerTitle"`
	MerchantCancellable          *bool                                                                            `json:"merchantCancellable"`
	MerchantNetPrice             *float64                                                                         `json:"merchantNetPrice"`
	MerchantNetPriceFormatted    *string                                                                          `json:"merchantNetPriceFormatted"`
	MerchantTermsAndConditions   *BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditions `json:"merchantTermsAndConditions"`
	ObfsID                       *string                                                                          `json:"obfsId"`
	Passbooks                    *string                                                                          `json:"passbooks"`
	Price                        *float64                                                                         `json:"price"`
	PriceFormatted               *string                                                                          `json:"priceFormatted"`
	PriceUsd                     *float64                                                                         `json:"priceUSD"`
	ProductCode                  *string                                                                          `json:"productCode"`
	ProductPulledDown            *bool                                                                            `json:"productPulledDown"`
	ProductTitle                 *string                                                                          `json:"productTitle"`
	ProductWidgetList            *string                                                                          `json:"productWidgetList"`
	RulesApplied                 *string                                                                          `json:"rulesApplied"`
	SavingAmount                 *string                                                                          `json:"savingAmount"`
	SavingAmountFormated         *string                                                                          `json:"savingAmountFormated"`
	SortOrder                    *int64                                                                           `json:"sortOrder"`
	TermsAndConditions           *string                                                                          `json:"termsAndConditions"`
	TourGradeCode                *string                                                                          `json:"tourGradeCode"`
	TourGradeDescription         *string                                                                          `json:"tourGradeDescription"`
	TravelDate                   *string                                                                          `json:"travelDate"`
	TravellerAgeBands            []BookingPastbooking200ApplicationJSONDataItemSummariesTravellerAgeBands         `json:"travellerAgeBands"`
	VoucherKey                   *string                                                                          `json:"voucherKey"`
	VoucherOption                *string                                                                          `json:"voucherOption"`
	VoucherRequirements          *string                                                                          `json:"voucherRequirements"`
	VoucherURL                   *string                                                                          `json:"voucherURL"`
	Vouchers                     *string                                                                          `json:"vouchers"`
}

type BookingPastbooking200ApplicationJSONData struct {
	BookerEmail         *string                                                 `json:"bookerEmail"`
	BookingDate         *string                                                 `json:"bookingDate"`
	BookingStatus       *shared.BookingStatusItinerary                          `json:"bookingStatus"`
	CurrencyCode        *string                                                 `json:"currencyCode"`
	DistributorRef      *string                                                 `json:"distributorRef"`
	ExchangeRate        *int64                                                  `json:"exchangeRate"`
	HasVoucher          *bool                                                   `json:"hasVoucher"`
	ItemSummaries       []BookingPastbooking200ApplicationJSONDataItemSummaries `json:"itemSummaries"`
	ItineraryID         *int64                                                  `json:"itineraryId"`
	RulesApplied        *string                                                 `json:"rulesApplied"`
	SortOrder           *int64                                                  `json:"sortOrder"`
	TotalPrice          *float64                                                `json:"totalPrice"`
	TotalPriceFormatted *string                                                 `json:"totalPriceFormatted"`
	TotalPriceUsd       *float64                                                `json:"totalPriceUSD"`
	UserID              *string                                                 `json:"userId"`
	VoucherKey          *string                                                 `json:"voucherKey"`
	VoucherURL          *string                                                 `json:"voucherURL"`
}

type BookingPastbooking200ApplicationJSON struct {
	Data             *BookingPastbooking200ApplicationJSONData `json:"data"`
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

type BookingPastbookingResponse struct {
	ContentType                                string
	StatusCode                                 int64
	BookingPastbooking200ApplicationJSONObject *BookingPastbooking200ApplicationJSON
}
