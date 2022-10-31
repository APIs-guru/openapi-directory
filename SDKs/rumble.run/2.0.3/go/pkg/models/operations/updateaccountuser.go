package operations

import (
"openapi/pkg/models/shared")

type UpdateAccountUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UpdateAccountUserSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateAccountUserRequest struct {
    PathParams UpdateAccountUserPathParams 
    Request shared.UserOptions `request:"mediaType=application/json"`
    Security UpdateAccountUserSecurity 
    
}

type UpdateAccountUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

