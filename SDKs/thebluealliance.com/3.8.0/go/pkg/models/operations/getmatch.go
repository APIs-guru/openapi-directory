package operations

import (
"openapi/pkg/models/shared")

type GetMatchPathParams struct {
    MatchKey string `pathParam:"style=simple,explode=false,name=match_key"`
    
}

type GetMatchHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    
}

type GetMatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetMatchRequest struct {
    PathParams GetMatchPathParams 
    Headers GetMatchHeaders 
    Security GetMatchSecurity 
    
}

type GetMatchResponse struct {
    ContentType string 
    Headers map[string][]string 
    Match *shared.Match 
    StatusCode int64 
    
}

