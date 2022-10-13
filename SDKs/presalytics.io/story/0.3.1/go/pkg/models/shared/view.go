package shared

import (
	"time"
)

type View struct {
	ActiveMsecs *int64     `json:"active_msecs"`
	Additional  *string    `json:"additional"`
	CreatedAt   *time.Time `json:"created_at"`
	CreatedBy   *string    `json:"created_by"`
	EndTime     *time.Time `json:"end_time"`
	ID          *string    `json:"id"`
	PageNumber  *int64     `json:"page_number"`
	SessionID   *string    `json:"session_id"`
	StartTime   *time.Time `json:"start_time"`
	TotalMsecs  *int64     `json:"total_msecs"`
	UpdatedAt   *time.Time `json:"updated_at"`
	UpdatedBy   *string    `json:"updated_by"`
}
