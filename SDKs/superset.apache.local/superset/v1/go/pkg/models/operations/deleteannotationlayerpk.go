package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAnnotationLayerPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteAnnotationLayerPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAnnotationLayerPkRequest struct {
	PathParams DeleteAnnotationLayerPkPathParams
	Security   DeleteAnnotationLayerPkSecurity
}

type DeleteAnnotationLayerPk200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteAnnotationLayerPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteAnnotationLayerPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteAnnotationLayerPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteAnnotationLayerPkResponse struct {
	ContentType                                     string
	DeleteAnnotationLayerPk200ApplicationJSONObject *DeleteAnnotationLayerPk200ApplicationJSON
	DeleteAnnotationLayerPk404ApplicationJSONObject *DeleteAnnotationLayerPk404ApplicationJSON
	DeleteAnnotationLayerPk422ApplicationJSONObject *DeleteAnnotationLayerPk422ApplicationJSON
	DeleteAnnotationLayerPk500ApplicationJSONObject *DeleteAnnotationLayerPk500ApplicationJSON
	StatusCode                                      int64
}
