package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartExportQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type GetChartExportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartExport400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartExport401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartExport404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartExport500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartExportRequest struct {
	QueryParams GetChartExportQueryParams
	Security    GetChartExportSecurity
}

type GetChartExportResponse struct {
	ContentType                                 string
	GetChartExport200ApplicationZipBinaryString []byte
	GetChartExport400ApplicationJSONObject      *GetChartExport400ApplicationJSON
	GetChartExport401ApplicationJSONObject      *GetChartExport401ApplicationJSON
	GetChartExport404ApplicationJSONObject      *GetChartExport404ApplicationJSON
	GetChartExport500ApplicationJSONObject      *GetChartExport500ApplicationJSON
	StatusCode                                  int64
}
