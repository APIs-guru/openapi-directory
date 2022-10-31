package operations

import (
"openapi/pkg/models/shared")

type GetTeamEventsStatusesByYearPathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    Year int64 `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetTeamEventsStatusesByYearHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamEventsStatusesByYearSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamEventsStatusesByYearRequest struct {
    PathParams GetTeamEventsStatusesByYearPathParams 
    Headers GetTeamEventsStatusesByYearHeaders 
    Security GetTeamEventsStatusesByYearSecurity 
    
}

type GetTeamEventsStatusesByYearResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetTeamEventsStatusesByYear200ApplicationJSONObject map[string]shared.TeamEventStatus 
    
}

