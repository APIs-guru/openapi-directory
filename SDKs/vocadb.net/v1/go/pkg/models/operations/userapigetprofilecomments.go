package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetProfileCommentsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UserAPIGetProfileCommentsQueryParams struct {
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    
}

type UserAPIGetProfileCommentsRequest struct {
    PathParams UserAPIGetProfileCommentsPathParams 
    QueryParams UserAPIGetProfileCommentsQueryParams 
    
}

type UserAPIGetProfileCommentsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultCommentForAPIContract *shared.PartialFindResultCommentForAPIContract 
    StatusCode int64 
    
}

