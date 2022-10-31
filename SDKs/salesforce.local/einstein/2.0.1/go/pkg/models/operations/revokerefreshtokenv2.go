package operations

import (
"openapi/pkg/models/shared")

type RevokeRefreshTokenV2PathParams struct {
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type RevokeRefreshTokenV2Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type RevokeRefreshTokenV2Request struct {
    PathParams RevokeRefreshTokenV2PathParams 
    Security RevokeRefreshTokenV2Security 
    
}

type RevokeRefreshTokenV2Response struct {
    ContentType string 
    StatusCode int64 
    
}

