package shared

import (
	"time"
)

type PostSearchResult struct {
	Content       *string    `json:"content"`
	Date          *time.Time `json:"date"`
	Expiration    *time.Time `json:"expiration"`
	Footer        *string    `json:"footer"`
	GroupID       *string    `json:"group_id"`
	Latitude      *float64   `json:"latitude"`
	Longitude     *float64   `json:"longitude"`
	Outcome       *string    `json:"outcome"`
	Photos        []Photo    `json:"photos"`
	PostID        *string    `json:"post_id"`
	SearchContent *string    `json:"search_content"`
	SearchTitle   *string    `json:"search_title"`
	Source        *string    `json:"source"`
	Title         *string    `json:"title"`
	Type          *string    `json:"type"`
	URL           *string    `json:"url"`
	UserID        *string    `json:"user_id"`
}
