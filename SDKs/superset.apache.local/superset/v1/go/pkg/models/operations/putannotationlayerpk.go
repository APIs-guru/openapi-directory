package operations

import (
	"openapi/pkg/models/shared"
)

type PutAnnotationLayerPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutAnnotationLayerPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutAnnotationLayerPkRequest struct {
	PathParams PutAnnotationLayerPkPathParams
	Request    shared.AnnotationLayerRestAPIPut `request:"mediaType=application/json"`
	Security   PutAnnotationLayerPkSecurity
}

type PutAnnotationLayerPk200ApplicationJSON struct {
	ID     *float64                          `json:"id"`
	Result *shared.AnnotationLayerRestAPIPut `json:"result"`
}

type PutAnnotationLayerPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPkResponse struct {
	ContentType                                  string
	PutAnnotationLayerPk200ApplicationJSONObject *PutAnnotationLayerPk200ApplicationJSON
	PutAnnotationLayerPk400ApplicationJSONObject *PutAnnotationLayerPk400ApplicationJSON
	PutAnnotationLayerPk401ApplicationJSONObject *PutAnnotationLayerPk401ApplicationJSON
	PutAnnotationLayerPk404ApplicationJSONObject *PutAnnotationLayerPk404ApplicationJSON
	PutAnnotationLayerPk500ApplicationJSONObject *PutAnnotationLayerPk500ApplicationJSON
	StatusCode                                   int64
}
