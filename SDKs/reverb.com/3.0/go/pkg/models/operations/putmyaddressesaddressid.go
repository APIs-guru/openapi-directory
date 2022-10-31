package operations

import (
"openapi/pkg/models/shared")

type PutMyAddressesAddressIDPathParams struct {
    AddressID string `pathParam:"style=simple,explode=false,name=address_id"`
    
}

type PutMyAddressesAddressIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutMyAddressesAddressIDRequest struct {
    PathParams PutMyAddressesAddressIDPathParams 
    Security PutMyAddressesAddressIDSecurity 
    
}

type PutMyAddressesAddressIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

