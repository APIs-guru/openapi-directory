package shared



type ConversationsV1Configuration struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DefaultChatServiceSid *string `json:"default_chat_service_sid,omitempty"`
    DefaultClosedTimer *string `json:"default_closed_timer,omitempty"`
    DefaultInactiveTimer *string `json:"default_inactive_timer,omitempty"`
    DefaultMessagingServiceSid *string `json:"default_messaging_service_sid,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

