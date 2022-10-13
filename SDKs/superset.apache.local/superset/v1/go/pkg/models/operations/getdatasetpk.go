package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDatasetPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetDatasetPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetPkRequest struct {
	PathParams  GetDatasetPkPathParams
	QueryParams GetDatasetPkQueryParams
	Security    GetDatasetPkSecurity
}

type GetDatasetPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDatasetPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetDatasetPk200ApplicationJSON struct {
	DescriptionColumns *GetDatasetPk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                           `json:"id"`
	LabelColumns       *GetDatasetPk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.DatasetRestAPIGet                         `json:"result"`
	ShowColumns        []string                                          `json:"show_columns"`
	ShowTitle          *string                                           `json:"show_title"`
}

type GetDatasetPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetPkResponse struct {
	ContentType                          string
	GetDatasetPk200ApplicationJSONObject *GetDatasetPk200ApplicationJSON
	GetDatasetPk400ApplicationJSONObject *GetDatasetPk400ApplicationJSON
	GetDatasetPk401ApplicationJSONObject *GetDatasetPk401ApplicationJSON
	GetDatasetPk404ApplicationJSONObject *GetDatasetPk404ApplicationJSON
	GetDatasetPk422ApplicationJSONObject *GetDatasetPk422ApplicationJSON
	GetDatasetPk500ApplicationJSONObject *GetDatasetPk500ApplicationJSON
	StatusCode                           int64
}
