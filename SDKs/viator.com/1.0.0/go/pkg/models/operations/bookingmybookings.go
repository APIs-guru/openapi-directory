package operations

import (
"openapi/pkg/models/shared")

type BookingMybookingsQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    ItineraryOrItemID *string `queryParam:"style=form,explode=true,name=itineraryOrItemId"`
    VoucherKey *string `queryParam:"style=form,explode=true,name=voucherKey"`
    
}

type BookingMybookingsHeaders struct {
    AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type BookingMybookingsRequest struct {
    QueryParams BookingMybookingsQueryParams 
    Headers BookingMybookingsHeaders 
    
}

type BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate struct {
    DayRangeMax *int64 `json:"dayRangeMax,omitempty"`
    DayRangeMin *int64 `json:"dayRangeMin,omitempty"`
    PercentageRefundable *int64 `json:"percentageRefundable,omitempty"`
    PolicyEndTimestamp *int64 `json:"policyEndTimestamp,omitempty"`
    PolicyStartTimestamp *int64 `json:"policyStartTimestamp,omitempty"`
    
}

type BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditions struct {
    AmountRefundable *string `json:"amountRefundable,omitempty"`
    CancellationFromTourDate []BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate `json:"cancellationFromTourDate,omitempty"`
    TermsAndConditions *string `json:"termsAndConditions,omitempty"`
    
}

type BookingMybookings200ApplicationJSONDataItemSummariesTravellerAgeBands struct {
    AgeBandID *int64 `json:"ageBandId,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Description *string `json:"description,omitempty"`
    PluralDescription *string `json:"pluralDescription,omitempty"`
    SortOrder *int64 `json:"sortOrder,omitempty"`
    
}

type BookingMybookings200ApplicationJSONDataItemSummaries struct {
    BarcodeOption *string `json:"barcodeOption,omitempty"`
    BarcodeType *string `json:"barcodeType,omitempty"`
    BookingEngineID *shared.BookingEngineIDResponseEnum `json:"bookingEngineId,omitempty"`
    BookingStatus *shared.BookingStatusItem `json:"bookingStatus,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DepartsFrom *string `json:"departsFrom,omitempty"`
    DeparturePoint *string `json:"departurePoint,omitempty"`
    DeparturePointAddress *string `json:"departurePointAddress,omitempty"`
    DeparturePointDirections *string `json:"departurePointDirections,omitempty"`
    DestID *int64 `json:"destId,omitempty"`
    DistributorItemRef *string `json:"distributorItemRef,omitempty"`
    HoursConfirmed *int64 `json:"hoursConfirmed,omitempty"`
    ItemID *string `json:"itemId,omitempty"`
    ItineraryID *int64 `json:"itineraryId,omitempty"`
    LanguageServicesLanguageCode *string `json:"languageServicesLanguageCode,omitempty"`
    LastRetailPrice *float64 `json:"lastRetailPrice,omitempty"`
    LastRetailPriceFormatted *string `json:"lastRetailPriceFormatted,omitempty"`
    LeadTravellerFirstname *string `json:"leadTravellerFirstname,omitempty"`
    LeadTravellerSurname *string `json:"leadTravellerSurname,omitempty"`
    LeadTravellerTitle *string `json:"leadTravellerTitle,omitempty"`
    MerchantCancellable *bool `json:"merchantCancellable,omitempty"`
    MerchantNetPrice *float64 `json:"merchantNetPrice,omitempty"`
    MerchantNetPriceFormatted *string `json:"merchantNetPriceFormatted,omitempty"`
    MerchantTermsAndConditions *BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditions `json:"merchantTermsAndConditions,omitempty"`
    ObfsID *string `json:"obfsId,omitempty"`
    Passbooks *string `json:"passbooks,omitempty"`
    Price *float64 `json:"price,omitempty"`
    PriceFormatted *string `json:"priceFormatted,omitempty"`
    PriceUsd *float64 `json:"priceUSD,omitempty"`
    ProductCode *string `json:"productCode,omitempty"`
    ProductPulledDown *bool `json:"productPulledDown,omitempty"`
    ProductTitle *string `json:"productTitle,omitempty"`
    ProductWidgetList *string `json:"productWidgetList,omitempty"`
    RulesApplied *string `json:"rulesApplied,omitempty"`
    SavingAmount *string `json:"savingAmount,omitempty"`
    SavingAmountFormated *string `json:"savingAmountFormated,omitempty"`
    SortOrder *int64 `json:"sortOrder,omitempty"`
    TermsAndConditions *string `json:"termsAndConditions,omitempty"`
    TourGradeCode *string `json:"tourGradeCode,omitempty"`
    TourGradeDescription *string `json:"tourGradeDescription,omitempty"`
    TravelDate *string `json:"travelDate,omitempty"`
    TravellerAgeBands []BookingMybookings200ApplicationJSONDataItemSummariesTravellerAgeBands `json:"travellerAgeBands,omitempty"`
    VoucherKey *string `json:"voucherKey,omitempty"`
    VoucherOption *string `json:"voucherOption,omitempty"`
    VoucherRequirements *string `json:"voucherRequirements,omitempty"`
    VoucherURL *string `json:"voucherURL,omitempty"`
    Vouchers *string `json:"vouchers,omitempty"`
    
}

type BookingMybookings200ApplicationJSONData struct {
    BookerEmail *string `json:"bookerEmail,omitempty"`
    BookingDate *string `json:"bookingDate,omitempty"`
    BookingStatus *shared.BookingStatusItinerary `json:"bookingStatus,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DistributorRef *string `json:"distributorRef,omitempty"`
    ExchangeRate *int64 `json:"exchangeRate,omitempty"`
    HasVoucher *bool `json:"hasVoucher,omitempty"`
    ItemSummaries []BookingMybookings200ApplicationJSONDataItemSummaries `json:"itemSummaries,omitempty"`
    ItineraryID *int64 `json:"itineraryId,omitempty"`
    RulesApplied *string `json:"rulesApplied,omitempty"`
    SortOrder *int64 `json:"sortOrder,omitempty"`
    TotalPrice *float64 `json:"totalPrice,omitempty"`
    TotalPriceFormatted *string `json:"totalPriceFormatted,omitempty"`
    TotalPriceUsd *float64 `json:"totalPriceUSD,omitempty"`
    UserID *string `json:"userId,omitempty"`
    VoucherKey *string `json:"voucherKey,omitempty"`
    VoucherURL *string `json:"voucherURL,omitempty"`
    
}

type BookingMybookings200ApplicationJSON struct {
    Data *BookingMybookings200ApplicationJSONData `json:"data,omitempty"`
    DateStamp *string `json:"dateStamp,omitempty"`
    ErrorCodes []string `json:"errorCodes,omitempty"`
    ErrorMessage []interface{} `json:"errorMessage,omitempty"`
    ErrorMessageText *string `json:"errorMessageText,omitempty"`
    ErrorName *string `json:"errorName,omitempty"`
    ErrorReference *string `json:"errorReference,omitempty"`
    ErrorType *string `json:"errorType,omitempty"`
    ExtraInfo map[string]interface{} `json:"extraInfo,omitempty"`
    ExtraObject map[string]interface{} `json:"extraObject,omitempty"`
    Success *bool `json:"success,omitempty"`
    TotalCount *int64 `json:"totalCount,omitempty"`
    Vmid *string `json:"vmid,omitempty"`
    
}

type BookingMybookingsResponse struct {
    ContentType string 
    StatusCode int64 
    BookingMybookings200ApplicationJSONObject *BookingMybookings200ApplicationJSON 
    
}

