package shared

import (
	"time"
)

// View
// A Page view within a session-create
type View struct {
	ActiveMsecs *int64     `json:"active_msecs,omitempty"`
	Additional  *string    `json:"additional,omitempty"`
	CreatedAt   *time.Time `json:"created_at,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	EndTime     *time.Time `json:"end_time,omitempty"`
	ID          *string    `json:"id,omitempty"`
	PageNumber  *int64     `json:"page_number,omitempty"`
	SessionID   *string    `json:"session_id,omitempty"`
	StartTime   *time.Time `json:"start_time,omitempty"`
	TotalMsecs  *int64     `json:"total_msecs,omitempty"`
	UpdatedAt   *time.Time `json:"updated_at,omitempty"`
	UpdatedBy   *string    `json:"updated_by,omitempty"`
}
