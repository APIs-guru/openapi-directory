package operations

import (
"openapi/pkg/models/shared")

type GetTeamEventStatusPathParams struct {
    EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamEventStatusHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamEventStatusSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamEventStatusRequest struct {
    PathParams GetTeamEventStatusPathParams 
    Headers GetTeamEventStatusHeaders 
    Security GetTeamEventStatusSecurity 
    
}

type GetTeamEventStatusResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TeamEventStatus *shared.TeamEventStatus 
    
}

