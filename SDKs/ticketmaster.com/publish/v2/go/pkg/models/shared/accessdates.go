package shared

import (
"time")

type AccessDates struct {
    EndApproximate *bool `json:"endApproximate,omitempty"`
    EndDateTime *time.Time `json:"endDateTime,omitempty"`
    StartApproximate *bool `json:"startApproximate,omitempty"`
    StartDateTime *time.Time `json:"startDateTime,omitempty"`
    
}

