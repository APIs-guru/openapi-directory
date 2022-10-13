package operations

import (
	"openapi/pkg/models/shared"
)

type PutAnnotationLayerPkAnnotationAnnotationIDPathParams struct {
	AnnotationID int64 `pathParam:"style=simple,explode=false,name=annotation_id"`
	Pk           int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutAnnotationLayerPkAnnotationAnnotationIDSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutAnnotationLayerPkAnnotationAnnotationIDRequest struct {
	PathParams PutAnnotationLayerPkAnnotationAnnotationIDPathParams
	Request    shared.AnnotationRestAPIPut `request:"mediaType=application/json"`
	Security   PutAnnotationLayerPkAnnotationAnnotationIDSecurity
}

type PutAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON struct {
	ID     *float64                     `json:"id"`
	Result *shared.AnnotationRestAPIPut `json:"result"`
}

type PutAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutAnnotationLayerPkAnnotationAnnotationIDResponse struct {
	ContentType                                                        string
	PutAnnotationLayerPkAnnotationAnnotationID200ApplicationJSONObject *PutAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON
	PutAnnotationLayerPkAnnotationAnnotationID400ApplicationJSONObject *PutAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON
	PutAnnotationLayerPkAnnotationAnnotationID401ApplicationJSONObject *PutAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON
	PutAnnotationLayerPkAnnotationAnnotationID404ApplicationJSONObject *PutAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON
	PutAnnotationLayerPkAnnotationAnnotationID500ApplicationJSONObject *PutAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON
	StatusCode                                                         int64
}
