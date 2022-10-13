package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEventServers = []string{
	"https://monitor.twilio.com",
}

type FetchEventPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEventRequest struct {
	ServerURL  *string
	PathParams FetchEventPathParams
	Security   FetchEventSecurity
}

type FetchEventResponse struct {
	ContentType    string
	StatusCode     int64
	MonitorV1Event *shared.MonitorV1Event
}
