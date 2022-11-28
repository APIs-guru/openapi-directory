package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWorkerServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkerPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkerRequest struct {
	ServerURL  *string
	PathParams FetchWorkerPathParams
	Security   FetchWorkerSecurity
}

type FetchWorkerResponse struct {
	ContentType                 string
	StatusCode                  int64
	TaskrouterV1WorkspaceWorker *shared.TaskrouterV1WorkspaceWorker
}
