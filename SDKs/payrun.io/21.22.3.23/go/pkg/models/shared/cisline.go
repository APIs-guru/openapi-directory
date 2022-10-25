package shared

import (
	"time"
)

type CisLineCisLinePayFrequencyEnum string

const (
	CisLineCisLinePayFrequencyEnumMonthly CisLineCisLinePayFrequencyEnum = "Monthly"
	CisLineCisLinePayFrequencyEnumWeekly  CisLineCisLinePayFrequencyEnum = "Weekly"
)

type CisLineCisLineTaxTreatmentEnum string

const (
	CisLineCisLineTaxTreatmentEnumTaxable    CisLineCisLineTaxTreatmentEnum = "Taxable"
	CisLineCisLineTaxTreatmentEnumNonTaxable CisLineCisLineTaxTreatmentEnum = "NonTaxable"
	CisLineCisLineTaxTreatmentEnumNotional   CisLineCisLineTaxTreatmentEnum = "Notional"
	CisLineCisLineTaxTreatmentEnumMaterials  CisLineCisLineTaxTreatmentEnum = "Materials"
)

type CisLineCisLineUomEnum string

const (
	CisLineCisLineUomEnumNotSet CisLineCisLineUomEnum = "NotSet"
	CisLineCisLineUomEnumMinute CisLineCisLineUomEnum = "Minute"
	CisLineCisLineUomEnumHour   CisLineCisLineUomEnum = "Hour"
	CisLineCisLineUomEnumDay    CisLineCisLineUomEnum = "Day"
	CisLineCisLineUomEnumWeek   CisLineCisLineUomEnum = "Week"
	CisLineCisLineUomEnumMonth  CisLineCisLineUomEnum = "Month"
	CisLineCisLineUomEnumYear   CisLineCisLineUomEnum = "Year"
	CisLineCisLineUomEnumUnit   CisLineCisLineUomEnum = "Unit"
)

type CisLineCisLine struct {
	CisDeduction   *float64                        `json:"CisDeduction,omitempty"`
	CisLineType    *string                         `json:"CisLineType,omitempty"`
	Description    *string                         `json:"Description,omitempty"`
	Generated      *time.Time                      `json:"Generated,omitempty"`
	GrossPay       *float64                        `json:"GrossPay,omitempty"`
	NominalCodeKey *string                         `json:"NominalCodeKey,omitempty"`
	PayFrequency   *CisLineCisLinePayFrequencyEnum `json:"PayFrequency,omitempty"`
	TaxMonth       *int32                          `json:"TaxMonth,omitempty"`
	TaxPeriod      *int32                          `json:"TaxPeriod,omitempty"`
	TaxTreatment   *CisLineCisLineTaxTreatmentEnum `json:"TaxTreatment,omitempty"`
	TaxYear        *int32                          `json:"TaxYear,omitempty"`
	Uom            *CisLineCisLineUomEnum          `json:"UOM,omitempty"`
	UnitRate       *float64                        `json:"UnitRate,omitempty"`
	Units          *float64                        `json:"Units,omitempty"`
	Vat            *float64                        `json:"VAT,omitempty"`
}

type CisLine struct {
	CisLine *CisLineCisLine `json:"CisLine,omitempty"`
}
