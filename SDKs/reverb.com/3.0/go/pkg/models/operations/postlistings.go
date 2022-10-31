package operations

import (
	"openapi/pkg/models/shared"
)

type PostListingsRequestBodyCategories struct {
	UUID *string `json:"uuid,omitempty"`
}

type PostListingsRequestBodyConditionUUIDEnum string

const (
	PostListingsRequestBodyConditionUUIDEnumFbf3566896a04baaBcdeAb18d6b1b329                                                                      PostListingsRequestBodyConditionUUIDEnum = "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
	PostListingsRequestBodyConditionUUIDEnumSixa9dfcad600b46c89e08Ce6e5057921e                                                                    PostListingsRequestBodyConditionUUIDEnum = "6a9dfcad-600b-46c8-9e08-ce6e5057921e"
	PostListingsRequestBodyConditionUUIDEnumNinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934 PostListingsRequestBodyConditionUUIDEnum = "98777886-76d0-44c8-865e-bb40e669e934"
	PostListingsRequestBodyConditionUUIDEnumF7a3f48c972a44c6B01a0cd27488d3f6                                                                      PostListingsRequestBodyConditionUUIDEnum = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6"
	PostListingsRequestBodyConditionUUIDEnumAe4d91141bd74ec5A4ba6653af5ac84d                                                                      PostListingsRequestBodyConditionUUIDEnum = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d"
	PostListingsRequestBodyConditionUUIDEnumDf268ad1C4624ba6B6dbE007e23922ea                                                                      PostListingsRequestBodyConditionUUIDEnum = "df268ad1-c462-4ba6-b6db-e007e23922ea"
	PostListingsRequestBodyConditionUUIDEnumAc5b9c1eDc78466dB0b37cf712967a48                                                                      PostListingsRequestBodyConditionUUIDEnum = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48"
	PostListingsRequestBodyConditionUUIDEnumSixdb7df88293b4017A1c1Cdb5e599fa1a                                                                    PostListingsRequestBodyConditionUUIDEnum = "6db7df88-293b-4017-a1c1-cdb5e599fa1a"
	PostListingsRequestBodyConditionUUIDEnumNineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f           PostListingsRequestBodyConditionUUIDEnum = "9225283f-60c2-4413-ad18-1f5eba7a856f"
	PostListingsRequestBodyConditionUUIDEnumSevenc3f45de2ae04c818400Fdb6b1d74890                                                                  PostListingsRequestBodyConditionUUIDEnum = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
)

type PostListingsRequestBodyCondition struct {
	UUID PostListingsRequestBodyConditionUUIDEnum `json:"uuid"`
}

type PostListingsRequestBodyExclusiveChannelEnum string

const (
	PostListingsRequestBodyExclusiveChannelEnumSellerSite PostListingsRequestBodyExclusiveChannelEnum = "seller_site"
	PostListingsRequestBodyExclusiveChannelEnumReverb     PostListingsRequestBodyExclusiveChannelEnum = "reverb"
	PostListingsRequestBodyExclusiveChannelEnumNone       PostListingsRequestBodyExclusiveChannelEnum = "none"
)

type PostListingsRequestBodyLocation struct {
	CountryCode *string `json:"country_code,omitempty"`
	Locality    *string `json:"locality,omitempty"`
	Region      *string `json:"region,omitempty"`
}

type PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum string

const (
	PostListingsRequestBodyPreorderInfoLeadTimeUnitEnumDays  PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum = "days"
	PostListingsRequestBodyPreorderInfoLeadTimeUnitEnumWeeks PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum = "weeks"
)

type PostListingsRequestBodyPreorderInfo struct {
	LeadTime     *int64                                              `json:"lead_time,omitempty"`
	LeadTimeUnit PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum `json:"lead_time_unit"`
	ShipDate     *string                                             `json:"ship_date,omitempty"`
}

type PostListingsRequestBodyPriceCurrencyEnum string

const (
	PostListingsRequestBodyPriceCurrencyEnumUsd PostListingsRequestBodyPriceCurrencyEnum = "USD"
	PostListingsRequestBodyPriceCurrencyEnumCad PostListingsRequestBodyPriceCurrencyEnum = "CAD"
	PostListingsRequestBodyPriceCurrencyEnumEur PostListingsRequestBodyPriceCurrencyEnum = "EUR"
	PostListingsRequestBodyPriceCurrencyEnumGbp PostListingsRequestBodyPriceCurrencyEnum = "GBP"
	PostListingsRequestBodyPriceCurrencyEnumAud PostListingsRequestBodyPriceCurrencyEnum = "AUD"
	PostListingsRequestBodyPriceCurrencyEnumJpy PostListingsRequestBodyPriceCurrencyEnum = "JPY"
	PostListingsRequestBodyPriceCurrencyEnumNzd PostListingsRequestBodyPriceCurrencyEnum = "NZD"
	PostListingsRequestBodyPriceCurrencyEnumMxn PostListingsRequestBodyPriceCurrencyEnum = "MXN"
)

