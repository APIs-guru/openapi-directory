package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasePkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDatabasePkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetDatabasePkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabasePkRequest struct {
	PathParams  GetDatabasePkPathParams
	QueryParams GetDatabasePkQueryParams
	Security    GetDatabasePkSecurity
}

type GetDatabasePk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDatabasePk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDatabasePk200ApplicationJSON struct {
	DescriptionColumns *GetDatabasePk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                            `json:"id"`
	LabelColumns       *GetDatabasePk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.DatabaseRestAPIGet                         `json:"result"`
	ShowColumns        []string                                           `json:"show_columns"`
	ShowTitle          *string                                            `json:"show_title"`
}

type GetDatabasePk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePkResponse struct {
	ContentType                           string
	GetDatabasePk200ApplicationJSONObject *GetDatabasePk200ApplicationJSON
	GetDatabasePk400ApplicationJSONObject *GetDatabasePk400ApplicationJSON
	GetDatabasePk401ApplicationJSONObject *GetDatabasePk401ApplicationJSON
	GetDatabasePk404ApplicationJSONObject *GetDatabasePk404ApplicationJSON
	GetDatabasePk422ApplicationJSONObject *GetDatabasePk422ApplicationJSON
	GetDatabasePk500ApplicationJSONObject *GetDatabasePk500ApplicationJSON
	StatusCode                            int64
}
