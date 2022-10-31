package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1AgentTelemetryRequests struct {
    TelemetryData []shared.TelemetryData `request:"mediaType=application/*+json"`
    TelemetryData1 []shared.TelemetryData `request:"mediaType=application/json"`
    TelemetryData2 []shared.TelemetryData `request:"mediaType=application/json-patch+json"`
    TelemetryData3 []shared.TelemetryData `request:"mediaType=text/json"`
    
}

type PostAPIV1AgentTelemetryRequest struct {
    Request *PostAPIV1AgentTelemetryRequests 
    
}

type PostAPIV1AgentTelemetryResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

