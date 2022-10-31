package shared

import (
"time")

type PublicVisibility struct {
    EndDateTime *time.Time `json:"endDateTime,omitempty"`
    StartDateTime *time.Time `json:"startDateTime,omitempty"`
    Visible *bool `json:"visible,omitempty"`
    
}

