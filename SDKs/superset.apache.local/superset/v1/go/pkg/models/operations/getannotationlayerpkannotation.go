package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationLayerPkAnnotationPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetAnnotationLayerPkAnnotationQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetAnnotationLayerPkAnnotationSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAnnotationLayerPkAnnotation200ApplicationJSON struct {
	Count  *float64                          `json:"count,omitempty"`
	Ids    []string                          `json:"ids,omitempty"`
	Result []shared.AnnotationRestAPIGetList `json:"result,omitempty"`
}

type GetAnnotationLayerPkAnnotation400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotation401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotation422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotation500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotationRequest struct {
	PathParams  GetAnnotationLayerPkAnnotationPathParams
	QueryParams GetAnnotationLayerPkAnnotationQueryParams
	Security    GetAnnotationLayerPkAnnotationSecurity
}

type GetAnnotationLayerPkAnnotationResponse struct {
	ContentType                                            string
	GetAnnotationLayerPkAnnotation200ApplicationJSONObject *GetAnnotationLayerPkAnnotation200ApplicationJSON
	GetAnnotationLayerPkAnnotation400ApplicationJSONObject *GetAnnotationLayerPkAnnotation400ApplicationJSON
	GetAnnotationLayerPkAnnotation401ApplicationJSONObject *GetAnnotationLayerPkAnnotation401ApplicationJSON
	GetAnnotationLayerPkAnnotation422ApplicationJSONObject *GetAnnotationLayerPkAnnotation422ApplicationJSON
	GetAnnotationLayerPkAnnotation500ApplicationJSONObject *GetAnnotationLayerPkAnnotation500ApplicationJSON
	StatusCode                                             int64
}
