package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAnnotationLayerPkAnnotationAnnotationIDPathParams struct {
	AnnotationID int64 `pathParam:"style=simple,explode=false,name=annotation_id"`
	Pk           int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteAnnotationLayerPkAnnotationAnnotationIDSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteAnnotationLayerPkAnnotationAnnotationIDRequest struct {
	PathParams DeleteAnnotationLayerPkAnnotationAnnotationIDPathParams
	Security   DeleteAnnotationLayerPkAnnotationAnnotationIDSecurity
}

type DeleteAnnotationLayerPkAnnotationAnnotationIDResponse struct {
	ContentType                                                           string
	DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSONObject *DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON
	DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSONObject *DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON
	DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSONObject *DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON
	DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSONObject *DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON
	StatusCode                                                            int64
}
