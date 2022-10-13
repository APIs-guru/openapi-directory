package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventTeamsStatusesPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventTeamsStatusesHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventTeamsStatusesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventTeamsStatusesRequest struct {
	PathParams GetEventTeamsStatusesPathParams
	Headers    GetEventTeamsStatusesHeaders
	Security   GetEventTeamsStatusesSecurity
}

type GetEventTeamsStatusesResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetEventTeamsStatuses200ApplicationJSONObject map[string]shared.TeamEventStatus
}
