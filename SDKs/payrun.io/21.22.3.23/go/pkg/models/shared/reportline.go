package shared

import (
"time")

type ReportLineReportLine struct {
    Description *string `json:"Description,omitempty"`
    Generated *time.Time `json:"Generated,omitempty"`
    TaxMonth *int32 `json:"TaxMonth,omitempty"`
    TaxYear *int32 `json:"TaxYear,omitempty"`
    Value *float64 `json:"Value,omitempty"`
    
}

type ReportLine struct {
    ReportLine *ReportLineReportLine `json:"ReportLine,omitempty"`
    
}

