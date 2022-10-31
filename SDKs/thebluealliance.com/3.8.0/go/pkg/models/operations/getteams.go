package operations

import (
"openapi/pkg/models/shared")

type GetTeamsPathParams struct {
    PageNum int64 `pathParam:"style=simple,explode=false,name=page_num"`
    
}

type GetTeamsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsRequest struct {
    PathParams GetTeamsPathParams 
    Headers GetTeamsHeaders 
    Security GetTeamsSecurity 
    
}

type GetTeamsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Teams []shared.Team 
    
}

