package operations

import (
	"openapi/pkg/models/shared"
)

type BookingCalculatepriceHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingCalculatepriceRequestBodyItemsTravellers struct {
	BandID *int64 `json:"bandId"`
}

type BookingCalculatepriceRequestBodyItems struct {
	ProductCode   *string                                           `json:"productCode"`
	TourGradeCode *string                                           `json:"tourGradeCode"`
	TravelDate    *string                                           `json:"travelDate"`
	Travellers    []BookingCalculatepriceRequestBodyItemsTravellers `json:"travellers"`
}

type BookingCalculatepriceRequestBody struct {
	CurrencyCode *string                                 `json:"currencyCode"`
	Items        []BookingCalculatepriceRequestBodyItems `json:"items"`
}

type BookingCalculatepriceRequest struct {
	Headers BookingCalculatepriceHeaders
	Request *BookingCalculatepriceRequestBody `request:"mediaType=application/json"`
}

type BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands struct {
	AgeBandID         *int64  `json:"ageBandId"`
	Count             *int64  `json:"count"`
	Description       *string `json:"description"`
	PluralDescription *string `json:"pluralDescription"`
	SortOrder         *int64  `json:"sortOrder"`
}

type BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries struct {
	ApplePassSupported           *bool                                                                                `json:"applePassSupported"`
	BarcodeOption                *string                                                                              `json:"barcodeOption"`
	BarcodeType                  *string                                                                              `json:"barcodeType"`
	BookingEngineID              *shared.BookingEngineIDResponseEnum                                                  `json:"bookingEngineId"`
	BookingStatus                *shared.BookingStatusItem                                                            `json:"bookingStatus"`
	CurrencyCode                 *string                                                                              `json:"currencyCode"`
	DepartsFrom                  *string                                                                              `json:"departsFrom"`
	DeparturePoint               *string                                                                              `json:"departurePoint"`
	DeparturePointAddress        *string                                                                              `json:"departurePointAddress"`
	DeparturePointDirections     *string                                                                              `json:"departurePointDirections"`
	DestID                       *int64                                                                               `json:"destId"`
	DistributorItemRef           *string                                                                              `json:"distributorItemRef"`
	HoursConfirmed               *int64                                                                               `json:"hoursConfirmed"`
	ItemID                       *int64                                                                               `json:"itemId"`
	ItineraryID                  *int64                                                                               `json:"itineraryId"`
	LanguageServicesLanguageCode *string                                                                              `json:"languageServicesLanguageCode"`
	LastRetailPrice              *float64                                                                             `json:"lastRetailPrice"`
	LastRetailPriceFormatted     *string                                                                              `json:"lastRetailPriceFormatted"`
	LeadTravellerFirstname       *string                                                                              `json:"leadTravellerFirstname"`
	LeadTravellerSurname         *string                                                                              `json:"leadTravellerSurname"`
	LeadTravellerTitle           *string                                                                              `json:"leadTravellerTitle"`
	MerchantCancellable          *bool                                                                                `json:"merchantCancellable"`
	MerchantNetPrice             *float64                                                                             `json:"merchantNetPrice"`
	MerchantNetPriceFormatted    *string                                                                              `json:"merchantNetPriceFormatted"`
	ObfsID                       *int64                                                                               `json:"obfsId"`
	Passbooks                    *string                                                                              `json:"passbooks"`
	PickupHotelID                *int64                                                                               `json:"pickupHotelId"`
	PickupHotelName              *string                                                                              `json:"pickupHotelName"`
	Price                        *float64                                                                             `json:"price"`
	PriceFormatted               *string                                                                              `json:"priceFormatted"`
	PriceUsd                     *float64                                                                             `json:"priceUSD"`
	ProductCode                  *string                                                                              `json:"productCode"`
	ProductPulledDown            *bool                                                                                `json:"productPulledDown"`
	ProductTitle                 *string                                                                              `json:"productTitle"`
	ProductWidgetList            *string                                                                              `json:"productWidgetList"`
	RulesApplied                 []string                                                                             `json:"rulesApplied"`
	SavingAmount                 *string                                                                              `json:"savingAmount"`
	SavingAmountFormated         *string                                                                              `json:"savingAmountFormated"`
	SortOrder                    *int64                                                                               `json:"sortOrder"`
	StartingTime                 *string                                                                              `json:"startingTime"`
	SupplierName                 *string                                                                              `json:"supplierName"`
	SupplierPhoneNumber          *string                                                                              `json:"supplierPhoneNumber"`
	TermsAndConditions           *string                                                                              `json:"termsAndConditions"`
	TourGradeCode                *string                                                                              `json:"tourGradeCode"`
	TourGradeDescription         *string                                                                              `json:"tourGradeDescription"`
	TravelDate                   *string                                                                              `json:"travelDate"`
	TravellerAgeBands            []BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands `json:"travellerAgeBands"`
	VoucherKey                   *string                                                                              `json:"voucherKey"`
	VoucherOption                *string                                                                              `json:"voucherOption"`
	VoucherRequirements          *string                                                                              `json:"voucherRequirements"`
	VoucherURL                   *string                                                                              `json:"voucherURL"`
	Vouchers                     *string                                                                              `json:"vouchers"`
}

