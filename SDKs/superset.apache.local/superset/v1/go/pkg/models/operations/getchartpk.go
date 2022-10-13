package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetChartPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetChartPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartPkRequest struct {
	PathParams  GetChartPkPathParams
	QueryParams GetChartPkQueryParams
	Security    GetChartPkSecurity
}

type GetChartPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetChartPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetChartPk200ApplicationJSON struct {
	DescriptionColumns *GetChartPk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                         `json:"id"`
	LabelColumns       *GetChartPk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.ChartRestAPIGet                         `json:"result"`
	ShowColumns        []string                                        `json:"show_columns"`
	ShowTitle          *string                                         `json:"show_title"`
}

type GetChartPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkResponse struct {
	ContentType                        string
	GetChartPk200ApplicationJSONObject *GetChartPk200ApplicationJSON
	GetChartPk400ApplicationJSONObject *GetChartPk400ApplicationJSON
	GetChartPk401ApplicationJSONObject *GetChartPk401ApplicationJSON
	GetChartPk404ApplicationJSONObject *GetChartPk404ApplicationJSON
	GetChartPk422ApplicationJSONObject *GetChartPk422ApplicationJSON
	GetChartPk500ApplicationJSONObject *GetChartPk500ApplicationJSON
	StatusCode                         int64
}
