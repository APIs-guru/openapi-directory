package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTestUserServers = []string{
	"https://studio.twilio.com",
}

type FetchTestUserPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchTestUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTestUserRequest struct {
	ServerURL  *string
	PathParams FetchTestUserPathParams
	Security   FetchTestUserSecurity
}

type FetchTestUserResponse struct {
	ContentType          string
	StatusCode           int64
	StudioV2FlowTestUser *shared.StudioV2FlowTestUser
}
