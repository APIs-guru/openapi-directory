package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetDatabaseSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabaseRequest struct {
	QueryParams GetDatabaseQueryParams
	Security    GetDatabaseSecurity
}

type GetDatabase200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDatabase200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDatabase200ApplicationJSON struct {
	Count              *float64                                         `json:"count"`
	DescriptionColumns *GetDatabase200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                         `json:"ids"`
	LabelColumns       *GetDatabase200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                         `json:"list_columns"`
	ListTitle          *string                                          `json:"list_title"`
	OrderColumns       []string                                         `json:"order_columns"`
	Result             []shared.DatabaseRestAPIGetList                  `json:"result"`
}

type GetDatabase400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabase401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabase422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabase500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabaseResponse struct {
	ContentType                         string
	GetDatabase200ApplicationJSONObject *GetDatabase200ApplicationJSON
	GetDatabase400ApplicationJSONObject *GetDatabase400ApplicationJSON
	GetDatabase401ApplicationJSONObject *GetDatabase401ApplicationJSON
	GetDatabase422ApplicationJSONObject *GetDatabase422ApplicationJSON
	GetDatabase500ApplicationJSONObject *GetDatabase500ApplicationJSON
	StatusCode                          int64
}
