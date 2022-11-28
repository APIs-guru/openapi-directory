package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSinkTestServerList = []string{
	"https://events.twilio.com",
}

type CreateSinkTestPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type CreateSinkTestSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSinkTestRequest struct {
	ServerURL  *string
	PathParams CreateSinkTestPathParams
	Security   CreateSinkTestSecurity
}

type CreateSinkTestResponse struct {
	ContentType          string
	StatusCode           int64
	EventsV1SinkSinkTest *shared.EventsV1SinkSinkTest
}
