package operations

import (
"openapi/pkg/models/shared")

type RemoveAccountUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type RemoveAccountUserSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RemoveAccountUserRequest struct {
    PathParams RemoveAccountUserPathParams 
    Security RemoveAccountUserSecurity 
    
}

type RemoveAccountUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

