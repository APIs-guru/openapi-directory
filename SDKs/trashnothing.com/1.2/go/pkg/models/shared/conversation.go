package shared

import (
	"time"
)

type Conversation struct {
	Archived          *bool      `json:"archived"`
	Blocked           *bool      `json:"blocked"`
	ConversationID    *string    `json:"conversation_id"`
	LastMessageDate   *time.Time `json:"last_message_date"`
	Messages          []Message  `json:"messages"`
	NumUnreadMessages *int64     `json:"num_unread_messages"`
	User              *User      `json:"user"`
}
