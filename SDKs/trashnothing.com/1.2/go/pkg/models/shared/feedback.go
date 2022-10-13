package shared

import (
	"time"
)

type Feedback struct {
	Content        *string    `json:"content"`
	Date           *time.Time `json:"date"`
	Positive       *bool      `json:"positive"`
	ReviewerUserID *string    `json:"reviewer_user_id"`
	UserID         *string    `json:"user_id"`
}
