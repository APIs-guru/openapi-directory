package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTaskChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type UpdateTaskChannelPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateTaskChannelRequestBodyUpdateTaskChannelRequest struct {
	ChannelOptimizedRouting *bool   `form:"name=ChannelOptimizedRouting"`
	FriendlyName            *string `form:"name=FriendlyName"`
}

type UpdateTaskChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTaskChannelRequest struct {
	ServerURL  *string
	PathParams UpdateTaskChannelPathParams
	Request    *UpdateTaskChannelRequestBodyUpdateTaskChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTaskChannelSecurity
}

type UpdateTaskChannelResponse struct {
	ContentType                      string
	StatusCode                       int64
	TaskrouterV1WorkspaceTaskChannel *shared.TaskrouterV1WorkspaceTaskChannel
}
