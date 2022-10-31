package shared

import (
	"time"
)

type Alert struct {
	AlertID   *string    `json:"alert_id,omitempty"`
	LastSent  *time.Time `json:"last_sent,omitempty"`
	Search    *string    `json:"search,omitempty"`
	SendCount *int64     `json:"send_count,omitempty"`
	Types     []string   `json:"types,omitempty"`
	UserID    *string    `json:"user_id,omitempty"`
}
