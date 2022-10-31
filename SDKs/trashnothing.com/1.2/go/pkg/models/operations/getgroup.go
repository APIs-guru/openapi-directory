package operations

import (
"openapi/pkg/models/shared")

type GetGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type GetGroupSecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type GetGroupSecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type GetGroupSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetGroupSecurity struct {
    Option1 *GetGroupSecurityOption1 `security:"option"`
    Option2 *GetGroupSecurityOption2 `security:"option"`
    Option3 *GetGroupSecurityOption3 `security:"option"`
    
}

type GetGroupRequest struct {
    PathParams GetGroupPathParams 
    Security GetGroupSecurity 
    
}

type GetGroupResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

