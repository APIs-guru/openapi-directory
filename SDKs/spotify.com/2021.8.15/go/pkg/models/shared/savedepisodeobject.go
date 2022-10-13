package shared

import (
	"time"
)

type SavedEpisodeObject struct {
	AddedAt *time.Time     `json:"added_at"`
	Episode *EpisodeObject `json:"episode"`
}
