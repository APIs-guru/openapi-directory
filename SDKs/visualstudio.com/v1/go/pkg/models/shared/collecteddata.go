package shared

import (
"time")

type CollectedData struct {
    EnvironmentID *string `json:"environmentId,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentActivityID *string `json:"parentActivityId,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    
}

