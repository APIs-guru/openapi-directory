package shared

import (
	"time"
)

type PlayHistoryObject struct {
	Context  *ContextObject         `json:"context"`
	PlayedAt *time.Time             `json:"played_at"`
	Track    *SimplifiedTrackObject `json:"track"`
}
