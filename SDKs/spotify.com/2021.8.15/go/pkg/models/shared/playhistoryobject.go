package shared

import (
	"time"
)

type PlayHistoryObject struct {
	Context  *ContextObject         `json:"context,omitempty"`
	PlayedAt *time.Time             `json:"played_at,omitempty"`
	Track    *SimplifiedTrackObject `json:"track,omitempty"`
}
