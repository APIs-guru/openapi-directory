package operations

import (
"openapi/pkg/models/shared")

type GetTeamEventsByYearKeysPathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    Year int64 `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetTeamEventsByYearKeysHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamEventsByYearKeysSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamEventsByYearKeysRequest struct {
    PathParams GetTeamEventsByYearKeysPathParams 
    Headers GetTeamEventsByYearKeysHeaders 
    Security GetTeamEventsByYearKeysSecurity 
    
}

type GetTeamEventsByYearKeysResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetTeamEventsByYearKeys200ApplicationJSONStrings []string 
    
}

