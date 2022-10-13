package shared

import (
	"time"
)

type ReportLineReportLineReportLine struct {
	Description *string    `json:"Description"`
	Generated   *time.Time `json:"Generated"`
	TaxMonth    *int32     `json:"TaxMonth"`
	TaxYear     *int32     `json:"TaxYear"`
	Value       *float64   `json:"Value"`
}

type ReportLine struct {
	ReportLine *ReportLineReportLineReportLine `json:"ReportLine"`
}
