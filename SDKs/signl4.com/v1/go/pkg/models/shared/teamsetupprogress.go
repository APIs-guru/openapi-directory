package shared

import (
"time")

type TeamSetupProgress struct {
    CompletedSteps []string `json:"completedSteps,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    
}

