package operations

import (
"openapi/pkg/models/shared")

type GetMyAccountSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyAccountRequest struct {
    Security GetMyAccountSecurity 
    
}

type GetMyAccountResponse struct {
    ContentType string 
    StatusCode int64 
    
}

