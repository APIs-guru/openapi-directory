package operations

import (
"openapi/pkg/models/shared")

type PostReportSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type PostReportRequest struct {
    Request shared.ReportScheduleRestAPIPost `request:"mediaType=application/json"`
    Security PostReportSecurity 
    
}

type PostReport201ApplicationJSON struct {
    ID *float64 `json:"id,omitempty"`
    Result *shared.ReportScheduleRestAPIPost `json:"result,omitempty"`
    
}

type PostReport400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostReport401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostReport404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostReport500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostReportResponse struct {
    ContentType string 
    PostReport201ApplicationJSONObject *PostReport201ApplicationJSON 
    PostReport400ApplicationJSONObject *PostReport400ApplicationJSON 
    PostReport401ApplicationJSONObject *PostReport401ApplicationJSON 
    PostReport404ApplicationJSONObject *PostReport404ApplicationJSON 
    PostReport500ApplicationJSONObject *PostReport500ApplicationJSON 
    StatusCode int64 
    
}

