package shared

import (
"time")

type Event struct {
    Attributes *string `json:"attributes,omitempty"`
    ChatPrompt *string `json:"chat_prompt,omitempty"`
    ConversationID *string `json:"conversation_id,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DomSelectors *string `json:"dom_selectors,omitempty"`
    ID *string `json:"id,omitempty"`
    IsChatHidden *bool `json:"is_chat_hidden,omitempty"`
    IsNotifyEnabled *bool `json:"is_notify_enabled,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

