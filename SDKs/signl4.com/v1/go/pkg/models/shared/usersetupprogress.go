package shared

import (
	"time"
)

type UserSetupProgress struct {
	CompletedSteps []string   `json:"completedSteps"`
	Timestamp      *time.Time `json:"timestamp"`
	UserID         *string    `json:"userId"`
}
