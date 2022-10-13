package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationLayerInfoQueryParams struct {
	Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
}

type GetAnnotationLayerInfoSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAnnotationLayerInfoRequest struct {
	QueryParams GetAnnotationLayerInfoQueryParams
	Security    GetAnnotationLayerInfoSecurity
}

type GetAnnotationLayerInfo200ApplicationJSONFiltersColumnName struct {
	Name     *string `json:"name"`
	Operator *string `json:"operator"`
}

type GetAnnotationLayerInfo200ApplicationJSONFilters struct {
	ColumnName []GetAnnotationLayerInfo200ApplicationJSONFiltersColumnName `json:"column_name"`
}

type GetAnnotationLayerInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                           `json:"add_columns"`
	EditColumns map[string]interface{}                           `json:"edit_columns"`
	Filters     *GetAnnotationLayerInfo200ApplicationJSONFilters `json:"filters"`
	Permissions []string                                         `json:"permissions"`
}

type GetAnnotationLayerInfo400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerInfo401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerInfo422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerInfo500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAnnotationLayerInfoResponse struct {
	ContentType                                    string
	GetAnnotationLayerInfo200ApplicationJSONObject *GetAnnotationLayerInfo200ApplicationJSON
	GetAnnotationLayerInfo400ApplicationJSONObject *GetAnnotationLayerInfo400ApplicationJSON
	GetAnnotationLayerInfo401ApplicationJSONObject *GetAnnotationLayerInfo401ApplicationJSON
	GetAnnotationLayerInfo422ApplicationJSONObject *GetAnnotationLayerInfo422ApplicationJSON
	GetAnnotationLayerInfo500ApplicationJSONObject *GetAnnotationLayerInfo500ApplicationJSON
	StatusCode                                     int64
}
