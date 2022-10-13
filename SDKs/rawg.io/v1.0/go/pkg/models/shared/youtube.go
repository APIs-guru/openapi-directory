package shared

import (
	"time"
)

type Youtube struct {
	ChannelID     *string                `json:"channel_id"`
	ChannelTitle  *string                `json:"channel_title"`
	CommentsCount *int64                 `json:"comments_count"`
	Created       *time.Time             `json:"created"`
	Description   *string                `json:"description"`
	DislikeCount  *int64                 `json:"dislike_count"`
	ExternalID    *string                `json:"external_id"`
	FavoriteCount *int64                 `json:"favorite_count"`
	ID            *int64                 `json:"id"`
	LikeCount     *int64                 `json:"like_count"`
	Name          *string                `json:"name"`
	Thumbnails    map[string]interface{} `json:"thumbnails"`
	ViewCount     *int64                 `json:"view_count"`
}
