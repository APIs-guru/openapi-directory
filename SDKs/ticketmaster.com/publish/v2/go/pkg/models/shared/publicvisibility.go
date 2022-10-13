package shared

import (
	"time"
)

type PublicVisibility struct {
	EndDateTime   *time.Time `json:"endDateTime"`
	StartDateTime *time.Time `json:"startDateTime"`
	Visible       *bool      `json:"visible"`
}
