package shared

import (
	"time"
)

type AlertCounts struct {
	Acked        *int64     `json:"acked"`
	Closed       *int64     `json:"closed"`
	End          *time.Time `json:"end"`
	LastModified *time.Time `json:"lastModified"`
	Start        *time.Time `json:"start"`
	Unhandled    *int64     `json:"unhandled"`
}
