package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEventTypeServerList = []string{
	"https://events.twilio.com",
}

type FetchEventTypePathParams struct {
	Type string `pathParam:"style=simple,explode=false,name=Type"`
}

type FetchEventTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEventTypeRequest struct {
	ServerURL  *string
	PathParams FetchEventTypePathParams
	Security   FetchEventTypeSecurity
}

type FetchEventTypeResponse struct {
	ContentType       string
	StatusCode        int64
	EventsV1EventType *shared.EventsV1EventType
}
