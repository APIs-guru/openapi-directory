package shared

import (
	"time"
)

// ContinuousCheckEntry
// Represents to changelog entry of a continuous check
type ContinuousCheckEntry struct {
	Changes           []Change   `json:"changes,omitempty"`
	CheckID           *string    `json:"check_id,omitempty"`
	ContinuousCheckID *string    `json:"continuous_check_id,omitempty"`
	CreationDate      *time.Time `json:"creation_date,omitempty"`
	PreviousCheckID   *string    `json:"previous_check_id,omitempty"`
}
