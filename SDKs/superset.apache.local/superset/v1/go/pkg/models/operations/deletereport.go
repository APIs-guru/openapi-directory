package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteReportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteReportRequest struct {
	QueryParams DeleteReportQueryParams
	Security    DeleteReportSecurity
}

type DeleteReport200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReport401ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReport403ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReport404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReport422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReport500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteReportResponse struct {
	ContentType                          string
	DeleteReport200ApplicationJSONObject *DeleteReport200ApplicationJSON
	DeleteReport401ApplicationJSONObject *DeleteReport401ApplicationJSON
	DeleteReport403ApplicationJSONObject *DeleteReport403ApplicationJSON
	DeleteReport404ApplicationJSONObject *DeleteReport404ApplicationJSON
	DeleteReport422ApplicationJSONObject *DeleteReport422ApplicationJSON
	DeleteReport500ApplicationJSONObject *DeleteReport500ApplicationJSON
	StatusCode                           int64
}
