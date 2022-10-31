package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDashboardQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteDashboardSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDashboardRequest struct {
	QueryParams DeleteDashboardQueryParams
	Security    DeleteDashboardSecurity
}

type DeleteDashboard200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDashboard401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDashboard403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDashboard404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDashboard422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDashboard500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDashboardResponse struct {
	ContentType                             string
	DeleteDashboard200ApplicationJSONObject *DeleteDashboard200ApplicationJSON
	DeleteDashboard401ApplicationJSONObject *DeleteDashboard401ApplicationJSON
	DeleteDashboard403ApplicationJSONObject *DeleteDashboard403ApplicationJSON
	DeleteDashboard404ApplicationJSONObject *DeleteDashboard404ApplicationJSON
	DeleteDashboard422ApplicationJSONObject *DeleteDashboard422ApplicationJSON
	DeleteDashboard500ApplicationJSONObject *DeleteDashboard500ApplicationJSON
	StatusCode                              int64
}
