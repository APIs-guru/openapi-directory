package operations

import (
"openapi/pkg/models/shared")

type ViewedStoryPathParams struct {
    StoryID string `pathParam:"style=simple,explode=false,name=story_id"`
    
}

type ViewedStorySecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type ViewedStorySecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type ViewedStorySecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type ViewedStorySecurity struct {
    Option1 *ViewedStorySecurityOption1 `security:"option"`
    Option2 *ViewedStorySecurityOption2 `security:"option"`
    Option3 *ViewedStorySecurityOption3 `security:"option"`
    
}

type ViewedStoryRequest struct {
    PathParams ViewedStoryPathParams 
    Security ViewedStorySecurity 
    
}

type ViewedStoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

