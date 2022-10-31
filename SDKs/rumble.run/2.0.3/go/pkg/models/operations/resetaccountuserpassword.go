package operations

import (
"openapi/pkg/models/shared")

type ResetAccountUserPasswordPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type ResetAccountUserPasswordSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ResetAccountUserPasswordRequest struct {
    PathParams ResetAccountUserPasswordPathParams 
    Security ResetAccountUserPasswordSecurity 
    
}

type ResetAccountUserPasswordResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

