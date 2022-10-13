package shared

import (
	"time"
)

type CategoryMetrics struct {
	CategoryID      *string    `json:"categoryId"`
	Last24Hours     *int64     `json:"last24Hours"`
	LastAlert       *time.Time `json:"lastAlert"`
	SubscriberCount *int32     `json:"subscriberCount"`
}
