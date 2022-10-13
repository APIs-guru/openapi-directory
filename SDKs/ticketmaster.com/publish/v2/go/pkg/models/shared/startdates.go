package shared

import (
	"time"
)

type StartDates struct {
	DateTba        *bool      `json:"dateTBA"`
	DateTbd        *bool      `json:"dateTBD"`
	DateTime       *time.Time `json:"dateTime"`
	LocalDate      *time.Time `json:"localDate"`
	LocalTime      *LocalTime `json:"localTime"`
	NoSpecificTime *bool      `json:"noSpecificTime"`
	TimeTba        *bool      `json:"timeTBA"`
}
