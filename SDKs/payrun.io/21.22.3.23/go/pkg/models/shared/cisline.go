package shared

import (
	"time"
)

type CisLineCisLinePayFrequencyPayFrequencyEnum string

const (
	CisLineCisLinePayFrequencyPayFrequencyEnumMonthly CisLineCisLinePayFrequencyPayFrequencyEnum = "Monthly"
	CisLineCisLinePayFrequencyPayFrequencyEnumWeekly  CisLineCisLinePayFrequencyPayFrequencyEnum = "Weekly"
)

type CisLineCisLineTaxTreatmentTaxTreatmentEnum string

const (
	CisLineCisLineTaxTreatmentTaxTreatmentEnumTaxable    CisLineCisLineTaxTreatmentTaxTreatmentEnum = "Taxable"
	CisLineCisLineTaxTreatmentTaxTreatmentEnumNonTaxable CisLineCisLineTaxTreatmentTaxTreatmentEnum = "NonTaxable"
	CisLineCisLineTaxTreatmentTaxTreatmentEnumNotional   CisLineCisLineTaxTreatmentTaxTreatmentEnum = "Notional"
	CisLineCisLineTaxTreatmentTaxTreatmentEnumMaterials  CisLineCisLineTaxTreatmentTaxTreatmentEnum = "Materials"
)

type CisLineCisLineUomUomEnum string

const (
	CisLineCisLineUomUomEnumNotSet CisLineCisLineUomUomEnum = "NotSet"
	CisLineCisLineUomUomEnumMinute CisLineCisLineUomUomEnum = "Minute"
	CisLineCisLineUomUomEnumHour   CisLineCisLineUomUomEnum = "Hour"
	CisLineCisLineUomUomEnumDay    CisLineCisLineUomUomEnum = "Day"
	CisLineCisLineUomUomEnumWeek   CisLineCisLineUomUomEnum = "Week"
	CisLineCisLineUomUomEnumMonth  CisLineCisLineUomUomEnum = "Month"
	CisLineCisLineUomUomEnumYear   CisLineCisLineUomUomEnum = "Year"
	CisLineCisLineUomUomEnumUnit   CisLineCisLineUomUomEnum = "Unit"
)

type CisLineCisLineCisLine struct {
	CisDeduction   *float64                                    `json:"CisDeduction,omitempty"`
	CisLineType    *string                                     `json:"CisLineType,omitempty"`
	Description    *string                                     `json:"Description,omitempty"`
	Generated      *time.Time                                  `json:"Generated,omitempty"`
	GrossPay       *float64                                    `json:"GrossPay,omitempty"`
	NominalCodeKey *string                                     `json:"NominalCodeKey,omitempty"`
	PayFrequency   *CisLineCisLinePayFrequencyPayFrequencyEnum `json:"PayFrequency,omitempty"`
	TaxMonth       *int32                                      `json:"TaxMonth,omitempty"`
	TaxPeriod      *int32                                      `json:"TaxPeriod,omitempty"`
	TaxTreatment   *CisLineCisLineTaxTreatmentTaxTreatmentEnum `json:"TaxTreatment,omitempty"`
	TaxYear        *int32                                      `json:"TaxYear,omitempty"`
	Uom            *CisLineCisLineUomUomEnum                   `json:"UOM,omitempty"`
	UnitRate       *float64                                    `json:"UnitRate,omitempty"`
	Units          *float64                                    `json:"Units,omitempty"`
	Vat            *float64                                    `json:"VAT,omitempty"`
}

type CisLine struct {
	CisLine *CisLineCisLineCisLine `json:"CisLine,omitempty"`
}
