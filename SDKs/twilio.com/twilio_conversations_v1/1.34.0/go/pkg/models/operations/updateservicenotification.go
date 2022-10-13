package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceNotificationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceNotificationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type UpdateServiceNotificationRequestBodyUpdateServiceNotificationRequest struct {
	AddedToConversationEnabled      *bool   `form:"name=AddedToConversation.Enabled"`
	AddedToConversationSound        *string `form:"name=AddedToConversation.Sound"`
	AddedToConversationTemplate     *string `form:"name=AddedToConversation.Template"`
	LogEnabled                      *bool   `form:"name=LogEnabled"`
	NewMessageBadgeCountEnabled     *bool   `form:"name=NewMessage.BadgeCountEnabled"`
	NewMessageEnabled               *bool   `form:"name=NewMessage.Enabled"`
	NewMessageSound                 *string `form:"name=NewMessage.Sound"`
	NewMessageTemplate              *string `form:"name=NewMessage.Template"`
	NewMessageWithMediaEnabled      *bool   `form:"name=NewMessage.WithMedia.Enabled"`
	NewMessageWithMediaTemplate     *string `form:"name=NewMessage.WithMedia.Template"`
	RemovedFromConversationEnabled  *bool   `form:"name=RemovedFromConversation.Enabled"`
	RemovedFromConversationSound    *string `form:"name=RemovedFromConversation.Sound"`
	RemovedFromConversationTemplate *string `form:"name=RemovedFromConversation.Template"`
}

type UpdateServiceNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceNotificationRequest struct {
	ServerURL  *string
	PathParams UpdateServiceNotificationPathParams
	Request    *UpdateServiceNotificationRequestBodyUpdateServiceNotificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceNotificationSecurity
}

type UpdateServiceNotificationResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	ConversationsV1ServiceServiceConfigurationServiceNotification *shared.ConversationsV1ServiceServiceConfigurationServiceNotification
}
