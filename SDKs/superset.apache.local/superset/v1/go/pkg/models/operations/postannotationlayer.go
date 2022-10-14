package operations

import (
	"openapi/pkg/models/shared"
)

type PostAnnotationLayerSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostAnnotationLayerRequest struct {
	Request  shared.AnnotationLayerRestAPIPost `request:"mediaType=application/json"`
	Security PostAnnotationLayerSecurity
}

type PostAnnotationLayer201ApplicationJSON struct {
	ID     *float64                           `json:"id,omitempty"`
	Result *shared.AnnotationLayerRestAPIPost `json:"result,omitempty"`
}

type PostAnnotationLayer400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostAnnotationLayer401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostAnnotationLayer404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostAnnotationLayer500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostAnnotationLayerResponse struct {
	ContentType                                 string
	PostAnnotationLayer201ApplicationJSONObject *PostAnnotationLayer201ApplicationJSON
	PostAnnotationLayer400ApplicationJSONObject *PostAnnotationLayer400ApplicationJSON
	PostAnnotationLayer401ApplicationJSONObject *PostAnnotationLayer401ApplicationJSON
	PostAnnotationLayer404ApplicationJSONObject *PostAnnotationLayer404ApplicationJSON
	PostAnnotationLayer500ApplicationJSONObject *PostAnnotationLayer500ApplicationJSON
	StatusCode                                  int64
}
