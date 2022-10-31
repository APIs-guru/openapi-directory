package shared

import (
	"time"
)

type EnvironmentStateChange struct {
	Environment  *EnvironmentBillingInfo `json:"environment,omitempty"`
	ID           *string                 `json:"id,omitempty"`
	NewValue     *int32                  `json:"newValue,omitempty"`
	OldValue     *int32                  `json:"oldValue,omitempty"`
	PartitionKey *string                 `json:"partitionKey,omitempty"`
	Time         *time.Time              `json:"time,omitempty"`
}
