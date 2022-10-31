package operations

import (
"openapi/pkg/models/shared")

type GetMyOrdersBuyingIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMyOrdersBuyingIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyOrdersBuyingIDRequest struct {
    PathParams GetMyOrdersBuyingIDPathParams 
    Security GetMyOrdersBuyingIDSecurity 
    
}

type GetMyOrdersBuyingIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

