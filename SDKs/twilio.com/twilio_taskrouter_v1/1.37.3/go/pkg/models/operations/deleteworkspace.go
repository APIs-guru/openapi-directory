package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteWorkspaceServerList = []string{
	"https://taskrouter.twilio.com",
}

type DeleteWorkspacePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteWorkspaceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteWorkspaceRequest struct {
	ServerURL  *string
	PathParams DeleteWorkspacePathParams
	Security   DeleteWorkspaceSecurity
}

type DeleteWorkspaceResponse struct {
	ContentType string
	StatusCode  int64
}
