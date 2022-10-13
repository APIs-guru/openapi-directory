package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDashboardPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteDashboardPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDashboardPkRequest struct {
	PathParams DeleteDashboardPkPathParams
	Security   DeleteDashboardPkSecurity
}

type DeleteDashboardPk200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDashboardPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDashboardPk403ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDashboardPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDashboardPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDashboardPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDashboardPkResponse struct {
	ContentType                               string
	DeleteDashboardPk200ApplicationJSONObject *DeleteDashboardPk200ApplicationJSON
	DeleteDashboardPk401ApplicationJSONObject *DeleteDashboardPk401ApplicationJSON
	DeleteDashboardPk403ApplicationJSONObject *DeleteDashboardPk403ApplicationJSON
	DeleteDashboardPk404ApplicationJSONObject *DeleteDashboardPk404ApplicationJSON
	DeleteDashboardPk422ApplicationJSONObject *DeleteDashboardPk422ApplicationJSON
	DeleteDashboardPk500ApplicationJSONObject *DeleteDashboardPk500ApplicationJSON
	StatusCode                                int64
}
