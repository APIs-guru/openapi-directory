package operations

import (
"openapi/pkg/models/shared")

type PaymentInitiationPaymentGetRequest struct {
    Request shared.PaymentInitiationPaymentGetRequest `request:"mediaType=application/json"`
    
}

type PaymentInitiationPaymentGetResponse struct {
    ContentType string 
    PaymentInitiationPaymentGetResponse map[string]interface{} 
    StatusCode int64 
    
}

