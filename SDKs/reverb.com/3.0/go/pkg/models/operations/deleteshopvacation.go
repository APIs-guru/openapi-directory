package operations

import (
"openapi/pkg/models/shared")

type DeleteShopVacationSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteShopVacationRequest struct {
    Security DeleteShopVacationSecurity 
    
}

type DeleteShopVacationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

