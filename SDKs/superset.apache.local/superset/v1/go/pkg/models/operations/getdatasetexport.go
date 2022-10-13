package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetExportQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type GetDatasetExportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetExportRequest struct {
	QueryParams GetDatasetExportQueryParams
	Security    GetDatasetExportSecurity
}

type GetDatasetExport400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetExport401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetExport404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetExport500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetExportResponse struct {
	Body                                     []byte
	ContentType                              string
	GetDatasetExport400ApplicationJSONObject *GetDatasetExport400ApplicationJSON
	GetDatasetExport401ApplicationJSONObject *GetDatasetExport401ApplicationJSON
	GetDatasetExport404ApplicationJSONObject *GetDatasetExport404ApplicationJSON
	GetDatasetExport500ApplicationJSONObject *GetDatasetExport500ApplicationJSON
	StatusCode                               int64
}
