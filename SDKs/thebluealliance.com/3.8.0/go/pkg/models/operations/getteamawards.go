package operations

import (
"openapi/pkg/models/shared")

type GetTeamAwardsPathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamAwardsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamAwardsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamAwardsRequest struct {
    PathParams GetTeamAwardsPathParams 
    Headers GetTeamAwardsHeaders 
    Security GetTeamAwardsSecurity 
    
}

type GetTeamAwardsResponse struct {
    Awards []shared.Award 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

