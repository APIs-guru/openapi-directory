package shared

type IPMessagingV1ServiceUserUserChannel struct {
	AccountSid               *string                           `json:"account_sid"`
	ChannelSid               *string                           `json:"channel_sid"`
	LastConsumedMessageIndex *int64                            `json:"last_consumed_message_index"`
	Links                    map[string]interface{}            `json:"links"`
	MemberSid                *string                           `json:"member_sid"`
	ServiceSid               *string                           `json:"service_sid"`
	Status                   *UserChannelEnumChannelStatusEnum `json:"status"`
	UnreadMessagesCount      *int64                            `json:"unread_messages_count"`
}
