package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationLayerQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetAnnotationLayerSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAnnotationLayerRequest struct {
	QueryParams GetAnnotationLayerQueryParams
	Security    GetAnnotationLayerSecurity
}

type GetAnnotationLayer200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetAnnotationLayer200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetAnnotationLayer200ApplicationJSON struct {
	Count              *float64                                                `json:"count,omitempty"`
	DescriptionColumns *GetAnnotationLayer200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                                `json:"ids,omitempty"`
	LabelColumns       *GetAnnotationLayer200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                                `json:"list_columns,omitempty"`
	ListTitle          *string                                                 `json:"list_title,omitempty"`
	OrderColumns       []string                                                `json:"order_columns,omitempty"`
	Result             []shared.AnnotationLayerRestAPIGetList                  `json:"result,omitempty"`
}

type GetAnnotationLayer400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayer401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayer422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayer500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerResponse struct {
	ContentType                                string
	GetAnnotationLayer200ApplicationJSONObject *GetAnnotationLayer200ApplicationJSON
	GetAnnotationLayer400ApplicationJSONObject *GetAnnotationLayer400ApplicationJSON
	GetAnnotationLayer401ApplicationJSONObject *GetAnnotationLayer401ApplicationJSON
	GetAnnotationLayer422ApplicationJSONObject *GetAnnotationLayer422ApplicationJSON
	GetAnnotationLayer500ApplicationJSONObject *GetAnnotationLayer500ApplicationJSON
	StatusCode                                 int64
}
