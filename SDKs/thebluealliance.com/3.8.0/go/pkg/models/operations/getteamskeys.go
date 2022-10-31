package operations

import (
"openapi/pkg/models/shared")

type GetTeamsKeysPathParams struct {
    PageNum int64 `pathParam:"style=simple,explode=false,name=page_num"`
    
}

type GetTeamsKeysHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamsKeysSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsKeysRequest struct {
    PathParams GetTeamsKeysPathParams 
    Headers GetTeamsKeysHeaders 
    Security GetTeamsKeysSecurity 
    
}

type GetTeamsKeysResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetTeamsKeys200ApplicationJSONStrings []string 
    
}

