package operations

import (
"openapi/pkg/models/shared")

type RetrievePaymentPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    PaymentID string `pathParam:"style=simple,explode=false,name=payment_id"`
    
}

type RetrievePaymentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrievePaymentRequest struct {
    PathParams RetrievePaymentPathParams 
    Security RetrievePaymentSecurity 
    
}

type RetrievePaymentResponse struct {
    ContentType string 
    StatusCode int64 
    V1Payment *shared.V1Payment 
    
}

