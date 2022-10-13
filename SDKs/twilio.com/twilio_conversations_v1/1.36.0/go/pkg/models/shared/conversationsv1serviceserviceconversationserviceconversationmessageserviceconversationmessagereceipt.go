package shared

import (
	"time"
)

type ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt struct {
	AccountSid        *string                                                  `json:"account_sid"`
	ChannelMessageSid *string                                                  `json:"channel_message_sid"`
	ChatServiceSid    *string                                                  `json:"chat_service_sid"`
	ConversationSid   *string                                                  `json:"conversation_sid"`
	DateCreated       *time.Time                                               `json:"date_created"`
	DateUpdated       *time.Time                                               `json:"date_updated"`
	ErrorCode         *int64                                                   `json:"error_code"`
	MessageSid        *string                                                  `json:"message_sid"`
	ParticipantSid    *string                                                  `json:"participant_sid"`
	Sid               *string                                                  `json:"sid"`
	Status            *ServiceConversationMessageReceiptEnumDeliveryStatusEnum `json:"status"`
	URL               *string                                                  `json:"url"`
}
