package operations

import (
"openapi/pkg/models/shared")

type GetAPIPostsGovernmentPostsQueryParams struct {
    DepartmentID *int32 `queryParam:"style=form,explode=true,name=departmentId"`
    
}

type GetAPIPostsGovernmentPostsRequest struct {
    QueryParams GetAPIPostsGovernmentPostsQueryParams 
    
}

type GetAPIPostsGovernmentPostsResponse struct {
    Body []byte 
    ContentType string 
    GovernmentOppositionPostItems []shared.GovernmentOppositionPostItem 
    StatusCode int64 
    
}

