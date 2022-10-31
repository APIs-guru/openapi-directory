package operations

import (
"openapi/pkg/models/shared")

type GetTeamEventAwardsPathParams struct {
    EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamEventAwardsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamEventAwardsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamEventAwardsRequest struct {
    PathParams GetTeamEventAwardsPathParams 
    Headers GetTeamEventAwardsHeaders 
    Security GetTeamEventAwardsSecurity 
    
}

type GetTeamEventAwardsResponse struct {
    Awards []shared.Award 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

