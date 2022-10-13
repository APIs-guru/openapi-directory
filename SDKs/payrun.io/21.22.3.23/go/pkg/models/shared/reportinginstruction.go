package shared

import (
	"time"
)

type ReportingInstructionReportingInstructionReportingInstruction struct {
	EndDate   *time.Time `json:"EndDate"`
	StartDate *time.Time `json:"StartDate"`
	TaxMonth  *int32     `json:"TaxMonth"`
	TaxYear   *int32     `json:"TaxYear"`
	Value     *float64   `json:"Value"`
}

type ReportingInstruction struct {
	ReportingInstruction *ReportingInstructionReportingInstructionReportingInstruction `json:"ReportingInstruction"`
}
