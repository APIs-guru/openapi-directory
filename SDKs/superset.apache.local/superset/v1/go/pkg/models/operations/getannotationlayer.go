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
	ColumnName *string `json:"column_name"`
}

type GetAnnotationLayer200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetAnnotationLayer200ApplicationJSON struct {
	Count              *float64                                                `json:"count"`
	DescriptionColumns *GetAnnotationLayer200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                                `json:"ids"`
	LabelColumns       *GetAnnotationLayer200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                                `json:"list_columns"`
	ListTitle          *string                                                 `json:"list_title"`
	OrderColumns       []string                                                `json:"order_columns"`
	Result             []shared.AnnotationLayerRestAPIGetList                  `json:"result"`
}

type GetAnnotationLayer400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayer401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayer422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayer500ApplicationJSON struct {
	Message *string `json:"message"`
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
