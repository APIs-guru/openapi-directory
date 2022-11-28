package shared

type ChatV1ServiceUserUserChannel struct {
	AccountSid               *string                           `json:"account_sid,omitempty"`
	ChannelSid               *string                           `json:"channel_sid,omitempty"`
	LastConsumedMessageIndex *int64                            `json:"last_consumed_message_index,omitempty"`
	Links                    map[string]interface{}            `json:"links,omitempty"`
	MemberSid                *string                           `json:"member_sid,omitempty"`
	ServiceSid               *string                           `json:"service_sid,omitempty"`
	Status                   *UserChannelEnumChannelStatusEnum `json:"status,omitempty"`
	UnreadMessagesCount      *int64                            `json:"unread_messages_count,omitempty"`
}
