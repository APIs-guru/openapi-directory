package operations

import (
"openapi/pkg/models/shared")

type GetEventsByYearKeysPathParams struct {
    Year int64 `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetEventsByYearKeysHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetEventsByYearKeysSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetEventsByYearKeysRequest struct {
    PathParams GetEventsByYearKeysPathParams 
    Headers GetEventsByYearKeysHeaders 
    Security GetEventsByYearKeysSecurity 
    
}

type GetEventsByYearKeysResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetEventsByYearKeys200ApplicationJSONStrings []string 
    
}

