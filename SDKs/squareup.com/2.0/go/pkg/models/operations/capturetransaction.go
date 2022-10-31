package operations

import (
"openapi/pkg/models/shared")

type CaptureTransactionPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
    
}

type CaptureTransactionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CaptureTransactionRequest struct {
    PathParams CaptureTransactionPathParams 
    Security CaptureTransactionSecurity 
    
}

type CaptureTransactionResponse struct {
    CaptureTransactionResponse *shared.CaptureTransactionResponse 
    ContentType string 
    StatusCode int64 
    
}

