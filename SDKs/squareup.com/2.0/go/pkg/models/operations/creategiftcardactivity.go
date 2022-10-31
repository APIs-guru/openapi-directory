package operations

import (
"openapi/pkg/models/shared")

type CreateGiftCardActivitySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateGiftCardActivityRequest struct {
    Request shared.CreateGiftCardActivityRequest `request:"mediaType=application/json"`
    Security CreateGiftCardActivitySecurity 
    
}

type CreateGiftCardActivityResponse struct {
    ContentType string 
    CreateGiftCardActivityResponse *shared.CreateGiftCardActivityResponse 
    StatusCode int64 
    
}

