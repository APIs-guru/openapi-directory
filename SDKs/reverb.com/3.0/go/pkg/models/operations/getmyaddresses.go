package operations

import (
"openapi/pkg/models/shared")

type GetMyAddressesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyAddressesRequest struct {
    Security GetMyAddressesSecurity 
    
}

type GetMyAddressesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

