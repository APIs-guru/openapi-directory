package shared

import (
"time")

type PlaylistTrackObject struct {
    AddedAt *time.Time `json:"added_at,omitempty"`
    AddedBy *PublicUserObject `json:"added_by,omitempty"`
    IsLocal *bool `json:"is_local,omitempty"`
    Track *interface{} `json:"track,omitempty"`
    
}

