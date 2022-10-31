package operations

import (
"openapi/pkg/models/shared")

type CreateDeviceCodeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateDeviceCodeRequest struct {
    Request shared.CreateDeviceCodeRequest `request:"mediaType=application/json"`
    Security CreateDeviceCodeSecurity 
    
}

type CreateDeviceCodeResponse struct {
    ContentType string 
    CreateDeviceCodeResponse *shared.CreateDeviceCodeResponse 
    StatusCode int64 
    
}

