package operations

import (
	"openapi/pkg/models/shared"
)

type BookingCalculatepriceHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingCalculatepriceRequestBodyItemsTravellers struct {
	BandID *int64 `json:"bandId,omitempty"`
}

type BookingCalculatepriceRequestBodyItems struct {
	ProductCode   *string                                           `json:"productCode,omitempty"`
	TourGradeCode *string                                           `json:"tourGradeCode,omitempty"`
	TravelDate    *string                                           `json:"travelDate,omitempty"`
	Travellers    []BookingCalculatepriceRequestBodyItemsTravellers `json:"travellers,omitempty"`
}

type BookingCalculatepriceRequestBody struct {
	CurrencyCode *string                                 `json:"currencyCode,omitempty"`
	Items        []BookingCalculatepriceRequestBodyItems `json:"items,omitempty"`
}

type BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands struct {
	AgeBandID         *int64  `json:"ageBandId,omitempty"`
	Count             *int64  `json:"count,omitempty"`
	Description       *string `json:"description,omitempty"`
	PluralDescription *string `json:"pluralDescription,omitempty"`
	SortOrder         *int64  `json:"sortOrder,omitempty"`
}

type BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries struct {
	ApplePassSupported           *bool                                                                                `json:"applePassSupported,omitempty"`
	BarcodeOption                *string                                                                              `json:"barcodeOption,omitempty"`
	BarcodeType                  *string                                                                              `json:"barcodeType,omitempty"`
	BookingEngineID              *shared.BookingEngineIDResponseEnum                                                  `json:"bookingEngineId,omitempty"`
	BookingStatus                *shared.BookingStatusItem                                                            `json:"bookingStatus,omitempty"`
	CurrencyCode                 *string                                                                              `json:"currencyCode,omitempty"`
	DepartsFrom                  *string                                                                              `json:"departsFrom,omitempty"`
	DeparturePoint               *string                                                                              `json:"departurePoint,omitempty"`
	DeparturePointAddress        *string                                                                              `json:"departurePointAddress,omitempty"`
	DeparturePointDirections     *string                                                                              `json:"departurePointDirections,omitempty"`
	DestID                       *int64                                                                               `json:"destId,omitempty"`
	DistributorItemRef           *string                                                                              `json:"distributorItemRef,omitempty"`
	HoursConfirmed               *int64                                                                               `json:"hoursConfirmed,omitempty"`
	ItemID                       *int64                                                                               `json:"itemId,omitempty"`
	ItineraryID                  *int64                                                                               `json:"itineraryId,omitempty"`
	LanguageServicesLanguageCode *string                                                                              `json:"languageServicesLanguageCode,omitempty"`
	LastRetailPrice              *float64                                                                             `json:"lastRetailPrice,omitempty"`
	LastRetailPriceFormatted     *string                                                                              `json:"lastRetailPriceFormatted,omitempty"`
	LeadTravellerFirstname       *string                                                                              `json:"leadTravellerFirstname,omitempty"`
	LeadTravellerSurname         *string                                                                              `json:"leadTravellerSurname,omitempty"`
	LeadTravellerTitle           *string                                                                              `json:"leadTravellerTitle,omitempty"`
	MerchantCancellable          *bool                                                                                `json:"merchantCancellable,omitempty"`
	MerchantNetPrice             *float64                                                                             `json:"merchantNetPrice,omitempty"`
	MerchantNetPriceFormatted    *string                                                                              `json:"merchantNetPriceFormatted,omitempty"`
	ObfsID                       *int64                                                                               `json:"obfsId,omitempty"`
	Passbooks                    *string                                                                              `json:"passbooks,omitempty"`
	PickupHotelID                *int64                                                                               `json:"pickupHotelId,omitempty"`
	PickupHotelName              *string                                                                              `json:"pickupHotelName,omitempty"`
	Price                        *float64                                                                             `json:"price,omitempty"`
	PriceFormatted               *string                                                                              `json:"priceFormatted,omitempty"`
	PriceUsd                     *float64                                                                             `json:"priceUSD,omitempty"`
	ProductCode                  *string                                                                              `json:"productCode,omitempty"`
	ProductPulledDown            *bool                                                                                `json:"productPulledDown,omitempty"`
	ProductTitle                 *string                                                                              `json:"productTitle,omitempty"`
	ProductWidgetList            *string                                                                              `json:"productWidgetList,omitempty"`
	RulesApplied                 []string                                                                             `json:"rulesApplied,omitempty"`
	SavingAmount                 *string                                                                              `json:"savingAmount,omitempty"`
	SavingAmountFormated         *string                                                                              `json:"savingAmountFormated,omitempty"`
	SortOrder                    *int64                                                                               `json:"sortOrder,omitempty"`
	StartingTime                 *string                                                                              `json:"startingTime,omitempty"`
	SupplierName                 *string                                                                              `json:"supplierName,omitempty"`
	SupplierPhoneNumber          *string                                                                              `json:"supplierPhoneNumber,omitempty"`
	TermsAndConditions           *string                                                                              `json:"termsAndConditions,omitempty"`
	TourGradeCode                *string                                                                              `json:"tourGradeCode,omitempty"`
	TourGradeDescription         *string                                                                              `json:"tourGradeDescription,omitempty"`
	TravelDate                   *string                                                                              `json:"travelDate,omitempty"`
	TravellerAgeBands            []BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands `json:"travellerAgeBands,omitempty"`
	VoucherKey                   *string                                                                              `json:"voucherKey,omitempty"`
	VoucherOption                *string                                                                              `json:"voucherOption,omitempty"`
	VoucherRequirements          *string                                                                              `json:"voucherRequirements,omitempty"`
	VoucherURL                   *string                                                                              `json:"voucherURL,omitempty"`
	Vouchers                     *string                                                                              `json:"vouchers,omitempty"`
}

