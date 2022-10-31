package shared

import (
	"time"
)

type DutySummaryInfo struct {
	DutyEnd   *time.Time `json:"dutyEnd,omitempty"`
	DutyID    *string    `json:"dutyId,omitempty"`
	DutyStart *time.Time `json:"dutyStart,omitempty"`
}
