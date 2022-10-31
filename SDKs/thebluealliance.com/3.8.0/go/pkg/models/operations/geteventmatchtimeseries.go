package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventMatchTimeseriesPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventMatchTimeseriesHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventMatchTimeseriesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventMatchTimeseriesRequest struct {
	PathParams GetEventMatchTimeseriesPathParams
	Headers    GetEventMatchTimeseriesHeaders
	Security   GetEventMatchTimeseriesSecurity
}

type GetEventMatchTimeseriesResponse struct {
	ContentType                                      string
	Headers                                          map[string][]string
	StatusCode                                       int64
	GetEventMatchTimeseries200ApplicationJSONStrings []string
}
