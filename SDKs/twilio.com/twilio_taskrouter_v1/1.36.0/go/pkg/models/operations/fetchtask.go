package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTaskServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskRequest struct {
	ServerURL  *string
	PathParams FetchTaskPathParams
	Security   FetchTaskSecurity
}

type FetchTaskResponse struct {
	ContentType               string
	StatusCode                int64
	TaskrouterV1WorkspaceTask *shared.TaskrouterV1WorkspaceTask
}
