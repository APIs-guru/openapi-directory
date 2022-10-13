package shared

import (
	"time"
)

type SavedAlbumObject struct {
	AddedAt *time.Time   `json:"added_at"`
	Album   *AlbumObject `json:"album"`
}
