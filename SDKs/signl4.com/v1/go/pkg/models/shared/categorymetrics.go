package shared

import (
	"time"
)

type CategoryMetrics struct {
	CategoryID      *string    `json:"categoryId,omitempty"`
	Last24Hours     *int64     `json:"last24Hours,omitempty"`
	LastAlert       *time.Time `json:"lastAlert,omitempty"`
	SubscriberCount *int32     `json:"subscriberCount,omitempty"`
}
