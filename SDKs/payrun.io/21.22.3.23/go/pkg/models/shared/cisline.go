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
	CisDeduction   *float64                                    `json:"CisDeduction"`
	CisLineType    *string                                     `json:"CisLineType"`
	Description    *string                                     `json:"Description"`
	Generated      *time.Time                                  `json:"Generated"`
	GrossPay       *float64                                    `json:"GrossPay"`
	NominalCodeKey *string                                     `json:"NominalCodeKey"`
	PayFrequency   *CisLineCisLinePayFrequencyPayFrequencyEnum `json:"PayFrequency"`
	TaxMonth       *int32                                      `json:"TaxMonth"`
	TaxPeriod      *int32                                      `json:"TaxPeriod"`
	TaxTreatment   *CisLineCisLineTaxTreatmentTaxTreatmentEnum `json:"TaxTreatment"`
	TaxYear        *int32                                      `json:"TaxYear"`
	Uom            *CisLineCisLineUomUomEnum                   `json:"UOM"`
	UnitRate       *float64                                    `json:"UnitRate"`
	Units          *float64                                    `json:"Units"`
	Vat            *float64                                    `json:"VAT"`
}

type CisLine struct {
	CisLine *CisLineCisLineCisLine `json:"CisLine"`
}
