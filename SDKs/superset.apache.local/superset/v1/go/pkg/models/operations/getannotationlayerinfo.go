package operations

import (
"openapi/pkg/models/shared")

type GetAnnotationLayerInfoQueryParams struct {
    Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
    
}

type GetAnnotationLayerInfoSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAnnotationLayerInfoRequest struct {
    QueryParams GetAnnotationLayerInfoQueryParams 
    Security GetAnnotationLayerInfoSecurity 
    
}

type GetAnnotationLayerInfo200ApplicationJSONFiltersColumnName struct {
    Name *string `json:"name,omitempty"`
    Operator *string `json:"operator,omitempty"`
    
}

type GetAnnotationLayerInfo200ApplicationJSONFilters struct {
    ColumnName []GetAnnotationLayerInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
    
}

type GetAnnotationLayerInfo200ApplicationJSON struct {
    AddColumns map[string]interface{} `json:"add_columns,omitempty"`
    EditColumns map[string]interface{} `json:"edit_columns,omitempty"`
    Filters *GetAnnotationLayerInfo200ApplicationJSONFilters `json:"filters,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    
}

type GetAnnotationLayerInfo400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerInfo401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerInfo422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerInfo500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerInfoResponse struct {
    ContentType string 
    GetAnnotationLayerInfo200ApplicationJSONObject *GetAnnotationLayerInfo200ApplicationJSON 
    GetAnnotationLayerInfo400ApplicationJSONObject *GetAnnotationLayerInfo400ApplicationJSON 
    GetAnnotationLayerInfo401ApplicationJSONObject *GetAnnotationLayerInfo401ApplicationJSON 
    GetAnnotationLayerInfo422ApplicationJSONObject *GetAnnotationLayerInfo422ApplicationJSON 
    GetAnnotationLayerInfo500ApplicationJSONObject *GetAnnotationLayerInfo500ApplicationJSON 
    StatusCode int64 
    
}

