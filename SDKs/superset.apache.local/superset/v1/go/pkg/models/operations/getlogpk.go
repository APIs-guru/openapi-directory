package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetLogPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetLogPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetLogPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetLogPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetLogPk200ApplicationJSON struct {
	DescriptionColumns *GetLogPk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	ID                 *string                                       `json:"id,omitempty"`
	LabelColumns       *GetLogPk200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	Result             *shared.LogRestAPIGet                         `json:"result,omitempty"`
	ShowColumns        []string                                      `json:"show_columns,omitempty"`
	ShowTitle          *string                                       `json:"show_title,omitempty"`
}

type GetLogPk400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLogPk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLogPk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLogPk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLogPk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetLogPkRequest struct {
	PathParams  GetLogPkPathParams
	QueryParams GetLogPkQueryParams
	Security    GetLogPkSecurity
}

type GetLogPkResponse struct {
	ContentType                      string
	GetLogPk200ApplicationJSONObject *GetLogPk200ApplicationJSON
	GetLogPk400ApplicationJSONObject *GetLogPk400ApplicationJSON
	GetLogPk401ApplicationJSONObject *GetLogPk401ApplicationJSON
	GetLogPk404ApplicationJSONObject *GetLogPk404ApplicationJSON
	GetLogPk422ApplicationJSONObject *GetLogPk422ApplicationJSON
	GetLogPk500ApplicationJSONObject *GetLogPk500ApplicationJSON
	StatusCode                       int64
}
