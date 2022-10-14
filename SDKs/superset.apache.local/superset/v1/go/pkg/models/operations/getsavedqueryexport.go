package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedQueryExportQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type GetSavedQueryExportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetSavedQueryExportRequest struct {
	QueryParams GetSavedQueryExportQueryParams
	Security    GetSavedQueryExportSecurity
}

type GetSavedQueryExport400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryExport401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryExport404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryExport500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryExportResponse struct {
	ContentType                                      string
	GetSavedQueryExport200ApplicationZipBinaryString []byte
	GetSavedQueryExport400ApplicationJSONObject      *GetSavedQueryExport400ApplicationJSON
	GetSavedQueryExport401ApplicationJSONObject      *GetSavedQueryExport401ApplicationJSON
	GetSavedQueryExport404ApplicationJSONObject      *GetSavedQueryExport404ApplicationJSON
	GetSavedQueryExport500ApplicationJSONObject      *GetSavedQueryExport500ApplicationJSON
	StatusCode                                       int64
}
