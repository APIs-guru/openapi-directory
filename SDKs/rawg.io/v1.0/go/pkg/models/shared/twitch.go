package shared

import (
	"time"
)

type Twitch struct {
	Created     *time.Time `json:"created"`
	Description *string    `json:"description"`
	ExternalID  *int64     `json:"external_id"`
	ID          *int64     `json:"id"`
	Language    *string    `json:"language"`
	Name        *string    `json:"name"`
	Published   *time.Time `json:"published"`
	Thumbnail   *string    `json:"thumbnail"`
	ViewCount   *int64     `json:"view_count"`
}
