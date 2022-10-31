package operations

import (
"openapi/pkg/models/shared")

type SignalDecisionReportRequest struct {
    Request shared.SignalDecisionReportRequest `request:"mediaType=application/json"`
    
}

type SignalDecisionReportResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SignalDecisionReportResponse *shared.SignalDecisionReportResponse 
    StatusCode int64 
    
}