type BookingCalculateprice200ApplicationJSONDataItinerary struct {
	BookerEmail         *string                                                             `json:"bookerEmail"`
	BookingDate         *string                                                             `json:"bookingDate"`
	BookingStatus       *shared.BookingStatusItinerary                                      `json:"bookingStatus"`
	CurrencyCode        *string                                                             `json:"currencyCode"`
	DistributorRef      *string                                                             `json:"distributorRef"`
	ExchangeRate        *int64                                                              `json:"exchangeRate"`
	HasVoucher          *bool                                                               `json:"hasVoucher"`
	ItemSummaries       []BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries `json:"itemSummaries"`
	ItineraryID         *int64                                                              `json:"itineraryId"`
	OmniPreRuleList     *int64                                                              `json:"omniPreRuleList"`
	PaypalRedirectURL   *string                                                             `json:"paypalRedirectURL"`
	RulesApplied        []string                                                            `json:"rulesApplied"`
	SecurityToken       *string                                                             `json:"securityToken"`
	SortOrder           *int64                                                              `json:"sortOrder"`
	TotalPrice          *float64                                                            `json:"totalPrice"`
	TotalPriceFormatted *string                                                             `json:"totalPriceFormatted"`
	TotalPriceUsd       *float64                                                            `json:"totalPriceUSD"`
	UserID              *int64                                                              `json:"userId"`
	VoucherKey          *string                                                             `json:"voucherKey"`
	VoucherURL          *string                                                             `json:"voucherURL"`
}

type BookingCalculateprice200ApplicationJSONData struct {
	CurrencyCode                *string                                               `json:"currencyCode"`
	HasPromoCode                *bool                                                 `json:"hasPromoCode"`
	Itinerary                   *BookingCalculateprice200ApplicationJSONDataItinerary `json:"itinerary"`
	ItineraryFromPrice          *float64                                              `json:"itineraryFromPrice"`
	ItineraryFromPriceFormatted *string                                               `json:"itineraryFromPriceFormatted"`
	ItineraryNewPrice           *float64                                              `json:"itineraryNewPrice"`
	ItineraryNewPriceFormatted  *string                                               `json:"itineraryNewPriceFormatted"`
	ItinerarySaving             *int64                                                `json:"itinerarySaving"`
	ItinerarySavingFormatted    *string                                               `json:"itinerarySavingFormatted"`
	PaymentGatewayInfo          *string                                               `json:"paymentGatewayInfo"`
	PromoCode                   *string                                               `json:"promoCode"`
	PromoCodeExpired            *bool                                                 `json:"promoCodeExpired"`
	PromoCodeValid              *bool                                                 `json:"promoCodeValid"`
	RulesApplied                []string                                              `json:"rulesApplied"`
}

type BookingCalculateprice200ApplicationJSON struct {
	Data             *BookingCalculateprice200ApplicationJSONData `json:"data"`
	DateStamp        *string                                      `json:"dateStamp"`
	ErrorCodes       []string                                     `json:"errorCodes"`
	ErrorMessage     []interface{}                                `json:"errorMessage"`
	ErrorMessageText *string                                      `json:"errorMessageText"`
	ErrorName        *string                                      `json:"errorName"`
	ErrorReference   *string                                      `json:"errorReference"`
	ErrorType        *string                                      `json:"errorType"`
	ExtraInfo        map[string]interface{}                       `json:"extraInfo"`
	ExtraObject      map[string]interface{}                       `json:"extraObject"`
	Success          *bool                                        `json:"success"`
	TotalCount       *int64                                       `json:"totalCount"`
	Vmid             *string                                      `json:"vmid"`
}

type BookingCalculatepriceResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	BookingCalculateprice200ApplicationJSONObject *BookingCalculateprice200ApplicationJSON
}
