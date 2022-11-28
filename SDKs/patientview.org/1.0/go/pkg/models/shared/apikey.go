package shared

import (
	"time"
)

type APIKey struct {
	Expired    *bool
	ExpiryDate *time.Time
	Key        *string
}
