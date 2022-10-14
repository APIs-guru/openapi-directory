package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationLayerRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetAnnotationLayerRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetAnnotationLayerRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAnnotationLayerRelatedColumnNameRequest struct {
	PathParams  GetAnnotationLayerRelatedColumnNamePathParams
	QueryParams GetAnnotationLayerRelatedColumnNameQueryParams
	Security    GetAnnotationLayerRelatedColumnNameSecurity
}

type GetAnnotationLayerRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerRelatedColumnNameResponse struct {
	ContentType                                                 string
	GetAnnotationLayerRelatedColumnName400ApplicationJSONObject *GetAnnotationLayerRelatedColumnName400ApplicationJSON
	GetAnnotationLayerRelatedColumnName401ApplicationJSONObject *GetAnnotationLayerRelatedColumnName401ApplicationJSON
	GetAnnotationLayerRelatedColumnName404ApplicationJSONObject *GetAnnotationLayerRelatedColumnName404ApplicationJSON
	GetAnnotationLayerRelatedColumnName500ApplicationJSONObject *GetAnnotationLayerRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                                       *shared.RelatedResponseSchema
	StatusCode                                                  int64
}
