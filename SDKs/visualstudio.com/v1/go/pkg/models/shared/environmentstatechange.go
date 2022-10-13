package shared

import (
	"time"
)

type EnvironmentStateChange struct {
	Environment  *EnvironmentBillingInfo `json:"environment"`
	ID           *string                 `json:"id"`
	NewValue     *int32                  `json:"newValue"`
	OldValue     *int32                  `json:"oldValue"`
	PartitionKey *string                 `json:"partitionKey"`
	Time         *time.Time              `json:"time"`
}
