package operations

import (
"openapi/pkg/models/shared")

type PostChartSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type PostChartRequest struct {
    Request shared.ChartRestAPIPost `request:"mediaType=application/json"`
    Security PostChartSecurity 
    
}

type PostChart201ApplicationJSON struct {
    ID *float64 `json:"id,omitempty"`
    Result *shared.ChartRestAPIPost `json:"result,omitempty"`
    
}

type PostChart400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChart401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChart422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChart500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChartResponse struct {
    ContentType string 
    PostChart201ApplicationJSONObject *PostChart201ApplicationJSON 
    PostChart400ApplicationJSONObject *PostChart400ApplicationJSON 
    PostChart401ApplicationJSONObject *PostChart401ApplicationJSON 
    PostChart422ApplicationJSONObject *PostChart422ApplicationJSON 
    PostChart500ApplicationJSONObject *PostChart500ApplicationJSON 
    StatusCode int64 
    
}

