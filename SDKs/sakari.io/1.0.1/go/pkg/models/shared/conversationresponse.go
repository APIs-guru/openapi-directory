package shared

type ConversationResponse struct {
	Data    *Conversation `json:"data"`
	Success *bool         `json:"success"`
}
