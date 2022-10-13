package operations

import (
	"openapi/pkg/models/shared"
)

type PostChartSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostChartRequest struct {
	Request  shared.ChartRestAPIPost `request:"mediaType=application/json"`
	Security PostChartSecurity
}

type PostChart201ApplicationJSON struct {
	ID     *float64                 `json:"id"`
	Result *shared.ChartRestAPIPost `json:"result"`
}

type PostChart400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostChart401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostChart422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostChart500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostChartResponse struct {
	ContentType                       string
	PostChart201ApplicationJSONObject *PostChart201ApplicationJSON
	PostChart400ApplicationJSONObject *PostChart400ApplicationJSON
	PostChart401ApplicationJSONObject *PostChart401ApplicationJSON
	PostChart422ApplicationJSONObject *PostChart422ApplicationJSON
	PostChart500ApplicationJSONObject *PostChart500ApplicationJSON
	StatusCode                        int64
}
