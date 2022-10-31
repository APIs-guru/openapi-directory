package operations

import (
"openapi/pkg/models/shared")

type GetTeamEventMatchesSimplePathParams struct {
    EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamEventMatchesSimpleHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamEventMatchesSimpleSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamEventMatchesSimpleRequest struct {
    PathParams GetTeamEventMatchesSimplePathParams 
    Headers GetTeamEventMatchesSimpleHeaders 
    Security GetTeamEventMatchesSimpleSecurity 
    
}

type GetTeamEventMatchesSimpleResponse struct {
    ContentType string 
    Headers map[string][]string 
    Matches []shared.Match 
    StatusCode int64 
    
}

