package operations

import (
"openapi/pkg/models/shared")

type GetStatusHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetStatusSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetStatusRequest struct {
    Headers GetStatusHeaders 
    Security GetStatusSecurity 
    
}

type GetStatusResponse struct {
    APIStatus *shared.APIStatus 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

