package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateUserChannelServerList = []string{
	"https://ip-messaging.twilio.com",
}

type UpdateUserChannelPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type UpdateUserChannelUpdateUserChannelRequest struct {
	LastConsumedMessageIndex *int64                                       `form:"name=LastConsumedMessageIndex"`
	LastConsumptionTimestamp *time.Time                                   `form:"name=LastConsumptionTimestamp"`
	NotificationLevel        *shared.UserChannelEnumNotificationLevelEnum `form:"name=NotificationLevel"`
}

type UpdateUserChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUserChannelRequest struct {
	ServerURL  *string
	PathParams UpdateUserChannelPathParams
	Request    *UpdateUserChannelUpdateUserChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUserChannelSecurity
}

type UpdateUserChannelResponse struct {
	ContentType                         string
	StatusCode                          int64
	IPMessagingV2ServiceUserUserChannel *shared.IPMessagingV2ServiceUserUserChannel
}
