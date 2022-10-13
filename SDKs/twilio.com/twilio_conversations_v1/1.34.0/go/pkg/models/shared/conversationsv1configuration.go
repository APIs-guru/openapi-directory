package shared

type ConversationsV1Configuration struct {
	AccountSid                 *string                `json:"account_sid"`
	DefaultChatServiceSid      *string                `json:"default_chat_service_sid"`
	DefaultClosedTimer         *string                `json:"default_closed_timer"`
	DefaultInactiveTimer       *string                `json:"default_inactive_timer"`
	DefaultMessagingServiceSid *string                `json:"default_messaging_service_sid"`
	Links                      map[string]interface{} `json:"links"`
	URL                        *string                `json:"url"`
}
