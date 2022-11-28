package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetQueryPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetQueryPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetQueryPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetQueryPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetQueryPk200ApplicationJSON struct {
	DescriptionColumns *GetQueryPk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	ID                 *string                                         `json:"id,omitempty"`
	LabelColumns       *GetQueryPk200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	Result             *shared.QueryRestAPIGet                         `json:"result,omitempty"`
	ShowColumns        []string                                        `json:"show_columns,omitempty"`
	ShowTitle          *string                                         `json:"show_title,omitempty"`
}

type GetQueryPk400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryPk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryPk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryPk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryPk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryPkRequest struct {
	PathParams  GetQueryPkPathParams
	QueryParams GetQueryPkQueryParams
	Security    GetQueryPkSecurity
}

type GetQueryPkResponse struct {
	ContentType                        string
	GetQueryPk200ApplicationJSONObject *GetQueryPk200ApplicationJSON
	GetQueryPk400ApplicationJSONObject *GetQueryPk400ApplicationJSON
	GetQueryPk401ApplicationJSONObject *GetQueryPk401ApplicationJSON
	GetQueryPk404ApplicationJSONObject *GetQueryPk404ApplicationJSON
	GetQueryPk422ApplicationJSONObject *GetQueryPk422ApplicationJSON
	GetQueryPk500ApplicationJSONObject *GetQueryPk500ApplicationJSON
	StatusCode                         int64
}
