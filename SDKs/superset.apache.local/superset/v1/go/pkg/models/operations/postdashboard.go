package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDashboardRequest struct {
	Request  shared.DashboardRestAPIPost `request:"mediaType=application/json"`
	Security PostDashboardSecurity
}

type PostDashboard201ApplicationJSON struct {
	ID     *float64                     `json:"id"`
	Result *shared.DashboardRestAPIPost `json:"result"`
}

type PostDashboard400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDashboard401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDashboard404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDashboard500ApplicationJSON struct {
	Message *string `json:"message"`
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
