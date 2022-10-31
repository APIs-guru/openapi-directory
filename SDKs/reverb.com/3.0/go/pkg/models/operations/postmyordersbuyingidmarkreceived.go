package operations

import (
"openapi/pkg/models/shared")

type PostMyOrdersBuyingIDMarkReceivedPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostMyOrdersBuyingIDMarkReceivedSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyOrdersBuyingIDMarkReceivedRequest struct {
    PathParams PostMyOrdersBuyingIDMarkReceivedPathParams 
    Security PostMyOrdersBuyingIDMarkReceivedSecurity 
    
}

type PostMyOrdersBuyingIDMarkReceivedResponse struct {
    ContentType string 
    StatusCode int64 
    
}

