package operations

import (
"openapi/pkg/models/shared")

type CreateAccountUserInviteSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateAccountUserInviteRequest struct {
    Request shared.UserInviteOptions `request:"mediaType=application/json"`
    Security CreateAccountUserInviteSecurity 
    
}

type CreateAccountUserInviteResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

