package operations

import (
	"openapi/pkg/models/shared"
)

type GetMatchTimeseriesPathParams struct {
	MatchKey string `pathParam:"style=simple,explode=false,name=match_key"`
}

type GetMatchTimeseriesHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetMatchTimeseriesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetMatchTimeseriesRequest struct {
	PathParams GetMatchTimeseriesPathParams
	Headers    GetMatchTimeseriesHeaders
	Security   GetMatchTimeseriesSecurity
}

type GetMatchTimeseriesResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	GetMatchTimeseries200ApplicationJSONObjects []map[string]interface{}
}
