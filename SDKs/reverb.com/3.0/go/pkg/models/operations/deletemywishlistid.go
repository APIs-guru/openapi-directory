package operations

import (
"openapi/pkg/models/shared")

type DeleteMyWishlistIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteMyWishlistIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteMyWishlistIDRequest struct {
    PathParams DeleteMyWishlistIDPathParams 
    Security DeleteMyWishlistIDSecurity 
    
}

type DeleteMyWishlistIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

