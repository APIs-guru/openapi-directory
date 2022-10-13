package shared

import (
	"time"
)

type Event struct {
	Attributes      *string    `json:"attributes"`
	ChatPrompt      *string    `json:"chat_prompt"`
	ConversationID  *string    `json:"conversation_id"`
	CreatedAt       *time.Time `json:"created_at"`
	CreatedBy       *string    `json:"created_by"`
	DomSelectors    *string    `json:"dom_selectors"`
	ID              *string    `json:"id"`
	IsChatHidden    *bool      `json:"is_chat_hidden"`
	IsNotifyEnabled *bool      `json:"is_notify_enabled"`
	Name            *string    `json:"name"`
	UpdatedAt       *time.Time `json:"updated_at"`
	UpdatedBy       *string    `json:"updated_by"`
}
