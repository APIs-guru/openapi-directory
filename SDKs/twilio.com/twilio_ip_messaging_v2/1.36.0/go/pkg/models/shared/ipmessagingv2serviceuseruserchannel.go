package shared

type IPMessagingV2ServiceUserUserChannel struct {
	AccountSid               *string                               `json:"account_sid"`
	ChannelSid               *string                               `json:"channel_sid"`
	LastConsumedMessageIndex *int64                                `json:"last_consumed_message_index"`
	Links                    map[string]interface{}                `json:"links"`
	MemberSid                *string                               `json:"member_sid"`
	NotificationLevel        *UserChannelEnumNotificationLevelEnum `json:"notification_level"`
	ServiceSid               *string                               `json:"service_sid"`
	Status                   *UserChannelEnumChannelStatusEnum     `json:"status"`
	UnreadMessagesCount      *int64                                `json:"unread_messages_count"`
	URL                      *string                               `json:"url"`
	UserSid                  *string                               `json:"user_sid"`
}
