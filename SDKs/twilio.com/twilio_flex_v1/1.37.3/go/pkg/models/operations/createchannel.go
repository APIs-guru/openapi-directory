package operations

import (
	"openapi/pkg/models/shared"
)

var CreateChannelServerList = []string{
	"https://flex-api.twilio.com",
}

type CreateChannelCreateChannelRequest struct {
	ChatFriendlyName     string  `form:"name=ChatFriendlyName"`
	ChatUniqueName       *string `form:"name=ChatUniqueName"`
	ChatUserFriendlyName string  `form:"name=ChatUserFriendlyName"`
	FlexFlowSid          string  `form:"name=FlexFlowSid"`
	Identity             string  `form:"name=Identity"`
	LongLived            *bool   `form:"name=LongLived"`
	PreEngagementData    *string `form:"name=PreEngagementData"`
	Target               *string `form:"name=Target"`
	TaskAttributes       *string `form:"name=TaskAttributes"`
	TaskSid              *string `form:"name=TaskSid"`
}

type CreateChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateChannelRequest struct {
	ServerURL *string
	Request   *CreateChannelCreateChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateChannelSecurity
}

type CreateChannelResponse struct {
	ContentType   string
	StatusCode    int64
	FlexV1Channel *shared.FlexV1Channel
}
