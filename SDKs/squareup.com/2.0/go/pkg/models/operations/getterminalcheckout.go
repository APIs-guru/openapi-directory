package operations

import (
"openapi/pkg/models/shared")

type GetTerminalCheckoutPathParams struct {
    CheckoutID string `pathParam:"style=simple,explode=false,name=checkout_id"`
    
}

type GetTerminalCheckoutSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTerminalCheckoutRequest struct {
    PathParams GetTerminalCheckoutPathParams 
    Security GetTerminalCheckoutSecurity 
    
}

type GetTerminalCheckoutResponse struct {
    ContentType string 
    GetTerminalCheckoutResponse *shared.GetTerminalCheckoutResponse 
    StatusCode int64 
    
}

