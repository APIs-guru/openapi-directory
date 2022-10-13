package shared

import (
	"time"
)

type Story struct {
	Content   *string    `json:"content"`
	Date      *time.Time `json:"date"`
	LikeCount *int64     `json:"like_count"`
	Photos    []Photo    `json:"photos"`
	ShareURL  *string    `json:"share_url"`
	StoryID   *string    `json:"story_id"`
	Title     *string    `json:"title"`
	User      *User      `json:"user"`
	UserLiked *bool      `json:"user_liked"`
}
