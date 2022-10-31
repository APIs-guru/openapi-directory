package operations

import (
"openapi/pkg/models/shared")

type UpdateCustomPagePathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type UpdateCustomPageSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateCustomPageRequest struct {
    PathParams UpdateCustomPagePathParams 
    Request shared.CustomPage `request:"mediaType=application/json"`
    Security UpdateCustomPageSecurity 
    
}

type UpdateCustomPageResponse struct {
    ContentType string 
    StatusCode int64 
    
}

