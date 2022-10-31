package operations

import (
"openapi/pkg/models/shared")

type InvestmentsTransactionsGetRequest struct {
    Request shared.InvestmentsTransactionsGetRequest `request:"mediaType=application/json"`
    
}

type InvestmentsTransactionsGetResponse struct {
    ContentType string 
    InvestmentsTransactionsGetResponse map[string]interface{} 
    StatusCode int64 
    
}

