package operations

import (
	"openapi/pkg/models/shared"
)

type PutDashboardPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutDashboardPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutDashboardPkRequest struct {
	PathParams PutDashboardPkPathParams
	Request    shared.DashboardRestAPIPut `request:"mediaType=application/json"`
	Security   PutDashboardPkSecurity
}

type PutDashboardPk200ApplicationJSON struct {
	ID     *float64                    `json:"id"`
	Result *shared.DashboardRestAPIPut `json:"result"`
}

type PutDashboardPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDashboardPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDashboardPk403ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDashboardPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDashboardPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDashboardPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDashboardPkResponse struct {
	ContentType                            string
	PutDashboardPk200ApplicationJSONObject *PutDashboardPk200ApplicationJSON
	PutDashboardPk400ApplicationJSONObject *PutDashboardPk400ApplicationJSON
	PutDashboardPk401ApplicationJSONObject *PutDashboardPk401ApplicationJSON
	PutDashboardPk403ApplicationJSONObject *PutDashboardPk403ApplicationJSON
	PutDashboardPk404ApplicationJSONObject *PutDashboardPk404ApplicationJSON
	PutDashboardPk422ApplicationJSONObject *PutDashboardPk422ApplicationJSON
	PutDashboardPk500ApplicationJSONObject *PutDashboardPk500ApplicationJSON
	StatusCode                             int64
}
