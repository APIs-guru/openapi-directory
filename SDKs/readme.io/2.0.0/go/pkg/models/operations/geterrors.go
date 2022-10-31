package operations

import (
"openapi/pkg/models/shared")

type GetErrorsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type GetErrorsRequest struct {
    Security GetErrorsSecurity 
    
}

type GetErrorsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

