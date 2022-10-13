package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteReportPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteReportPkRequest struct {
	PathParams DeleteReportPkPathParams
	Security   DeleteReportPkSecurity
}

type DeleteReportPk200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReportPk403ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReportPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReportPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReportPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReportPkResponse struct {
	ContentType                            string
	DeleteReportPk200ApplicationJSONObject *DeleteReportPk200ApplicationJSON
	DeleteReportPk403ApplicationJSONObject *DeleteReportPk403ApplicationJSON
	DeleteReportPk404ApplicationJSONObject *DeleteReportPk404ApplicationJSON
	DeleteReportPk422ApplicationJSONObject *DeleteReportPk422ApplicationJSON
	DeleteReportPk500ApplicationJSONObject *DeleteReportPk500ApplicationJSON
	StatusCode                             int64
}
