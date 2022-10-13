package operations

import (
	"openapi/pkg/models/shared"
)

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
	PostMyFollowsSearchRequestBodyListingTypeEnumOffers   PostMyFollowsSearchRequestBodyListingTypeEnum = "offers"
)

type PostMyFollowsSearchRequestBody struct {
	AcceptsGiftCards    *bool                                          `json:"accepts_gift_cards"`
	AcceptsPaymentPlans *bool                                          `json:"accepts_payment_plans"`
	AuctionPriceMax     *float32                                       `json:"auction_price_max"`
	Category            *string                                        `json:"category"`
	Conditions          []string                                       `json:"conditions"`
	Currency            *PostMyFollowsSearchRequestBodyCurrencyEnum    `json:"currency"`
	Decade              *string                                        `json:"decade"`
	ExcludeAuctions     *bool                                          `json:"exclude_auctions"`
	Finish              *string                                        `json:"finish"`
	Handmade            *bool                                          `json:"handmade"`
	ItemCity            *string                                        `json:"item_city"`
	ItemCountry         *string                                        `json:"item_country"`
	ItemRegion          *string                                        `json:"item_region"`
	ItemState           *string                                        `json:"item_state"`
	ListingType         *PostMyFollowsSearchRequestBodyListingTypeEnum `json:"listing_type"`
	LocalPickup         *bool                                          `json:"local_pickup"`
	Make                []string                                       `json:"make"`
	Model               *string                                        `json:"model"`
	MustNot             *string                                        `json:"must_not"`
	NotIds              []int64                                        `json:"not_ids"`
	PreferredSeller     *bool                                          `json:"preferred_seller"`
	PriceMax            *float32                                       `json:"price_max"`
	PriceMin            *float32                                       `json:"price_min"`
	ProductType         *string                                        `json:"product_type"`
	Query               *string                                        `json:"query"`
	ShipsTo             *string                                        `json:"ships_to"`
	Shop                *string                                        `json:"shop"`
	ShopID              *string                                        `json:"shop_id"`
	WatchersCountMin    *int64                                         `json:"watchers_count_min"`
	YearMax             *int64                                         `json:"year_max"`
	YearMin             *int64                                         `json:"year_min"`
}

type PostMyFollowsSearchSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyFollowsSearchRequest struct {
	Request  *PostMyFollowsSearchRequestBody `request:"mediaType=application/json"`
	Security PostMyFollowsSearchSecurity
}

type PostMyFollowsSearchResponse struct {
	ContentType string
	StatusCode  int64
}
