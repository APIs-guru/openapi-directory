package shared

import (
	"time"
)

type Alert struct {
	AlertID   *string    `json:"alert_id"`
	LastSent  *time.Time `json:"last_sent"`
	Search    *string    `json:"search"`
	SendCount *int64     `json:"send_count"`
	Types     []string   `json:"types"`
	UserID    *string    `json:"user_id"`
}
