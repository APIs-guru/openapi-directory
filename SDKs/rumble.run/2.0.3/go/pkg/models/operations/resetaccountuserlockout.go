package operations

import (
"openapi/pkg/models/shared")

type ResetAccountUserLockoutPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type ResetAccountUserLockoutSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ResetAccountUserLockoutRequest struct {
    PathParams ResetAccountUserLockoutPathParams 
    Security ResetAccountUserLockoutSecurity 
    
}

type ResetAccountUserLockoutResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

