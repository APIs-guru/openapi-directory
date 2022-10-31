package operations

import (
"openapi/pkg/models/shared")

type GetShopSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetShopRequest struct {
    Security GetShopSecurity 
    
}

type GetShopResponse struct {
    ContentType string 
    StatusCode int64 
    
}

