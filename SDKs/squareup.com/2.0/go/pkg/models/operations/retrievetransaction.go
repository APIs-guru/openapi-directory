package operations

import (
"openapi/pkg/models/shared")

type RetrieveTransactionPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
    
}

type RetrieveTransactionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveTransactionRequest struct {
    PathParams RetrieveTransactionPathParams 
    Security RetrieveTransactionSecurity 
    
}

type RetrieveTransactionResponse struct {
    ContentType string 
    RetrieveTransactionResponse *shared.RetrieveTransactionResponse 
    StatusCode int64 
    
}

