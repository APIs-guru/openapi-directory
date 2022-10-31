package shared



type ConversationResponse struct {
    Data *Conversation `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

