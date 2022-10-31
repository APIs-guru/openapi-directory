package operations

import (
"openapi/pkg/models/shared")

type DeleteAnnotationLayerQueryParams struct {
    Q []int64 `queryParam:"serialization=json,name=q"`
    
}

type DeleteAnnotationLayerSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteAnnotationLayerRequest struct {
    QueryParams DeleteAnnotationLayerQueryParams 
    Security DeleteAnnotationLayerSecurity 
    
}

type DeleteAnnotationLayer200ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteAnnotationLayer401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteAnnotationLayer404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteAnnotationLayer422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteAnnotationLayer500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteAnnotationLayerResponse struct {
    ContentType string 
    DeleteAnnotationLayer200ApplicationJSONObject *DeleteAnnotationLayer200ApplicationJSON 
    DeleteAnnotationLayer401ApplicationJSONObject *DeleteAnnotationLayer401ApplicationJSON 
    DeleteAnnotationLayer404ApplicationJSONObject *DeleteAnnotationLayer404ApplicationJSON 
    DeleteAnnotationLayer422ApplicationJSONObject *DeleteAnnotationLayer422ApplicationJSON 
    DeleteAnnotationLayer500ApplicationJSONObject *DeleteAnnotationLayer500ApplicationJSON 
    StatusCode int64 
    
}

