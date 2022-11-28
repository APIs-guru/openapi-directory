package shared

import (
	"time"
)

// StartDates
// Event's Start Dates
type StartDates struct {
	DateTba        *bool      `json:"dateTBA,omitempty"`
	DateTbd        *bool      `json:"dateTBD,omitempty"`
	DateTime       *time.Time `json:"dateTime,omitempty"`
	LocalDate      *time.Time `json:"localDate,omitempty"`
	LocalTime      *LocalTime `json:"localTime,omitempty"`
	NoSpecificTime *bool      `json:"noSpecificTime,omitempty"`
	TimeTba        *bool      `json:"timeTBA,omitempty"`
}
