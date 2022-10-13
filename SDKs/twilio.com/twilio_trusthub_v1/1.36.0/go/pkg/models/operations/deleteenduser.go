package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteEndUserServers = []string{
	"https://trusthub.twilio.com",
}

type DeleteEndUserPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteEndUserRequest struct {
	ServerURL  *string
	PathParams DeleteEndUserPathParams
	Security   DeleteEndUserSecurity
}

type DeleteEndUserResponse struct {
	ContentType string
	StatusCode  int64
}
