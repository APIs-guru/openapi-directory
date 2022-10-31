package shared

import (
"time")

type PayCodePayCodeNominalCode struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}


type PayCodePayCodeRegionEnum string

const (
    PayCodePayCodeRegionEnumNotSet PayCodePayCodeRegionEnum = "NotSet"
PayCodePayCodeRegionEnumEngland PayCodePayCodeRegionEnum = "England"
PayCodePayCodeRegionEnumScotland PayCodePayCodeRegionEnum = "Scotland"
PayCodePayCodeRegionEnumWales PayCodePayCodeRegionEnum = "Wales"
)



type PayCodePayCodeTerritoryEnum string

const (
    PayCodePayCodeTerritoryEnumUnitedKingdom PayCodePayCodeTerritoryEnum = "UnitedKingdom"
)



type PayCodePayCodeTypeEnum string

const (
    PayCodePayCodeTypeEnumNotSet PayCodePayCodeTypeEnum = "NotSet"
PayCodePayCodeTypeEnumPayment PayCodePayCodeTypeEnum = "Payment"
PayCodePayCodeTypeEnumDeduction PayCodePayCodeTypeEnum = "Deduction"
)


type PayCodePayCode struct {
    Benefit *bool `json:"Benefit,omitempty"`
    Code *string `json:"Code,omitempty"`
    Description *string `json:"Description,omitempty"`
    EffectiveDate *time.Time `json:"EffectiveDate,omitempty"`
    MetaData map[string]interface{} `json:"MetaData,omitempty"`
    Niable *bool `json:"Niable,omitempty"`
    NominalCode *PayCodePayCodeNominalCode `json:"NominalCode,omitempty"`
    NonArrestable *bool `json:"NonArrestable,omitempty"`
    Notional *bool `json:"Notional,omitempty"`
    Readonly *bool `json:"Readonly,omitempty"`
    Region *PayCodePayCodeRegionEnum `json:"Region,omitempty"`
    Revision *int32 `json:"Revision,omitempty"`
    Taxable *bool `json:"Taxable,omitempty"`
    Territory *PayCodePayCodeTerritoryEnum `json:"Territory,omitempty"`
    Type *PayCodePayCodeTypeEnum `json:"Type,omitempty"`
    
}

type PayCode struct {
    PayCode *PayCodePayCode `json:"PayCode,omitempty"`
    
}

