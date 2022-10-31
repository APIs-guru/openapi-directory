package operations

import (
"openapi/pkg/models/shared")

type AddApplicationSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddApplicationRequest struct {
    Request shared.ApplicationRequest `request:"mediaType=application/json"`
    Security AddApplicationSecurity 
    
}

type AddApplicationResponse struct {
    APIError *shared.APIError 
    Application *shared.Application 
    ContentType string 
    StatusCode int64 
    
}

