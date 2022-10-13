package shared

import (
	"time"
)

type DutySummaryInfo struct {
	DutyEnd   *time.Time `json:"dutyEnd"`
	DutyID    *string    `json:"dutyId"`
	DutyStart *time.Time `json:"dutyStart"`
}
