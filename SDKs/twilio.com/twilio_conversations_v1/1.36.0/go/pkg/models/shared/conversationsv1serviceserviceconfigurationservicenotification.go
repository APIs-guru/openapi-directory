package shared



type ConversationsV1ServiceServiceConfigurationServiceNotification struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AddedToConversation *interface{} `json:"added_to_conversation,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    LogEnabled *bool `json:"log_enabled,omitempty"`
    NewMessage *interface{} `json:"new_message,omitempty"`
    RemovedFromConversation *interface{} `json:"removed_from_conversation,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

