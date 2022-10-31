package shared

import (
"time")

type SavedEpisodeObject struct {
    AddedAt *time.Time `json:"added_at,omitempty"`
    Episode *EpisodeObject `json:"episode,omitempty"`
    
}

