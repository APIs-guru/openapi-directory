package shared

import (
"time")

type ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ChannelMessageSid *string `json:"channel_message_sid,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    ConversationSid *string `json:"conversation_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    ErrorCode *int64 `json:"error_code,omitempty"`
    MessageSid *string `json:"message_sid,omitempty"`
    ParticipantSid *string `json:"participant_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *ServiceConversationMessageReceiptEnumDeliveryStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

