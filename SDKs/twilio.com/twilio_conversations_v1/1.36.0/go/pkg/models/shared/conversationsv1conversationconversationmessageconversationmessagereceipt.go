package shared

import (
	"time"
)

type ConversationsV1ConversationConversationMessageConversationMessageReceipt struct {
	AccountSid        *string                                           `json:"account_sid"`
	ChannelMessageSid *string                                           `json:"channel_message_sid"`
	ConversationSid   *string                                           `json:"conversation_sid"`
	DateCreated       *time.Time                                        `json:"date_created"`
	DateUpdated       *time.Time                                        `json:"date_updated"`
	ErrorCode         *int64                                            `json:"error_code"`
	MessageSid        *string                                           `json:"message_sid"`
	ParticipantSid    *string                                           `json:"participant_sid"`
	Sid               *string                                           `json:"sid"`
	Status            *ConversationMessageReceiptEnumDeliveryStatusEnum `json:"status"`
	URL               *string                                           `json:"url"`
}
