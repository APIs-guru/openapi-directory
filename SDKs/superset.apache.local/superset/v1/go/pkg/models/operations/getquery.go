package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetQuerySecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetQuery200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetQuery200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetQuery200ApplicationJSON struct {
	Count              *float64                                      `json:"count,omitempty"`
	DescriptionColumns *GetQuery200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                      `json:"ids,omitempty"`
	LabelColumns       *GetQuery200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                      `json:"list_columns,omitempty"`
	ListTitle          *string                                       `json:"list_title,omitempty"`
	OrderColumns       []string                                      `json:"order_columns,omitempty"`
	Result             []shared.QueryRestAPIGetList                  `json:"result,omitempty"`
}

type GetQuery400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQuery401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQuery422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQuery500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryRequest struct {
	QueryParams GetQueryQueryParams
	Security    GetQuerySecurity
}

type GetQueryResponse struct {
	ContentType                      string
	GetQuery200ApplicationJSONObject *GetQuery200ApplicationJSON
	GetQuery400ApplicationJSONObject *GetQuery400ApplicationJSON
	GetQuery401ApplicationJSONObject *GetQuery401ApplicationJSON
	GetQuery422ApplicationJSONObject *GetQuery422ApplicationJSON
	GetQuery500ApplicationJSONObject *GetQuery500ApplicationJSON
	StatusCode                       int64
}
