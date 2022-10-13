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

type GetSavedQueryRequest struct {
	QueryParams GetSavedQueryQueryParams
	Security    GetSavedQuerySecurity
}

type GetSavedQuery200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetSavedQuery200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetSavedQuery200ApplicationJSON struct {
	Count              *float64                                           `json:"count"`
	DescriptionColumns *GetSavedQuery200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                           `json:"ids"`
	LabelColumns       *GetSavedQuery200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                           `json:"list_columns"`
	ListTitle          *string                                            `json:"list_title"`
	OrderColumns       []string                                           `json:"order_columns"`
	Result             []shared.SavedQueryRestAPIGetList                  `json:"result"`
}

type GetSavedQuery400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQuery401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQuery422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQuery500ApplicationJSON struct {
	Message *string `json:"message"`
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
