package operations

import (
"openapi/pkg/models/shared")

type PutMyWishlistIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutMyWishlistIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutMyWishlistIDRequest struct {
    PathParams PutMyWishlistIDPathParams 
    Security PutMyWishlistIDSecurity 
    
}

type PutMyWishlistIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

