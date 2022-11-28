package shared

import (
	"time"
)

// Message
// A message between two users.
type Message struct {
	Content          *string    `json:"content,omitempty"`
	Date             *time.Time `json:"date,omitempty"`
	EmailAttachments []string   `json:"email_attachments,omitempty"`
	FromUserID       *string    `json:"from_user_id,omitempty"`
	MessageID        *string    `json:"message_id,omitempty"`
	Photos           []Photo    `json:"photos,omitempty"`
	Subject          *string    `json:"subject,omitempty"`
	ToUserID         *string    `json:"to_user_id,omitempty"`
}
