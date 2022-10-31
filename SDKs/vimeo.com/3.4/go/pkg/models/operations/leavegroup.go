package operations

import (
"openapi/pkg/models/shared")

type LeaveGroupPathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type LeaveGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type LeaveGroupRequest struct {
    PathParams LeaveGroupPathParams 
    Security LeaveGroupSecurity 
    
}

type LeaveGroupResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

