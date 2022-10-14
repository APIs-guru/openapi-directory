package shared

import (
	"time"
)

type Story struct {
	Content   *string    `json:"content,omitempty"`
	Date      *time.Time `json:"date,omitempty"`
	LikeCount *int64     `json:"like_count,omitempty"`
	Photos    []Photo    `json:"photos,omitempty"`
	ShareURL  *string    `json:"share_url,omitempty"`
	StoryID   *string    `json:"story_id,omitempty"`
	Title     *string    `json:"title,omitempty"`
	User      *User      `json:"user,omitempty"`
	UserLiked *bool      `json:"user_liked,omitempty"`
}
