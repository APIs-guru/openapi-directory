package operations

import (
"openapi/pkg/models/shared")

type SearchProductsHeaders struct {
    AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
    
}


type SearchProductsRequestBodySortOrderEnum string

const (
    SearchProductsRequestBodySortOrderEnumTopSellers SearchProductsRequestBodySortOrderEnum = "TOP_SELLERS"
SearchProductsRequestBodySortOrderEnumReviewAvgRatingA SearchProductsRequestBodySortOrderEnum = "REVIEW_AVG_RATING_A"
SearchProductsRequestBodySortOrderEnumReviewAvgRatingD SearchProductsRequestBodySortOrderEnum = "REVIEW_AVG_RATING_D"
SearchProductsRequestBodySortOrderEnumPriceFromA SearchProductsRequestBodySortOrderEnum = "PRICE_FROM_A"
SearchProductsRequestBodySortOrderEnumPriceFromD SearchProductsRequestBodySortOrderEnum = "PRICE_FROM_D"
)


type SearchProductsRequestBody struct {
    CatID *int64 `json:"catId,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DestID *int64 `json:"destId,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    SeoID *string `json:"seoId,omitempty"`
    SortOrder *SearchProductsRequestBodySortOrderEnum `json:"sortOrder,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    SubCatID *int64 `json:"subCatId,omitempty"`
    TopX *string `json:"topX,omitempty"`
    
}

type SearchProductsRequest struct {
    Headers SearchProductsHeaders 
    Request *SearchProductsRequestBody `request:"mediaType=application/json"`
    
}

type SearchProducts200ApplicationJSONData struct {
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
    Pas map[string]interface{} `json:"pas,omitempty"`
    PhotoCount *int64 `json:"photoCount,omitempty"`
    Price *float64 `json:"price,omitempty"`
    PriceFormatted *string `json:"priceFormatted,omitempty"`
    PrimaryDestinationID *int64 `json:"primaryDestinationId,omitempty"`
    PrimaryDestinationName *string `json:"primaryDestinationName,omitempty"`
    PrimaryDestinationURLName *string `json:"primaryDestinationUrlName,omitempty"`
    PrimaryGroupID *int64 `json:"primaryGroupId,omitempty"`
    ProductURLName *string `json:"productUrlName,omitempty"`
    Rating *float64 `json:"rating,omitempty"`
    ReviewCount *int64 `json:"reviewCount,omitempty"`
    Rrp *int64 `json:"rrp,omitempty"`
    Rrpformatted *string `json:"rrpformatted,omitempty"`
    SavingAmount *string `json:"savingAmount,omitempty"`
    SavingAmountFormated *string `json:"savingAmountFormated,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    ShortTitle *string `json:"shortTitle,omitempty"`
    SortOrder *int64 `json:"sortOrder,omitempty"`
    SpecialOfferAvailable *bool `json:"specialOfferAvailable,omitempty"`
    SpecialReservation *bool `json:"specialReservation,omitempty"`
    SpecialReservationDetails *string `json:"specialReservationDetails,omitempty"`
    SslSupported *interface{} `json:"sslSupported,omitempty"`
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

type SearchProducts200ApplicationJSON struct {
    Data []SearchProducts200ApplicationJSONData `json:"data,omitempty"`
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

type SearchProductsResponse struct {
    ContentType string 
    StatusCode int64 
    SearchProducts200ApplicationJSONObject *SearchProducts200ApplicationJSON 
    
}

