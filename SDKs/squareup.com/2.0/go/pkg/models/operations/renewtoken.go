package operations

import (
"openapi/pkg/models/shared")

type RenewTokenPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type RenewTokenSecurity struct {
    Oauth2ClientSecret shared.SchemeOauth2ClientSecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type RenewTokenRequest struct {
    PathParams RenewTokenPathParams 
    Request shared.RenewTokenRequest `request:"mediaType=application/json"`
    Security RenewTokenSecurity 
    
}

type RenewTokenResponse struct {
    ContentType string 
    RenewTokenResponse *shared.RenewTokenResponse 
    StatusCode int64 
    
}

