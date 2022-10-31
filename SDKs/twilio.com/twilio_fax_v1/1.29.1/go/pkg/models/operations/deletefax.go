package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFaxServers = []string{
	"https://fax.twilio.com",
}

type DeleteFaxPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFaxSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFaxRequest struct {
	ServerURL  *string
	PathParams DeleteFaxPathParams
	Security   DeleteFaxSecurity
}

type DeleteFaxResponse struct {
	ContentType string
	StatusCode  int64
}
