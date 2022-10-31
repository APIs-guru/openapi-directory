package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTaskChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateTaskChannelPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type CreateTaskChannelCreateTaskChannelRequest struct {
	ChannelOptimizedRouting *bool  `form:"name=ChannelOptimizedRouting"`
	FriendlyName            string `form:"name=FriendlyName"`
	UniqueName              string `form:"name=UniqueName"`
}

type CreateTaskChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTaskChannelRequest struct {
	ServerURL  *string
	PathParams CreateTaskChannelPathParams
	Request    *CreateTaskChannelCreateTaskChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTaskChannelSecurity
}

type CreateTaskChannelResponse struct {
	ContentType                      string
	StatusCode                       int64
	TaskrouterV1WorkspaceTaskChannel *shared.TaskrouterV1WorkspaceTaskChannel
}
