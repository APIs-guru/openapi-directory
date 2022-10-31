package operations

import (
"openapi/pkg/models/shared")

type GetTeamMediaByYearPathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    Year int64 `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetTeamMediaByYearHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamMediaByYearSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamMediaByYearRequest struct {
    PathParams GetTeamMediaByYearPathParams 
    Headers GetTeamMediaByYearHeaders 
    Security GetTeamMediaByYearSecurity 
    
}

type GetTeamMediaByYearResponse struct {
    ContentType string 
    Headers map[string][]string 
    Media []shared.Media 
    StatusCode int64 
    
}

