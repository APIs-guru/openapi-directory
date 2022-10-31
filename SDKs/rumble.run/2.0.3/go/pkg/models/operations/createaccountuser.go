package operations

import (
"openapi/pkg/models/shared")

type CreateAccountUserSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateAccountUserRequest struct {
    Request shared.UserOptions `request:"mediaType=application/json"`
    Security CreateAccountUserSecurity 
    
}

type CreateAccountUserResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

