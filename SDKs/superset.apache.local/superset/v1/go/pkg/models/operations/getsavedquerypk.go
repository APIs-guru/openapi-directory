package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedQueryPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetSavedQueryPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetSavedQueryPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetSavedQueryPkRequest struct {
	PathParams  GetSavedQueryPkPathParams
	QueryParams GetSavedQueryPkQueryParams
	Security    GetSavedQueryPkSecurity
}

type GetSavedQueryPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetSavedQueryPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetSavedQueryPk200ApplicationJSON struct {
	DescriptionColumns *GetSavedQueryPk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                              `json:"id"`
	LabelColumns       *GetSavedQueryPk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.SavedQueryRestAPIGet                         `json:"result"`
	ShowColumns        []string                                             `json:"show_columns"`
	ShowTitle          *string                                              `json:"show_title"`
}

type GetSavedQueryPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryPkResponse struct {
	ContentType                             string
	GetSavedQueryPk200ApplicationJSONObject *GetSavedQueryPk200ApplicationJSON
	GetSavedQueryPk400ApplicationJSONObject *GetSavedQueryPk400ApplicationJSON
	GetSavedQueryPk401ApplicationJSONObject *GetSavedQueryPk401ApplicationJSON
	GetSavedQueryPk404ApplicationJSONObject *GetSavedQueryPk404ApplicationJSON
	GetSavedQueryPk422ApplicationJSONObject *GetSavedQueryPk422ApplicationJSON
	GetSavedQueryPk500ApplicationJSONObject *GetSavedQueryPk500ApplicationJSON
	StatusCode                              int64
}
