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

type GetDatasetPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetDatasetPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetDatasetPk200ApplicationJSON struct {
	DescriptionColumns *GetDatasetPk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	ID                 *string                                           `json:"id,omitempty"`
	LabelColumns       *GetDatasetPk200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	Result             *shared.DatasetRestAPIGet                         `json:"result,omitempty"`
	ShowColumns        []string                                          `json:"show_columns,omitempty"`
	ShowTitle          *string                                           `json:"show_title,omitempty"`
}

type GetDatasetPk400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPkRequest struct {
	PathParams  GetDatasetPkPathParams
	QueryParams GetDatasetPkQueryParams
	Security    GetDatasetPkSecurity
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
