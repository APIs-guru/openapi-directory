package shared

import (
	"time"
)

// PublicSaleDates
// Event's Public Onsales Dates
type PublicSaleDates struct {
	EndDateTime   *time.Time `json:"endDateTime,omitempty"`
	StartDateTime *time.Time `json:"startDateTime,omitempty"`
	StartTbd      *bool      `json:"startTBD,omitempty"`
}
