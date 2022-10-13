package shared

import (
	"time"
)

type PublicSaleDates struct {
	EndDateTime   *time.Time `json:"endDateTime"`
	StartDateTime *time.Time `json:"startDateTime"`
	StartTbd      *bool      `json:"startTBD"`
}
