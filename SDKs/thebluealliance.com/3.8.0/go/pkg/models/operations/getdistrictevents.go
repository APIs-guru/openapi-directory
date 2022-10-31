package operations

import (
"openapi/pkg/models/shared")

type GetDistrictEventsPathParams struct {
    DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
    
}

type GetDistrictEventsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetDistrictEventsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDistrictEventsRequest struct {
    PathParams GetDistrictEventsPathParams 
    Headers GetDistrictEventsHeaders 
    Security GetDistrictEventsSecurity 
    
}

type GetDistrictEventsResponse struct {
    ContentType string 
    Events []shared.Event 
    Headers map[string][]string 
    StatusCode int64 
    
}

