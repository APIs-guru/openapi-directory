package operations

import (
"openapi/pkg/models/shared")

type GetCustomPagePathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetCustomPageSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type GetCustomPageRequest struct {
    PathParams GetCustomPagePathParams 
    Security GetCustomPageSecurity 
    
}

type GetCustomPageResponse struct {
    ContentType string 
    StatusCode int64 
    
}

