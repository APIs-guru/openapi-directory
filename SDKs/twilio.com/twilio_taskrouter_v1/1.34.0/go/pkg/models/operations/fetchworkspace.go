package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWorkspaceServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkspacePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchWorkspaceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkspaceRequest struct {
	ServerURL  *string
	PathParams FetchWorkspacePathParams
	Security   FetchWorkspaceSecurity
}

type FetchWorkspaceResponse struct {
	ContentType           string
	StatusCode            int64
	TaskrouterV1Workspace *shared.TaskrouterV1Workspace
}
