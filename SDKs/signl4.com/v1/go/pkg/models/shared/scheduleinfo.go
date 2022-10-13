package shared

import (
	"time"
)

type ScheduleInfo struct {
	End     *time.Time `json:"end"`
	ID      *string    `json:"id"`
	Options *int32     `json:"options"`
	Start   *time.Time `json:"start"`
	UserID  *string    `json:"userId"`
}
