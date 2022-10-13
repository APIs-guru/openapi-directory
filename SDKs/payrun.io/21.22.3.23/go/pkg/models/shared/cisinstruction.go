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
	CisLineTag   *string                                                   `json:"CisLineTag"`
	CisLineType  *string                                                   `json:"CisLineType"`
	Description  *string                                                   `json:"Description"`
	PayFrequency *CisInstructionCisInstructionPayFrequencyPayFrequencyEnum `json:"PayFrequency"`
	PeriodEnd    *int32                                                    `json:"PeriodEnd"`
	PeriodStart  *int32                                                    `json:"PeriodStart"`
	TaxYearEnd   *int32                                                    `json:"TaxYearEnd"`
	TaxYearStart *int32                                                    `json:"TaxYearStart"`
	Uom          *CisInstructionCisInstructionUomUomEnum                   `json:"UOM"`
	Units        *float64                                                  `json:"Units"`
	Vat          *float64                                                  `json:"VAT"`
	Value        *float64                                                  `json:"Value"`
}

type CisInstruction struct {
	CisInstruction *CisInstructionCisInstructionCisInstruction `json:"CisInstruction"`
}
