package operations

import (
"openapi/pkg/models/shared")

type GetTeamSocialMediaPathParams struct {
    TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
    
}

type GetTeamSocialMediaHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetTeamSocialMediaSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamSocialMediaRequest struct {
    PathParams GetTeamSocialMediaPathParams 
    Headers GetTeamSocialMediaHeaders 
    Security GetTeamSocialMediaSecurity 
    
}

type GetTeamSocialMediaResponse struct {
    ContentType string 
    Headers map[string][]string 
    Media []shared.Media 
    StatusCode int64 
    
}

