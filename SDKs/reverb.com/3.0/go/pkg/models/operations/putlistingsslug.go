package operations

import (
	"openapi/pkg/models/shared"
)

type PutListingsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type PutListingsSlugRequestBodyCategories struct {
	UUID *string `json:"uuid"`
}

type PutListingsSlugRequestBodyConditionUUIDEnum string

const (
	PutListingsSlugRequestBodyConditionUUIDEnumFbf3566896a04baaBcdeAb18d6b1b329                                                                      PutListingsSlugRequestBodyConditionUUIDEnum = "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
	PutListingsSlugRequestBodyConditionUUIDEnumSixa9dfcad600b46c89e08Ce6e5057921e                                                                    PutListingsSlugRequestBodyConditionUUIDEnum = "6a9dfcad-600b-46c8-9e08-ce6e5057921e"
	PutListingsSlugRequestBodyConditionUUIDEnumNinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934 PutListingsSlugRequestBodyConditionUUIDEnum = "98777886-76d0-44c8-865e-bb40e669e934"
	PutListingsSlugRequestBodyConditionUUIDEnumF7a3f48c972a44c6B01a0cd27488d3f6                                                                      PutListingsSlugRequestBodyConditionUUIDEnum = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6"
	PutListingsSlugRequestBodyConditionUUIDEnumAe4d91141bd74ec5A4ba6653af5ac84d                                                                      PutListingsSlugRequestBodyConditionUUIDEnum = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d"
	PutListingsSlugRequestBodyConditionUUIDEnumDf268ad1C4624ba6B6dbE007e23922ea                                                                      PutListingsSlugRequestBodyConditionUUIDEnum = "df268ad1-c462-4ba6-b6db-e007e23922ea"
	PutListingsSlugRequestBodyConditionUUIDEnumAc5b9c1eDc78466dB0b37cf712967a48                                                                      PutListingsSlugRequestBodyConditionUUIDEnum = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48"
	PutListingsSlugRequestBodyConditionUUIDEnumSixdb7df88293b4017A1c1Cdb5e599fa1a                                                                    PutListingsSlugRequestBodyConditionUUIDEnum = "6db7df88-293b-4017-a1c1-cdb5e599fa1a"
	PutListingsSlugRequestBodyConditionUUIDEnumNineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f           PutListingsSlugRequestBodyConditionUUIDEnum = "9225283f-60c2-4413-ad18-1f5eba7a856f"
	PutListingsSlugRequestBodyConditionUUIDEnumSevenc3f45de2ae04c818400Fdb6b1d74890                                                                  PutListingsSlugRequestBodyConditionUUIDEnum = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
)

type PutListingsSlugRequestBodyCondition struct {
	UUID PutListingsSlugRequestBodyConditionUUIDEnum `json:"uuid"`
}

type PutListingsSlugRequestBodyExclusiveChannelEnum string

const (
	PutListingsSlugRequestBodyExclusiveChannelEnumSellerSite PutListingsSlugRequestBodyExclusiveChannelEnum = "seller_site"
	PutListingsSlugRequestBodyExclusiveChannelEnumReverb     PutListingsSlugRequestBodyExclusiveChannelEnum = "reverb"
	PutListingsSlugRequestBodyExclusiveChannelEnumNone       PutListingsSlugRequestBodyExclusiveChannelEnum = "none"
)

type PutListingsSlugRequestBodyLocation struct {
	CountryCode *string `json:"country_code"`
	Locality    *string `json:"locality"`
	Region      *string `json:"region"`
}

type PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum string

const (
	PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnumDays  PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum = "days"
	PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnumWeeks PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum = "weeks"
)

type PutListingsSlugRequestBodyPreorderInfo struct {
	LeadTime     *int64                                                 `json:"lead_time"`
	LeadTimeUnit PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum `json:"lead_time_unit"`
	ShipDate     *string                                                `json:"ship_date"`
}

type PutListingsSlugRequestBodyPriceCurrencyEnum string

