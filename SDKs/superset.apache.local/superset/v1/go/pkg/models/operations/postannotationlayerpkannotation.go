package operations

import (
	"openapi/pkg/models/shared"
)

type PostAnnotationLayerPkAnnotationPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PostAnnotationLayerPkAnnotationSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostAnnotationLayerPkAnnotationRequest struct {
	PathParams PostAnnotationLayerPkAnnotationPathParams
	Request    shared.AnnotationRestAPIPost `request:"mediaType=application/json"`
	Security   PostAnnotationLayerPkAnnotationSecurity
}

type PostAnnotationLayerPkAnnotation201ApplicationJSON struct {
	ID     *float64                      `json:"id"`
	Result *shared.AnnotationRestAPIPost `json:"result"`
}

type PostAnnotationLayerPkAnnotation400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostAnnotationLayerPkAnnotation401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostAnnotationLayerPkAnnotation404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostAnnotationLayerPkAnnotation500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostAnnotationLayerPkAnnotationResponse struct {
	ContentType                                             string
	PostAnnotationLayerPkAnnotation201ApplicationJSONObject *PostAnnotationLayerPkAnnotation201ApplicationJSON
	PostAnnotationLayerPkAnnotation400ApplicationJSONObject *PostAnnotationLayerPkAnnotation400ApplicationJSON
	PostAnnotationLayerPkAnnotation401ApplicationJSONObject *PostAnnotationLayerPkAnnotation401ApplicationJSON
	PostAnnotationLayerPkAnnotation404ApplicationJSONObject *PostAnnotationLayerPkAnnotation404ApplicationJSON
	PostAnnotationLayerPkAnnotation500ApplicationJSONObject *PostAnnotationLayerPkAnnotation500ApplicationJSON
	StatusCode                                              int64
}
