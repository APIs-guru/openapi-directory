package operations

import (
"openapi/pkg/models/shared")

type LeaveGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type LeaveGroupRequest struct {
    PathParams LeaveGroupPathParams 
    
}

type LeaveGroupResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

