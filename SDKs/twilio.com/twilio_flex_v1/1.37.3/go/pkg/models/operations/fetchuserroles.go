package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUserRolesServerList = []string{
	"https://flex-api.twilio.com",
}

type FetchUserRolesHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type FetchUserRolesSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUserRolesRequest struct {
	ServerURL *string
	Headers   FetchUserRolesHeaders
	Security  FetchUserRolesSecurity
}

type FetchUserRolesResponse struct {
	ContentType     string
	StatusCode      int64
	FlexV1UserRoles *shared.FlexV1UserRoles
}
