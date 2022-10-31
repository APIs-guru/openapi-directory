package shared

import (
"time")

type DeviceInPast struct {
    CounterReading *float64 `json:"CounterReading,omitempty"`
    CounterReadingExport *float64 `json:"CounterReadingExport,omitempty"`
    CounterReadingExportT1 *float64 `json:"CounterReadingExportT1,omitempty"`
    CounterReadingExportT2 *float64 `json:"CounterReadingExportT2,omitempty"`
    CounterReadingExportT3 *float64 `json:"CounterReadingExportT3,omitempty"`
    CounterReadingExportT4 *float64 `json:"CounterReadingExportT4,omitempty"`
    CounterReadingImport *float64 `json:"CounterReadingImport,omitempty"`
    CounterReadingImportT1 *float64 `json:"CounterReadingImportT1,omitempty"`
    CounterReadingImportT2 *float64 `json:"CounterReadingImportT2,omitempty"`
    CounterReadingImportT3 *float64 `json:"CounterReadingImportT3,omitempty"`
    CounterReadingImportT4 *float64 `json:"CounterReadingImportT4,omitempty"`
    CounterReadingT1 *float64 `json:"CounterReadingT1,omitempty"`
    CounterReadingT2 *float64 `json:"CounterReadingT2,omitempty"`
    CounterReadingT3 *float64 `json:"CounterReadingT3,omitempty"`
    CounterReadingT4 *float64 `json:"CounterReadingT4,omitempty"`
    CounterReadingUnit *string `json:"CounterReadingUnit,omitempty"`
    Date *time.Time `json:"Date,omitempty"`
    ID *string `json:"Id,omitempty"`
    Serial *int64 `json:"Serial,omitempty"`
    
}

