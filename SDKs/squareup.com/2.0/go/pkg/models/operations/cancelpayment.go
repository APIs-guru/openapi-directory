package operations

import (
"openapi/pkg/models/shared")

type CancelPaymentPathParams struct {
    PaymentID string `pathParam:"style=simple,explode=false,name=payment_id"`
    
}

type CancelPaymentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CancelPaymentRequest struct {
    PathParams CancelPaymentPathParams 
    Security CancelPaymentSecurity 
    
}

type CancelPaymentResponse struct {
    CancelPaymentResponse *shared.CancelPaymentResponse 
    ContentType string 
    StatusCode int64 
    
}

