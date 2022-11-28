package operations

import (
	"openapi/pkg/models/shared"
)

type PostConversationsConversationIDOfferPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type PostConversationsConversationIDOfferRequestBodyOfferItems struct {
	ListingID     string `json:"listing_id"`
	Price         string `json:"price"`
	ShippingPrice string `json:"shipping_price"`
}

type PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum string

const (
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumUsd PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "USD"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumCad PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "CAD"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumEur PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "EUR"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumGbp PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "GBP"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumAud PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "AUD"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumJpy PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "JPY"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumNzd PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "NZD"
	PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnumMxn PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = "MXN"
)

type PostConversationsConversationIDOfferRequestBodyPrice struct {
	Amount   string                                                           `json:"amount"`
	Currency PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum `json:"currency"`
}

type PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum string

const (
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumUsd PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "USD"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumCad PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "CAD"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumEur PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "EUR"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumGbp PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "GBP"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumAud PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "AUD"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumJpy PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "JPY"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumNzd PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "NZD"
	PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnumMxn PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = "MXN"
)

// PostConversationsConversationIDOfferRequestBodyShippingPrice
// Shipping price (sellers only)
type PostConversationsConversationIDOfferRequestBodyShippingPrice struct {
	Amount   string                                                                   `json:"amount"`
	Currency PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum `json:"currency"`
}

type PostConversationsConversationIDOfferRequestBody struct {
	CountryCode      *string                                                       `json:"country_code,omitempty"`
	LayawayTermsSlug *string                                                       `json:"layaway_terms_slug,omitempty"`
	Message          *string                                                       `json:"message,omitempty"`
	OfferItems       []PostConversationsConversationIDOfferRequestBodyOfferItems   `json:"offer_items,omitempty"`
	Price            *PostConversationsConversationIDOfferRequestBodyPrice         `json:"price,omitempty"`
	Quantity         *string                                                       `json:"quantity,omitempty"`
	RecipientID      *string                                                       `json:"recipient_id,omitempty"`
	RegionCode       *string                                                       `json:"region_code,omitempty"`
	ShippingPrice    *PostConversationsConversationIDOfferRequestBodyShippingPrice `json:"shipping_price,omitempty"`
}

type PostConversationsConversationIDOfferSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostConversationsConversationIDOfferRequest struct {
	PathParams PostConversationsConversationIDOfferPathParams
	Request    *PostConversationsConversationIDOfferRequestBody `request:"mediaType=application/json"`
	Security   PostConversationsConversationIDOfferSecurity
}

type PostConversationsConversationIDOfferResponse struct {
	ContentType string
	StatusCode  int64
}
