package operations

import (
"openapi/pkg/models/shared")

type GetSalesReverbSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSalesReverbRequest struct {
    Security GetSalesReverbSecurity 
    
}

type GetSalesReverbResponse struct {
    ContentType string 
    StatusCode int64 
    
}

