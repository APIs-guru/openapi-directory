package shared

import (
	"time"
)

type AlertHistoryInfoEntry struct {
	ID        *string    `json:"id"`
	Timestamp *time.Time `json:"timestamp"`
	Type      *int32     `json:"type"`
	UserID    *string    `json:"userId"`
}
