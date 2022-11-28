package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateUserConversationServerList = []string{
	"https://conversations.twilio.com",
}

type UpdateUserConversationPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	UserSid         string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type UpdateUserConversationUpdateUserConversationRequest struct {
	LastReadMessageIndex *int64                                            `form:"name=LastReadMessageIndex"`
	LastReadTimestamp    *time.Time                                        `form:"name=LastReadTimestamp"`
	NotificationLevel    *shared.UserConversationEnumNotificationLevelEnum `form:"name=NotificationLevel"`
}

type UpdateUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUserConversationRequest struct {
	ServerURL  *string
	PathParams UpdateUserConversationPathParams
	Request    *UpdateUserConversationUpdateUserConversationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUserConversationSecurity
}

type UpdateUserConversationResponse struct {
	ContentType                         string
	StatusCode                          int64
	ConversationsV1UserUserConversation *shared.ConversationsV1UserUserConversation
}
