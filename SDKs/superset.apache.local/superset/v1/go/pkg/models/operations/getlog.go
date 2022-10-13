package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetLogSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetLogRequest struct {
	QueryParams GetLogQueryParams
	Security    GetLogSecurity
}

type GetLog200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetLog200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetLog200ApplicationJSON struct {
	Count              *float64                                    `json:"count"`
	DescriptionColumns *GetLog200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                    `json:"ids"`
	LabelColumns       *GetLog200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                    `json:"list_columns"`
	ListTitle          *string                                     `json:"list_title"`
	OrderColumns       []string                                    `json:"order_columns"`
	Result             []shared.LogRestAPIGetList                  `json:"result"`
}

type GetLog400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetLog401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetLog422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetLog500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetLogResponse struct {
	ContentType                    string
	GetLog200ApplicationJSONObject *GetLog200ApplicationJSON
	GetLog400ApplicationJSONObject *GetLog400ApplicationJSON
	GetLog401ApplicationJSONObject *GetLog401ApplicationJSON
	GetLog422ApplicationJSONObject *GetLog422ApplicationJSON
	GetLog500ApplicationJSONObject *GetLog500ApplicationJSON
	StatusCode                     int64
}
