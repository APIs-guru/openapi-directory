package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSinkServerList = []string{
	"https://events.twilio.com",
}

type UpdateSinkPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSinkUpdateSinkRequest struct {
	Description string `form:"name=Description"`
}

type UpdateSinkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSinkRequest struct {
	ServerURL  *string
	PathParams UpdateSinkPathParams
	Request    *UpdateSinkUpdateSinkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSinkSecurity
}

type UpdateSinkResponse struct {
	ContentType  string
	StatusCode   int64
	EventsV1Sink *shared.EventsV1Sink
}
