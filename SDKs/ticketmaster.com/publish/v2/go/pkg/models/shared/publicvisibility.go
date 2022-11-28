package shared

import (
	"time"
)

// PublicVisibility
// The class defines the public visibility period on the Discovery/Publish API.
type PublicVisibility struct {
	EndDateTime   *time.Time `json:"endDateTime,omitempty"`
	StartDateTime *time.Time `json:"startDateTime,omitempty"`
	Visible       *bool      `json:"visible,omitempty"`
}
