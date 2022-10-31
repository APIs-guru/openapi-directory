package shared

import (
"time")

type Conversation struct {
    Archived *bool `json:"archived,omitempty"`
    Blocked *bool `json:"blocked,omitempty"`
    ConversationID *string `json:"conversation_id,omitempty"`
    LastMessageDate *time.Time `json:"last_message_date,omitempty"`
    Messages []Message `json:"messages,omitempty"`
    NumUnreadMessages *int64 `json:"num_unread_messages,omitempty"`
    User *User `json:"user,omitempty"`
    
}

