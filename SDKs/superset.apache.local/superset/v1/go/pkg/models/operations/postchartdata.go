package operations

import (
	"openapi/pkg/models/shared"
)

type PostChartDataSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostChartDataRequest struct {
	Request  shared.ChartDataQueryContextSchema `request:"mediaType=application/json"`
	Security PostChartDataSecurity
}

type PostChartData400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostChartData401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostChartData500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostChartDataResponse struct {
	ChartDataAsyncResponseSchema          *shared.ChartDataAsyncResponseSchema
	ChartDataResponseSchema               *shared.ChartDataResponseSchema
	ContentType                           string
	PostChartData400ApplicationJSONObject *PostChartData400ApplicationJSON
	PostChartData401ApplicationJSONObject *PostChartData401ApplicationJSON
	PostChartData500ApplicationJSONObject *PostChartData500ApplicationJSON
	StatusCode                            int64
}
