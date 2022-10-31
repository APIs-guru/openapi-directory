package operations

import (
"openapi/pkg/models/shared")

type GetEventSimplePathParams struct {
    EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
    
}

type GetEventSimpleHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetEventSimpleSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetEventSimpleRequest struct {
    PathParams GetEventSimplePathParams 
    Headers GetEventSimpleHeaders 
    Security GetEventSimpleSecurity 
    
}

type GetEventSimpleResponse struct {
    ContentType string 
    EventSimple *shared.EventSimple 
    Headers map[string][]string 
    StatusCode int64 
    
}

