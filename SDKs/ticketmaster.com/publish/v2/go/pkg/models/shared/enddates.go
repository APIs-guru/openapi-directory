package shared

import (
	"time"
)

// EndDates
// Event's End Dates
type EndDates struct {
	Approximate *bool      `json:"approximate,omitempty"`
	DateTime    *time.Time `json:"dateTime,omitempty"`
	LocalTime   *LocalTime `json:"localTime,omitempty"`
}
