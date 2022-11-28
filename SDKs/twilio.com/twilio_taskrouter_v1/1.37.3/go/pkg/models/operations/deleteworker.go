package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteWorkerServerList = []string{
	"https://taskrouter.twilio.com",
}

type DeleteWorkerPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type DeleteWorkerHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type DeleteWorkerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteWorkerRequest struct {
	ServerURL  *string
	PathParams DeleteWorkerPathParams
	Headers    DeleteWorkerHeaders
	Security   DeleteWorkerSecurity
}

type DeleteWorkerResponse struct {
	ContentType string
	StatusCode  int64
}
