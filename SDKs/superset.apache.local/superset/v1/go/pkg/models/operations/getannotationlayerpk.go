package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationLayerPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetAnnotationLayerPkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetAnnotationLayerPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAnnotationLayerPkRequest struct {
	PathParams  GetAnnotationLayerPkPathParams
	QueryParams GetAnnotationLayerPkQueryParams
	Security    GetAnnotationLayerPkSecurity
}

type GetAnnotationLayerPk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetAnnotationLayerPk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetAnnotationLayerPk200ApplicationJSON struct {
	DescriptionColumns *GetAnnotationLayerPk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                                   `json:"id"`
	LabelColumns       *GetAnnotationLayerPk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.AnnotationLayerRestAPIGet                         `json:"result"`
	ShowColumns        []string                                                  `json:"show_columns"`
	ShowTitle          *string                                                   `json:"show_title"`
}

type GetAnnotationLayerPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerPkResponse struct {
	ContentType                                  string
	GetAnnotationLayerPk200ApplicationJSONObject *GetAnnotationLayerPk200ApplicationJSON
	GetAnnotationLayerPk400ApplicationJSONObject *GetAnnotationLayerPk400ApplicationJSON
	GetAnnotationLayerPk401ApplicationJSONObject *GetAnnotationLayerPk401ApplicationJSON
	GetAnnotationLayerPk404ApplicationJSONObject *GetAnnotationLayerPk404ApplicationJSON
	GetAnnotationLayerPk422ApplicationJSONObject *GetAnnotationLayerPk422ApplicationJSON
	GetAnnotationLayerPk500ApplicationJSONObject *GetAnnotationLayerPk500ApplicationJSON
	StatusCode                                   int64
}
