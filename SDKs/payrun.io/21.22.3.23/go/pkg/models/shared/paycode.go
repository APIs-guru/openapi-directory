package shared

import (
	"time"
)

type PayCodePayCodeNominalCodeNominalCode struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type PayCodePayCodeRegionRegionEnum string

const (
	PayCodePayCodeRegionRegionEnumNotSet   PayCodePayCodeRegionRegionEnum = "NotSet"
	PayCodePayCodeRegionRegionEnumEngland  PayCodePayCodeRegionRegionEnum = "England"
	PayCodePayCodeRegionRegionEnumScotland PayCodePayCodeRegionRegionEnum = "Scotland"
	PayCodePayCodeRegionRegionEnumWales    PayCodePayCodeRegionRegionEnum = "Wales"
)

type PayCodePayCodeTerritoryTerritoryEnum string

const (
	PayCodePayCodeTerritoryTerritoryEnumUnitedKingdom PayCodePayCodeTerritoryTerritoryEnum = "UnitedKingdom"
)

type PayCodePayCodeTypeTypeEnum string

const (
	PayCodePayCodeTypeTypeEnumNotSet    PayCodePayCodeTypeTypeEnum = "NotSet"
	PayCodePayCodeTypeTypeEnumPayment   PayCodePayCodeTypeTypeEnum = "Payment"
	PayCodePayCodeTypeTypeEnumDeduction PayCodePayCodeTypeTypeEnum = "Deduction"
)

type PayCodePayCodePayCode struct {
	Benefit       *bool                                 `json:"Benefit"`
	Code          *string                               `json:"Code"`
	Description   *string                               `json:"Description"`
	EffectiveDate *time.Time                            `json:"EffectiveDate"`
	MetaData      map[string]interface{}                `json:"MetaData"`
	Niable        *bool                                 `json:"Niable"`
	NominalCode   *PayCodePayCodeNominalCodeNominalCode `json:"NominalCode"`
	NonArrestable *bool                                 `json:"NonArrestable"`
	Notional      *bool                                 `json:"Notional"`
	Readonly      *bool                                 `json:"Readonly"`
	Region        *PayCodePayCodeRegionRegionEnum       `json:"Region"`
	Revision      *int32                                `json:"Revision"`
	Taxable       *bool                                 `json:"Taxable"`
	Territory     *PayCodePayCodeTerritoryTerritoryEnum `json:"Territory"`
	Type          *PayCodePayCodeTypeTypeEnum           `json:"Type"`
}

type PayCode struct {
	PayCode *PayCodePayCodePayCode `json:"PayCode"`
}
