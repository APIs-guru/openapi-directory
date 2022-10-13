package shared

import (
	"time"
)

type ConversationsV1ServiceServiceConversation struct {
	AccountSid          *string                           `json:"account_sid"`
	Attributes          *string                           `json:"attributes"`
	Bindings            *interface{}                      `json:"bindings"`
	ChatServiceSid      *string                           `json:"chat_service_sid"`
	DateCreated         *time.Time                        `json:"date_created"`
	DateUpdated         *time.Time                        `json:"date_updated"`
	FriendlyName        *string                           `json:"friendly_name"`
	Links               map[string]interface{}            `json:"links"`
	MessagingServiceSid *string                           `json:"messaging_service_sid"`
	Sid                 *string                           `json:"sid"`
	State               *ServiceConversationEnumStateEnum `json:"state"`
	Timers              *interface{}                      `json:"timers"`
	UniqueName          *string                           `json:"unique_name"`
	URL                 *string                           `json:"url"`
}
