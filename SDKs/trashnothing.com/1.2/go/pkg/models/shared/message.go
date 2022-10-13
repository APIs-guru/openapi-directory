package shared

import (
	"time"
)

type Message struct {
	Content          *string    `json:"content"`
	Date             *time.Time `json:"date"`
	EmailAttachments []string   `json:"email_attachments"`
	FromUserID       *string    `json:"from_user_id"`
	MessageID        *string    `json:"message_id"`
	Photos           []Photo    `json:"photos"`
	Subject          *string    `json:"subject"`
	ToUserID         *string    `json:"to_user_id"`
}
