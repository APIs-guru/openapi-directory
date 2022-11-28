package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationLayerPkAnnotationAnnotationIDPathParams struct {
	AnnotationID int64 `pathParam:"style=simple,explode=false,name=annotation_id"`
	Pk           int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetAnnotationLayerPkAnnotationAnnotationIDQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetAnnotationLayerPkAnnotationAnnotationIDSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON struct {
	ID     *string                      `json:"id,omitempty"`
	Result *shared.AnnotationRestAPIGet `json:"result,omitempty"`
}

type GetAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetAnnotationLayerPkAnnotationAnnotationIDRequest struct {
	PathParams  GetAnnotationLayerPkAnnotationAnnotationIDPathParams
	QueryParams GetAnnotationLayerPkAnnotationAnnotationIDQueryParams
	Security    GetAnnotationLayerPkAnnotationAnnotationIDSecurity
}

type GetAnnotationLayerPkAnnotationAnnotationIDResponse struct {
	ContentType                                                        string
	GetAnnotationLayerPkAnnotationAnnotationID200ApplicationJSONObject *GetAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON
	GetAnnotationLayerPkAnnotationAnnotationID400ApplicationJSONObject *GetAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON
	GetAnnotationLayerPkAnnotationAnnotationID401ApplicationJSONObject *GetAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON
	GetAnnotationLayerPkAnnotationAnnotationID404ApplicationJSONObject *GetAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON
	GetAnnotationLayerPkAnnotationAnnotationID422ApplicationJSONObject *GetAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON
	GetAnnotationLayerPkAnnotationAnnotationID500ApplicationJSONObject *GetAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON
	StatusCode                                                         int64
}
