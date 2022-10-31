package operations

import (
"openapi/pkg/models/shared")

type IncomeVerificationSummaryGetRequest struct {
    Request shared.IncomeVerificationSummaryGetRequest `request:"mediaType=application/json"`
    
}

type IncomeVerificationSummaryGetResponse struct {
    ContentType string 
    IncomeVerificationSummaryGetResponse map[string]interface{} 
    StatusCode int64 
    
}

