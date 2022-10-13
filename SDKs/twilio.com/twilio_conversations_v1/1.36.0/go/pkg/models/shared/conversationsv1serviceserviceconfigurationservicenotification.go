package shared

type ConversationsV1ServiceServiceConfigurationServiceNotification struct {
	AccountSid              *string      `json:"account_sid"`
	AddedToConversation     *interface{} `json:"added_to_conversation"`
	ChatServiceSid          *string      `json:"chat_service_sid"`
	LogEnabled              *bool        `json:"log_enabled"`
	NewMessage              *interface{} `json:"new_message"`
	RemovedFromConversation *interface{} `json:"removed_from_conversation"`
	URL                     *string      `json:"url"`
}
