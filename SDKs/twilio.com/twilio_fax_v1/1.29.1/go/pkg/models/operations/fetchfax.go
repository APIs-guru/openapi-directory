package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFaxServers = []string{
	"https://fax.twilio.com",
}

type FetchFaxPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchFaxSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFaxRequest struct {
	ServerURL  *string
	PathParams FetchFaxPathParams
	Security   FetchFaxSecurity
}

type FetchFaxResponse struct {
	ContentType string
	StatusCode  int64
	FaxV1Fax    *shared.FaxV1Fax
}