const (
	PutListingsSlugRequestBodyPriceCurrencyEnumUsd PutListingsSlugRequestBodyPriceCurrencyEnum = "USD"
	PutListingsSlugRequestBodyPriceCurrencyEnumCad PutListingsSlugRequestBodyPriceCurrencyEnum = "CAD"
	PutListingsSlugRequestBodyPriceCurrencyEnumEur PutListingsSlugRequestBodyPriceCurrencyEnum = "EUR"
	PutListingsSlugRequestBodyPriceCurrencyEnumGbp PutListingsSlugRequestBodyPriceCurrencyEnum = "GBP"
	PutListingsSlugRequestBodyPriceCurrencyEnumAud PutListingsSlugRequestBodyPriceCurrencyEnum = "AUD"
	PutListingsSlugRequestBodyPriceCurrencyEnumJpy PutListingsSlugRequestBodyPriceCurrencyEnum = "JPY"
	PutListingsSlugRequestBodyPriceCurrencyEnumNzd PutListingsSlugRequestBodyPriceCurrencyEnum = "NZD"
	PutListingsSlugRequestBodyPriceCurrencyEnumMxn PutListingsSlugRequestBodyPriceCurrencyEnum = "MXN"
)

type PutListingsSlugRequestBodyPrice struct {
	Amount   string                                      `json:"amount"`
	Currency PutListingsSlugRequestBodyPriceCurrencyEnum `json:"currency"`
}

type PutListingsSlugRequestBodySeller struct {
	PaypalEmail *string `json:"paypal_email"`
}

type PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum string

const (
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumUsd PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "USD"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumCad PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "CAD"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumEur PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "EUR"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumGbp PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "GBP"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumAud PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "AUD"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumJpy PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "JPY"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumNzd PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "NZD"
	PutListingsSlugRequestBodyShippingRatesRateCurrencyEnumMxn PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = "MXN"
)

type PutListingsSlugRequestBodyShippingRatesRate struct {
	Amount   string                                                  `json:"amount"`
	Currency PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum `json:"currency"`
}

type PutListingsSlugRequestBodyShippingRates struct {
	Rate       *PutListingsSlugRequestBodyShippingRatesRate `json:"rate"`
	RegionCode *string                                      `json:"region_code"`
}

type PutListingsSlugRequestBodyShipping struct {
	Local *bool                                     `json:"local"`
	Rates []PutListingsSlugRequestBodyShippingRates `json:"rates"`
}

type PutListingsSlugRequestBodyVideos struct {
	Link string `json:"link"`
}

type PutListingsSlugRequestBody struct {
	Categories          []PutListingsSlugRequestBodyCategories          `json:"categories"`
	Condition           *PutListingsSlugRequestBodyCondition            `json:"condition"`
	Description         *string                                         `json:"description"`
	ExclusiveChannel    *PutListingsSlugRequestBodyExclusiveChannelEnum `json:"exclusive_channel"`
	Finish              *string                                         `json:"finish"`
	HasInventory        *bool                                           `json:"has_inventory"`
	Inventory           *int64                                          `json:"inventory"`
	Location            *PutListingsSlugRequestBodyLocation             `json:"location"`
	Make                *string                                         `json:"make"`
	Model               *string                                         `json:"model"`
	MultiItem           *bool                                           `json:"multi_item"`
	OffersEnabled       *bool                                           `json:"offers_enabled"`
	OriginCountryCode   *string                                         `json:"origin_country_code"`
	Photos              []string                                        `json:"photos"`
	PreorderInfo        *PutListingsSlugRequestBodyPreorderInfo         `json:"preorder_info"`
	Price               *PutListingsSlugRequestBodyPrice                `json:"price"`
	Prop65Warning       *string                                         `json:"prop_65_warning"`
	Publish             *bool                                           `json:"publish"`
	Seller              *PutListingsSlugRequestBodySeller               `json:"seller"`
	SellerCost          *string                                         `json:"seller_cost"`
	Shipping            *PutListingsSlugRequestBodyShipping             `json:"shipping"`
	ShippingProfileID   *string                                         `json:"shipping_profile_id"`
	ShippingProfileName *string                                         `json:"shipping_profile_name"`
	Sku                 *string                                         `json:"sku"`
	SoldAsIs            *bool                                           `json:"sold_as_is"`
	StorageLocation     *string                                         `json:"storage_location"`
	TaxExempt           *bool                                           `json:"tax_exempt"`
	Title               *string                                         `json:"title"`
	Upc                 *string                                         `json:"upc"`
	UpcDoesNotApply     *bool                                           `json:"upc_does_not_apply"`
	Videos              []PutListingsSlugRequestBodyVideos              `json:"videos"`
	Year                *string                                         `json:"year"`
}

type PutListingsSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutListingsSlugRequest struct {
	PathParams PutListingsSlugPathParams
	Request    *PutListingsSlugRequestBody `request:"mediaType=application/json"`
	Security   PutListingsSlugSecurity
}

type PutListingsSlugResponse struct {
	ContentType string
	StatusCode  int64
}
