package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetReportPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetReportPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetReportPkRequest struct {
	PathParams  GetReportPkPathParams
	QueryParams GetReportPkQueryParams
	Security    GetReportPkSecurity
}

type GetReportPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetReportPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetReportPk200ApplicationJSON struct {
	DescriptionColumns *GetReportPk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                          `json:"id"`
	LabelColumns       *GetReportPk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.ReportScheduleRestAPIGet                 `json:"result"`
	ShowColumns        []string                                         `json:"show_columns"`
	ShowTitle          *string                                          `json:"show_title"`
}

type GetReportPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportPkResponse struct {
	ContentType                         string
	GetReportPk200ApplicationJSONObject *GetReportPk200ApplicationJSON
	GetReportPk400ApplicationJSONObject *GetReportPk400ApplicationJSON
	GetReportPk401ApplicationJSONObject *GetReportPk401ApplicationJSON
	GetReportPk404ApplicationJSONObject *GetReportPk404ApplicationJSON
	GetReportPk422ApplicationJSONObject *GetReportPk422ApplicationJSON
	GetReportPk500ApplicationJSONObject *GetReportPk500ApplicationJSON
	StatusCode                          int64
}
