package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventDistrictPointsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventDistrictPointsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventDistrictPointsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventDistrictPointsRequest struct {
	PathParams GetEventDistrictPointsPathParams
	Headers    GetEventDistrictPointsHeaders
	Security   GetEventDistrictPointsSecurity
}

type GetEventDistrictPointsResponse struct {
	ContentType         string
	EventDistrictPoints *shared.EventDistrictPoints
	Headers             map[string][]string
	StatusCode          int64
}
