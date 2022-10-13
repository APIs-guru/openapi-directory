package shared

import (
	"time"
)

type LogRestAPIGetList struct {
	Action      *string    `json:"action"`
	DashboardID *int32     `json:"dashboard_id"`
	Dttm        *time.Time `json:"dttm"`
	DurationMs  *int32     `json:"duration_ms"`
	JSON        *string    `json:"json"`
	Referrer    *string    `json:"referrer"`
	SliceID     *int32     `json:"slice_id"`
	User        *Meta42    `json:"user"`
	UserID      *int32     `json:"user_id"`
}
