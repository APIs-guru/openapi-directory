package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDashboard201ApplicationJSON struct {
	ID     *float64                     `json:"id,omitempty"`
	Result *shared.DashboardRestAPIPost `json:"result,omitempty"`
}

type PostDashboard400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboard401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboard404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboard500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboardRequest struct {
	Request  shared.DashboardRestAPIPost `request:"mediaType=application/json"`
	Security PostDashboardSecurity
}

type PostDashboardResponse struct {
	ContentType                           string
	PostDashboard201ApplicationJSONObject *PostDashboard201ApplicationJSON
	PostDashboard400ApplicationJSONObject *PostDashboard400ApplicationJSON
	PostDashboard401ApplicationJSONObject *PostDashboard401ApplicationJSON
	PostDashboard404ApplicationJSONObject *PostDashboard404ApplicationJSON
	PostDashboard500ApplicationJSONObject *PostDashboard500ApplicationJSON
	StatusCode                            int64
}
