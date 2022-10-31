package operations

import (
"openapi/pkg/models/shared")

type CreateCheckoutPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type CreateCheckoutSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateCheckoutRequest struct {
    PathParams CreateCheckoutPathParams 
    Request shared.CreateCheckoutRequest `request:"mediaType=application/json"`
    Security CreateCheckoutSecurity 
    
}

type CreateCheckoutResponse struct {
    ContentType string 
    CreateCheckoutResponse *shared.CreateCheckoutResponse 
    StatusCode int64 
    
}

