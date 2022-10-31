package operations

import (
"openapi/pkg/models/shared")

type CreatePaymentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreatePaymentRequest struct {
    Request shared.CreatePaymentRequest `request:"mediaType=application/json"`
    Security CreatePaymentSecurity 
    
}

type CreatePaymentResponse struct {
    ContentType string 
    CreatePaymentResponse *shared.CreatePaymentResponse 
    StatusCode int64 
    
}

