package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedQueryQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetSavedQuerySecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetSavedQuery200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetSavedQuery200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetSavedQuery200ApplicationJSON struct {
	Count              *float64                                           `json:"count,omitempty"`
	DescriptionColumns *GetSavedQuery200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                           `json:"ids,omitempty"`
	LabelColumns       *GetSavedQuery200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                           `json:"list_columns,omitempty"`
	ListTitle          *string                                            `json:"list_title,omitempty"`
	OrderColumns       []string                                           `json:"order_columns,omitempty"`
	Result             []shared.SavedQueryRestAPIGetList                  `json:"result,omitempty"`
}

type GetSavedQuery400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQuery401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQuery422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQuery500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryRequest struct {
	QueryParams GetSavedQueryQueryParams
	Security    GetSavedQuerySecurity
}

type GetSavedQueryResponse struct {
	ContentType                           string
	GetSavedQuery200ApplicationJSONObject *GetSavedQuery200ApplicationJSON
	GetSavedQuery400ApplicationJSONObject *GetSavedQuery400ApplicationJSON
	GetSavedQuery401ApplicationJSONObject *GetSavedQuery401ApplicationJSON
	GetSavedQuery422ApplicationJSONObject *GetSavedQuery422ApplicationJSON
	GetSavedQuery500ApplicationJSONObject *GetSavedQuery500ApplicationJSON
	StatusCode                            int64
}
