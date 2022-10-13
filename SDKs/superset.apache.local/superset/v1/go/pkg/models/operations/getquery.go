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

type GetQueryRequest struct {
	QueryParams GetQueryQueryParams
	Security    GetQuerySecurity
}

type GetQuery200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetQuery200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetQuery200ApplicationJSON struct {
	Count              *float64                                      `json:"count"`
	DescriptionColumns *GetQuery200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                      `json:"ids"`
	LabelColumns       *GetQuery200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                      `json:"list_columns"`
	ListTitle          *string                                       `json:"list_title"`
	OrderColumns       []string                                      `json:"order_columns"`
	Result             []shared.QueryRestAPIGetList                  `json:"result"`
}

type GetQuery400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetQuery401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetQuery422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetQuery500ApplicationJSON struct {
	Message *string `json:"message"`
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
