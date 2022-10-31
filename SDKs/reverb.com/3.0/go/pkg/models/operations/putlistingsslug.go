package operations

import (
"openapi/pkg/models/shared")

type PutListingsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type PutListingsSlugRequestBodyCategories struct {
    UUID *string `json:"uuid,omitempty"`
    
}


type PutListingsSlugRequestBodyConditionUUIDEnum string

const (
    PutListingsSlugRequestBodyConditionUUIDEnumFbf3566896a04baaBcdeAb18d6b1b329 PutListingsSlugRequestBodyConditionUUIDEnum = "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
PutListingsSlugRequestBodyConditionUUIDEnumSixa9dfcad600b46c89e08Ce6e5057921e PutListingsSlugRequestBodyConditionUUIDEnum = "6a9dfcad-600b-46c8-9e08-ce6e5057921e"
PutListingsSlugRequestBodyConditionUUIDEnumNinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934 PutListingsSlugRequestBodyConditionUUIDEnum = "98777886-76d0-44c8-865e-bb40e669e934"
PutListingsSlugRequestBodyConditionUUIDEnumF7a3f48c972a44c6B01a0cd27488d3f6 PutListingsSlugRequestBodyConditionUUIDEnum = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6"
PutListingsSlugRequestBodyConditionUUIDEnumAe4d91141bd74ec5A4ba6653af5ac84d PutListingsSlugRequestBodyConditionUUIDEnum = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d"
PutListingsSlugRequestBodyConditionUUIDEnumDf268ad1C4624ba6B6dbE007e23922ea PutListingsSlugRequestBodyConditionUUIDEnum = "df268ad1-c462-4ba6-b6db-e007e23922ea"
PutListingsSlugRequestBodyConditionUUIDEnumAc5b9c1eDc78466dB0b37cf712967a48 PutListingsSlugRequestBodyConditionUUIDEnum = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48"
PutListingsSlugRequestBodyConditionUUIDEnumSixdb7df88293b4017A1c1Cdb5e599fa1a PutListingsSlugRequestBodyConditionUUIDEnum = "6db7df88-293b-4017-a1c1-cdb5e599fa1a"
PutListingsSlugRequestBodyConditionUUIDEnumNineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f PutListingsSlugRequestBodyConditionUUIDEnum = "9225283f-60c2-4413-ad18-1f5eba7a856f"
PutListingsSlugRequestBodyConditionUUIDEnumSevenc3f45de2ae04c818400Fdb6b1d74890 PutListingsSlugRequestBodyConditionUUIDEnum = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
)


type PutListingsSlugRequestBodyCondition struct {
    UUID PutListingsSlugRequestBodyConditionUUIDEnum `json:"uuid"`
    
}


type PutListingsSlugRequestBodyExclusiveChannelEnum string

const (
    PutListingsSlugRequestBodyExclusiveChannelEnumSellerSite PutListingsSlugRequestBodyExclusiveChannelEnum = "seller_site"
PutListingsSlugRequestBodyExclusiveChannelEnumReverb PutListingsSlugRequestBodyExclusiveChannelEnum = "reverb"
PutListingsSlugRequestBodyExclusiveChannelEnumNone PutListingsSlugRequestBodyExclusiveChannelEnum = "none"
)


type PutListingsSlugRequestBodyLocation struct {
    CountryCode *string `json:"country_code,omitempty"`
    Locality *string `json:"locality,omitempty"`
    Region *string `json:"region,omitempty"`
    
}


type PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum string

const (
    PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnumDays PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum = "days"
PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnumWeeks PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum = "weeks"
)


type PutListingsSlugRequestBodyPreorderInfo struct {
    LeadTime *int64 `json:"lead_time,omitempty"`
    LeadTimeUnit PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum `json:"lead_time_unit"`
    ShipDate *string `json:"ship_date,omitempty"`
    
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
    Amount string `json:"amount"`
    Currency PutListingsSlugRequestBodyPriceCurrencyEnum `json:"currency"`
    
}

type PutListingsSlugRequestBodySeller struct {
    PaypalEmail *string `json:"paypal_email,omitempty"`
    
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
    Amount string `json:"amount"`
    Currency PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum `json:"currency"`
    
}

type PutListingsSlugRequestBodyShippingRates struct {
    Rate *PutListingsSlugRequestBodyShippingRatesRate `json:"rate,omitempty"`
    RegionCode *string `json:"region_code,omitempty"`
    
}

type PutListingsSlugRequestBodyShipping struct {
    Local *bool `json:"local,omitempty"`
    Rates []PutListingsSlugRequestBodyShippingRates `json:"rates,omitempty"`
    
}

type PutListingsSlugRequestBodyVideos struct {
    Link string `json:"link"`
    
}

type PutListingsSlugRequestBody struct {
    Categories []PutListingsSlugRequestBodyCategories `json:"categories,omitempty"`
    Condition *PutListingsSlugRequestBodyCondition `json:"condition,omitempty"`
    Description *string `json:"description,omitempty"`
    ExclusiveChannel *PutListingsSlugRequestBodyExclusiveChannelEnum `json:"exclusive_channel,omitempty"`
    Finish *string `json:"finish,omitempty"`
    HasInventory *bool `json:"has_inventory,omitempty"`
    Inventory *int64 `json:"inventory,omitempty"`
    Location *PutListingsSlugRequestBodyLocation `json:"location,omitempty"`
    Make *string `json:"make,omitempty"`
    Model *string `json:"model,omitempty"`
    MultiItem *bool `json:"multi_item,omitempty"`
    OffersEnabled *bool `json:"offers_enabled,omitempty"`
    OriginCountryCode *string `json:"origin_country_code,omitempty"`
    Photos []string `json:"photos,omitempty"`
    PreorderInfo *PutListingsSlugRequestBodyPreorderInfo `json:"preorder_info,omitempty"`
    Price *PutListingsSlugRequestBodyPrice `json:"price,omitempty"`
    Prop65Warning *string `json:"prop_65_warning,omitempty"`
    Publish *bool `json:"publish,omitempty"`
    Seller *PutListingsSlugRequestBodySeller `json:"seller,omitempty"`
    SellerCost *string `json:"seller_cost,omitempty"`
    Shipping *PutListingsSlugRequestBodyShipping `json:"shipping,omitempty"`
    ShippingProfileID *string `json:"shipping_profile_id,omitempty"`
    ShippingProfileName *string `json:"shipping_profile_name,omitempty"`
    Sku *string `json:"sku,omitempty"`
    SoldAsIs *bool `json:"sold_as_is,omitempty"`
    StorageLocation *string `json:"storage_location,omitempty"`
    TaxExempt *bool `json:"tax_exempt,omitempty"`
    Title *string `json:"title,omitempty"`
    Upc *string `json:"upc,omitempty"`
    UpcDoesNotApply *bool `json:"upc_does_not_apply,omitempty"`
    Videos []PutListingsSlugRequestBodyVideos `json:"videos,omitempty"`
    Year *string `json:"year,omitempty"`
    
}

type PutListingsSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutListingsSlugRequest struct {
    PathParams PutListingsSlugPathParams 
    Request *PutListingsSlugRequestBody `request:"mediaType=application/json"`
    Security PutListingsSlugSecurity 
    
}

type PutListingsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

