package operations

import (
"openapi/pkg/models/shared")

type DeleteChartPkPathParams struct {
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    
}

type DeleteChartPkSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteChartPkRequest struct {
    PathParams DeleteChartPkPathParams 
    Security DeleteChartPkSecurity 
    
}

type DeleteChartPk200ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteChartPk401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteChartPk403ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteChartPk404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteChartPk422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteChartPk500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteChartPkResponse struct {
    ContentType string 
    DeleteChartPk200ApplicationJSONObject *DeleteChartPk200ApplicationJSON 
    DeleteChartPk401ApplicationJSONObject *DeleteChartPk401ApplicationJSON 
    DeleteChartPk403ApplicationJSONObject *DeleteChartPk403ApplicationJSON 
    DeleteChartPk404ApplicationJSONObject *DeleteChartPk404ApplicationJSON 
    DeleteChartPk422ApplicationJSONObject *DeleteChartPk422ApplicationJSON 
    DeleteChartPk500ApplicationJSONObject *DeleteChartPk500ApplicationJSON 
    StatusCode int64 
    
}

