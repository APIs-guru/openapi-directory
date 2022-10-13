package shared

import (
	"time"
)

type SavedTrackObject struct {
	AddedAt *time.Time   `json:"added_at"`
	Track   *TrackObject `json:"track"`
}
