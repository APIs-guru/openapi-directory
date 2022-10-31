package operations

import (
"openapi/pkg/models/shared")

type UpdatePaymentPathParams struct {
    PaymentID string `pathParam:"style=simple,explode=false,name=payment_id"`
    
}

type UpdatePaymentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdatePaymentRequest struct {
    PathParams UpdatePaymentPathParams 
    Request shared.UpdatePaymentRequest `request:"mediaType=application/json"`
    Security UpdatePaymentSecurity 
    
}

type UpdatePaymentResponse struct {
    ContentType string 
    StatusCode int64 
    UpdatePaymentResponse *shared.UpdatePaymentResponse 
    
}

