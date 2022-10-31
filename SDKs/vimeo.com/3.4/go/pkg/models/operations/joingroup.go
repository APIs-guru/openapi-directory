package operations

import (
"openapi/pkg/models/shared")

type JoinGroupPathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type JoinGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type JoinGroupRequest struct {
    PathParams JoinGroupPathParams 
    Security JoinGroupSecurity 
    
}

type JoinGroupResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

