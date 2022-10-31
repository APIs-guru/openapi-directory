package operations

import (
"openapi/pkg/models/shared")

type GetTeamSimplePathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamSimpleHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamSimpleSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamSimpleRequest struct {
    PathParams GetTeamSimplePathParams 
    Headers GetTeamSimpleHeaders 
    Security GetTeamSimpleSecurity 
    
}

type GetTeamSimpleResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TeamSimple *shared.TeamSimple 
    
}

