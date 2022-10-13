package shared

import (
	"time"
)

type DeviceInPast struct {
	CounterReading         *float64   `json:"CounterReading"`
	CounterReadingExport   *float64   `json:"CounterReadingExport"`
	CounterReadingExportT1 *float64   `json:"CounterReadingExportT1"`
	CounterReadingExportT2 *float64   `json:"CounterReadingExportT2"`
	CounterReadingExportT3 *float64   `json:"CounterReadingExportT3"`
	CounterReadingExportT4 *float64   `json:"CounterReadingExportT4"`
	CounterReadingImport   *float64   `json:"CounterReadingImport"`
	CounterReadingImportT1 *float64   `json:"CounterReadingImportT1"`
	CounterReadingImportT2 *float64   `json:"CounterReadingImportT2"`
	CounterReadingImportT3 *float64   `json:"CounterReadingImportT3"`
	CounterReadingImportT4 *float64   `json:"CounterReadingImportT4"`
	CounterReadingT1       *float64   `json:"CounterReadingT1"`
	CounterReadingT2       *float64   `json:"CounterReadingT2"`
	CounterReadingT3       *float64   `json:"CounterReadingT3"`
	CounterReadingT4       *float64   `json:"CounterReadingT4"`
	CounterReadingUnit     *string    `json:"CounterReadingUnit"`
	Date                   *time.Time `json:"Date"`
	ID                     *string    `json:"Id"`
	Serial                 *int64     `json:"Serial"`
}
