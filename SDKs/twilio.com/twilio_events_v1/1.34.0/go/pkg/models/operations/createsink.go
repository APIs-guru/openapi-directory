package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSinkServers = []string{
	"https://events.twilio.com",
}

type CreateSinkRequestBodyCreateSinkRequest struct {
	Description       string                      `form:"name=Description"`
	SinkConfiguration interface{}                 `form:"name=SinkConfiguration"`
	SinkType          shared.SinkEnumSinkTypeEnum `form:"name=SinkType"`
}

type CreateSinkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSinkRequest struct {
	ServerURL *string
	Request   *CreateSinkRequestBodyCreateSinkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSinkSecurity
}

type CreateSinkResponse struct {
	ContentType  string
	StatusCode   int64
	EventsV1Sink *shared.EventsV1Sink
}
