package operations

import (
"openapi/pkg/models/shared")

type DeleteChangelogPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type DeleteChangelogSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteChangelogRequest struct {
    PathParams DeleteChangelogPathParams 
    Security DeleteChangelogSecurity 
    
}

type DeleteChangelogResponse struct {
    ContentType string 
    StatusCode int64 
    
}

