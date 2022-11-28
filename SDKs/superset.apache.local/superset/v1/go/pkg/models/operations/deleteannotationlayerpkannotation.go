package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAnnotationLayerPkAnnotationPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteAnnotationLayerPkAnnotationQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteAnnotationLayerPkAnnotationSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAnnotationLayerPkAnnotation200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotation401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotation404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotation422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotation500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotationRequest struct {
	PathParams  DeleteAnnotationLayerPkAnnotationPathParams
	QueryParams DeleteAnnotationLayerPkAnnotationQueryParams
	Security    DeleteAnnotationLayerPkAnnotationSecurity
}

type DeleteAnnotationLayerPkAnnotationResponse struct {
	ContentType                                               string
	DeleteAnnotationLayerPkAnnotation200ApplicationJSONObject *DeleteAnnotationLayerPkAnnotation200ApplicationJSON
	DeleteAnnotationLayerPkAnnotation401ApplicationJSONObject *DeleteAnnotationLayerPkAnnotation401ApplicationJSON
	DeleteAnnotationLayerPkAnnotation404ApplicationJSONObject *DeleteAnnotationLayerPkAnnotation404ApplicationJSON
	DeleteAnnotationLayerPkAnnotation422ApplicationJSONObject *DeleteAnnotationLayerPkAnnotation422ApplicationJSON
	DeleteAnnotationLayerPkAnnotation500ApplicationJSONObject *DeleteAnnotationLayerPkAnnotation500ApplicationJSON
	StatusCode                                                int64
}
