package shared

import (
"time")

type SavedAlbumObject struct {
    AddedAt *time.Time `json:"added_at,omitempty"`
    Album *AlbumObject `json:"album,omitempty"`
    
}

