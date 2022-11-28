package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteTaskQueueServerList = []string{
	"https://taskrouter.twilio.com",
}

type DeleteTaskQueuePathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type DeleteTaskQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteTaskQueueRequest struct {
	ServerURL  *string
	PathParams DeleteTaskQueuePathParams
	Security   DeleteTaskQueueSecurity
}

type DeleteTaskQueueResponse struct {
	ContentType string
	StatusCode  int64
}
