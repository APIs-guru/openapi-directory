package operations

import (
"openapi/pkg/models/shared")

type GetAccountUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetAccountUserSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountUserRequest struct {
    PathParams GetAccountUserPathParams 
    Security GetAccountUserSecurity 
    
}

type GetAccountUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

