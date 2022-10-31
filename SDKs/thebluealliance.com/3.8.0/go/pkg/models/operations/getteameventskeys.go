package operations

import (
"openapi/pkg/models/shared")

type GetTeamEventsKeysPathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamEventsKeysHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamEventsKeysSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamEventsKeysRequest struct {
    PathParams GetTeamEventsKeysPathParams 
    Headers GetTeamEventsKeysHeaders 
    Security GetTeamEventsKeysSecurity 
    
}

type GetTeamEventsKeysResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetTeamEventsKeys200ApplicationJSONStrings []string 
    
}

