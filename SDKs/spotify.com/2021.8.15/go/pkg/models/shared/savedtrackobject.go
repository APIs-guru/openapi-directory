package shared

import (
	"time"
)

type SavedTrackObject struct {
	AddedAt *time.Time   `json:"added_at,omitempty"`
	Track   *TrackObject `json:"track,omitempty"`
}
