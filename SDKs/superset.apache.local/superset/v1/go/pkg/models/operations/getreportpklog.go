package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportPkLogPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetReportPkLogQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetReportPkLogSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetReportPkLogRequest struct {
	PathParams  GetReportPkLogPathParams
	QueryParams GetReportPkLogQueryParams
	Security    GetReportPkLogSecurity
}

type GetReportPkLog200ApplicationJSON struct {
	Count  *float64                                  `json:"count,omitempty"`
	Ids    []string                                  `json:"ids,omitempty"`
	Result []shared.ReportExecutionLogRestAPIGetList `json:"result,omitempty"`
}

type GetReportPkLog400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportPkLog401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportPkLog422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportPkLog500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportPkLogResponse struct {
	ContentType                            string
	GetReportPkLog200ApplicationJSONObject *GetReportPkLog200ApplicationJSON
	GetReportPkLog400ApplicationJSONObject *GetReportPkLog400ApplicationJSON
	GetReportPkLog401ApplicationJSONObject *GetReportPkLog401ApplicationJSON
	GetReportPkLog422ApplicationJSONObject *GetReportPkLog422ApplicationJSON
	GetReportPkLog500ApplicationJSONObject *GetReportPkLog500ApplicationJSON
	StatusCode                             int64
}
