package operations

import (
"openapi/pkg/models/shared")

type PaymentInitiationPaymentCreateRequest struct {
    Request shared.PaymentInitiationPaymentCreateRequest `request:"mediaType=application/json"`
    
}

type PaymentInitiationPaymentCreateResponse struct {
    ContentType string 
    PaymentInitiationPaymentCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

