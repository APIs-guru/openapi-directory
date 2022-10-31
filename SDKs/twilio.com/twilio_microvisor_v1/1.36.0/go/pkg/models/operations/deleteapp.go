package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteAppServers = []string{
	"https://microvisor.twilio.com",
}

type DeleteAppPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteAppRequest struct {
	ServerURL  *string
	PathParams DeleteAppPathParams
	Security   DeleteAppSecurity
}

type DeleteAppResponse struct {
	ContentType string
	StatusCode  int64
}
