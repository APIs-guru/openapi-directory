package shared

import (
	"time"
)

type Youtube struct {
	ChannelID     *string                `json:"channel_id,omitempty"`
	ChannelTitle  *string                `json:"channel_title,omitempty"`
	CommentsCount *int64                 `json:"comments_count,omitempty"`
	Created       *time.Time             `json:"created,omitempty"`
	Description   *string                `json:"description,omitempty"`
	DislikeCount  *int64                 `json:"dislike_count,omitempty"`
	ExternalID    *string                `json:"external_id,omitempty"`
	FavoriteCount *int64                 `json:"favorite_count,omitempty"`
	ID            *int64                 `json:"id,omitempty"`
	LikeCount     *int64                 `json:"like_count,omitempty"`
	Name          *string                `json:"name,omitempty"`
	Thumbnails    map[string]interface{} `json:"thumbnails,omitempty"`
	ViewCount     *int64                 `json:"view_count,omitempty"`
}
