package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChartQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteChartSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteChart200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteChart401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteChart403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteChart404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteChart422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteChart500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteChartRequest struct {
	QueryParams DeleteChartQueryParams
	Security    DeleteChartSecurity
}

type DeleteChartResponse struct {
	ContentType                         string
	DeleteChart200ApplicationJSONObject *DeleteChart200ApplicationJSON
	DeleteChart401ApplicationJSONObject *DeleteChart401ApplicationJSON
	DeleteChart403ApplicationJSONObject *DeleteChart403ApplicationJSON
	DeleteChart404ApplicationJSONObject *DeleteChart404ApplicationJSON
	DeleteChart422ApplicationJSONObject *DeleteChart422ApplicationJSON
	DeleteChart500ApplicationJSONObject *DeleteChart500ApplicationJSON
	StatusCode                          int64
}
