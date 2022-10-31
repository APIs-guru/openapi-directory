package shared

import (
	"time"
)

type DailyReportViewModel struct {
	Date          *time.Time     `json:"date,omitempty"`
	FileSizeBytes *int64         `json:"fileSizeBytes,omitempty"`
	House         *HouseEnumEnum `json:"house,omitempty"`
	URL           *string        `json:"url,omitempty"`
}
