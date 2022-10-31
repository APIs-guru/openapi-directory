package operations

import (
"openapi/pkg/models/shared")

type GetAPIPostsOppositionPostsQueryParams struct {
    DepartmentID *int32 `queryParam:"style=form,explode=true,name=departmentId"`
    
}

type GetAPIPostsOppositionPostsRequest struct {
    QueryParams GetAPIPostsOppositionPostsQueryParams 
    
}

type GetAPIPostsOppositionPostsResponse struct {
    Body []byte 
    ContentType string 
    GovernmentOppositionPostItems []shared.GovernmentOppositionPostItem 
    StatusCode int64 
    
}

