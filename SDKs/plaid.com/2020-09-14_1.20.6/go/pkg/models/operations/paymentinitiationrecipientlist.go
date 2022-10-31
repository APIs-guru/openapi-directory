package operations

import (
"openapi/pkg/models/shared")

type PaymentInitiationRecipientListRequest struct {
    Request shared.PaymentInitiationRecipientListRequest `request:"mediaType=application/json"`
    
}

type PaymentInitiationRecipientListResponse struct {
    ContentType string 
    PaymentInitiationRecipientListResponse map[string]interface{} 
    StatusCode int64 
    
}

