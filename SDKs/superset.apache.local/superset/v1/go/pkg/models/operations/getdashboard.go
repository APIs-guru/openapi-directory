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

type GetDashboard200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetDashboard200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetDashboard200ApplicationJSON struct {
	Count              *float64                                          `json:"count,omitempty"`
	DescriptionColumns *GetDashboard200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                          `json:"ids,omitempty"`
	LabelColumns       *GetDashboard200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                          `json:"list_columns,omitempty"`
	ListTitle          *string                                           `json:"list_title,omitempty"`
	OrderColumns       []string                                          `json:"order_columns,omitempty"`
	Result             []shared.DashboardRestAPIGetList                  `json:"result,omitempty"`
}

type GetDashboard400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboard401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboard422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboard500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardRequest struct {
	QueryParams GetDashboardQueryParams
	Security    GetDashboardSecurity
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
