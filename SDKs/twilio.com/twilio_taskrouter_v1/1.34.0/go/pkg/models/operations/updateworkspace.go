package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWorkspaceServers = []string{
	"https://taskrouter.twilio.com",
}

type UpdateWorkspacePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateWorkspaceRequestBodyUpdateWorkspaceRequest struct {
	DefaultActivitySid   *string                             `form:"name=DefaultActivitySid"`
	EventCallbackURL     *string                             `form:"name=EventCallbackUrl"`
	EventsFilter         *string                             `form:"name=EventsFilter"`
	FriendlyName         *string                             `form:"name=FriendlyName"`
	MultiTaskEnabled     *bool                               `form:"name=MultiTaskEnabled"`
	PrioritizeQueueOrder *shared.WorkspaceEnumQueueOrderEnum `form:"name=PrioritizeQueueOrder"`
	TimeoutActivitySid   *string                             `form:"name=TimeoutActivitySid"`
}

type UpdateWorkspaceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWorkspaceRequest struct {
	ServerURL  *string
	PathParams UpdateWorkspacePathParams
	Request    *UpdateWorkspaceRequestBodyUpdateWorkspaceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWorkspaceSecurity
}

type UpdateWorkspaceResponse struct {
	ContentType           string
	StatusCode            int64
	TaskrouterV1Workspace *shared.TaskrouterV1Workspace
}
