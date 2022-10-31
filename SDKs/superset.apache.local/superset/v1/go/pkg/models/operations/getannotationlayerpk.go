package operations

import (
"openapi/pkg/models/shared")

type GetAnnotationLayerPkPathParams struct {
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    
}

type GetAnnotationLayerPkQueryParams struct {
    Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
    
}

type GetAnnotationLayerPkSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAnnotationLayerPkRequest struct {
    PathParams GetAnnotationLayerPkPathParams 
    QueryParams GetAnnotationLayerPkQueryParams 
    Security GetAnnotationLayerPkSecurity 
    
}

type GetAnnotationLayerPk200ApplicationJSONDescriptionColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetAnnotationLayerPk200ApplicationJSONLabelColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetAnnotationLayerPk200ApplicationJSON struct {
    DescriptionColumns *GetAnnotationLayerPk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
    ID *string `json:"id,omitempty"`
    LabelColumns *GetAnnotationLayerPk200ApplicationJSONLabelColumns `json:"label_columns,omitempty"`
    Result *shared.AnnotationLayerRestAPIGet `json:"result,omitempty"`
    ShowColumns []string `json:"show_columns,omitempty"`
    ShowTitle *string `json:"show_title,omitempty"`
    
}

type GetAnnotationLayerPk400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerPk401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerPk404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerPk422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerPk500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetAnnotationLayerPkResponse struct {
    ContentType string 
    GetAnnotationLayerPk200ApplicationJSONObject *GetAnnotationLayerPk200ApplicationJSON 
    GetAnnotationLayerPk400ApplicationJSONObject *GetAnnotationLayerPk400ApplicationJSON 
    GetAnnotationLayerPk401ApplicationJSONObject *GetAnnotationLayerPk401ApplicationJSON 
    GetAnnotationLayerPk404ApplicationJSONObject *GetAnnotationLayerPk404ApplicationJSON 
    GetAnnotationLayerPk422ApplicationJSONObject *GetAnnotationLayerPk422ApplicationJSON 
    GetAnnotationLayerPk500ApplicationJSONObject *GetAnnotationLayerPk500ApplicationJSON 
    StatusCode int64 
    
}

