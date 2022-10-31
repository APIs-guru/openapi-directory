package operations

import (
"openapi/pkg/models/shared")

type AvailableProductsHeaders struct {
    AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type AvailableProductsRequestBody struct {
    CurrencyCode *string `json:"currencyCode,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    NumAdults *int64 `json:"numAdults,omitempty"`
    ProductCodes []string `json:"productCodes,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}

type AvailableProductsRequest struct {
    Headers AvailableProductsHeaders 
    Request *AvailableProductsRequestBody `request:"mediaType=application/json"`
    
}

type AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote struct {
    GeneralRetailPrice *string `json:"generalRetailPrice,omitempty"`
    MerchantNetPrice *string `json:"merchantNetPrice,omitempty"`
    RetailPrice *string `json:"retailPrice,omitempty"`
    
}

type AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates struct {
    DateList *string `json:"dateList,omitempty"`
    PriceFrom *string `json:"priceFrom,omitempty"`
    PriceQuote *AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote `json:"priceQuote,omitempty"`
    
}

type AvailableProducts200ApplicationJSONDataPasTourGrades struct {
    AvailDates []AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates `json:"availDates,omitempty"`
    BookingEngine *string `json:"bookingEngine,omitempty"`
    Description *string `json:"description,omitempty"`
    LanguageServices map[string][]interface{} `json:"languageServices,omitempty"`
    Sapi *bool `json:"sapi,omitempty"`
    Title *string `json:"title,omitempty"`
    TourGradeCode *string `json:"tourGradeCode,omitempty"`
    
}

type AvailableProducts200ApplicationJSONDataPas struct {
    IncompleteQuote *bool `json:"incompleteQuote,omitempty"`
    ProductCode *string `json:"productCode,omitempty"`
    RemovedChildAges []string `json:"removedChildAges,omitempty"`
    TourGrades map[string]AvailableProducts200ApplicationJSONDataPasTourGrades `json:"tourGrades,omitempty"`
    TravellerMix *string `json:"travellerMix,omitempty"`
    
}

type AvailableProducts200ApplicationJSONData struct {
    Admission *string `json:"admission,omitempty"`
    Available *bool `json:"available,omitempty"`
    BookingEngineID *shared.BookingEngineIDEnum `json:"bookingEngineId,omitempty"`
    CatIds []int64 `json:"catIds,omitempty"`
    Code *string `json:"code,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    Duration *string `json:"duration,omitempty"`
    Essential *string `json:"essential,omitempty"`
    MerchantCancellable *bool `json:"merchantCancellable,omitempty"`
    MerchantNetPriceFrom *float64 `json:"merchantNetPriceFrom,omitempty"`
    MerchantNetPriceFromFormatted *string `json:"merchantNetPriceFromFormatted,omitempty"`
    OnRequestPeriod *int64 `json:"onRequestPeriod,omitempty"`
    OnSale *bool `json:"onSale,omitempty"`
    PanoramaCount *int64 `json:"panoramaCount,omitempty"`
    Pas *AvailableProducts200ApplicationJSONDataPas `json:"pas,omitempty"`
    PhotoCount *int64 `json:"photoCount,omitempty"`
    Price *float64 `json:"price,omitempty"`
    PriceFormatted *string `json:"priceFormatted,omitempty"`
    PrimaryDestinationID *int64 `json:"primaryDestinationId,omitempty"`
    PrimaryDestinationName *string `json:"primaryDestinationName,omitempty"`
    PrimaryDestinationURLName *string `json:"primaryDestinationUrlName,omitempty"`
    PrimaryGroupID *string `json:"primaryGroupId,omitempty"`
    ProductURLName *string `json:"productUrlName,omitempty"`
    Rating *float64 `json:"rating,omitempty"`
    ReviewCount *int64 `json:"reviewCount,omitempty"`
    Rrp *int64 `json:"rrp,omitempty"`
    RrpFormatted *string `json:"rrpFormatted,omitempty"`
    SavingAmount *string `json:"savingAmount,omitempty"`
    SavingAmountFormated *string `json:"savingAmountFormated,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    ShortTitle *string `json:"shortTitle,omitempty"`
    SortOrder *int64 `json:"sortOrder,omitempty"`
    SpecialOfferAvailable *bool `json:"specialOfferAvailable,omitempty"`
    SpecialReservation *bool `json:"specialReservation,omitempty"`
    SpecialReservationDetails *string `json:"specialReservationDetails,omitempty"`
    SslSupported *bool `json:"sslSupported,omitempty"`
    SubCatIds []int64 `json:"subCatIds,omitempty"`
    SupplierCode *string `json:"supplierCode,omitempty"`
    SupplierName *string `json:"supplierName,omitempty"`
    ThumbnailHiResURL *string `json:"thumbnailHiResURL,omitempty"`
    ThumbnailURL *string `json:"thumbnailURL,omitempty"`
    Title *string `json:"title,omitempty"`
    TranslationLevel *int64 `json:"translationLevel,omitempty"`
    UniqueShortDescription *string `json:"uniqueShortDescription,omitempty"`
    VideoCount *int64 `json:"videoCount,omitempty"`
    WebURL *string `json:"webURL,omitempty"`
    
}

type AvailableProducts200ApplicationJSON struct {
    Data []AvailableProducts200ApplicationJSONData `json:"data,omitempty"`
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

type AvailableProductsResponse struct {
    ContentType string 
    StatusCode int64 
    AvailableProducts200ApplicationJSONObject *AvailableProducts200ApplicationJSON 
    
}

