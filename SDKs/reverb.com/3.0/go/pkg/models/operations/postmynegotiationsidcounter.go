package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyNegotiationsIDCounterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostMyNegotiationsIDCounterRequestBodyOfferItems struct {
	ListingID     string `json:"listing_id"`
	Price         string `json:"price"`
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
	Amount   string                                                  `json:"amount"`
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
	Amount   string                                                          `json:"amount"`
	Currency PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum `json:"currency"`
}

type PostMyNegotiationsIDCounterRequestBody struct {
	CountryCode      *string                                              `json:"country_code"`
	LayawayTermsSlug *string                                              `json:"layaway_terms_slug"`
	Message          *string                                              `json:"message"`
	OfferItems       []PostMyNegotiationsIDCounterRequestBodyOfferItems   `json:"offer_items"`
	Price            *PostMyNegotiationsIDCounterRequestBodyPrice         `json:"price"`
	Quantity         *string                                              `json:"quantity"`
	RecipientID      *string                                              `json:"recipient_id"`
	RegionCode       *string                                              `json:"region_code"`
	ShippingPrice    *PostMyNegotiationsIDCounterRequestBodyShippingPrice `json:"shipping_price"`
}

type PostMyNegotiationsIDCounterSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyNegotiationsIDCounterRequest struct {
	PathParams PostMyNegotiationsIDCounterPathParams
	Request    *PostMyNegotiationsIDCounterRequestBody `request:"mediaType=application/json"`
	Security   PostMyNegotiationsIDCounterSecurity
}

type PostMyNegotiationsIDCounterResponse struct {
	ContentType string
	StatusCode  int64
}
