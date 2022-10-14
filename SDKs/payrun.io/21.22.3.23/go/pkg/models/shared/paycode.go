package shared

import (
	"time"
)

type PayCodePayCodeNominalCodeNominalCode struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
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
	Benefit       *bool                                 `json:"Benefit,omitempty"`
	Code          *string                               `json:"Code,omitempty"`
	Description   *string                               `json:"Description,omitempty"`
	EffectiveDate *time.Time                            `json:"EffectiveDate,omitempty"`
	MetaData      map[string]interface{}                `json:"MetaData,omitempty"`
	Niable        *bool                                 `json:"Niable,omitempty"`
	NominalCode   *PayCodePayCodeNominalCodeNominalCode `json:"NominalCode,omitempty"`
	NonArrestable *bool                                 `json:"NonArrestable,omitempty"`
	Notional      *bool                                 `json:"Notional,omitempty"`
	Readonly      *bool                                 `json:"Readonly,omitempty"`
	Region        *PayCodePayCodeRegionRegionEnum       `json:"Region,omitempty"`
	Revision      *int32                                `json:"Revision,omitempty"`
	Taxable       *bool                                 `json:"Taxable,omitempty"`
	Territory     *PayCodePayCodeTerritoryTerritoryEnum `json:"Territory,omitempty"`
	Type          *PayCodePayCodeTypeTypeEnum           `json:"Type,omitempty"`
}

type PayCode struct {
	PayCode *PayCodePayCodePayCode `json:"PayCode,omitempty"`
}
