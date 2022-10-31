package operations

import (
"openapi/pkg/models/shared")

type CancelTerminalCheckoutPathParams struct {
    CheckoutID string `pathParam:"style=simple,explode=false,name=checkout_id"`
    
}

type CancelTerminalCheckoutSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CancelTerminalCheckoutRequest struct {
    PathParams CancelTerminalCheckoutPathParams 
    Security CancelTerminalCheckoutSecurity 
    
}

type CancelTerminalCheckoutResponse struct {
    CancelTerminalCheckoutResponse *shared.CancelTerminalCheckoutResponse 
    ContentType string 
    StatusCode int64 
    
}

