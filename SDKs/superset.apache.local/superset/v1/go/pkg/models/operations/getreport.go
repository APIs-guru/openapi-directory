package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetReportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetReportRequest struct {
	QueryParams GetReportQueryParams
	Security    GetReportSecurity
}

type GetReport200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetReport200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetReport200ApplicationJSON struct {
	Count              *float64                                       `json:"count"`
	DescriptionColumns *GetReport200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                       `json:"ids"`
	LabelColumns       *GetReport200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                       `json:"list_columns"`
	ListTitle          *string                                        `json:"list_title"`
	OrderColumns       []string                                       `json:"order_columns"`
	Result             []shared.ReportScheduleRestAPIGetList          `json:"result"`
}

type GetReport400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReport401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReport422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReport500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportResponse struct {
	ContentType                       string
	GetReport200ApplicationJSONObject *GetReport200ApplicationJSON
	GetReport400ApplicationJSONObject *GetReport400ApplicationJSON
	GetReport401ApplicationJSONObject *GetReport401ApplicationJSON
	GetReport422ApplicationJSONObject *GetReport422ApplicationJSON
	GetReport500ApplicationJSONObject *GetReport500ApplicationJSON
	StatusCode                        int64
}
