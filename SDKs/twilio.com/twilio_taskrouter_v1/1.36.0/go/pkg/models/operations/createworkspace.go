package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWorkspaceServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateWorkspaceCreateWorkspaceRequest struct {
	EventCallbackURL     *string                             `form:"name=EventCallbackUrl"`
	EventsFilter         *string                             `form:"name=EventsFilter"`
	FriendlyName         string                              `form:"name=FriendlyName"`
	MultiTaskEnabled     *bool                               `form:"name=MultiTaskEnabled"`
	PrioritizeQueueOrder *shared.WorkspaceEnumQueueOrderEnum `form:"name=PrioritizeQueueOrder"`
	Template             *string                             `form:"name=Template"`
}

type CreateWorkspaceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateWorkspaceRequest struct {
	ServerURL *string
	Request   *CreateWorkspaceCreateWorkspaceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateWorkspaceSecurity
}

type CreateWorkspaceResponse struct {
	ContentType           string
	StatusCode            int64
	TaskrouterV1Workspace *shared.TaskrouterV1Workspace
}
