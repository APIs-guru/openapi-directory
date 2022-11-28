package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoleServerList = []string{
	"https://conversations.twilio.com",
}

type FetchRolePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoleRequest struct {
	ServerURL  *string
	PathParams FetchRolePathParams
	Security   FetchRoleSecurity
}

type FetchRoleResponse struct {
	ContentType         string
	StatusCode          int64
	ConversationsV1Role *shared.ConversationsV1Role
}
