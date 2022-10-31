package shared



type ConversationsV1ServiceServiceConfiguration struct {
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    DefaultChatServiceRoleSid *string `json:"default_chat_service_role_sid,omitempty"`
    DefaultConversationCreatorRoleSid *string `json:"default_conversation_creator_role_sid,omitempty"`
    DefaultConversationRoleSid *string `json:"default_conversation_role_sid,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    ReachabilityEnabled *bool `json:"reachability_enabled,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

