package operations

import (
"openapi/pkg/models/shared")

type DeleteSwaggerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSwaggerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSwaggerRequest struct {
    PathParams DeleteSwaggerPathParams 
    Security DeleteSwaggerSecurity 
    
}

type DeleteSwaggerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

