package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetDatasetSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetRequest struct {
	QueryParams GetDatasetQueryParams
	Security    GetDatasetSecurity
}

type GetDataset200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetDataset200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetDataset200ApplicationJSON struct {
	Count              *float64                                        `json:"count,omitempty"`
	DescriptionColumns *GetDataset200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                        `json:"ids,omitempty"`
	LabelColumns       *GetDataset200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                        `json:"list_columns,omitempty"`
	ListTitle          *string                                         `json:"list_title,omitempty"`
	OrderColumns       []string                                        `json:"order_columns,omitempty"`
	Result             []shared.DatasetRestAPIGetList                  `json:"result,omitempty"`
}

type GetDataset400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDataset401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDataset422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDataset500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetResponse struct {
	ContentType                        string
	GetDataset200ApplicationJSONObject *GetDataset200ApplicationJSON
	GetDataset400ApplicationJSONObject *GetDataset400ApplicationJSON
	GetDataset401ApplicationJSONObject *GetDataset401ApplicationJSON
	GetDataset422ApplicationJSONObject *GetDataset422ApplicationJSON
	GetDataset500ApplicationJSONObject *GetDataset500ApplicationJSON
	StatusCode                         int64
}
