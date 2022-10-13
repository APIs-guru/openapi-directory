package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetChartSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartRequest struct {
	QueryParams GetChartQueryParams
	Security    GetChartSecurity
}

type GetChart200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetChart200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetChart200ApplicationJSON struct {
	Count              *float64                                      `json:"count"`
	DescriptionColumns *GetChart200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                      `json:"ids"`
	LabelColumns       *GetChart200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                      `json:"list_columns"`
	ListTitle          *string                                       `json:"list_title"`
	OrderColumns       []string                                      `json:"order_columns"`
	Result             []shared.ChartRestAPIGetList                  `json:"result"`
}

type GetChart400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChart401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChart422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChart500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartResponse struct {
	ContentType                      string
	GetChart200ApplicationJSONObject *GetChart200ApplicationJSON
	GetChart400ApplicationJSONObject *GetChart400ApplicationJSON
	GetChart401ApplicationJSONObject *GetChart401ApplicationJSON
	GetChart422ApplicationJSONObject *GetChart422ApplicationJSON
	GetChart500ApplicationJSONObject *GetChart500ApplicationJSON
	StatusCode                       int64
}
