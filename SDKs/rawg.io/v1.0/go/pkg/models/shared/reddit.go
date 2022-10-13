package shared

import (
	"time"
)

type Reddit struct {
	Created     *time.Time `json:"created"`
	ID          *int64     `json:"id"`
	Image       *string    `json:"image"`
	Name        *string    `json:"name"`
	Text        *string    `json:"text"`
	URL         *string    `json:"url"`
	Username    *string    `json:"username"`
	UsernameURL *string    `json:"username_url"`
}
