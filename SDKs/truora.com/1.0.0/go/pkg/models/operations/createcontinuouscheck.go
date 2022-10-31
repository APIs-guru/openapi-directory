package operations

import (
"openapi/pkg/models/shared")

type CreateContinuousCheckSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateContinuousCheckRequest struct {
    Request shared.CreateContinuousCheckInput `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateContinuousCheckSecurity 
    
}

type CreateContinuousCheckResponse struct {
    ContentType string 
    ContinuousCheck *shared.ContinuousCheck 
    Error *interface{} 
    StatusCode int64 
    
}

