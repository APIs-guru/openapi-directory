package operations

import (
"openapi/pkg/models/shared")

type CreatePaymentTokenRequest struct {
    Request shared.PaymentInitiationPaymentTokenCreateRequest `request:"mediaType=application/json"`
    
}

type CreatePaymentTokenResponse struct {
    ContentType string 
    PaymentInitiationPaymentTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

