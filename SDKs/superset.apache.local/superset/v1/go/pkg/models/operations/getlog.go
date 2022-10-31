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
	ColumnName *string `json:"column_name,omitempty"`
}

type GetLog200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetLog200ApplicationJSON struct {
	Count              *float64                                    `json:"count,omitempty"`
	DescriptionColumns *GetLog200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                    `json:"ids,omitempty"`
	LabelColumns       *GetLog200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                    `json:"list_columns,omitempty"`
	ListTitle          *string                                     `json:"list_title,omitempty"`
	OrderColumns       []string                                    `json:"order_columns,omitempty"`
	Result             []shared.LogRestAPIGetList                  `json:"result,omitempty"`
}

type GetLog400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLog401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLog422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLog500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
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
