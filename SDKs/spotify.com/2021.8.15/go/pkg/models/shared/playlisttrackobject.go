package shared

import (
	"time"
)

type PlaylistTrackObject struct {
	AddedAt *time.Time        `json:"added_at"`
	AddedBy *PublicUserObject `json:"added_by"`
	IsLocal *bool             `json:"is_local"`
	Track   *interface{}      `json:"track"`
}
