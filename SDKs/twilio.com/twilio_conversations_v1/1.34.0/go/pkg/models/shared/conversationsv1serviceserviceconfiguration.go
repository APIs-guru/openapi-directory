package shared

type ConversationsV1ServiceServiceConfiguration struct {
	ChatServiceSid                    *string                `json:"chat_service_sid"`
	DefaultChatServiceRoleSid         *string                `json:"default_chat_service_role_sid"`
	DefaultConversationCreatorRoleSid *string                `json:"default_conversation_creator_role_sid"`
	DefaultConversationRoleSid        *string                `json:"default_conversation_role_sid"`
	Links                             map[string]interface{} `json:"links"`
	ReachabilityEnabled               *bool                  `json:"reachability_enabled"`
	URL                               *string                `json:"url"`
}
