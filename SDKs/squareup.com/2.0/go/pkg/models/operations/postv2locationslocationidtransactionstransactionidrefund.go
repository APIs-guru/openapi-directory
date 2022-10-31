package operations

import (
"openapi/pkg/models/shared")

type PostV2LocationsLocationIDTransactionsTransactionIDRefundPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
    
}

type PostV2LocationsLocationIDTransactionsTransactionIDRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostV2LocationsLocationIDTransactionsTransactionIDRefundRequest struct {
    PathParams PostV2LocationsLocationIDTransactionsTransactionIDRefundPathParams 
    Request shared.CreateRefundRequest `request:"mediaType=application/json"`
    Security PostV2LocationsLocationIDTransactionsTransactionIDRefundSecurity 
    
}

type PostV2LocationsLocationIDTransactionsTransactionIDRefundResponse struct {
    ContentType string 
    CreateRefundResponse *shared.CreateRefundResponse 
    StatusCode int64 
    
}

