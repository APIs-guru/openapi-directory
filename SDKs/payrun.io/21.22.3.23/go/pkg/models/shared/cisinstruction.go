package shared

type CisInstructionCisInstructionPayFrequencyPayFrequencyEnum string

const (
	CisInstructionCisInstructionPayFrequencyPayFrequencyEnumMonthly CisInstructionCisInstructionPayFrequencyPayFrequencyEnum = "Monthly"
	CisInstructionCisInstructionPayFrequencyPayFrequencyEnumWeekly  CisInstructionCisInstructionPayFrequencyPayFrequencyEnum = "Weekly"
)

type CisInstructionCisInstructionUomUomEnum string

const (
	CisInstructionCisInstructionUomUomEnumNotSet CisInstructionCisInstructionUomUomEnum = "NotSet"
	CisInstructionCisInstructionUomUomEnumMinute CisInstructionCisInstructionUomUomEnum = "Minute"
	CisInstructionCisInstructionUomUomEnumHour   CisInstructionCisInstructionUomUomEnum = "Hour"
	CisInstructionCisInstructionUomUomEnumDay    CisInstructionCisInstructionUomUomEnum = "Day"
	CisInstructionCisInstructionUomUomEnumWeek   CisInstructionCisInstructionUomUomEnum = "Week"
	CisInstructionCisInstructionUomUomEnumMonth  CisInstructionCisInstructionUomUomEnum = "Month"
	CisInstructionCisInstructionUomUomEnumYear   CisInstructionCisInstructionUomUomEnum = "Year"
	CisInstructionCisInstructionUomUomEnumUnit   CisInstructionCisInstructionUomUomEnum = "Unit"
)

type CisInstructionCisInstructionCisInstruction struct {
	CisLineTag   *string                                                   `json:"CisLineTag,omitempty"`
	CisLineType  *string                                                   `json:"CisLineType,omitempty"`
	Description  *string                                                   `json:"Description,omitempty"`
	PayFrequency *CisInstructionCisInstructionPayFrequencyPayFrequencyEnum `json:"PayFrequency,omitempty"`
	PeriodEnd    *int32                                                    `json:"PeriodEnd,omitempty"`
	PeriodStart  *int32                                                    `json:"PeriodStart,omitempty"`
	TaxYearEnd   *int32                                                    `json:"TaxYearEnd,omitempty"`
	TaxYearStart *int32                                                    `json:"TaxYearStart,omitempty"`
	Uom          *CisInstructionCisInstructionUomUomEnum                   `json:"UOM,omitempty"`
	Units        *float64                                                  `json:"Units,omitempty"`
	Vat          *float64                                                  `json:"VAT,omitempty"`
	Value        *float64                                                  `json:"Value,omitempty"`
}

type CisInstruction struct {
	CisInstruction *CisInstructionCisInstructionCisInstruction `json:"CisInstruction,omitempty"`
}
