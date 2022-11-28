package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWorkerServerList = []string{
	"https://taskrouter.twilio.com",
}

type UpdateWorkerPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateWorkerHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type UpdateWorkerUpdateWorkerRequest struct {
	ActivitySid               *string `form:"name=ActivitySid"`
	Attributes                *string `form:"name=Attributes"`
	FriendlyName              *string `form:"name=FriendlyName"`
	RejectPendingReservations *bool   `form:"name=RejectPendingReservations"`
}

type UpdateWorkerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWorkerRequest struct {
	ServerURL  *string
	PathParams UpdateWorkerPathParams
	Headers    UpdateWorkerHeaders
	Request    *UpdateWorkerUpdateWorkerRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWorkerSecurity
}

type UpdateWorkerResponse struct {
	ContentType                 string
	StatusCode                  int64
	TaskrouterV1WorkspaceWorker *shared.TaskrouterV1WorkspaceWorker
}
