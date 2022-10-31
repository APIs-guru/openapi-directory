package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateServiceUserConversationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceUserConversationPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	UserSid         string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type UpdateServiceUserConversationUpdateServiceUserConversationRequest struct {
	LastReadMessageIndex *int64                                                   `form:"name=LastReadMessageIndex"`
	LastReadTimestamp    *time.Time                                               `form:"name=LastReadTimestamp"`
	NotificationLevel    *shared.ServiceUserConversationEnumNotificationLevelEnum `form:"name=NotificationLevel"`
}

type UpdateServiceUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceUserConversationRequest struct {
	ServerURL  *string
	PathParams UpdateServiceUserConversationPathParams
	Request    *UpdateServiceUserConversationUpdateServiceUserConversationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceUserConversationSecurity
}

type UpdateServiceUserConversationResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	ConversationsV1ServiceServiceUserServiceUserConversation *shared.ConversationsV1ServiceServiceUserServiceUserConversation
}
