package shared

import (
	"time"
)

type DailyReportViewModel struct {
	Date          *time.Time     `json:"date"`
	FileSizeBytes *int64         `json:"fileSizeBytes"`
	House         *HouseEnumEnum `json:"house"`
	URL           *string        `json:"url"`
}
