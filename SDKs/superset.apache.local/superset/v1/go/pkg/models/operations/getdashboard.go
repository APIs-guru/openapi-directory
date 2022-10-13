package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetDashboardSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardRequest struct {
	QueryParams GetDashboardQueryParams
	Security    GetDashboardSecurity
}

type GetDashboard200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDashboard200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDashboard200ApplicationJSON struct {
	Count              *float64                                          `json:"count"`
	DescriptionColumns *GetDashboard200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                          `json:"ids"`
	LabelColumns       *GetDashboard200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                          `json:"list_columns"`
	ListTitle          *string                                           `json:"list_title"`
	OrderColumns       []string                                          `json:"order_columns"`
	Result             []shared.DashboardRestAPIGetList                  `json:"result"`
}

type GetDashboard400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboard401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboard422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboard500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardResponse struct {
	ContentType                          string
	GetDashboard200ApplicationJSONObject *GetDashboard200ApplicationJSON
	GetDashboard400ApplicationJSONObject *GetDashboard400ApplicationJSON
	GetDashboard401ApplicationJSONObject *GetDashboard401ApplicationJSON
	GetDashboard422ApplicationJSONObject *GetDashboard422ApplicationJSON
	GetDashboard500ApplicationJSONObject *GetDashboard500ApplicationJSON
	StatusCode                           int64
}
