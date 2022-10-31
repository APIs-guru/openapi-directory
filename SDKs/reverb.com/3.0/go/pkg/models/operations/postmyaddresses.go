package operations

import (
"openapi/pkg/models/shared")

type PostMyAddressesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyAddressesRequest struct {
    Security PostMyAddressesSecurity 
    
}

type PostMyAddressesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

