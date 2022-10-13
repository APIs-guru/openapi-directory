package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTaskQueueServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskQueuePathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchTaskQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskQueueRequest struct {
	ServerURL  *string
	PathParams FetchTaskQueuePathParams
	Security   FetchTaskQueueSecurity
}

type FetchTaskQueueResponse struct {
	ContentType                    string
	StatusCode                     int64
	TaskrouterV1WorkspaceTaskQueue *shared.TaskrouterV1WorkspaceTaskQueue
}
