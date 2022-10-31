package shared

import (
"time")

type EndDates struct {
    Approximate *bool `json:"approximate,omitempty"`
    DateTime *time.Time `json:"dateTime,omitempty"`
    LocalTime *LocalTime `json:"localTime,omitempty"`
    
}

