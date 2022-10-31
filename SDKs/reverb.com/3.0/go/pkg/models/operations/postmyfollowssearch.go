package operations

import (
"openapi/pkg/models/shared")


type PostMyFollowsSearchRequestBodyCurrencyEnum string

const (
    PostMyFollowsSearchRequestBodyCurrencyEnumUsd PostMyFollowsSearchRequestBodyCurrencyEnum = "USD"
PostMyFollowsSearchRequestBodyCurrencyEnumCad PostMyFollowsSearchRequestBodyCurrencyEnum = "CAD"
PostMyFollowsSearchRequestBodyCurrencyEnumEur PostMyFollowsSearchRequestBodyCurrencyEnum = "EUR"
PostMyFollowsSearchRequestBodyCurrencyEnumGbp PostMyFollowsSearchRequestBodyCurrencyEnum = "GBP"
PostMyFollowsSearchRequestBodyCurrencyEnumAud PostMyFollowsSearchRequestBodyCurrencyEnum = "AUD"
PostMyFollowsSearchRequestBodyCurrencyEnumJpy PostMyFollowsSearchRequestBodyCurrencyEnum = "JPY"
PostMyFollowsSearchRequestBodyCurrencyEnumNzd PostMyFollowsSearchRequestBodyCurrencyEnum = "NZD"
PostMyFollowsSearchRequestBodyCurrencyEnumMxn PostMyFollowsSearchRequestBodyCurrencyEnum = "MXN"
PostMyFollowsSearchRequestBodyCurrencyEnumDkk PostMyFollowsSearchRequestBodyCurrencyEnum = "DKK"
PostMyFollowsSearchRequestBodyCurrencyEnumSek PostMyFollowsSearchRequestBodyCurrencyEnum = "SEK"
PostMyFollowsSearchRequestBodyCurrencyEnumChf PostMyFollowsSearchRequestBodyCurrencyEnum = "CHF"
PostMyFollowsSearchRequestBodyCurrencyEnumArs PostMyFollowsSearchRequestBodyCurrencyEnum = "ARS"
PostMyFollowsSearchRequestBodyCurrencyEnumBrl PostMyFollowsSearchRequestBodyCurrencyEnum = "BRL"
PostMyFollowsSearchRequestBodyCurrencyEnumHkd PostMyFollowsSearchRequestBodyCurrencyEnum = "HKD"
PostMyFollowsSearchRequestBodyCurrencyEnumNok PostMyFollowsSearchRequestBodyCurrencyEnum = "NOK"
PostMyFollowsSearchRequestBodyCurrencyEnumPhp PostMyFollowsSearchRequestBodyCurrencyEnum = "PHP"
PostMyFollowsSearchRequestBodyCurrencyEnumPln PostMyFollowsSearchRequestBodyCurrencyEnum = "PLN"
PostMyFollowsSearchRequestBodyCurrencyEnumRub PostMyFollowsSearchRequestBodyCurrencyEnum = "RUB"
)



type PostMyFollowsSearchRequestBodyListingTypeEnum string

const (
    PostMyFollowsSearchRequestBodyListingTypeEnumAuctions PostMyFollowsSearchRequestBodyListingTypeEnum = "auctions"
PostMyFollowsSearchRequestBodyListingTypeEnumOffers PostMyFollowsSearchRequestBodyListingTypeEnum = "offers"
)


type PostMyFollowsSearchRequestBody struct {
    AcceptsGiftCards *bool `json:"accepts_gift_cards,omitempty"`
    AcceptsPaymentPlans *bool `json:"accepts_payment_plans,omitempty"`
    AuctionPriceMax *float32 `json:"auction_price_max,omitempty"`
    Category *string `json:"category,omitempty"`
    Conditions []string `json:"conditions,omitempty"`
    Currency *PostMyFollowsSearchRequestBodyCurrencyEnum `json:"currency,omitempty"`
    Decade *string `json:"decade,omitempty"`
    ExcludeAuctions *bool `json:"exclude_auctions,omitempty"`
    Finish *string `json:"finish,omitempty"`
    Handmade *bool `json:"handmade,omitempty"`
    ItemCity *string `json:"item_city,omitempty"`
    ItemCountry *string `json:"item_country,omitempty"`
    ItemRegion *string `json:"item_region,omitempty"`
    ItemState *string `json:"item_state,omitempty"`
    ListingType *PostMyFollowsSearchRequestBodyListingTypeEnum `json:"listing_type,omitempty"`
    LocalPickup *bool `json:"local_pickup,omitempty"`
    Make []string `json:"make,omitempty"`
    Model *string `json:"model,omitempty"`
    MustNot *string `json:"must_not,omitempty"`
    NotIds []int64 `json:"not_ids,omitempty"`
    PreferredSeller *bool `json:"preferred_seller,omitempty"`
    PriceMax *float32 `json:"price_max,omitempty"`
    PriceMin *float32 `json:"price_min,omitempty"`
    ProductType *string `json:"product_type,omitempty"`
    Query *string `json:"query,omitempty"`
    ShipsTo *string `json:"ships_to,omitempty"`
    Shop *string `json:"shop,omitempty"`
    ShopID *string `json:"shop_id,omitempty"`
    WatchersCountMin *int64 `json:"watchers_count_min,omitempty"`
    YearMax *int64 `json:"year_max,omitempty"`
    YearMin *int64 `json:"year_min,omitempty"`
    
}

type PostMyFollowsSearchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyFollowsSearchRequest struct {
    Request *PostMyFollowsSearchRequestBody `request:"mediaType=application/json"`
    Security PostMyFollowsSearchSecurity 
    
}

type PostMyFollowsSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

