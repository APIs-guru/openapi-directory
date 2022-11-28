package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWorkflowServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkflowPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkflowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkflowRequest struct {
	ServerURL  *string
	PathParams FetchWorkflowPathParams
	Security   FetchWorkflowSecurity
}

type FetchWorkflowResponse struct {
	ContentType                   string
	StatusCode                    int64
	TaskrouterV1WorkspaceWorkflow *shared.TaskrouterV1WorkspaceWorkflow
}