// BookingCalculateprice200ApplicationJSONDataItinerary
// **summary results** for all itinerary items
type BookingCalculateprice200ApplicationJSONDataItinerary struct {
	BookerEmail         *string                                                             `json:"bookerEmail,omitempty"`
	BookingDate         *string                                                             `json:"bookingDate,omitempty"`
	BookingStatus       *shared.BookingStatusItinerary                                      `json:"bookingStatus,omitempty"`
	CurrencyCode        *string                                                             `json:"currencyCode,omitempty"`
	DistributorRef      *string                                                             `json:"distributorRef,omitempty"`
	ExchangeRate        *int64                                                              `json:"exchangeRate,omitempty"`
	HasVoucher          *bool                                                               `json:"hasVoucher,omitempty"`
	ItemSummaries       []BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries `json:"itemSummaries,omitempty"`
	ItineraryID         *int64                                                              `json:"itineraryId,omitempty"`
	OmniPreRuleList     *int64                                                              `json:"omniPreRuleList,omitempty"`
	PaypalRedirectURL   *string                                                             `json:"paypalRedirectURL,omitempty"`
	RulesApplied        []string                                                            `json:"rulesApplied,omitempty"`
	SecurityToken       *string                                                             `json:"securityToken,omitempty"`
	SortOrder           *int64                                                              `json:"sortOrder,omitempty"`
	TotalPrice          *float64                                                            `json:"totalPrice,omitempty"`
	TotalPriceFormatted *string                                                             `json:"totalPriceFormatted,omitempty"`
	TotalPriceUsd       *float64                                                            `json:"totalPriceUSD,omitempty"`
	UserID              *int64                                                              `json:"userId,omitempty"`
	VoucherKey          *string                                                             `json:"voucherKey,omitempty"`
	VoucherURL          *string                                                             `json:"voucherURL,omitempty"`
}

type BookingCalculateprice200ApplicationJSONData struct {
	CurrencyCode                *string                                               `json:"currencyCode,omitempty"`
	HasPromoCode                *bool                                                 `json:"hasPromoCode,omitempty"`
	Itinerary                   *BookingCalculateprice200ApplicationJSONDataItinerary `json:"itinerary,omitempty"`
	ItineraryFromPrice          *float64                                              `json:"itineraryFromPrice,omitempty"`
	ItineraryFromPriceFormatted *string                                               `json:"itineraryFromPriceFormatted,omitempty"`
	ItineraryNewPrice           *float64                                              `json:"itineraryNewPrice,omitempty"`
	ItineraryNewPriceFormatted  *string                                               `json:"itineraryNewPriceFormatted,omitempty"`
	ItinerarySaving             *int64                                                `json:"itinerarySaving,omitempty"`
	ItinerarySavingFormatted    *string                                               `json:"itinerarySavingFormatted,omitempty"`
	PaymentGatewayInfo          *string                                               `json:"paymentGatewayInfo,omitempty"`
	PromoCode                   *string                                               `json:"promoCode,omitempty"`
	PromoCodeExpired            *bool                                                 `json:"promoCodeExpired,omitempty"`
	PromoCodeValid              *bool                                                 `json:"promoCodeValid,omitempty"`
	RulesApplied                []string                                              `json:"rulesApplied,omitempty"`
}

type BookingCalculateprice200ApplicationJSON struct {
	Data             *BookingCalculateprice200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                      `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                     `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                                `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                      `json:"errorMessageText,omitempty"`
	ErrorName        *string                                      `json:"errorName,omitempty"`
	ErrorReference   *string                                      `json:"errorReference,omitempty"`
	ErrorType        *string                                      `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                       `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                       `json:"extraObject,omitempty"`
	Success          *bool                                        `json:"success,omitempty"`
	TotalCount       *int64                                       `json:"totalCount,omitempty"`
	Vmid             *string                                      `json:"vmid,omitempty"`
}

type BookingCalculatepriceRequest struct {
	Headers BookingCalculatepriceHeaders
	Request *BookingCalculatepriceRequestBody `request:"mediaType=application/json"`
}

type BookingCalculatepriceResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	BookingCalculateprice200ApplicationJSONObject *BookingCalculateprice200ApplicationJSON
}
