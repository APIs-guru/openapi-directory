package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventRequest struct {
	PathParams GetEventPathParams
	Headers    GetEventHeaders
	Security   GetEventSecurity
}

type GetEventResponse struct {
	ContentType string
	Event       *shared.Event
	Headers     map[string][]string
	StatusCode  int64
}