type PostListingsRequestBodyPrice struct {
	Amount   string                                   `json:"amount"`
	Currency PostListingsRequestBodyPriceCurrencyEnum `json:"currency"`
}

type PostListingsRequestBodySeller struct {
	PaypalEmail *string `json:"paypal_email,omitempty"`
}

type PostListingsRequestBodyShippingRatesRateCurrencyEnum string

const (
	PostListingsRequestBodyShippingRatesRateCurrencyEnumUsd PostListingsRequestBodyShippingRatesRateCurrencyEnum = "USD"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumCad PostListingsRequestBodyShippingRatesRateCurrencyEnum = "CAD"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumEur PostListingsRequestBodyShippingRatesRateCurrencyEnum = "EUR"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumGbp PostListingsRequestBodyShippingRatesRateCurrencyEnum = "GBP"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumAud PostListingsRequestBodyShippingRatesRateCurrencyEnum = "AUD"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumJpy PostListingsRequestBodyShippingRatesRateCurrencyEnum = "JPY"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumNzd PostListingsRequestBodyShippingRatesRateCurrencyEnum = "NZD"
	PostListingsRequestBodyShippingRatesRateCurrencyEnumMxn PostListingsRequestBodyShippingRatesRateCurrencyEnum = "MXN"
)

type PostListingsRequestBodyShippingRatesRate struct {
	Amount   string                                               `json:"amount"`
	Currency PostListingsRequestBodyShippingRatesRateCurrencyEnum `json:"currency"`
}

type PostListingsRequestBodyShippingRates struct {
	Rate       *PostListingsRequestBodyShippingRatesRate `json:"rate,omitempty"`
	RegionCode *string                                   `json:"region_code,omitempty"`
}

type PostListingsRequestBodyShipping struct {
	Local *bool                                  `json:"local,omitempty"`
	Rates []PostListingsRequestBodyShippingRates `json:"rates,omitempty"`
}

type PostListingsRequestBodyVideos struct {
	Link string `json:"link"`
}

type PostListingsRequestBody struct {
	Categories          []PostListingsRequestBodyCategories          `json:"categories,omitempty"`
	Condition           *PostListingsRequestBodyCondition            `json:"condition,omitempty"`
	Description         *string                                      `json:"description,omitempty"`
	ExclusiveChannel    *PostListingsRequestBodyExclusiveChannelEnum `json:"exclusive_channel,omitempty"`
	Finish              *string                                      `json:"finish,omitempty"`
	HasInventory        *bool                                        `json:"has_inventory,omitempty"`
	Inventory           *int64                                       `json:"inventory,omitempty"`
	Location            *PostListingsRequestBodyLocation             `json:"location,omitempty"`
	Make                *string                                      `json:"make,omitempty"`
	Model               *string                                      `json:"model,omitempty"`
	MultiItem           *bool                                        `json:"multi_item,omitempty"`
	OffersEnabled       *bool                                        `json:"offers_enabled,omitempty"`
	OriginCountryCode   *string                                      `json:"origin_country_code,omitempty"`
	Photos              []string                                     `json:"photos,omitempty"`
	PreorderInfo        *PostListingsRequestBodyPreorderInfo         `json:"preorder_info,omitempty"`
	Price               *PostListingsRequestBodyPrice                `json:"price,omitempty"`
	Prop65Warning       *string                                      `json:"prop_65_warning,omitempty"`
	Publish             *bool                                        `json:"publish,omitempty"`
	Seller              *PostListingsRequestBodySeller               `json:"seller,omitempty"`
	SellerCost          *string                                      `json:"seller_cost,omitempty"`
	Shipping            *PostListingsRequestBodyShipping             `json:"shipping,omitempty"`
	ShippingProfileID   *string                                      `json:"shipping_profile_id,omitempty"`
	ShippingProfileName *string                                      `json:"shipping_profile_name,omitempty"`
	Sku                 *string                                      `json:"sku,omitempty"`
	SoldAsIs            *bool                                        `json:"sold_as_is,omitempty"`
	StorageLocation     *string                                      `json:"storage_location,omitempty"`
	TaxExempt           *bool                                        `json:"tax_exempt,omitempty"`
	Title               *string                                      `json:"title,omitempty"`
	Upc                 *string                                      `json:"upc,omitempty"`
	UpcDoesNotApply     *bool                                        `json:"upc_does_not_apply,omitempty"`
	Videos              []PostListingsRequestBodyVideos              `json:"videos,omitempty"`
	Year                *string                                      `json:"year,omitempty"`
}

type PostListingsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostListingsRequest struct {
	Request  *PostListingsRequestBody `request:"mediaType=application/json"`
	Security PostListingsSecurity
}

type PostListingsResponse struct {
	ContentType string
	StatusCode  int64
}
