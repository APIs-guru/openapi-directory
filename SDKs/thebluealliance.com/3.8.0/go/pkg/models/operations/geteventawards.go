package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventAwardsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventAwardsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventAwardsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventAwardsRequest struct {
	PathParams GetEventAwardsPathParams
	Headers    GetEventAwardsHeaders
	Security   GetEventAwardsSecurity
}

type GetEventAwardsResponse struct {
	Awards      []shared.Award
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
