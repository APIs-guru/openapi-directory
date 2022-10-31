package operations

import (
	"openapi/pkg/models/shared"
)

var FetchActivityServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchActivityPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchActivitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchActivityRequest struct {
	ServerURL  *string
	PathParams FetchActivityPathParams
	Security   FetchActivitySecurity
}

type FetchActivityResponse struct {
	ContentType                   string
	StatusCode                    int64
	TaskrouterV1WorkspaceActivity *shared.TaskrouterV1WorkspaceActivity
}
