package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsByYearPathParams struct {
	Year int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetEventsByYearHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventsByYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventsByYearRequest struct {
	PathParams GetEventsByYearPathParams
	Headers    GetEventsByYearHeaders
	Security   GetEventsByYearSecurity
}

type GetEventsByYearResponse struct {
	ContentType string
	Events      []shared.Event
	Headers     map[string][]string
	StatusCode  int64
}
