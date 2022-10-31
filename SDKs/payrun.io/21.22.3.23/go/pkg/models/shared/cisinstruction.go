package shared




type CisInstructionCisInstructionPayFrequencyEnum string

const (
    CisInstructionCisInstructionPayFrequencyEnumMonthly CisInstructionCisInstructionPayFrequencyEnum = "Monthly"
CisInstructionCisInstructionPayFrequencyEnumWeekly CisInstructionCisInstructionPayFrequencyEnum = "Weekly"
)



type CisInstructionCisInstructionUomEnum string

const (
    CisInstructionCisInstructionUomEnumNotSet CisInstructionCisInstructionUomEnum = "NotSet"
CisInstructionCisInstructionUomEnumMinute CisInstructionCisInstructionUomEnum = "Minute"
CisInstructionCisInstructionUomEnumHour CisInstructionCisInstructionUomEnum = "Hour"
CisInstructionCisInstructionUomEnumDay CisInstructionCisInstructionUomEnum = "Day"
CisInstructionCisInstructionUomEnumWeek CisInstructionCisInstructionUomEnum = "Week"
CisInstructionCisInstructionUomEnumMonth CisInstructionCisInstructionUomEnum = "Month"
CisInstructionCisInstructionUomEnumYear CisInstructionCisInstructionUomEnum = "Year"
CisInstructionCisInstructionUomEnumUnit CisInstructionCisInstructionUomEnum = "Unit"
)


type CisInstructionCisInstruction struct {
    CisLineTag *string `json:"CisLineTag,omitempty"`
    CisLineType *string `json:"CisLineType,omitempty"`
    Description *string `json:"Description,omitempty"`
    PayFrequency *CisInstructionCisInstructionPayFrequencyEnum `json:"PayFrequency,omitempty"`
    PeriodEnd *int32 `json:"PeriodEnd,omitempty"`
    PeriodStart *int32 `json:"PeriodStart,omitempty"`
    TaxYearEnd *int32 `json:"TaxYearEnd,omitempty"`
    TaxYearStart *int32 `json:"TaxYearStart,omitempty"`
    Uom *CisInstructionCisInstructionUomEnum `json:"UOM,omitempty"`
    Units *float64 `json:"Units,omitempty"`
    Vat *float64 `json:"VAT,omitempty"`
    Value *float64 `json:"Value,omitempty"`
    
}

type CisInstruction struct {
    CisInstruction *CisInstructionCisInstruction `json:"CisInstruction,omitempty"`
    
}

