package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardExportQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type GetDashboardExportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardExportRequest struct {
	QueryParams GetDashboardExportQueryParams
	Security    GetDashboardExportSecurity
}

type GetDashboardExport400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardExport401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardExport404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardExport422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardExport500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardExportResponse struct {
	Body                                       []byte
	ContentType                                string
	GetDashboardExport400ApplicationJSONObject *GetDashboardExport400ApplicationJSON
	GetDashboardExport401ApplicationJSONObject *GetDashboardExport401ApplicationJSON
	GetDashboardExport404ApplicationJSONObject *GetDashboardExport404ApplicationJSON
	GetDashboardExport422ApplicationJSONObject *GetDashboardExport422ApplicationJSON
	GetDashboardExport500ApplicationJSONObject *GetDashboardExport500ApplicationJSON
	StatusCode                                 int64
}
