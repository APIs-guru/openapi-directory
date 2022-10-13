package shared

import (
	"time"
)

type TeamSetupProgress struct {
	CompletedSteps []string   `json:"completedSteps"`
	TeamID         *string    `json:"teamId"`
	Timestamp      *time.Time `json:"timestamp"`
}
