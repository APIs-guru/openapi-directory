package operations

import (
"openapi/pkg/models/shared")

type PostMyNegotiationsIDCounterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostMyNegotiationsIDCounterRequestBodyOfferItems struct {
    ListingID string `json:"listing_id"`
    Price string `json:"price"`
    ShippingPrice string `json:"shipping_price"`
    
}


type PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum string

const (
    PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumUsd PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "USD"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumCad PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "CAD"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumEur PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "EUR"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumGbp PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "GBP"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumAud PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "AUD"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumJpy PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "JPY"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumNzd PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "NZD"
PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnumMxn PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = "MXN"
)


type PostMyNegotiationsIDCounterRequestBodyPrice struct {
    Amount string `json:"amount"`
    Currency PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum `json:"currency"`
    
}


type PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum string

const (
    PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumUsd PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "USD"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumCad PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "CAD"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumEur PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "EUR"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumGbp PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "GBP"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumAud PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "AUD"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumJpy PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "JPY"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumNzd PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "NZD"
PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnumMxn PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = "MXN"
)


type PostMyNegotiationsIDCounterRequestBodyShippingPrice struct {
    Amount string `json:"amount"`
    Currency PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum `json:"currency"`
    
}

type PostMyNegotiationsIDCounterRequestBody struct {
    CountryCode *string `json:"country_code,omitempty"`
    LayawayTermsSlug *string `json:"layaway_terms_slug,omitempty"`
    Message *string `json:"message,omitempty"`
    OfferItems []PostMyNegotiationsIDCounterRequestBodyOfferItems `json:"offer_items,omitempty"`
    Price *PostMyNegotiationsIDCounterRequestBodyPrice `json:"price,omitempty"`
    Quantity *string `json:"quantity,omitempty"`
    RecipientID *string `json:"recipient_id,omitempty"`
    RegionCode *string `json:"region_code,omitempty"`
    ShippingPrice *PostMyNegotiationsIDCounterRequestBodyShippingPrice `json:"shipping_price,omitempty"`
    
}

type PostMyNegotiationsIDCounterSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyNegotiationsIDCounterRequest struct {
    PathParams PostMyNegotiationsIDCounterPathParams 
    Request *PostMyNegotiationsIDCounterRequestBody `request:"mediaType=application/json"`
    Security PostMyNegotiationsIDCounterSecurity 
    
}

type PostMyNegotiationsIDCounterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

