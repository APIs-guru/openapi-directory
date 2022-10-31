package shared

import (
	"time"
)

type ScheduleInfo struct {
	End     *time.Time `json:"end,omitempty"`
	ID      *string    `json:"id,omitempty"`
	Options *int32     `json:"options,omitempty"`
	Start   *time.Time `json:"start,omitempty"`
	UserID  *string    `json:"userId,omitempty"`
}
