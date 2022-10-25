package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWorkerServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateWorkerPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type CreateWorkerCreateWorkerRequest struct {
	ActivitySid  *string `form:"name=ActivitySid"`
	Attributes   *string `form:"name=Attributes"`
	FriendlyName string  `form:"name=FriendlyName"`
}

type CreateWorkerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateWorkerRequest struct {
	ServerURL  *string
	PathParams CreateWorkerPathParams
	Request    *CreateWorkerCreateWorkerRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateWorkerSecurity
}

type CreateWorkerResponse struct {
	ContentType                 string
	StatusCode                  int64
	TaskrouterV1WorkspaceWorker *shared.TaskrouterV1WorkspaceWorker
}
