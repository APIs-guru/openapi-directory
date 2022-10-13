package operations

import (
	"openapi/pkg/models/shared"
)

var CreateActivityServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateActivityPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type CreateActivityRequestBodyCreateActivityRequest struct {
	Available    *bool  `form:"name=Available"`
	FriendlyName string `form:"name=FriendlyName"`
}

type CreateActivitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateActivityRequest struct {
	ServerURL  *string
	PathParams CreateActivityPathParams
	Request    *CreateActivityRequestBodyCreateActivityRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateActivitySecurity
}

type CreateActivityResponse struct {
	ContentType                   string
	StatusCode                    int64
	TaskrouterV1WorkspaceActivity *shared.TaskrouterV1WorkspaceActivity
}
