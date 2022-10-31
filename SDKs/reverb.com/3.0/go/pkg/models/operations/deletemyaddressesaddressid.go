package operations

import (
"openapi/pkg/models/shared")

type DeleteMyAddressesAddressIDPathParams struct {
    AddressID string `pathParam:"style=simple,explode=false,name=address_id"`
    
}

type DeleteMyAddressesAddressIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteMyAddressesAddressIDRequest struct {
    PathParams DeleteMyAddressesAddressIDPathParams 
    Security DeleteMyAddressesAddressIDSecurity 
    
}

type DeleteMyAddressesAddressIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

