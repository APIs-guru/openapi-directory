package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportPkLogLogIDPathParams struct {
	LogID int64 `pathParam:"style=simple,explode=false,name=log_id"`
	Pk    int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetReportPkLogLogIDQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetReportPkLogLogIDSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetReportPkLogLogIDRequest struct {
	PathParams  GetReportPkLogLogIDPathParams
	QueryParams GetReportPkLogLogIDQueryParams
	Security    GetReportPkLogLogIDSecurity
}

type GetReportPkLogLogID200ApplicationJSON struct {
	ID     *string                              `json:"id"`
	Result *shared.ReportExecutionLogRestAPIGet `json:"result"`
}

type GetReportPkLogLogID400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPkLogLogID401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPkLogLogID404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPkLogLogID422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPkLogLogID500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPkLogLogIDResponse struct {
	ContentType                                 string
	GetReportPkLogLogID200ApplicationJSONObject *GetReportPkLogLogID200ApplicationJSON
	GetReportPkLogLogID400ApplicationJSONObject *GetReportPkLogLogID400ApplicationJSON
	GetReportPkLogLogID401ApplicationJSONObject *GetReportPkLogLogID401ApplicationJSON
	GetReportPkLogLogID404ApplicationJSONObject *GetReportPkLogLogID404ApplicationJSON
	GetReportPkLogLogID422ApplicationJSONObject *GetReportPkLogLogID422ApplicationJSON
	GetReportPkLogLogID500ApplicationJSONObject *GetReportPkLogLogID500ApplicationJSON
	StatusCode                                  int64
}
