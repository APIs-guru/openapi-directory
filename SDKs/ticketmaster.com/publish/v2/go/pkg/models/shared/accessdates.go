package shared

import (
	"time"
)

type AccessDates struct {
	EndApproximate   *bool      `json:"endApproximate"`
	EndDateTime      *time.Time `json:"endDateTime"`
	StartApproximate *bool      `json:"startApproximate"`
	StartDateTime    *time.Time `json:"startDateTime"`
}
