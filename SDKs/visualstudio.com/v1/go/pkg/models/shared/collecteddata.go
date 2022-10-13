package shared

import (
	"time"
)

type CollectedData struct {
	EnvironmentID    *string    `json:"environmentId"`
	Name             *string    `json:"name"`
	ParentActivityID *string    `json:"parentActivityId"`
	Timestamp        *time.Time `json:"timestamp"`
}
