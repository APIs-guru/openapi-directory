package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventAlliancesPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventAlliancesHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventAlliancesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventAlliancesRequest struct {
	PathParams GetEventAlliancesPathParams
	Headers    GetEventAlliancesHeaders
	Security   GetEventAlliancesSecurity
}

type GetEventAlliancesResponse struct {
	ContentType          string
	EliminationAlliances []shared.EliminationAlliance
	Headers              map[string][]string
	StatusCode           int64
}
