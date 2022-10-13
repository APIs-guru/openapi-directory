package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPredictionsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventPredictionsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventPredictionsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventPredictionsRequest struct {
	PathParams GetEventPredictionsPathParams
	Headers    GetEventPredictionsHeaders
	Security   GetEventPredictionsSecurity
}

type GetEventPredictionsResponse struct {
	ContentType      string
	EventPredictions map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
