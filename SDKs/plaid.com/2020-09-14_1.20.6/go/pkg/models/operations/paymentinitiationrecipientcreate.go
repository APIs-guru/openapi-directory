package operations

import (
"openapi/pkg/models/shared")

type PaymentInitiationRecipientCreateRequest struct {
    Request shared.PaymentInitiationRecipientCreateRequest `request:"mediaType=application/json"`
    
}

type PaymentInitiationRecipientCreateResponse struct {
    ContentType string 
    PaymentInitiationRecipientCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

