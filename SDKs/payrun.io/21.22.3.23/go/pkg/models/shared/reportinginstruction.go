package shared

import (
	"time"
)

type ReportingInstructionReportingInstructionReportingInstruction struct {
	EndDate   *time.Time `json:"EndDate,omitempty"`
	StartDate *time.Time `json:"StartDate,omitempty"`
	TaxMonth  *int32     `json:"TaxMonth,omitempty"`
	TaxYear   *int32     `json:"TaxYear,omitempty"`
	Value     *float64   `json:"Value,omitempty"`
}

type ReportingInstruction struct {
	ReportingInstruction *ReportingInstructionReportingInstructionReportingInstruction `json:"ReportingInstruction,omitempty"`
}
