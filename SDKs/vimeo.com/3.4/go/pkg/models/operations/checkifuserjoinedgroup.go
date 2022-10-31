package operations

import (
"openapi/pkg/models/shared")

type CheckIfUserJoinedGroupPathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CheckIfUserJoinedGroupRequest struct {
    PathParams CheckIfUserJoinedGroupPathParams 
    
}

type CheckIfUserJoinedGroupResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

