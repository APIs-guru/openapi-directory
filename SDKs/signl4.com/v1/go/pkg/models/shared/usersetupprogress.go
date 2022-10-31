package shared

import (
	"time"
)

type UserSetupProgress struct {
	CompletedSteps []string   `json:"completedSteps,omitempty"`
	Timestamp      *time.Time `json:"timestamp,omitempty"`
	UserID         *string    `json:"userId,omitempty"`
}
