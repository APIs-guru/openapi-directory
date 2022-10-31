package operations

import (
"openapi/pkg/models/shared")

type IncomeVerificationPaystubsGetRequest struct {
    Request shared.IncomeVerificationPaystubsGetRequest `request:"mediaType=application/json"`
    
}

type IncomeVerificationPaystubsGetResponse struct {
    ContentType string 
    IncomeVerificationPaystubsGetResponse map[string]interface{} 
    StatusCode int64 
    
}

